import style from "./Audio.module.css";
import { Header } from "../../components/header/Header.jsx";

export function Audio() {
  return (
    <>
      <Header active="audio" />
      <div className={style.temp}>a</div>
    </>
  );
}
