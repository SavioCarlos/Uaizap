import React, { useState } from 'react';
import styled from 'styled-components';

const FormContainer = styled.form`
  position: absolute;
  bottom: 20px;
  left: 30%;
  width: 49%;
  display: flex;
  gap: 10px;
  background-color: #36393f;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.3);
`;

const SenderInput = styled.input`
  flex: 1;
  padding: 10px;
  background-color: #40444b;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  outline: none;
`;

const ContentInput = styled.input`
  flex: 2;
  padding: 10px;
  background-color: #40444b;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  outline: none;
`;

const SendButton = styled.button`
  padding: 10px 20px;
  background-color: #7289da;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const MessageForm = ({ onSend }) => {
  const [sender, setSender] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (sender.trim() === '' || content.trim() === '') return;

    onSend({ sender, content });
    setSender('');
    setContent('');
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <SenderInput
        type="text"
        placeholder="Nome do remetente"
        value={sender}
        onChange={(e) => setSender(e.target.value)}
      />
      <ContentInput
        type="text"
        placeholder="Conteúdo da mensagem"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <SendButton type="submit">Enviar</SendButton>
    </FormContainer>
  );
};

export default MessageForm;
