import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import useApi from "../../hooks/useApi"
import { ContainerForm, ContainerRegister, LogoStyle } from "./style"

export default function Register() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const navigate = useNavigate()
    const api = useApi()

    async function submitForm(e){
        e.preventDefault()

        if(password !== confirmPassword){
            setPassword("")
            setConfirmPassword("")
            return
        }
        try {
            const result = await api.createUser(name, email, password, confirmPassword)
            if(result.success){
                navigate("/login")
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <ContainerRegister>
            <LogoStyle>BurguerShop</LogoStyle>
            <ContainerForm onSubmit={submitForm}>
                <input
                    type="text"
                    placeholder="nome"
                    onChange={e => setName(e.target.value)}
                    value={name}
                    required
                />
                <input
                    type="email"
                    placeholder="email"
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
                <input
                    type="password"
                    placeholder="confirme a senha"
                    onChange={e => setConfirmPassword(e.target.value)}
                    value={confirmPassword}
                    required
                />
                <button>Cadastrar</button>
            </ContainerForm>
            <Link to="/login">Já possui cadastro? Entrar!</Link>
        </ContainerRegister>
    )
}
