import { Field } from 'redux-form';

const RenderInputSelect = (name, placeholder, label, labelSecond, disabled, typebase) => {
  return (
    <div className="form-line">
      <label><b>{label}</b> {labelSecond ? <span>{labelSecond}</span> : ''}</label>
      <Field
        name={name}
        placeholder={placeholder}
        component="select"
        className="input-decorate"
      />
    </div>
  );
}

export default RenderInputSelect;