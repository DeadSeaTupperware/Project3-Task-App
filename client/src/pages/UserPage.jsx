import { ThemeProvider } from "styled-components";
import GlobalStyles from "../components/styles/Global";
import UserTasks from "../components/UserTasks";

const theme = {
  colors: {
    header: "#432874",
    appheader: "#36205d",
    body: "#fff",
    footer: "#003333",
  },
};

function UserPage() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyles />
          <UserTasks />
        </>
      </ThemeProvider>
    </>
  );
}

export default UserPage;
