import React from 'react'
import { StyledMessageList } from './Styled'
import { messagesRef } from '../../../firebase.config'
import { onValue, orderByKey, query } from 'firebase/database'

const MessageList = () => {

  // messagesRef.on("value", (snapshot) => {
  //   console.log(snapshot.val());
  // })

  const orderBy = orderByKey(messagesRef);
  const queryRef = query(orderBy)
  console.log(queryRef);

  onValue(queryRef, (snapshot) => {
    const messages = snapshot.val();
    console.log(messages);
  })

  // 上記のコード「 snapshot.val() 」で取得できたのは以下のデータ
    // -NbTrlmYHC0CiUl8qhUy:{name: 'a', text: 'オートフォーカスの設定'}

  return (
    <StyledMessageList>
      MessageList
    </StyledMessageList>
  )
}

export default MessageList
