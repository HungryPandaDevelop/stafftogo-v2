import { Field } from 'redux-form';

const RenderInputTextarea = (name, placeholder, label, labelSecond, disabled, maxLength) => {
  return (
    <div className="form-line">
      <label><b>{label}</b> {labelSecond ? <span>{labelSecond}</span> : ''}</label>
      <Field
        name={name}
        placeholder={placeholder}
        component="textarea"
        className="input-decorate"
        disabled={`${disabled === 0 ? "disabled" : ""}`}
        maxLength={maxLength}
      />
    </div>
  );
}

export default RenderInputTextarea;