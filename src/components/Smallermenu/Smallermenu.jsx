import style from "./Smallermenu.module.css"
export function Smallermenu({ active })
{ 

    return(
        
        <>
        <div className={style.Menu}>
            <button className={style.button}><a className={` ${ style.A} ${ (active == "tasks" ? style.active : style.inactive)}`}>Call</a></button>
            <button className={style.button1}><a className={active == "log" ? style.active : style.inactive}>Log</a></button>
            <button className={style.button2}><a className={active == "Steps" ? style.active : style.inactive}>Steps</a></button>
            <button className={style.button3}><a className={active == "threads" ? style.active : style.inactive}>Threads</a></button>
            <button className={style.button4}><a className={active == "autocalls" ? style.active : style.inactive}>Auto-Calls</a></button>
        </div>
        <div className={style.screen}></div>
        </>
    );
}