import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Home } from "./pages/home";
import { Question01 } from "./pages/question01";
import { Question02 } from "./pages/question02";
import { Question03 } from "./pages/question03";
import { dark } from "./styles/dark";
import Global from "./styles/global";

function App() {
    return (
        <ThemeProvider theme={dark}>
            <Global />
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/01" element={<Question01 />} />
                    <Route path="/02" element={<Question02 />} />
                    <Route path="/03" element={<Question03 />} />
                </Routes>
            </Router>
        </ThemeProvider>
    );
}

export default App;
