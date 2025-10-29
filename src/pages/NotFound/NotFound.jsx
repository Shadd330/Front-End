import { Header } from "../../components/header/Header";
import style from "./NotFound.module.css";
export function NotFound() {
  return (
    <>
      <Header active = "404"/>
      <div className={style.notfoundBody}>
        <a href="/">
          <div className={style.bg404}>
            <h1 className={style.text}>404 - Page Not Found</h1>
          </div>
        </a>
      </div>
    </>
  );
}
