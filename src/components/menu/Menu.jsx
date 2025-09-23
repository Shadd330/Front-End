import style from "./Menu.module.css"
export function Menu({ active })
{ 
    return(
        
        <>
        <div className={style.Menu}>
            <button className={style.button}><a className={` ${ style.A} ${ (active == "tasks" ? style.active : style.inactive)}`}>Active</a></button>
            <button className={style.button1}><a className={active == "Threads" ? style.active : style.inactive}>Threads</a></button>
            <button className={style.button2}><a className={active == "Logs" ? style.active : style.inactive}>Logs</a></button>
            <button className={style.button3}><a className={active == "Stats" ? style.active : style.inactive}>Stats</a></button>
        </div>
        <div className={style.screen}></div>
        </>
    );
}