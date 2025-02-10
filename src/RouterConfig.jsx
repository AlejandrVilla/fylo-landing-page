import { HashRouter as Router, Routes, Route } from "react-router-dom"
import App from "./App.jsx";
import { Home } from "./pages/main.jsx";

const RouterConfig = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route index element={<Home />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default RouterConfig;