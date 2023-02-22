import style from "./ButtonCalcular.module.css";
import logo from "../assets/pika.gif";

function ButtonCalcular({ evento }) {
  return (
    <>
      <button className={style.button} onClick={evento}>
        <img src={logo} className={style.logo} />
      </button>
    </>
  );
}

export default ButtonCalcular;
