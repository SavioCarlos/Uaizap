// MessageList.js
import React from 'react';
import Message from './Message';
import styled from 'styled-components';

import backgroundImage from './img/pxfuel.jpg'; // Importe a imagem

const ListContainer = styled.div`
  position: absolute;
  top: 10px;
  left: 30%;
  width: 50%;
  height: 91%;
  overflow-y: auto;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 4px;
`;

const MessageList = ({ messages, onDelete }) => {
  return (
    <ListContainer>
      {messages.map((message) => (
        <Message
          key={message.id}
          message={message}
          isMe={message.sender === 'eu'}
          onDelete={onDelete}
        />
      ))}
    </ListContainer>
  );
};

export default MessageList;
