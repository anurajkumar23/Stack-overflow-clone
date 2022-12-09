import React from 'react'
import { useEffect } from 'react'
import Aibot from '../assets/bot.png'

import ChatBot from "react-simple-chatbot";
import { Segment } from "semantic-ui-react";
import "./bot.css"
import { useState } from 'react';
import { CgClose } from "react-icons/cg";


const Chatbot = () => {
  const [show,setShow] = useState()
  const steps = [
    {
      id: "Greet",
      message: "Hi there!👋 Welcome to Stack overflow! How may i help you 😊",
      trigger: "Ask Name",
    },
    {
      id: "Ask Name",
      message: "Please enter your name",
      trigger: "waiting",
    },
    {
      id: "waiting",
      user: true,
      trigger: "Name",
    },
    {
      id: "Name",
      message: "Hi {previousValue}, Please select your issue",
      trigger: "issues",
    },
    {
      id: "issues",
      options: [
        {value: "React", label: "React",trigger: "React",},
        { value: "Angular", label: "Angular", trigger: "Angular" },
        { value: "Javascript", label: "Javascript", trigger: "Javascript" },
        { value: "Html/css", label: "Html/css", trigger: "Html/css" },
        { value: "Others", label: "Others", trigger: "Others" },
      ],
    },

    {
      id: "React",
      message:"Tell your React issue",
     
      trigger:"hi"
    },
    {
      id:"hi",
      user:true,
      trigger:"completed"
    },
    {
      id: "Angular",
     message:"Tell your Angular issue",
    
     trigger:"hello"
    },
    {
      id: "hello",
    //  message:"Tell your Angular issue",
     user:true,
     trigger:"completed"
     
    },
    {
        id: "Javascript",
        message:"Tell your Javascript issue",
        
        trigger:"java"
    },
    { 
      id:"java",
      user:true,
      trigger:"completed"
    },
    {
        id: "Html/css",
        message:"Tell your Html/css issue",
        trigger:"htcs"
    },
    {
      id:"htcs",
      user:true,
      trigger:"completed"
    },
    {
        id: "Others",
        message:"Tell your Others issue",
        trigger:"othe"
    },
    {
      id:"othe",
      user:true,
      trigger:"completed"
    },

    {
         id: "completed",
         message:"Thanks for Telling your Issues our Team will connect you very soon",
         end:true
    }


  ];
  

  return (
    <div className='chatbot-2'>
    <img src={Aibot} alt="" className="chatbot-img" onClick={() => setShow(true) } />
    <div>
      {
       show?<CgClose className='close' onClick= {() => setShow(false)}/>:null
      } 
    </div>
    <div className='bot' id='type2'>
    <Segment>
      {
        show?<ChatBot  steps={steps}  />:null
        
      }
      </Segment>
      </div>
    </div>
  )
}

export default Chatbot
