import { Header } from "../../components/header/Header";
import style from "./Devs.module.css";

export function Devs() {
  return (
    <>
      <Header active="devs" />
      <div className={style.bg}>
        <div className={style.pageContainer}>
          <div className={[style.profileBox, style.shadd330].join(" ")}>
            <div className={style.profileContent}>
              <div className={style.profileHeader}>
                <div className={style.profileImage}>
                  <a
                    href="https://github.com/Shadd330"
                    >
                    <img src="https://github.com/shadd330.png" />
                  </a>
                </div>
                <h2>Shadd330</h2>
              </div>
              <div className={style.profileBody}>
                
              </div>
              <div className={style.profileFooter}>
                
              </div>
            </div>
          </div>
          <div className={style.logoBox}>
            <a href="/">
              <div className={style.logo}>
                <img src="/logo.png" />
              </div>
            </a>
          </div>
          <div className={[style.profileBox, style.anypogers].join(" ")}>
            <div className={style.profileContent}>
              <div className={style.profileHeader}>
                <h2>Anypogers</h2>
                <div className={style.profileImage}>
                  <a
                    href="https://github.com/Anypogers"
                  >
                    <img src="https://github.com/anypogers.png" />
                  </a>
                </div>
              </div>
              <div className={style.profileBody}>
                
              </div>
              <div className={style.profileFooter}>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
