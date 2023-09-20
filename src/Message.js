import styled from 'styled-components';
import React from 'react';

const MessageContainer = styled.div`
  display: flex;
  justify-content: ${(props) => (props.isMe ? 'flex-end' : 'flex-start')};
  margin: 8px;
`;

const SenderName = styled.span`
  font-weight: bold;
  margin-right: 4px;
  color: #7289da;
`;

const MessageContent = styled.div`
  background-color: ${(props) => (props.isMe ? '#7289da' : '#36393f')};
  padding: 8px;
  border-radius: 8px;
  max-width: 70%;
  color: #ffffff;
`;

const Message = ({ message, isMe, onDelete }) => {
  const handleDoubleClick = () => {
    onDelete(message);
  };

  return (
    <MessageContainer isMe={isMe} onDoubleClick={handleDoubleClick}>
      {!isMe && <SenderName>{message.sender}: </SenderName>}
      <MessageContent isMe={isMe}>{message.content}</MessageContent>
    </MessageContainer>
  );
};

export default Message;
