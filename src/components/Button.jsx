import style from "./Button.module.css";

function Button({ evento, texto }) {
  return (
    <>
      <button className={style.button} onClick={evento}>
        {texto}
      </button>
    </>
  );
}

export default Button;
