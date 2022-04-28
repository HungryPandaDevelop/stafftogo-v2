
import RenderInputText from './RenderInputText'; // поле стандартное

import RenderInputPhone from './RenderInputPhone'; // поле телефон

import RenderInputSelectTrue from './RenderInputSelectTrue';


const RenderFieldsCouple = (props) =>{

  const {mainname, allFields, label, labelSecond} = props;
  const renderFields =  allFields.map((field, index)=>{
    switch (field.type) {
      case 'text':
        return (
          <div key={index} className={field.length}>
          {field.label && <label><b>{field.label}</b></label>}
          <RenderInputText 
            name={mainname+'_'+field.name}
            placeholder={field.placeholder}
          />
          </div>
        )
      case 'select':
        return (
          <div key={index} className={field.length}>
            {field.label && <label><b>{field.label}</b></label>}
            <RenderInputSelectTrue 
              name={mainname+'_'+field.name}
              placeholder={field.placeholder}
              options={field.options}
            />
          </div>
        )
    }
  });

  return(
    <div className='main-grid multy-field form-line'>
      {label && <label className="col-12"><b>{label}</b><span>{labelSecond}</span></label>}
      {renderFields}
    </div>
  )
}


export default RenderFieldsCouple;