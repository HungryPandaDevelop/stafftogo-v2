import { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { getDoc, doc, } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { db } from '../firebase.config';

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const Detail = () => {

  const [listing, setListing] = useState(null);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  const params = useParams();
  const auth = getAuth();

  useEffect(() => {
    const fetchListing = async () => {
      const docRef = doc(db, 'employers', params.elementId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {

        setListing(docSnap.data());
        setLoading(false)
      }
    }

    fetchListing()
  }, [navigate, params.elementId])

  if (loading) {
    return <>Loading</>
  }


  return (
    <div className="content">

      <div className="main-grid">
        <div className="col-12">
          <h1>{listing.name}</h1>

        </div>
        <div className="col-6">
          <h2>
            Зарплата: {listing.price}
          </h2>
          {listing.imgUrls ? (
            <div className="slider">
              <Swiper
                slidesPerView={1}
                pagination={{ clickable: true }}
              >
                {listing.imgUrls.map((url, index) => (
                  <SwiperSlide key={index}>
                    <div
                      className="slide"
                      style={{ background: `url(${listing.imgUrls[index]}) center no-repeat`, }}
                    >
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          ) : ""}

        </div>

      </div>
    </div>
  )
}

export default Detail