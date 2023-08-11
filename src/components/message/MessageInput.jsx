import { TextField } from '@mui/material'
import React, { useState } from 'react'

import { pushMessage } from '../../../firebase.config'


const MessageInput = (props) => {

  const {name,text,setText,inputEl} =props

  // 編集中かどうかを管理
  const [isEditing, setIsEditing] = useState(false)


  const onChangeSetText = (e) => {
    setText(e.target.value);
  }

    // Enter用の送信挙動 --------------------
  const onKeyDown = (e) => {
    // isEditing がtrueなら以降の処理を実行しない
    if (isEditing) return;

    // eに値が設定されていなかったら以降の処理をしない
    const text = e.target.value;
    if (text === "") return;

    // 押されたのが""enter"だったらifの中身を処理
    if (e.key === "Enter") {
      // Enterを押してもリロードされないようにする
      e.preventDefault();

      pushMessage({name,text})
      // 最後にinputをクリアにする
      setText("")
    }
  }

  // 以下、日本語入力を検知するメソッド
  const onCompositionStart = () => {
    setIsEditing(true);
      console.log("入力開始");
    }
    const onCompositionEnd = () => {
      setIsEditing(false)
      console.log("入力終了");
  }

  return (
    <TextField
      inputRef={inputEl}
      autoFocus
      onChange={onChangeSetText}
      value={text}
      fullWidth
      id='standard-basic'
      variant="standard"
      onKeyDown={onKeyDown}
      onCompositionStart={onCompositionStart}
      onCompositionEnd={onCompositionEnd}
    />
  )
}

export default MessageInput
