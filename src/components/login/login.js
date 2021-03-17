import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Alert from 'react-bootstrap/Alert'


function Login(props) {
  const AUTH_URL = 'https://localhost:44396/api/Login/auth';
  const [login, setLogin] = useState([]); 


  useEffect(() => {
      async function auth() {
        await axios.post(AUTH_URL, { 
          email: 'teste@email.com.br',
          senha: '123456'
        })
        .then (
          (data) => {
            setLogin(data);
          }, (error) => {
            setLogin([]);
          });
      }
      
      auth();
  });

  return (
    <div className={props.class}>
        <Alert variant='success'>{login.data}</Alert>
    </div>
  );
}

export default Login;