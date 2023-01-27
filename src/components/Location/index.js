import { InputStyle, SelectPayment } from "./style";

export function LocationForm() {
  return (
    <form>
      <h1>Endereço:</h1>
      <InputStyle
        type="text"
        placeholder="Cidade"
        name="text"
        required
      ></InputStyle>
      <InputStyle
        type="text"
        placeholder="Bairro"
        name="text"
        required
      ></InputStyle>
      <InputStyle
        type="text"
        placeholder="Rua e numero"
        name="text"
        required
      ></InputStyle>
      <h1>Forma de pagamento:</h1>
      <SelectPayment name="paymenentMethods" id="lista-conteudos">
        <option value="dinheiro">Dinheiro</option>
        <option value="cartaoDeCredito">Cartão de credito</option>
        <option value="pix">Pix</option>
      </SelectPayment>
    </form>
  );
}
