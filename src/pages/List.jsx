import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { collection, getDocs, query, where, orderBy, limit, startAfter } from 'firebase/firestore';
import { db } from 'firebase.config';

import ListItem from 'components/template/ListItem';

const List = () => {



  const [listings, setListings] = useState(null);
  const [loading, setLoading] = useState(true);

  const params = useParams();

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const listingsRef = collection(db, params.catagoryName);

        const q = query(listingsRef);

        const querySnap = await getDocs(q);

        let listings = [];

        querySnap.forEach((doc) => {
          console.log(doc.data())
          return listings.push({
            id: doc.id,
            data: doc.data()
          })
        });

        setListings(listings)
        setLoading(false)
      } catch (error) {
        console.log('error', error);
      }
    }
    fetchListings();
  }, [params.catagoryName]);

  return (
    <div className="content">

      <div className="main-grid">
        <div className="col-12">
          <h1>Каталог {params.catagoryName === 'rent' ? 'Работодатели' : 'Вакансии'}</h1>
        </div>
        <div className="col-12">
          {loading ? 'loading' : listings && listings.length > 0 ? (
            <>
              <ul className='ln'>
                {listings.map((listing) => (
                  <ListItem
                    listing={listing.data}
                    id={listing.id}
                    key={listing.id}
                  />
                ))}
              </ul>
            </>
          ) : (
            <p>Нет элементов {params.catagoryName}</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default List