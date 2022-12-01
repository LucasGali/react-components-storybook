import { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import { Validators } from './utilities/Validator';

export const App = (props) => {
  // const submitHandler = (event) => {
  //   event.preventDefault()
  //   console.log(formState.inputs)
  // }

  // const [formState, inputHandler] = useForm({
  //   name: { value: '' },
  //   email: { value: '' },
  //   description: { value: '' },
  //   address: { value: '' },
  //   number: { value: '' }
  // })

  const [form, setForm] = useState({
    name: '',
    email: '',
  })
  

  return (
    <>
      <div className="container">
        <h2>React Reusable Form Component</h2>
        <hr/>
        <InputField
          value={form.email}
          type='text'
          placeholder='Enter your name'
          label='Email'
          className='form-control'
          validators={[
            {check: Validators.email, message: 'Field must be a number'},
          ]}
          onChange={(value) => setForm({...form, email: value})}
        />
      </div>
    </>
    // <form onSubmit={submitHandler}>
    //   <Input
    //     id="name"
    //     element="input"
    //     type="text"
    //     label="Name"
    //     onInput={inputHandler}
    //   />
    //   <Input
    //     id="email"
    //     element="input"
    //     type="e-mail"
    //     label="E-mail"
    //     onInput={inputHandler}
    //   />
    //   <Input
    //     id="description"
    //     element="textarea"
    //     label="Description"
    //     onInput={inputHandler}
    //   />
    //   <Input
    //     id="address"
    //     element="input"
    //     type="text"
    //     label="Address"
    //     onInput={inputHandler}
    //   />
    //   <Input
    //     id="number"
    //     element="input"
    //     type="number"
    //     label="Number"
    //     onInput={inputHandler}
    //   />
    //   <button type="submit"> SUBMIT</button>
    // </form>
  )
}

export default { App }
