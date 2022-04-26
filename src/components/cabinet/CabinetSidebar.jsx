import { Link, useLocation, useNavigate } from 'react-router-dom';

import { getAuth } from 'firebase/auth';


const CabinetSidebar = () => {


  const auth = getAuth();
  const onLogout = () => {
    auth.signOut();
  }

  const location = useLocation();

  const pathMathRoute = (route) => {
    if (route === location.pathname) {
      return true;
    }
  }

  const NameMass = [
    ['Мои реквизиты', 'account', ''],
    // ['Мои реквизиты', 'requisites', 'requisites'],
    // ['Мои отклики', 'respond', 'responses'],
    // ['Мои кандидаты', 'candidates', 'candidates'],
    ['Мои вакансии', 'vacancies', 'vacancies'],
    ['вакансии +', 'vacancies', 'vacancies-new'],
    ['вакансии edit', 'vacancies', 'vacancies-edit'],
    // ['Мой пакет услуг', 'packserv', 'packserv'],
    // ['Мои счета', 'score', 'score'],
    // ['История заказов', 'historyorder', 'order_history'],
  ]

  return (
    <>
      <ul className="ln cabinet-sidebar">
        {NameMass.map((item, index) => (
          <li key={index}>
            <Link className={`${pathMathRoute('/cabinet/' + item[2]) ? 'active' : ''} sidebar_link ico-in`} to={`/cabinet/${item[2]}`}>
              <i>
                <div className={`${item[1]}-ico--white back-ico`}></div>
                <div className={`${item[1]}-ico--gray front-ico`}></div>
              </i>
              <span>{item[0]}</span>
            </Link>
          </li>
        )
        )};

      </ul>

      <input
        className="btn btn--orange"
        type="submit"
        value="Выйти"
        onClick={onLogout}
      />
    </>
  )
}

export default CabinetSidebar