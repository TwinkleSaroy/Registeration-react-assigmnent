import React from 'react'

const InputField = (props) => {
    const {type, name, value, onChange, placeholder, label, errors, checkBoxLabel} = props;
  return (
    <div className='signup input-field-container'>
        <div className="input-field-section">
       {label && <label className='input-label'>{label} : </label> } 
        <input
            type={type}
            className={type == "checkbox" ? 'checkbox-field-area' : 'inputbox input-field-area'}
            name={name}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
        />
       {type == "checkbox" && <label htmlFor="checkbox">{checkBoxLabel}</label>}
        </div>
        {errors && <p className='error'>{errors}</p>}

    </div>
  )
}

export default InputField;
