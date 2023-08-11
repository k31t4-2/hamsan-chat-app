import { initializeApp } from 'firebase/app';
import { getDatabase, push, ref } from "firebase/database";

const REACT_APP_FIREBASE_API_KEY = "AIzaSyAvlqNGHB_h9rk5jwlsQFk5YDfdsQHTGBc";
const REACT_APP_FIREBASE_AUTH_DOMAIN = "hamsan-chatapp.firebaseapp.com";
const REACT_APP_FIREBASE_PROJECT_ID = "hamsan-chatapp";
const REACT_APP_FIREBASE_STORAGE_BUCKET = "hamsan-chatapp.appspot.com";
const REACT_APP_FIREBASE_MESSAGING_SENDER_ID = "845744435435";
const REACT_APP_FIREBASE_APP_ID = "1:845744435435:web:1a16b5b8fd39b93e430eae";


const firebaseConfig = {
  apiKey:REACT_APP_FIREBASE_API_KEY,
  authDomain:REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId:REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket:REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId:REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId:REACT_APP_FIREBASE_APP_ID
};

// firebaseアプリをfirebaseConfigを使って初期化する
const app = initializeApp(firebaseConfig);
// 初期化したDBを取得する
const database = getDatabase(app)
// DBの中の特定の場所`messages`を参照
export const messagesRef = ref(database, "messages");
console.log(messagesRef);

// 関数を使って、messageの中にname / textを登録する関数を作成。しっかり引数を渡す。
// 使い回すのでexportしておく。
export const pushMessage = ({ name, text }) => {
  push(messagesRef, { name , text })
}
