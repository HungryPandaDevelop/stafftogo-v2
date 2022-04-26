import { useState, useRef } from 'react';
import { Field } from 'redux-form';


const TemplateFieldSwitch = (props) => {

  const { input, label, options } = props;

  console.log('lc', input.value, options);

  const [switchStatus, setSwitchStatus] = useState(false);

  const switchChange = () => {
    setSwitchStatus(!switchStatus);

  }

  return (
    <>
      <label><b>{label}</b></label>
      <div
      // className="switch-container"
      >
        <span>{options[0].name}</span>
        <input
          type="radio"
          {...input}
          defaultChecked="checked"
          value={options[0].value}
        />
        <input
          type="radio"
          {...input}
          value={options[1].value}
        />

        <div
          className={`switch-btn switch-btn--orange ${switchStatus ? 'switch-btn--active' : ''}`}
          onClick={switchChange}
        >
          <i></i>
        </div>
        <span>{options[1].name}</span>
      </div>

    </>
  )
}

const RenderInputSwitch = ({ name, label, options }) => {

  return <Field
    name={name}
    label={label}
    options={options}
    component={TemplateFieldSwitch}
  />;
}

export default RenderInputSwitch;