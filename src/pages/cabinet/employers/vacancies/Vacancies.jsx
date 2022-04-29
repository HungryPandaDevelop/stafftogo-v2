import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { getListing } from 'store/asyncActions/getListing';

// import {
//   getInfoAccountAction,
// } from 'actions'

// import { toast } from 'react-toastify';

// import { getAuth } from 'firebase/auth';

// import { db } from 'firebase.config';
// import {
//   doc,
//   collection,
//   getDocs,
//   query,
//   where,
//   orderBy,
//   deleteDoc,
//   limit,
//   startAfter
// } from 'firebase/firestore';


import ListItem from 'components/template/ListItem';

import TemplateAccount from 'components/template/TemplateAccount';

const Vacancies = (props) => {

  // const auth = getAuth();

  // const navigate = useNavigate();

  const [loading, setLoading] = useState(true);

  const [listings, setListings] = useState(null);
  const [lastFetchedListing, setLastFetchedListing] = useState(null);



  useEffect(() => {

    getListing().then(res => {

      setListings(res);
      setLoading(false);
      console.log('res', res)
    });
  }, [])



  const contentPage = () => {
    console.log('loading', listings)
    return (
      <>
        {!loading && listings.length > 0 && (
          <>
            {
              listings.map((listing) => (
                <ListItem
                  key={listing.id}
                  listing={listing.data}
                  id={listing.id}
                  // onDelete={() => onDelete(listing.id)}
                  // onEdit={() => onEdit(listing.id)}
                  name={listing.vacancies_name}
                  solary={[listing.salary_priceFrom, listing.salary_priceTo]}
                  nameCompany={props.getInfoAccount && props.getInfoAccount.name_company}
                  imgCompany={props.getInfoAccount && props.getInfoAccount.imgCompany}
                  phoneCompany={props.getInfoAccount && props.getInfoAccount.phones_main}
                  mailCompany={props.getInfoAccount && props.getInfoAccount.email}
                />
              ))
            }
          </>
        )}

        {lastFetchedListing && (
          <div
            className="btn"
          // onClick={onFetchMoreListings}
          >Загрузить еще</div>
        )}
      </>
    )
  }
  const rightSibar = () => {
    return (
      <Link className="btn btn--orange" to="/cabinet/vacancies-new">
        Создать вакансию
      </Link>
    )
  }

  return (
    <>
      <TemplateAccount title="Мои вакансии" rightSibar={rightSibar()}>
        {contentPage()}
      </TemplateAccount>
    </>
  )
}


const mapStateToProps = (state) => {

  // const formReducer = state.form && state.form.singleInput;

  return {
    // fieldCompanyAccount: state.fieldCompanyAccount, // база полей
    // getInfoAccount: state.getInfoAccountReducer.getInfoAccount, // полученные данные с сервера
    // dataForm: formReducer,
  }
}

export default connect(mapStateToProps,
  {
    // getInfoAccountAction,
  })(Vacancies);