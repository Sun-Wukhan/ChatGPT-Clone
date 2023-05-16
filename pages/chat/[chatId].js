import React, {useState, useEffect} from 'react'
import Layout from '../components/Layout'
import { useRouter } from 'next/router';
import { doc, getDoc } from 'firebase/firestore';
import Chat from '../components/Chat'
import styled from 'styled-components';
import { db } from "../services/firebase";

function ChatPages() {
    const router = useRouter();
    const { chatId } = router.query;
    const [chat, setChat] = useState(null);


  return (
    <Layout>
        <MainContainer>
          Data here
        </MainContainer>
     </Layout>
  )
}

export default ChatPages

const MainContainer = styled.div``