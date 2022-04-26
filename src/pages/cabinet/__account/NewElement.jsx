import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import { getAuth, onAuthStateChanged } from 'firebase/auth';

import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL
} from 'firebase/storage';

import { db } from 'firebase.config';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';


import { v4 as uuidv4 } from 'uuid';

const NewElement = () => {

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    price: '',
    images: {}
  });

  const { name, price, images } = formData;

  const auth = getAuth();
  const navigate = useNavigate();
  const isMounted = useRef(true);

  // проверка залогинен ли
  useEffect(() => {
    if (isMounted) {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setFormData({ ...formData, userRef: user.uid })
        } else {
          navigate('/authorization')
        }
      })
    }

    return () => {
      isMounted.current = false
    }
  }, [isMounted]);
  // проверка залогинен ли

  const onSubmit = async (e) => {
    e.preventDefault();
    //console.log(formData);

    setLoading(true);

    if (images.length > 6) {
      setLoading(false)
      alert('Max 6 images')
      return;
    }

    // store images in firebase

    const storeImage = async (image) => {
      return new Promise((resolve, reject) => {
        const storage = getStorage();
        const fileName = `${auth.currentUser.uid}-${image.name}-${uuidv4()}`;
        const storageRef = ref(storage, 'images/' + fileName);
        const uploadTask = uploadBytesResumable(storageRef, image);

        // import from firebase build/ storage/ web/ upload file/
        uploadTask.on('state_changed',
          (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
            switch (snapshot.state) {
              case 'paused':
                console.log('Upload is paused');
                break;
              case 'running':
                console.log('Upload is running');
                break;
            }
          },
          (error) => {
            // Handle unsuccessful uploads
            console.log('file upload error', error)
          },
          () => {
            // Handle successful uploads on complete
            // For instance, get the download URL: https://firebasestorage.googleapis.com/...
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              console.log('File available at', downloadURL);
              resolve(downloadURL);
            });
          }
        );
        // import from firebase build/ storage/ web/ upload file/

      })
    }

    // const imgUrls = await Promise.all(
    //   [...images].map((image) => storeImage(image))
    // ).catch(() => {
    //   setLoading(false)
    //   alert('image upload error')
    //   return
    // })

    // console.log('imgUrls', imgUrls)

    const formDataCopy = {
      ...formData,
      // imgUrls,
      timestamp: serverTimestamp(),
    }

    console.log(formDataCopy)
    // delete formDataCopy.images

    // const docRef = await addDoc(collection(db, 'employers'), formDataCopy);

    setLoading(false);

    // navigate(`/catalog/${formDataCopy.type}/${docRef.id}`)
  }


  const onMutate = (e) => {

    let boolean = null;
    if (e.target.value === 'true') {
      boolean = true
    }
    if (e.target.value === 'false') {
      boolean = false
    }

    // Files
    // if (e.target.files) {
    //   setFormData((prevState) => ({
    //     ...prevState,
    //     images: e.target.files
    //   }))
    // }

    // Text
    if (!e.target.files) {
      setFormData((prevState) => ({
        ...prevState,
        [e.target.id]: boolean ?? e.target.value
      }))
    }
  }

  if (loading) {
    return <>Loading</>
  }

  return (
    <>
      <div className="content">
        <div className="main-full">
          <h1>Создать вакансию</h1>
          <form onSubmit={onSubmit}>

            <input
              className="input-decorate"
              type="text"
              id="name"
              value={name}
              onChange={onMutate}
              required
              placeholder="Название"
            />
            <input
              className="input-decorate"
              type="text"
              id="price"
              value={price}
              onChange={onMutate}
              required
              placeholder="Зарплата"
            />

            <hr />
            {/* <input
              type="file"
              accept='.jpg, .png'
              multiple
              onChange={onMutate}
              id='images'
              required
            /> */}
            <hr />
            <button className="btn btn--green" type="submit">Создать</button>
          </form>
        </div >
      </div >
    </ >
  )
}

export default NewElement