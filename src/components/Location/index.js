import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../contexts/CartContext";
import {
  InputStyle,
  SelectPayment,
  InputStreet,
  InputNumber,
  ContainerInp,
} from "./style";

export function LocationForm() {
  const { setAddress } = useContext(CartContext);
  const [cidade, setCidade] = useState();
  const [bairro, setBairro] = useState();
  const [rua, setRua] = useState();
  const [numero, setNumero] = useState();
  const [formaDepagamento, setFormaDepagamento] = useState();

  useEffect(
    () => setAddress({ cidade, bairro, rua, numero, formaDepagamento }),
    [cidade, bairro, rua, numero, formaDepagamento]
  );

  return (
    <>
      <h1>Endereço:</h1>
      <InputStyle
        type="text"
        placeholder="Cidade"
        name="cidade"
        onChange={(e) => setCidade(e.target.value)}
        required
      ></InputStyle>
      <InputStyle
        type="text"
        placeholder="Bairro"
        onChange={(e) => setBairro(e.target.value)}
        name="bairro"
        required
      ></InputStyle>

      <ContainerInp>
        <InputStreet
          type="text"
          placeholder="Rua"
          onChange={(e) => setRua(e.target.value)}
          name="rua"
          required
        ></InputStreet>
        <InputNumber
          type="text"
          placeholder="N.º"
          onChange={(e) => setNumero(e.target.value)}
          name="numero"
          required
        ></InputNumber>
      </ContainerInp>
      <h1>Forma de pagamento:</h1>
      <SelectPayment
        name="paymenentMethods"
        id="lista-conteudos"
        onChange={(e) => setFormaDepagamento(e.target.value)}
        required
      >
        <option value=""></option>
        <option value="Dinheiro">Dinheiro</option>
        <option value="Cartão de credito">Cartão de credito</option>
        <option value="Pix">Pix</option>
      </SelectPayment>
    </>
  );
}
