import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import useApi from "../../hooks/useApi"
import Header from "../../components/Header";
import { ContainerHistories } from "../../components/ContainerHistories";
import { ContainerMain } from "./style"
import { HistoryContext } from "../../contexts/HistoryContext";

export function History() {

    const [histories, setHistories] = useState([])

    const api = useApi(localStorage.getItem("token"))
    const navigate = useNavigate()

    useEffect(() => {
        async function validToken() {
            const result = await api.verifyToken(localStorage.getItem("token"))
            if (!result.validationToken.data.valid) {
                navigate("/")
            }
            return
        }
        validToken()
    }, [])

    return (
        <HistoryContext.Provider value={{histories, setHistories}}>
            <Header />
            <ContainerMain>
                <h1>Histórico de pedidos</h1>
                <ContainerHistories />
            </ContainerMain>
        </HistoryContext.Provider>
    )
}