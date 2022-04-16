import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../../style/theme";
import { lazy, Suspense } from "react";
import Preloader from "../Preloader/Preloader";
const AppRouter = lazy(() => import("../../Routes/AppRouter"));
function App() {
  return (
    <ChakraProvider theme={theme} resetCSS={true}>
      <Suspense fallback={<Preloader customText={"Loading"} />}>
        <AppRouter />
      </Suspense>
    </ChakraProvider>
  );
}

export default App;
