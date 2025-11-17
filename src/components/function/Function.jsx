import style from "./function.module.css"

export function Function() {

  const exemploValores = [
    {
      'name': 'Get Time',
      'intention': 'getTime'
    },
    {
      'name' : 'Open Google',
      'intention' : 'openGoogle'
    }
  ]

  return (
    <>


       <div className={style.scrollbar}>
            
        </div> 
      <div className={style.fbg}>
        <div className={style.function}>
          <ul className={style.menu}>

            {
              exemploValores.map((value, i) => {
                return (

                  <li className={style.li}>
                    <button className={style.button}>
                      {
                        value.name
                      }
                    </button>
                  </li>

                );
              })
            }
          </ul>
        </div>
      </div>

    </>
  )

}