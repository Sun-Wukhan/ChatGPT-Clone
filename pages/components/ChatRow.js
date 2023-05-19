import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { RiKakaoTalkFill } from 'react-icons/ri'
import { BsFillTrashFill } from 'react-icons/bs'
import { GiCheckMark } from 'react-icons/gi'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation'
import { auth, db } from "../services/firebase";
import { useAuthState, } from "react-firebase-hooks/auth"
import Link from 'next/link'
import { useCollection } from 'react-firebase-hooks/firestore'
import { collection, deleteDoc, doc, orderBy, query } from 'firebase/firestore'

function ChatRow({id}) {
  const [ active, setActive ] = useState(false);
  const [user] = useAuthState(auth);
  const pathname = usePathname();
  const router = useRouter();
  
  const [ messages ] = useCollection(
  query(
    collection(db, "users", user?.email, "chats", id, 
    'messages'),
    orderBy('createdAt', 'asc')
  ))

  useEffect(() => {
    if(!pathname) return;
    setActive(pathname.includes(id))
  }, [pathname])

  const removeChat = async() => {
    await deleteDoc(doc(db, "users", user?.email, "chats", id)) 
    router.replace("/")
  }

  return (
    <Link href={`/chat/${id}` }>
       <IconContainer>
        <Icons active={active}>
        <RiKakaoTalkFill/> <Blurb>
        {messages?.docs[messages?.docs.length-1]?.data().text || 'Chat'}
        </Blurb>
        <BsFillTrashFill onClick={removeChat}/>
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
margin-right: 1rem;
background-color: ${(props) => (props.active ? 'gray' : '#343541')};
margin-top: 2rem;
margin-left: -2rem;
width: 100%;
height: 2rem;
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
