import style from './Devs.module.css';

export function Devs() {
  return (
    <div className={style.bg}>
      <div className={style.pageContainer}>
        <div className={[style.profileBox, style.shadd330].join(" ")}>
          <div className={style.profileContent}>
            <div className={style.userBox}>
              <div className={style.profileImgBox}>
                <img src="https://github.com/shadd330.png"/>
              </div>
              <div className={style.aboutUser}>
                <h1>Izabella Ramos</h1>
                <span>"..."</span>
              </div>
            </div>
            <div className={style.userContribution}>
              <h2>Responsible for the frontend</h2>
            </div>
            <div className={style.userBox}>
              <div className={style.aboutUser}>
                <h1>Shadd330</h1>
                <span>"..."</span>
              </div>
              <div className={style.profileImgBox}>
                <img src="https://github.com/shadd330.png"/>
              </div>
            </div>
          </div>
        </div>
        <div className={style.logoBox}>
          <a href='/'>
            <div className={style.logo}>
              <img src="../../../public/logo.png"/>
            </div>
          </a>
        </div>
        <div className={[style.profileBox, style.anypogers].join(" ")}>
          <div className={style.profileContent}>
            <div className={style.userBox}>
              <div className={style.aboutUser}>
                <h1>Enzo Gnutzmann</h1>
                <span>"Love with your heart and use your head for everything else"</span>
              </div>
              <div className={style.profileImgBox}>
                <img src="https://github.com/anypogers.png"/>
              </div>
            </div>
            <div className={style.userContribution}>
              <h2>Responsible for the backend</h2>
            </div>
            <div className={style.userBox}>
              <div className={style.profileImgBox}>
                <img src="https://github.com/anypogers.png"/>
              </div>
              <div className={style.aboutUser}>
                <h1>Anypogers</h1>
                <span>"To be told how to live is to not live"</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}