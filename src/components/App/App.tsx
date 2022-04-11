import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../../style/theme";

function App() {
  return (
    <ChakraProvider theme={theme} resetCSS={true}>
      <h1 className="App">Hello</h1>
    </ChakraProvider>
  );
}

export default App;
