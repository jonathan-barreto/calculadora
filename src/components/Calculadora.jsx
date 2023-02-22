import Button from "./Button";
import style from "./Calculadora.module.css";
import Visor from "./Visor";
import { useState } from "react";
import ButtonCalcular from "./ButtonCalcular";
import ButtonDelete from "./ButtonDelete";

function Calculadora() {
  const [number, setNumber] = useState(0);
  const [oldNumber, setOldNumber] = useState();
  const [historico, setHistorico] = useState();
  const [operador, setOperador] = useState("");

  const adicionarNumero = (e) => {
    const numeroDigitado = e.target.innerHTML;

    if (Number(numeroDigitado) === 0 && number === 0) return;

    if (number === 0) {
      setNumber(numeroDigitado);
    } else {
      setNumber(number + numeroDigitado);
    }
  };

  const adicionarHistorico = (number, operador, calcular) => {
    if (typeof historico === "undefined") {
      setHistorico(`${number} ${operador}`);
    }
    if (calcular === true) {
      setHistorico(`${oldNumber} ${operador} ${number} =`);
    } else {
      setHistorico(`${number} ${operador}`);
    }
  };

  const clear = () => {
    setNumber(0);
    setHistorico();
  };

  const adicionarOperador = (e) => {
    if (operador !== "") {
      calcular();
    } else {
      const operador = e.target.innerHTML;
      adicionarHistorico(number, operador);
      setOperador(operador);
      setOldNumber(number);
      setNumber(0);
    }
  };

  const resetar = (calcular) => {
    setOldNumber(0);
    setOperador("");
    adicionarHistorico(number, operador, calcular);
  };

  const calcular = () => {
    const calcular = true;
    switch (operador) {
      case "+":
        setNumber(`${Number(oldNumber) + Number(number)}`);
        resetar(calcular);
        break;
      case "-":
        setNumber(`${Number(oldNumber) - Number(number)}`);
        resetar(calcular);
        break;
      case "x":
        setNumber(`${Number(oldNumber) * Number(number)}`);
        resetar(calcular);
        break;
      case "/":
        setNumber(`${Number(oldNumber) / Number(number)}`);
        resetar(calcular);
        break;
    }
  };

  const porcentagem = () => {
    if (operador === "x") {
      const valor = oldNumber;
      const porcentagem = number;
      const resultado = (porcentagem * valor) / 100;
      setNumber(resultado);
      setOldNumber(0);
      setOperador("");
    }
  };

  const verificarVisor = () => {
    if (number.length == 1) {
      setNumber(0);
    }
  };

  const deletar = () => {
    if (typeof number === "string") {
      const newNumber = number.substring(0, number.length - 1);
      setNumber(`${newNumber}`);
      verificarVisor();
    }
  };

  const mudarSinal = () => {
    alert("Em desenvolvimento!");
    clear();
  };

  return (
    <div className={style.containerCalculadora}>
      <Visor texto={number} historico={historico} />
      <div className={style.calculadora}>
        <div className={style.divisao}>
          <Button texto={"C"} evento={clear} />
          <Button texto={"%"} evento={porcentagem} />
          <Button texto={"+/-"} evento={mudarSinal} />
          <Button texto={"/"} evento={adicionarOperador} />
        </div>
        <div className={style.divisao}>
          <Button texto={7} evento={adicionarNumero} />
          <Button texto={8} evento={adicionarNumero} />
          <Button texto={9} evento={adicionarNumero} />
          <Button texto={"x"} evento={adicionarOperador} />
        </div>
        <div className={style.divisao}>
          <Button texto={4} evento={adicionarNumero} />
          <Button texto={5} evento={adicionarNumero} />
          <Button texto={6} evento={adicionarNumero} />
          <Button texto={"-"} evento={adicionarOperador} />
        </div>
        <div className={style.divisao}>
          <Button texto={1} evento={adicionarNumero} />
          <Button texto={2} evento={adicionarNumero} />
          <Button texto={3} evento={adicionarNumero} />
          <Button texto={"+"} evento={adicionarOperador} />
        </div>
        <div className={style.divisao}>
          <ButtonDelete evento={deletar}/>
          <Button texto={0} evento={adicionarNumero} />
          <Button texto={"."} evento={adicionarNumero} />
          <ButtonCalcular evento={calcular} />
        </div>
      </div>
    </div>
  );
}

export default Calculadora;
