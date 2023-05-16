import React from 'react'
import styled from 'styled-components'
import { RiKakaoTalkFill } from 'react-icons/ri'
import { BsFillTrashFill } from 'react-icons/bs'
import { GiCheckMark } from 'react-icons/gi'
import Link from 'next/link'

function ChatRow({id}) {


  return (
    <Link href={`/chat/${id}`}>
       <IconContainer>
        <Icons>
        <RiKakaoTalkFill/> 
        <Blurb>This be like yo</Blurb>
        <BsFillTrashFill/>
        <GiCheckMark/>
        </Icons>
        </IconContainer>
    </Link>
  )
}

export default ChatRow

const IconContainer = styled.div`
color: white;
overflow-y: scroll;
min-width: 12rem;
`

const Icons = styled.div`
margin: 1rem;
width: 100%;
overflow-y: scroll;
overflow-x: scroll;
display: flex; 
flex-direction: row; 
justify-content: center;
align-items: center;
font-size: 0.8rem;
/* border: 3px solid yellow; */
`
const Blurb = styled.p`
font-size: 0.8rem;
`
