import { useState } from "react";
import useApi from "../../hooks/useApi.js"
import { Link, useNavigate } from "react-router-dom";

import { ContainerLogin, LogoStyle, ContainerForm } from "./style";

export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const api = useApi()
    const navigate = useNavigate()

    async function submitLogin(e) {
        e.preventDefault()
        try {
            const loginData = await api.loginUser(email, password)
            if (loginData.success) {
                localStorage.setItem("token", loginData.token)
                localStorage.setItem("userId", loginData.id)
                navigate("/")
            }

        } catch (error) {
            console.log(error)
        }
    }


    return (
        <ContainerLogin>
            <LogoStyle>BurguerShop</LogoStyle>

            <ContainerForm onSubmit={submitLogin}>

                <input type="email"
                    placeholder="e-mail"
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                    required
                />

                <input
                    type="password"
                    placeholder="senha"
                    onChange={e => setPassword(e.target.value)}
                    value={password}
                    required
                />

                <button>Entrar</button>
            </ContainerForm>
            <Link to="/cadastro">Não possui uma conta? Cadastre-se!</Link>
        </ContainerLogin>
    )
}