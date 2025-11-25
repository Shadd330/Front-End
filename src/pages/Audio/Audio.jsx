import style from "./Audio.module.css";
import { Header } from "../../components/header/Header.jsx";


export function Audio() {
  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <Header active="audio"/>
      <button className={style.btn}>
       HOVER ME!
      </button>
    </>
    
  );
}
