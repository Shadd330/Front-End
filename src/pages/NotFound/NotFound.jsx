import style from "./NotFound.module.css"
export function NotFound(){
  return (
    <>
    <div className={style.notfoundBody}>
      <div className={style.bg404}>
        <h1 className={style.text}>404 - Page Not Found</h1>
      </div>
    </div>
    </>
  )
}