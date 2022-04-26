import { Link, useParams } from 'react-router-dom';


const ListItem = (props) => {
  const {
    listing,
    id,
    onDelete,
    onEdit,
    name,
    phoneCompany,
    mailCompany,
    nameCompany,
    imgCompany
  } = props;

  const params = useParams();

  return (
    <div className="resume-header vacancies-item">
      <div className="main-grid">
        <div className="col-12 resume-header-roof">
          <div className="resume-update"><span>Резюме обновлено: 26.01.2022</span></div>
        </div>
        <div className="col-2">
          <div className="resume-face-container">
            <div
              className="resume-face img-cover"
              style={{ backgroundImage: `url(${imgCompany[0]})` }}
            >
              <img src={imgCompany[0]} alt="" />
            </div>
          </div>
        </div>
        <div className="col-5">
          <div className="resume-info">
            <h2>
              <Link to={`/catalog/${params.catagoryName}/${id}`}>
                {listing.vacancies_name}
              </Link>
            </h2>
            <div className="vacancies-price">
              {`Р ${listing.salary_priceFrom}`}
              {listing.salary_priceTo && ` - ${listing.salary_priceTo}`}


            </div>
            <div>
              {listing.responsibilities}
            </div>
          </div>
        </div>
        <div className="col-5">
          <div className="resume-info resume-info--more">
            <div className="resume-delimentr"></div>
            <h2>{nameCompany && nameCompany}</h2>
            <ul className="ln">
              {phoneCompany && <li> <a href="/"><i className="phone-ico--black"></i><span>{phoneCompany}</span></a></li>}
              {mailCompany && <li><a href="/"><i className="mail-ico--black"></i><span>{mailCompany}</span></a></li>}
              <li><a href="/"><i className="marker-ico--black"></i><span>Показать на карте</span></a></li>
            </ul>
            <div className="btn-container">
              {onEdit && (
                <div
                  className='btn btn--orange btn--smaill ico-in'
                  onClick={() => onEdit(listing.id, listing.name)}
                >
                  <i>
                    <span className="back-ico"><img src="images/icons/edit-black.svg" alt="" /></span>
                    <span className="front-ico"><img src="images/icons/edit-white.svg" alt="" /></span>
                  </i>
                  <span>
                    Редактировать
                  </span>
                </div>
              )}
              {onDelete && (
                <div
                  className="btn btn--blue btn--smaill ico-in"
                  onClick={() => onDelete(listing.id, listing.name)}
                >
                  <i>
                    <span className="back-ico"><img src="images/icons/trash-black.svg" alt="" /></span>
                    <span className="front-ico"><img src="images/icons/trash-white.svg" alt="" /></span>
                  </i>
                  <span>
                    Удалить
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ListItem;