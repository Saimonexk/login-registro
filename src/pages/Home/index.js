import React from "react"
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Button from "../../components/button";
import * as C from "./styles";

const Home = () => {
    const { signout } = useAuth();
    const navigate = useNavigate();

    return (
        <C.Container>
            <C.Tittle>Home</C.Tittle>
            <Button Text="Sair" onClick={() => [signout(), navigate("/")]} />
        </C.Container>
    );
};


export default Home;