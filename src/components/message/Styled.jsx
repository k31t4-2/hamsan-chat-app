import { styled } from "@mui/system";

export const StyledMain = styled("div")({
  display: "grid",
  height: "100vh",
  gridTemplateRows: "1fr auto",
});

export const StyledMessageList = styled("div")({
  gridRow:1,
})
export const StyledMessageInputField = styled("div")({
  gridRow: 2,
  margin:"26px",
})
