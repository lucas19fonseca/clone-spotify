import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeSpotify from "../views/spotify/index";


export default function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomeSpotify/>} />
            </Routes>
        </BrowserRouter>
    );
}