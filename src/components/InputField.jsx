import PropTypes from 'prop-types'
import React, { useState } from 'react'
import '../App.css'

import { validateInput } from '../utilities/Validator'

const InputField = ({value, label, placeholder, validators, className, type, onChange}) => {
  const [error, setError] = useState(false)

  const handleChange = (event) => {
    const { value } = event.target
    setError(validateInput(validators, value))
    onChange(value)
  }


  return (
    <div className="form-group">
      {label && <label htmlFor={label}>{label}</label>}

      {type === 'textarea' ? (
        <textarea
          className={className}
          placeholder={placeholder}
          value={value}
          defaultValue={value}
          onChange={handleChange}
        />
      ) : (
        <input
          type={type}
          value={value}
          className={className}
          placeholder={placeholder}
          onChange={handleChange}
        />
      )}
      {error && <span className='text-danger'>{error.message}</span>}
    </div>
  )
}

InputField.propTypes = {
  value: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  validators: PropTypes.array,
  type: PropTypes.string,
  onChange: PropTypes.func.isRequired
}

InputField.defaultProps = {
  value: '',
  label: '',
  placeholder: '',
  type: 'text',
  validators: []
}

export default InputField