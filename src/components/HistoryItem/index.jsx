import { ContainerItem } from "./style"
import dayjs from "dayjs"

export function HistoryItem({date}){
    return(
        <ContainerItem>
            <p>{dayjs(new Date(date)).format("DD/MM")}</p>
            <p>Burguershop</p>
        </ContainerItem>
    )
}