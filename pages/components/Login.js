import React, {useEffect, useState} from 'react'
import { useRouter } from 'next/router';
import styled from 'styled-components'
import { auth } from "../services/firebase";
import { signInWithPopup, GoogleAuthProvider} from "firebase/auth";
import { useAuthState, } from "react-firebase-hooks/auth"

function Login() {
  const [user] = useAuthState(auth);
  const googleAuth = new GoogleAuthProvider();
  const router = useRouter();

  const login = async() => {
    const result = await signInWithPopup(auth, googleAuth);
  };

  useEffect(() => {
    if (user) {
      router.push('/');
    }
  }, [user]);
  
  return (
    <LoginContainer>
      <img
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/1024px-ChatGPT_logo.svg.png"
      width={300}
      height={300}
      />
      <ButtonContainer onClick={login}>
        Login
      </ButtonContainer>
      <div>{user ? "WELCOME: " + user.displayName : ""}</div>
    </LoginContainer>
  )
}

export default Login

const LoginContainer = styled.div`
height: 100vh; 
width: 100vw; 
background: #11A37F; 
display: flex; 
flex-direction: column; 
justify-content: center; 
align-items: center;
`

const ButtonContainer = styled.button`
padding: 1rem;
width: 6rem; 
height: 3rem;
justify-content: center; 
border-radius: 5px;
align-items: center; 
`