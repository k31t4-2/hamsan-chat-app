import React from 'react'
import { IconButton } from '@mui/material'
import SendIcon from '@mui/icons-material/Send';

import { pushMessage } from '../../../firebase.config'

const MessageSubmitButton = (props) => {

  const { name, text, setText,inputEl } = props

  const onClickSubmit = () => {
    pushMessage({ name, text });
    setText("");
    inputEl.current.focus();
  }

  return (
    <IconButton
      disabled={text === ""} // 空文字だったらtrue = 活性化されない
      onClick={onClickSubmit}
    >
      <SendIcon/>
    </IconButton>
  )
}

export default MessageSubmitButton
