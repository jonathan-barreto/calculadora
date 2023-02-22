import Calculadora from "./Calculadora";
import style from "./Container.module.css";

function Container() {
  return (
    <div className={style.container}>
      <Calculadora />
    </div>
  );
}

export default Container;
