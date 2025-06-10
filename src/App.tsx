import { ThemeProvider } from "styled-components";
import { QuestionSorterDemo } from "./pages/demo/sorter";
import { dark } from "./styles/dark";
import Global from "./styles/global";

function App() {
    return (
        <ThemeProvider theme={dark}>
            <Global />
            <QuestionSorterDemo />
        </ThemeProvider>
    );
}

export default App;
