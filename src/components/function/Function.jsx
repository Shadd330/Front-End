import { useEffect, useState } from "react";
import style from "./function.module.css"

//let exemploValores=[]

//async function loadIntents(){
//
//
//fetch("/api/intents")
//  .then(response => {
//    if (!response.ok) {
//     throw new Error(`HTTP error! status: ${response.status}`);
//  }
//
//  exemploValores = response.json(); // or .text() for plain text
//})
//
//.catch(err => {
//  console.log(err)
//})
//
//}

export function Function() {

  // loadIntents()

  const [exemploValores, setExemploValores] = useState([]);

  async function loadIntents() {
    try {
      const response = await fetch("/api/intents");

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setExemploValores(data);

    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    loadIntents();
  }, []);

  return (
    <>
       <div className={style.scrollbar}></div> 
      <div className={style.fbg}>
        <div className={style.function}>
        
    <ul className={style.menu}>
      {exemploValores.map((value) => (
        <li key={value.name} className={style.li}>
          <button
            onClick={() => console.log("Clicou!")}
            className={style.button}>
            {value.name}
          </button>
        </li>
      ))}
    </ul> 
</div>
</div>
</>
  )

}