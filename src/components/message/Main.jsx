import React from 'react'

import MessageList from './MessageList';
import MessageInputField from './MessageInputField';
import { StyledMain } from './Styled';

const Main = (props) => {

  const {name} = props;

  return (
    <StyledMain>
      <MessageList/>
      <MessageInputField name={name}/>
    </StyledMain>
  )
}

export default Main
