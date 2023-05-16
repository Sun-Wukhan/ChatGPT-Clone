/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import styled from 'styled-components'
import { BsFillSunFill } from 'react-icons/bs'
import { AiFillPieChart } from 'react-icons/ai'
import { RiKakaoTalkFill } from 'react-icons/ri'

function Chat() {
  return (
    <MainContainer>
    <Title>
    NavGPT
    </Title>
    <IconContainer>
        <IconTwo>
            <IconThree>
            <BsFillSunFill/>
            <IconTitle> Example</IconTitle>
            </IconThree>
            <ParagraphContainer>
                <Paragraph>"Explain To Me" </Paragraph>
                <Paragraph>"As a Pirate can you talk dirty to me?"</Paragraph>
                <Paragraph>"Can You Code AKS for me?"</Paragraph>
            </ParagraphContainer>
        </IconTwo>
        <IconTwo>
            <IconThree>
            <RiKakaoTalkFill/>
            <IconTitle> Limitations </IconTitle>
            </IconThree>
            <ParagraphContainer>
                <Paragraph>"How to eat ass?" </Paragraph>
                <Paragraph>"What is god?"</Paragraph>
                <Paragraph>"Can you make me rich?"</Paragraph>
            </ParagraphContainer>
        </IconTwo>
        <IconTwo>
            <IconThree>
            <AiFillPieChart/>
            <IconTitle> Conversations</IconTitle>
            </IconThree>
            <ParagraphContainer>
                <Paragraph>"Talk to me about physics" </Paragraph>
                <Paragraph>"What do you know about cows?"</Paragraph>
                <Paragraph>"What does Gangshit mean?"</Paragraph>
            </ParagraphContainer>
        </IconTwo>
    </IconContainer>
    </MainContainer>
  )
}

export default Chat

const MainContainer = styled.div`
width: 100vw;
background-color: #343541;
border: solid 1px black;
display: flex; 
flex-direction: column;
justify-content: center; 
align-items: center; 
padding: 1rem; 
color: white;
`

const Title = styled.h1`

 font-weight: 700;
 font-size: 2rem;
 margin-bottom: 20px;
`

const IconContainer = styled.div`
display: flex;
margin-right: 1rem;
`

const IconTwo = styled.div`
margin-right: 1rem;
`

const IconThree = styled.div`
display: flex; 
flex-direction: column; 
align-items: center; 
justify-content: center;
margin-bottom: 0.5rem;
`

const IconTitle = styled.div`

`

const ParagraphContainer = styled.div`
justify-content: center; 
align-items: center;
`

const Paragraph = styled.div`
margin-top: 1rem;

padding: 1rem;
max-width: 300px;
background-color: rgb(71 85 105);
border-radius: 10px;
`