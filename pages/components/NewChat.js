import React from 'react'
import styled from 'styled-components'
import { HiPlusCircle } from 'react-icons/hi'
import { useRouter } from 'next/navigation'
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from "../services/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore"; 
import { db } from "../services/firebase"; // assuming you have exported your firestore instance from this file


function NewChat() {
  const [user] = useAuthState(auth);
  const router = useRouter();

  const createChat = async() => {
    const doc = await addDoc(
      collection(db, 'users', user?.email, 'chats'), 
      {
        // messages: [],
        userId: user?.email, 
        createdAt: serverTimestamp()
      }
    );

    router.push(`/chat/${doc.id}`)
  }

  return (
    <MainContainer onClick={createChat}> 
    <HiPlusCircle /> 
    <Paragraph>New Chat</Paragraph> 
    </MainContainer>
  )
}

export default NewChat

const MainContainer = styled.button`
justify-content: center; 
background-color: #202123;
align-items: center; 
display: flex; 
flex-direction: row; 
border-radius: 10px;
border: 2px solid #343541;
overflow-x: scroll; 
color: white;
font-weight: 600;  
max-width: 90vw;
height: 4rem;
padding: 1rem;
margin: 1rem; */

&:hover {
    background-color: #343541;
  }
`

const Paragraph = styled.p`
margin: 1rem;
`