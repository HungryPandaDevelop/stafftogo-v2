import React from 'react';


import { reduxForm } from 'redux-form';

import { connect } from 'react-redux';

import { updateReduxForm } from 'actions';

import RenderTitle from './fields/RenderTitle';

import RenderInputText from './fields/RenderInputText'; // поле стандартное

import RenderInputPhone from './fields/RenderInputPhone'; // поле телефон

import RenderInputPassword from './fields/RenderInputPassword'; // поле пароля

import RenderInputTextarea from './fields/RenderInputTextarea'; // поле текста

import RenderInputSwitch from './fields/RenderInputSwitch'; // поле переключателя, не уневерсальное!

import RenderInputCheckbox from './fields/RenderInputCheckbox';  // поле чекбокс множественное, не уневерсальное!

import RenderInputList from './fields/RenderInputList'; // поле список множественное, не уневерсальное!

import RenderFieldsCouple from './fields/RenderFieldsCouple'; // поле селект + текст

import RenderInputAddition from './fields/RenderInputAddition'; // поле с добавлением полей 

import RenderInputFile from './fields/RenderInputFile'; // поле с добавлением поля, не уневерсальное! 
import RenderInputFileNew from './fields/RenderInputFileNew'; // поле с добавлением поля, не уневерсальное! 

import RenderInputSelectCustom from './fields/RenderInputSelectCustom'; // поле с селект



// --------------------------------------------------------------------



const TemplateForm = (props) => {
  //console.log(props)
  const { handleSubmit, objFields, orderFields, btnSaveText, onSubmitProps, initialValues, updateReduxForm } = props;



  const onSubmit = (formData) => {
    // console.log('save in formData', formData)
    onSubmitProps();
  }


  const RenderFields = (obj, index) => {

    const choiseFieldType = (type) => {
      switch (type) {
        case 'title':
          return RenderTitle(obj.label, index);
        case 'text':
          return (
            <RenderInputText
              name={obj.name}
              placeholder={obj.placeholder}
              label={obj.label}
              labelSecond={obj.labelSecond}
              disabled={obj.disabled}
              typeField={obj.typeField}
            />
          );
        case 'text':
          return (
            <RenderInputText
              name={obj.phone}
              placeholder={obj.placeholder}
              label={obj.label}
              labelSecond={obj.labelSecond}
              disabled={obj.disabled}
              typeField={obj.typeField}
            />
          );
        case 'textarea':
          return RenderInputTextarea(obj.name, obj.placeholder, obj.label, obj.labelSecond, obj.disabled, obj.maxLength);
        case 'checkbox':
          return RenderInputCheckbox(obj.name, obj.label, obj.labelSecond, obj.options,);
        case 'list':
          return RenderInputList(obj.name, obj.label, obj.labelSecond, obj.options,);
        case 'password':
          return RenderInputPassword(obj.name, obj.placeholder, obj.label);
        case 'switch':
          return RenderInputSwitch(obj.name, obj.label);
        case 'additional':
          return RenderInputAddition(obj.name, obj.label, obj.btnTextAdd, obj.typeInner);
        case 'coupleInput':
          return (
            <RenderFieldsCouple
              mainname={obj.mainname}
              label={obj.label}
              labelSecond={obj.labelSecond}
              allFields={obj.allFields}
            />
          );
        case 'select':
          return RenderInputSelectCustom(obj.name, obj.label, obj.labelSecond, obj.options, initialValues, updateReduxForm);
        case 'file':
          return (
            <RenderInputFileNew
              name={obj.name}
              label={obj.label}
              labelSecond={obj.labelSecond}
              allFields={obj.allFields}
              typeUpload={obj.typeUpload}
              maxSize={obj.maxSize}
              typeFile={obj.typeFile}
              textEmpty={obj.textEmpty}
            />
          );
        case 'fileInput':
          return RenderInputFile(obj.name, obj.label, obj.labelSecond, obj.typeUpload, obj.maxSize, initialValues, updateReduxForm, obj.typeFile, obj.textEmpty);
        // default:
        //   breack;
      }
    }

    return (
      <>
        {choiseFieldType(obj.type)}
      </>
    )
  }

  return (
    <form
      className="form"
      onSubmit={handleSubmit(onSubmit)}

    >
      {objFields && orderFields.map((item, index) => (
        <div key={index}>
          {objFields[item] && (
            (RenderFields(objFields[item], index))
          )}
        </div>
      ))}

      <button className="btn btn--green">{btnSaveText}</button>

    </form >
  )
}

const mapStateToProps = (props) => {

  const dataValue = props.form.singleInput && props.form.singleInput.values;

  return {
    initialValues: dataValue
  }
}



export default reduxForm({
  form: 'singleInput',
  enableReinitialize: true
})(connect(mapStateToProps, { updateReduxForm })(TemplateForm));


