import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import GlobalStyles from "./components/styles/Global";

const theme = {
  colors: {
    header: "#441c75",
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
        </>
      </ThemeProvider>
    </>
  );
}

export default UserPage;
