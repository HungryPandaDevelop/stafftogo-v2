import { 
  getAuth,
} from 'firebase/auth';

import {
  collection,
  getDocs,
  query,
  where,
  orderBy,
  limit,
} from 'firebase/firestore';

import { db } from 'firebase.config';


export const getListing = async () => {

  const auth = getAuth();
  
  const listingsRef = collection(db, 'vacancies');

  const q = query(
    listingsRef,
    // where('userRef', '==', auth.currentUser.uid),
    where('userRef', '==', 'YpguqFwp1YeEFrQlQeJHaRWVKar1'),
    orderBy('timestamp', 'desc'),
    limit(2)
  );

  const querySnap = await getDocs(q);

  const getData = []

  querySnap.forEach((doc) => {
    return getData.push({
      id: doc.id,
      data: doc.data()
    })
  });

  return getData;

}


