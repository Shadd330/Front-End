import style from "./Header.module.css";
export function Header({ active }) {
  return (
    <>
      <div className={style.header}>
        <ul className={style.menu}>
          <li className={style.pink}>
            <a
              href="/"
              className={` ${style.A} ${
                active == "tasks" ? style.active : style.inactive
              }`}
            >
              Tasks
            </a>
          </li>
          <li className={style.purple}>
            <a
              href="/audio"
              className={active == "audio" ? style.active : style.inactive}
            >
              Audio
            </a>
          </li>
          <li className={style.blue}>
            <a
              href="/devs"
              className={active == "devs" ? style.active : style.inactive}
            >
              Devs
            </a>
          </li>
          {
            (() => {
              if (active == "404") {
                return (
                  <li className={style.red}>
                    <a
                      className={style.active}
                    >
                      404
                    </a>
                  </li>
                )
              }
            })()
          }
        </ul>

        <div className={style.logo}>
          <img src="logo_simple.svg"></img>
        </div>
      </div>
    </>
  );
}
