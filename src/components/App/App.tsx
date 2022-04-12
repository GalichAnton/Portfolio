import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../../style/theme";
import AppRouter from "../../Routes/AppRouter";

function App() {
  return (
    <ChakraProvider theme={theme} resetCSS={true}>
      <AppRouter />
    </ChakraProvider>
  );
}

export default App;
