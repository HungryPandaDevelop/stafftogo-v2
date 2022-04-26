import { useState, useEffect, useRef } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL
} from 'firebase/storage';

import { db } from 'firebase.config';
import { doc, updateDoc, getDoc, serverTimestamp } from 'firebase/firestore';

import { useNavigate, useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const EditElement = () => {

  const [listing, setListing] = useState(false);

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    price: '',
    images: {}

  });

  const { name, price, images } = formData;

  const auth = getAuth();
  const navigate = useNavigate();
  const params = useParams();
  const isMounted = useRef(true);

  useEffect(() => {
    if (listing && listing.userRef !== auth.currentUser.uid) {
      alert("not your list")
      navigate('/')
    }
  });

  // get current listing
  useEffect(() => {
    setLoading(true);
    const fetchListing = async () => {
      const docRef = doc(db, 'employers', params.elementId);

      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setListing(docSnap.data());
        setFormData({ ...docSnap.data() })
        setLoading(false);
      } else {
        alert('not exist');
        navigate('/');

      }
    }

    fetchListing();
  }, [params.listingId, navigate])
  // get current listing

  useEffect(() => {
    if (isMounted) {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setFormData({ ...formData, userRef: user.uid })
        } else {
          navigate('/')
        }
      })
    }

    return () => {
      isMounted.current = false
    }
  }, [isMounted]);

  const onSubmit = async (e) => {
    e.preventDefault();


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
            alert('file upload error', error)
            reject(error)
          },
          () => {
            // Handle successful uploads on complete
            // For instance, get the download URL: https://firebasestorage.googleapis.com/...
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              alert('File available at', downloadURL);
              resolve(downloadURL);
            });
          }
        );
        // import from firebase build/ storage/ web/ upload file/

      })
    }

    const imgUrls = await Promise.all(
      [...images].map((image) => storeImage(image))
    ).catch(() => {
      setLoading(false)
      alert('image upload error')
      return
    })

    console.log('imgUrls', imgUrls)

    const formDataCopy = {
      ...formData,
      imgUrls,
      timestamp: serverTimestamp(),
    }

    delete formDataCopy.images

    const docRef = doc(db, 'employers', params.elementId);
    await updateDoc(docRef, formDataCopy)

    setLoading(false)

    navigate(`/cabinet/`)
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
    if (e.target.files) {
      setFormData((prevState) => ({
        ...prevState,
        images: e.target.files
      }))
    }
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
    <div className="content">
      <div className="main-full">

        <h1>Редактировать вакансию</h1>
        <form onSubmit={onSubmit}>


          <hr />
          <input
            type='text'
            id='name'
            value={name}
            onChange={onMutate}
            required
            placeholder='Name'
          />
          <hr />
          <input
            type='number'
            id='price'
            value={price}
            onChange={onMutate}
            required
          />

          <input
            type="file"
            accept='.jpg, .png'
            multiple
            onChange={onMutate}
            id='images'
            required
          />
          <hr />
          <button type="submit">Updata Listing</button>
        </form>
      </div>
    </div>
  )
}

export default EditElement
