import Head from 'next/head'
import { useState, useEffect } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './services/firebase';
import styled from 'styled-components'
import Sidebar from './components/Sidebar'
import Chat from './components/Chat'
import Login from './components/Login'


export default function Home() {
  const [user, loading, error] = useAuthState(auth);


  return (
    
    <MainContainer>
      <Head>
        <title>nAIvid GPT</title>
        <meta name="description" content="Navid's GPT " />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    {user ?  (
    <>
    <SideBarContainer>
    <Sidebar/>
    </SideBarContainer>
    <Chat/>
    </> ) : (<Login/>) }
    </MainContainer>
  )
}



const MainContainer = styled.div`
display: flex;
background: purple;
`

const SideBarContainer = styled.div`
display: flex;
height: 100%;
overflow-y: scroll;
`