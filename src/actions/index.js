import { 
  getAuth,
  updateProfile,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from 'firebase/auth';

import { db } from 'firebase.config';

import {
  doc,
  addDoc,
  setDoc,
  updateDoc,
  collection,
  getDoc,
  getDocs,
  query,
  where,
  serverTimestamp
} from 'firebase/firestore';


import { toast } from 'react-toastify';

import storeImage from 'hooks/storeImage';



// регистрация
export const registrationAccount = (formData) => 
  async()=>{
    

    const { name, email, password } = formData;

    try {
      /* add to base auth */
    
      
      const auth = getAuth();
  
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  
      updateProfile(auth.currentUser, {
        displayName: name
      });
      /* add to base auth */
  
      /* add to firestore base */
      const user = userCredential.user;
      const formDataCopy = { ...formData };
      delete formDataCopy.password;
      formDataCopy.timestamp = serverTimestamp();
      await setDoc(doc(db, 'users', user.uid), formDataCopy);
      /* add to firestore base */
      window.location = '/cabinet/';
      //
      toast.success('Rегистрация успешна');
    
      
  
    } catch (error) {
      console.log(error)
      toast.error('Ошибка регистрации');
    }
  }


// регистрация

// авторизация

export const authAccount = (formData) => 
  async()=>{

    const { email, password } = formData;

    try {

      const auth = getAuth();

      const userCredential = await signInWithEmailAndPassword(auth, email, password);

      if (userCredential.user) {
        toast.success('Авторизации успешна')
        window.location = '/cabinet/';
      }


    } catch (error) {
      toast.error('Ошибка авторизации')
    }

  }

// авторизация


// получить информацию об аккаунте
export const getInfoAccountAction = () => 
  async (dispatch) => {
    const auth = getAuth();

    try {
      const listingsRef = collection(db, 'users');
    
      const q = query(
        listingsRef,
        where('email', '==', auth.currentUser.email),
      );


      const querySnap = await getDocs(q);

      let getInfoAccount;

      querySnap.forEach((doc) => {
        return getInfoAccount = { data: doc.data() }
      });

      // console.log('getInfoAccount',getInfoAccount)

      dispatch({type: "GET_INFO_ACCOUNT", payload: getInfoAccount.data });

  }
  catch (error) {
    console.log(error);
    toast.arror('Что то пошло не так')
  }
}
// получить информацию об аккаунте

// сохранить информацию об аккаунте
export const saveInfoAccountAction = (dataForm) => 
  async (dispatch) => {
  
    const auth = getAuth();

  
    try {

      await updateProfile(auth.currentUser, {
        displayName: dataForm.name
      });

      const userRef = doc(db, 'users', auth.currentUser.uid);


      await updateDoc(userRef, dataForm);

      toast.success('Данные обновлены')
    } catch (error) {
      toast.error('Невозможно обновить профиль')
      console.log(error)
    }
  }
// сохранить информацию об аккаунте

// создать вакансию
export const newVacancies = (dataForm)=>
  async()=>{

    const auth = getAuth();
    try {
      
      dataForm['userRef'] = auth.currentUser.uid;
      dataForm['timestamp'] = serverTimestamp();

      console.log('nev vac', dataForm)
      const docRef = await addDoc(collection(db, 'vacancies'), dataForm);

      toast.success('Вакансия добавлена');

    } catch (error) {
      toast.error('Невозможно обновить профиль')
      console.log(error)
    }
  }
// создать вакансию


// получить информацию об вакансии
export const getInfoVacanciesAction = (vacaiciesId) => 
  async (dispatch) => {
    console.log('getInfoVacanciesAction', vacaiciesId)
    const auth = getAuth();

    try {
      const listingsRef = doc(db, 'vacancies', vacaiciesId);
      
      

      const querySnap = await getDoc(listingsRef);

      console.log('querySnap', querySnap.data());

      dispatch({type: "GET_INFO_VACANCIES", payload: querySnap.data() });

  }
  catch (error) {
    console.log(error);
    toast.arror('Что то пошло не так')
  }
}
// получить информацию об вакансии

// сохранить информацию об вакансии
export const saveInfoVacanciesAction = (dataForm, vacaiciesId) => 
  async (dispatch) => {
  
    try {

      const vacanciesRef = doc(db, 'vacancies', vacaiciesId);

      await updateDoc(vacanciesRef, dataForm);

      toast.success('Данные обновлены')
    } catch (error) {
      toast.error('Невозможно обновить вакансию')
      console.log(error)
    }
  }
// сохранить информацию об вакансии


export const createItem = (formValues) => 
  async () => {
    const auth = getAuth();

    try {

      const userRef = doc(db, 'users', auth.currentUser.uid);

      await updateDoc(userRef, formValues);

      // dispatch({type: "CREATE_ITEM", payload: formValues }); ???

      console.log('ok')
    } catch (error) {
      console.log('err', error)
    }
  };

export const fetchItem = (formValues) => {

  return async (dispatch) =>{
    // console.log('tes');


    try {
      const listingsRef = collection(db, 'users');
      const q = query(
        listingsRef,
        where('email', '==', 'hungrypandadevelop@gmail.com'),
      );
      const querySnap = await getDocs(q)
      let usersData;
      querySnap.forEach((doc) => {
        return usersData = { data: doc.data() }
      });
  
  
      console.log('usersData',usersData.data);
  
      dispatch({type: "FETCH_STREAMS", payload: usersData.data })
      console.log('ok')

    }catch(error){
      console.log('error')
    }
  }
}



export const updateReduxForm = (data) => {
  console.log('updateReduxForm', data)
  return(
    { type: 'UPDATE_FORM', data }
  );
}