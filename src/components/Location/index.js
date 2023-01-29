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
  const [city, setCity] = useState();
  const [district, setDistrict] = useState();
  const [street, setStreet] = useState();
  const [number, setNumber] = useState();
  const [paymentForms, setPaymentForms] = useState();

  useEffect(
    () => setAddress({ city, district, street, number, paymentForms }),
    [city, district, street, number, paymentForms]
  );

  return (
    <>
      <h1>Endereço:</h1>
      <InputStyle
        type="text"
        placeholder="Cidade"
        name="city"
        onChange={(e) => setCity(e.target.value)}
        required
      ></InputStyle>
      <InputStyle
        type="text"
        placeholder="Bairro"
        onChange={(e) => setDistrict(e.target.value)}
        name="district"
        required
      ></InputStyle>

      <ContainerInp>
        <InputStreet
          type="text"
          placeholder="Rua"
          onChange={(e) => setStreet(e.target.value)}
          name="street"
          required
        ></InputStreet>
        <InputNumber
          type="text"
          placeholder="N.º"
          onChange={(e) => setNumber(e.target.value)}
          name="number"
          required
        ></InputNumber>
      </ContainerInp>
      <h1>Forma de pagamento:</h1>
      <SelectPayment
        name="paymenentMethods"
        id="lista-conteudos"
        onChange={(e) => setPaymentForms(e.target.value)}
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
