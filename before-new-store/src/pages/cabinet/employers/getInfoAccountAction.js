import { 
  getAuth,
} from 'firebase/auth';



// ????????????

import { db } from 'firebase.config';

import {
  collection,
  getDocs,
  query,
  where,
} from 'firebase/firestore';


import { toast } from 'react-toastify';

const getInfoAccountAction = () => 
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

      dispatch({type: "GET_INFO_ACCOUNT", payload: getInfoAccount.data });

      
  }
  catch (error) {
    console.log(error);
    toast.arror('Что то пошло не так')
  }
}

export default getInfoAccountAction;