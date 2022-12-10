import { ErrorResponse } from '@remix-run/router';
import React from 'react'

const Validation = (data) => {

    let errors={};
    if(!data.firstname){
        errors.firstname=" first name is required"
    }
    if(!data.lastname){
        errors.lastname="last name is required"
    }

    if(!data.email){
        errors.email="email is required"
    }else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.email))
     {
        errors.email = 'Invalid email address'
     }
    if(!data.password){
        errors.password="password is required"
    }
    if(!data.confirm_pwd){
        errors.confirm_pwd="confirm password name is required"
    }
    else if(data.password!==data.confirm_pwd){
        errors.confirm_pwd="confirm password and password must be same"
    }
    if(!data.ischecked){
        errors.ischecked="Please accept terms and condition"
    }
  return errors
   
}

export default Validation
