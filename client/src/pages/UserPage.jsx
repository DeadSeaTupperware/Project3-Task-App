import { ThemeProvider } from "styled-components";
import Header from "../components/Header";
import AppHeader from "../components/AppHeader";
import GlobalStyles from "../components/styles/Global";

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
      <div>
        <h1>Hello World!</h1>
      </div>
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyles />
          <Header />
          <AppHeader />
        </>
      </ThemeProvider>
    </>
  );
}

export default UserPage;
