import React from 'react'
import styled from 'styled-components'
import Head from 'next/head'
import Sidebar from './Sidebar'

function Layout({children}) {
    return (
        <MainContainer>
          <Head>
            <title>nAIvid GPT</title>
            <meta name="description" content="Navid's GPT " />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
        <>
        <SideBarContainer>
        <Sidebar/>
        </SideBarContainer>
        {children}
        </> 
        </MainContainer>
      )
    }
    
    export default Layout
    
    const MainContainer = styled.div`
    display: flex;
    background-color: #343541;
    color: white;
    `
    
    const SideBarContainer = styled.div`
    display: flex;
    height: 100%;
    `