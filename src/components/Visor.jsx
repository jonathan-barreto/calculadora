import style from "./Visor.module.css";

function Visor({ historico, texto }) {
  return (
    <div className={style.visor}>
      <div className={style.parteDeCima}>
        <p className={style.historico}>{historico}</p>
      </div>
      <div className={style.parteDeBaixo}>
        <p className={style.valorVisor}>{texto}</p>
      </div>
    </div>
  );
}

export default Visor;
