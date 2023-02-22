import style from "./ButtonDelete.module.css";
import { FiDelete } from "react-icons/fi";

function ButtonDelete({ evento }) {
  return (
    <>
      <button className={style.button} onClick={evento}>
        <FiDelete></FiDelete>
      </button>
    </>
  );
}

export default ButtonDelete;
