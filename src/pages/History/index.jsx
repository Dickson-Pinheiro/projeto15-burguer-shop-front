import Header from "../../components/Header";
import { HistoryItem } from "../../components/HistoryItem";
import { ContainerHistories, ContainerMain } from "./style"

export function History() {
    return (
        <>
            <Header />
            <ContainerMain>
                <h1>Histórico de pedidos</h1>
                <ContainerHistories>
                    <HistoryItem />
                </ContainerHistories>
            </ContainerMain>
        </>
    )
}