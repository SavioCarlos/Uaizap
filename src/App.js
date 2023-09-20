import React, { useState } from 'react';
import MessageList from './MessageList';
import MessageForm from './MessageForm';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #000;
    margin: 0;
  }
`;

const AppContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: Arial, sans-serif;
`;

function App() {
  const [messages, setMessages] = useState([]);

  const handleSend = (message) => {
    setMessages([...messages, { ...message, id: Date.now() }]);
  };

  const handleDelete = (messageToDelete) => {
    setMessages(messages.filter((message) => message.id !== messageToDelete.id));
  };

  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <MessageList messages={messages} onDelete={handleDelete} />
        <MessageForm onSend={handleSend} />
      </AppContainer>
    </>
  );
}

export default App;
