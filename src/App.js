import {BrowserRouter, Routes, Route} from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Header from 'components/main/Header';
import PrivateRoute from 'components/main/PrivateRouter';
import Footer from 'components/main/Footer';

import MainPage from 'pages/MainPage';


import Authorization from 'pages/cabinet/auth/Authorization';
import ForgotPassword from 'pages/cabinet/auth/ForgotPassword';
import Registration from 'pages/cabinet/auth/Registration';


import NewElement from 'pages/cabinet/account/NewElement';
import EditElement from 'pages/cabinet/account/EditElement';

// Страницы кабинет
import Account from 'pages/cabinet/profile/Account';

import Responses from 'pages/cabinet/Responses';
import Candidates from 'pages/cabinet/Candidates';
// import Vacancies from 'pages/cabinet/vacancies/Vacancies';
import Packserv from 'pages/cabinet/Packserv';
import OrderHistory from 'pages/cabinet/OrderHistory';
import Score from 'pages/cabinet/Score';
// Страницы кабинет

// Страницы кабинет Нанимателя
import AccountEmployers from 'pages/cabinet/employers/Account';
import Vacancies from 'pages/cabinet/employers/vacancies/Vacancies';
import VacanciesNew from 'pages/cabinet/employers/vacancies/VacanciesNew';
import VacanciesEdit from 'pages/cabinet/employers/vacancies/VacanciesEdit';
// Страницы кабинет Нанимателя


import Catalog from 'pages/Catalog';
import List from 'pages/List';
import Detail from 'pages/Detail';

import TempForm from 'pages/cabinet/temporary/TestForm';
import EditForm from 'pages/cabinet/temporary/EditForm';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes> 
          <Route path='/' exept element={<MainPage/>} ></Route>
          <Route path='/authorization'  element={<Authorization/>} ></Route>
          <Route path='/forgot-password' element={<ForgotPassword/>}></Route>
          <Route path='/registration'  element={<Registration/>} ></Route>

          
          {/* <Route path='/cabinet' element={<PrivateRoute/>}>
            <Route path='/cabinet' element={<AccountEmployers/>}></Route>
            <Route path='/cabinet/requisites' element={<Requisites/>}></Route>
            <Route path='/cabinet/responses' element={<Responses/>}></Route>
            <Route path='/cabinet/candidates' element={<Candidates/>}></Route>
            <Route path='/cabinet/vacancies' element={<Vacancies/>}></Route>
            <Route path='/cabinet/packserv' element={<Packserv/>}></Route>
            <Route path='/cabinet/order_history' element={<OrderHistory/>}></Route>
            <Route path='/cabinet/score' element={<Score/>}></Route>
          </Route> */}

          {/*  Страницы кабинет Нанимателя */}
            <Route path='/cabinet' element={<PrivateRoute/>}>
              <Route path='/cabinet' element={<AccountEmployers/>}></Route>
              <Route path='/cabinet/vacancies' element={<Vacancies/>}></Route>
              <Route path='/cabinet/vacancies-new' element={<VacanciesNew/>}></Route>
              <Route path='/cabinet/vacancies-edit/:elementId' element={<VacanciesEdit/>}></Route>
            </Route>
          {/*  Страницы кабинет Нанимателя */}


          <Route path='/new_element/' element={<NewElement/>}></Route>
          <Route path='/edit_element/:elementId' element={<EditElement/>}></Route>
        

          <Route path='/catalog' element={<Catalog/>}></Route>
          <Route path='/catalog/:catagoryName' element={<List/>}></Route>
          <Route path='/catalog/:catagoryName/:elementId' element={<Detail/>}></Route>

          <Route path='/temp-form/' element={<TempForm/>}></Route>
          <Route path='/edit-form/' element={<EditForm/>}></Route>

        </Routes>
        <Footer/>
      </BrowserRouter>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      
    </>
  );
}

export default App;
