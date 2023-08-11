import React, { useRef, useState } from 'react'
import { Avatar, Grid } from '@mui/material';

import { gravatarPath } from '../../gravatar';
import { StyledMessageInputField } from "./Styled";
import MessageInput from './MessageInput';
import MessageSubmitButton from './MessageSubmitButton';

const MessageInputField = (props) => {

  // 「誰が」テキストを入力したのかを紐づけなければいけないのでnameは必要。
  const {name} =props

  const inputEl = useRef(null);

  // Enterとbuttonをクリックしたときに、
  // 入力した値が管理されるのはMessageInputFieldがベスト
  const [text, setText] = useState("")
  console.log({ text });

  const avatarPath = gravatarPath("ksekimotonz@gmail.com")

  return (
    <StyledMessageInputField>
      <Grid container>
        <Grid item xs={1}>
          <Avatar src={avatarPath}/>
        </Grid>
        <Grid item xs={10}>
          <MessageInput
            inputEl={inputEl}
            name={name}
            text={text}
            setText={setText}
          />
        </Grid>
        <Grid item xs={1}>
          <MessageSubmitButton
            inputEl={inputEl}
            name={name}
            text={text}
            setText={setText}
          />
        </Grid>
      </Grid>
    </StyledMessageInputField>
  )
}

export default MessageInputField
