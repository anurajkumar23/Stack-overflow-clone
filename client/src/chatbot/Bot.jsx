// import React from "react";
// import "./bot.css";
// import ChatBot from "react-simple-chatbot";
// import { Segment } from "semantic-ui-react";

// const Bot = () => {
//   const steps = [
//     {
//       id: "Greet",
//       message: "Hi there!👋 Welcome to Stack overflow! How may i help you 😊",
//       trigger: "Ask Name",
//     },
//     {
//       id: "Ask Name",
//       message: "Please enter your name",
//       trigger: "waiting",
//     },
//     {
//       id: "waiting",
//       user: true,
//       trigger: "Name",
//     },
//     {
//       id: "Name",
//       message: "Hi {previousValue}, Please select your issue",
//       trigger: "issues",
//     },
//     {
//       id: "issues",
//       options: [
//         {value: "React", label: "React",trigger: "React",},
//         { value: "Angular", label: "Angular", trigger: "Angular" },
//         { value: "Javascript", label: "Javascript", trigger: "Javascript" },
//         { value: "Html/css", label: "Html/css", trigger: "Html/css" },
//         { value: "Others", label: "Others", trigger: "Others" },
//       ],
//     },

//     {
//       id: "React",
//       message:"Tell your React issue",
//       user:true,
//       trigger:"completed"
//     },

//     {
//       id: "Angular",
//      message:"Tell your Angular issue",
//      user:true,
//      trigger:"completed"
//     },
//     {
//         id: "Javascript",
//         message:"Tell your Javascript issue",
//         user:true,
//         trigger:"completed"
//     },
//     {
//         id: "Html/css",
//         message:"Tell your Html/css issue",
//         user:true,
//         trigger:"completed"
//     },
//     {
//         id: "Others",
//         message:"Tell your Others issue",
//         user:true,
//         trigger:"completed"
//     },

//     {
//          id: "completed",
//          message:"Thanks for Telling your Issues our Team will connect you very soon",
//          end:true
//     }


//   ];

//   return (
//     <div className="bot">
//       <Segment>
//         <ChatBot steps={steps} />
//       </Segment>
//     </div>
//   );
// };

// export default Bot;
