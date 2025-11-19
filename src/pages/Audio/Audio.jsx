import style from "./Audio.module.css";
import { Header } from "../../components/header/Header.jsx";

export function Audio() {
  return (
    <>
      <Header active="audio"/>
      <button className={style.circle}>
        <div className={style.img}>
          <img src="https://images.vexels.com/media/users/3/208347/isolated/preview/22bf32066334d0bdd0f65f2417748254-traco-do-icone-do-microfone.png" alt="MICROPHONE IMAGE"></img>
        </div>
      </button>
    </>
  );
}
