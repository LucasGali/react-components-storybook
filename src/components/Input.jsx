import PropTypes from 'prop-types'
import React, { useEffect, useReducer } from 'react'

const inputReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE':
      return { ...state, value: action.value }
    default:
      return state
  }
}

export const Input = ({
  type,
  name,
  id,
  className,
  label,
  placeholder,
  onInput,
  ...props
}) => {
  const [inputState, dispatch] = useReducer(inputReducer, { value: '' })

  const changeHandler = (event) => {
    dispatch({ type: 'CHANGE', value: event.target.value })
  }

  const { value } = inputState

  useEffect(() => {
    onInput(id, value)
  }, [id, value, onInput])

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        name={name}
        id={id}
        type={type}
        className={className && { className }}
        placeholder={placeholder}
        value={inputState.value}
        onChange={changeHandler}
        {...props}
      />
    </div>
  )
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  onInput: PropTypes.func,
}

Input.defaultProps = {
  label: 'Input',
  type: 'text',
  name: 'input',
  id: 'input',
  className: '',
  placeholder: 'example'
}
