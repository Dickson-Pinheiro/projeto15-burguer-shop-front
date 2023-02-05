import { ContainerHistoriesS } from "./style";
import { useContext, useEffect } from "react";
import { HistoryContext } from "../../contexts/HistoryContext";
import {HistoryItem} from "../HistoryItem"
import useApi from "../../hooks/useApi";
import { useNavigate } from "react-router-dom";

export function ContainerHistories(){
    const { histories, setHistories } = useContext(HistoryContext)
    const api = useApi(localStorage.getItem("token"))
    const navigate = useNavigate()

    useEffect(() => {
        async function getHistories(){
            const result = await api.getHistories()
            if(result.success){
                const newHistories = result.histories.data.filter(item => item.date).reverse()
                setHistories(newHistories)
            } else {
                navigate("/")
            }
        }
        getHistories()
    }, [])

    return(
        <ContainerHistoriesS>
            {histories.map(item => <HistoryItem key={item._id} date={item.date}/>)}
        </ContainerHistoriesS>
    )
}