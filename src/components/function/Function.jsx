import style from "./function.module.css"

let exemploValores=[]

async function loadIntents(){


fetch(`http://10.68.20.120:3000/api/intents`)
  .then(response => {
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  exemploValores = response.json(); // or .text() for plain text
})
.catch(err => {
  console.log(err)
})

}

export function Function() {
  loadIntents()

  return (
    <>
       <div className={style.scrollbar}>
            
        </div> 
      <div className={style.fbg}>
        <div className={style.function}>
          <ul className={style.menu}>

            {
              exemploValores.map((value) => {
                return (

                  <li className={style.li}>
                    <button onClick={() => {console.log("Clicou!")}}className={style.button}>
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