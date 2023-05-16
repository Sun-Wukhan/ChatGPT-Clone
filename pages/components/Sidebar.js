import React from 'react'
import styled from 'styled-components'
import { auth } from '../services/firebase';
import { GoogleAuthProvider } from "firebase/auth";
import { useAuthState, } from "react-firebase-hooks/auth"
import { collection } from 'firebase/firestore';
import { db } from '../services/firebase'
import ChatRow from './ChatRow';
import { useCollection } from 'react-firebase-hooks/firestore';
import NewChat from './NewChat'


function Sidebar() {
  const [user] = useAuthState(auth);
  const googleAuth = new GoogleAuthProvider();

  const [chats, loading, error] = useCollection(
    user && collection(db, "users", user?.email, "chats")
  )
  
  console.log(chats);



const handleLogout = () => {
    auth.signOut();
  };

  return (
    <MainContainer>
      <NewChatContainer>
      <AddChat>
     <NewChat/>
        <ModelSelectionContainer>
          {/* ModelSelection */}
        </ModelSelectionContainer>
      </AddChat>
      {chats?.docs.map(chat => (
        <ChatRow key={chat.id} id={chat.id}/>
      ))}
      </NewChatContainer>
      <UserPhoto onClick={handleLogout} src={user?.photoURL} />
    </MainContainer>
  )
}

export default Sidebar

const MainContainer = styled.div`
height: 100vh;
min-width: 15rem;
color: white;
display: flex; 
flex-direction: column; 
background-color: #202123;
justify-content: center; 
align-items: center;

`
const NewChatContainer = styled.div`
display: flex; 
flex-direction: column; 
flex: 1;
overflow-y: scroll;
overflow-x: scroll;
`

const AddChat = styled.div`
display: flex; 
width: 10rem;
flex-direction: column; 
justify-content: center; 
align-items: center;
`

const ModelSelectionContainer = styled.div``

const Button = styled.button`
width: 10rem; 
height: 2rem; 
justify-content: center; 
align-items: center;
margin-right: 1rem;
overflow-x: hidden;
`

const UserPhoto = styled.img`
margin-top: 2rem;
width: 30%; 
height: 5rem; 
border-radius: 10rem;
justify-content: center; 
align-items: center;
margin: 1rem;
overflow-x: hidden;
`