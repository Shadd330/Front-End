import style from './Devs.module.css';

export function Devs() {
  return (
    <div className={style.bg}>
      <div className={style.pageContainer}>
        <div className={[style.profileBox, style.shadd330].join(" ")}>
          <div className={style.profileContent}>
            
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
            
          </div>
        </div>
      </div>
    </div>
  );
}