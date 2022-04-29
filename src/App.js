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


// Страницы кабинет Нанимателя
import AccountEmployers from 'pages/cabinet/employers/Account';
import Vacancies from 'pages/cabinet/employers/vacancies/Vacancies';
import VacanciesNew from 'pages/cabinet/employers/vacancies/VacanciesNew';
import VacanciesEdit from 'pages/cabinet/employers/vacancies/VacanciesEdit';
// Страницы кабинет Нанимателя


import Catalog from 'pages/Catalog';
import List from 'pages/List';
import Detail from 'pages/Detail';


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

        

          {/*  Страницы кабинет Нанимателя */}
            <Route path='/cabinet' element={<PrivateRoute/>}>
              <Route path='/cabinet' element={<AccountEmployers/>}></Route>
              <Route path='/cabinet/vacancies' element={<Vacancies/>}></Route>
              <Route path='/cabinet/vacancies-new' element={<VacanciesNew/>}></Route>
              <Route path='/cabinet/vacancies-edit/:elementId' element={<VacanciesEdit/>}></Route>
            </Route>
          {/*  Страницы кабинет Нанимателя */}



          <Route path='/catalog' element={<Catalog/>}></Route>
          <Route path='/catalog/:catagoryName' element={<List/>}></Route>
          <Route path='/catalog/:catagoryName/:elementId' element={<Detail/>}></Route>


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
