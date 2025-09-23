import style from "./Header.module.css"
export function Header({ active })
{
    return(
        <>

            <div className = {style.header}>

               <ul className = {style.menu}>
                <li className={style.pink}>
                    <a className={` ${ style.A} ${ (active == "tasks" ? style.active : style.inactive)}`}>Tasks</a>
                </li>
                <li className={style.purple}>
                    <a className={active == "global" ? style.active : style.inactive}>Global</a>
                </li>
                <li className={style.blue}>
                    <a className={active == "control" ? style.active : style.inactive}>Controls</a>
                </li>
               </ul>

               <div className={style.logo}>
                <img src=""></img>
               </div>

            </div>
        </>
    );
}