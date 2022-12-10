import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Registration.css'
import Validation from './Validation';
import InputField from './constant';


const RegisterationForm = () => {

  const [data, setData] = useState({});
  const navigate = useNavigate();
  const [errors, setErrors] = useState()

  const sendData = () => {
    if (data?.firstname && data?.lastname && data?.email && data?.password && data?.confirm_pwd && data?.ischecked) {
      setErrors(Validation(data))
      axios.post('https://crudcrud.com/api/49a32b36551740c68005adbfdeb12174/user', data)
        .then((response) => {
          console.log(response, 'response')
          navigate('/userdata');
        }, (error) => {
          console.log(error);
        });
    } else {
      alert('please fill all fields')
    }

  }
  return (
    <>
      <div className='loginform'>
        <div className='box'>
          <h1>Registeration Form</h1>
          <InputField
            label="First Name"
            type='text'
            name="first_name"
            value={data?.firstname}
            placeholder="Enter your firstname"
            onChange={(event) => setData({ ...data, firstname: event.target.value })}
            errors={errors?.firstname}
          />

          <InputField
            label="Last Name"
            type='text'
            name="last_name"
            value={data?.lastname}
            placeholder="Enter your lastname"
            onChange={(event) => setData({ ...data, lastname: event.target.value })}
            errors={errors?.lastname}
          />

          <InputField
            label="Email"
            type='text'
            name="email"
            value={data?.email}
            placeholder="Enter your email"
            onChange={(event) => setData({ ...data, email: event.target.value })}
            errors={errors?.email}
          />

          <InputField
            label="Password"
            type='password'
            name="password"
            value={data?.password}
            placeholder="Enter your password"
            onChange={(event) => setData({ ...data, password: event.target.value })}
            errors={errors?.password}
          />
          <InputField
            label="Confirm Password"
            type='password'
            name="confirm_pwd"
            value={data?.confirm_pwd}
            placeholder="Enter your confirm password"
            onChange={(event) => setData({ ...data, confirm_pwd: event.target.value })}
            errors={errors?.confirm_pwd}
          />

          <InputField
            type='checkbox'
            name="checkbox"
            value={data?.ischecked}
            onChange={(event) => setData({ ...data, ischecked: event.target.checked })}
            checkBoxLabel="I accept the term and condition"
          />

          <div className='signup'>
            <div className='btndiv'>
              <button className='button' onClick={() => sendData()}>Register</button>
            </div>
          </div>
        </div>
      </div>

    </>


  )
}

export default RegisterationForm
