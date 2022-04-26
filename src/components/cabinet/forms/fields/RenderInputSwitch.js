import { useState } from 'react';
import { Field } from 'redux-form';

const TemplateFieldSwitch = ({ input, label }) => {

  const [switchStatus, setSwitchStatus] = useState(false);
  const switchChange = () => {
    setSwitchStatus(!switchStatus);
  }

  return (
    <>
      <label><b>Тип учетной записи</b></label>
      <div className="switch-container">
        <span>Соискатель</span>
        <input
          className="typeCabinet"
          type="checkbox"
          {...input}
          checked={input.value}
          onClick={switchChange} />
        <div
          className={`switch-btn switch-btn--orange ${switchStatus ? 'switch-btn--active' : ''}`}

        >
          <i></i>
        </div>
        <span>Компания</span>
      </div>

    </>
  )
}

const RenderInputSwitch = (name, placeholder, label) => {
  return <Field name={name} label={label} placeholder={placeholder} component={TemplateFieldSwitch} />;
}

export default RenderInputSwitch;