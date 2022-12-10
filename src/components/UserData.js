import React, { useEffect, useState } from 'react'
import {useLocation} from 'react-router-dom';
import axios from 'axios';

const UserData = () => {
const [userdata, setUserdata]= useState();

const sendData = (e) => {
  axios.get('https://crudcrud.com/api/49a32b36551740c68005adbfdeb12174/user')
    .then((response) => {
      setUserdata(response.data)
      console.log("response",response);
    }, (error) => {
      console.log(error);
    });
}
console.log("userdata",userdata)
useEffect(()=>{
  sendData();
},[])

  return (
    <div>
            <table border="1px solid">
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Password</th>
                <th>Confirm Password</th>
                <th>Accept Conditon</th>
              </tr>
            </thead>
            <tbody>
              { userdata && userdata?.map((item)=>{
                return(
                <tr>
                  <td>{item?.firstname}</td>
                  <td>{item?.lastname}</td>
                  <td>{item?.email}</td>
                  <td>{item?.password}</td>
                  <td>{item?.confirm_pwd}</td>
                  <td>{item?.ischecked ? "Yes" : "No"}</td>
                  </tr>)
                
              }) 
            }
                
            </tbody> 
          </table>

    </div>
  )
}

export default UserData
