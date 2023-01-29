import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../contexts/CartContext";
import { InputStyle, SelectPayment } from "./style";

export function LocationForm() {
  const { setAddress, address } = useContext(CartContext);
  const [cidade, setCidade] = useState();
  const [bairro, setBairro] = useState();
  const [rua, setRua] = useState();
  const [formaDepagamento, setFormaDepagamento] = useState();

  useEffect(
    () => setAddress({ cidade, bairro, rua, formaDepagamento }),
    [cidade, bairro, rua, formaDepagamento]
  );

  return (
    <>
      <h1>Endereço:</h1>
      <InputStyle
        type="text"
        placeholder="Cidade"
        name="text"
        onChange={(e) => setCidade(e.target.value)}
        required
      ></InputStyle>
      <InputStyle
        type="text"
        placeholder="Bairro"
        onChange={(e) => setBairro(e.target.value)}
        name="text"
        required
      ></InputStyle>
      <InputStyle
        type="text"
        placeholder="Rua e numero"
        onChange={(e) => setRua(e.target.value)}
        name="text"
        required
      ></InputStyle>
      <h1>Forma de pagamento:</h1>
      <SelectPayment
        name="paymenentMethods"
        id="lista-conteudos"
        onChange={(e) => setFormaDepagamento(e.target.value)}
        required
      >
        <option value=""></option>
        <option value="dinheiro">Dinheiro</option>
        <option value="cartão de credito">Cartão de credito</option>
        <option value="pix">Pix</option>
      </SelectPayment>
    </>
  );
}
