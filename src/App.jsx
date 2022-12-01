import React from 'react'; //for React and EJX
import { Input } from '../src/components/Input'; //our Reusable component
import { useForm } from '../src/form-hook';

export const App = (props) => {
  const submitHandler = (event) => {
    event.preventDefault()
    console.log(formState.inputs)
  }

  const [formState, inputHandler] = useForm({
    name: { value: '' },
    email: { value: '' },
    description: { value: '' },
    address: { value: '' },
    number: { value: '' }
  })

  return (
    <form onSubmit={submitHandler}>
      <Input
        id="name"
        element="input"
        type="text"
        label="Name"
        onInput={inputHandler}
      />
      <Input
        id="email"
        element="input"
        type="e-mail"
        label="E-mail"
        onInput={inputHandler}
      />
      <Input
        id="description"
        element="textarea"
        label="Description"
        onInput={inputHandler}
      />
      <Input
        id="address"
        element="input"
        type="text"
        label="Address"
        onInput={inputHandler}
      />
      <Input
        id="number"
        element="input"
        type="number"
        label="Number"
        onInput={inputHandler}
      />
      <button type="submit"> SUBMIT</button>
    </form>
  )
}

export default { App }
