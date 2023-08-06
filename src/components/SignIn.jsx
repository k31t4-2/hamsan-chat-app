import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useEffect, useState } from 'react';


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://twitter.com/camp_is_beer">
      keita
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignIn(props) {

  // props =================
  const { setName } = props;

  //  useState =================
  const [string, setString] = useState("")
  const [disabled, setDisabled] = useState(true)
  const [isEditing,setIsEditing] = useState(false)
  console.log({isEditing,disabled,string});

// ボタンを非活性化にする--------------------
  useEffect(() => {
    const disabled =  string === "";
    setDisabled(disabled)
  },[ string ])

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  // onChange --------------------
  const onChange = (e) => {
    setString(e.target.value)
  }

  // 送信ボタン--------------------
  const onClickSubmit = () => {
    // inputが空欄だった場合、以降の動作ができない
    if (string === "") return;
    // setNameに入力された値（string）を渡すことで、
    setName(string)
    setDisabled(true);
    console.log("「はじめる」がクリックされた");
  }

  // Enter用の送信挙動 --------------------
  const onKeyDown = (e) => {
    if (isEditing === true) return;
    // enterキーに限り、リロードを制御する
    if (e.key === "Enter") {
      if (isEditing === true) return;
      setName(e.target.value)
      // Enterを押してもリロードされないようにする
      e.preventDefault();
      console.log("Enterされた");
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
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            ようこそ
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="ニックネーム"
              name="name"
              value={string}
              onChange={onChange}
              onKeyDown={onKeyDown}
              autoFocus
              onCompositionStart={onCompositionStart}
              onCompositionEnd={onCompositionEnd}
            />

            <Button
              disabled={disabled}
              type="button"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={onClickSubmit}
            >
              はじめる
            </Button>

          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
