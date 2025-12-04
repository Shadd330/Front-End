import { useEffect, useState } from "react";
import { Header } from "../../components/header/Header";
import style from "./Tasks.module.css"

export function Tasks(){

  const [intentArguments, setIntentArguments] = useState("");

  const [selectedIntent, setSelectedIntent] = useState({});

  const [intentsList, setIntentsList] = useState([]);
  
  if (intentsList[0] == undefined) {
    loadIntents()
  }
  
  async function loadIntents() {
    try {
      const response = await fetch("/api/intents");

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      
      const intentsData = data.intents;

      intentsData.map((value) => {
        value.formatedName = formatIntentName(value.name)
      });

      setIntentsList(intentsData);
      if (data.intents != null) {
        setSelectedIntent(data.intents[0])
      }
    } catch (err) {
      console.log(err);
    }
  }

  return(
    <>

    <Header active = 'tasks'/>
    <section>
      <div className={style.intentList}>
        <ul className={style.menu}>
          {intentsList.map((value) => (
            <li key={value.name} className={style.li}>
              <button
                onClick={() => {
                  setSelectedIntent(value)
                  console.log("Selected Intent:", value.name)
                }}
                className={style.intentSelectButton}>
                {value.formatedName}
              </button>
            </li>
          ))}
        </ul> 
      </div>
      <div className={style.intentInfo}>
        {
          (() => {
            if (selectedIntent.name == undefined) {
              return (
                <div className={style.noIntentSelectedBox}>
                  <h1 className={style.noIntentSelectedText}>No intents selected</h1>
                </div>
              );
            } else {
              return (
                <div className={style.intentInfoBox}>
                  <div className={style.intentInfoTitle}>
                    <h1>{selectedIntent.formatedName}</h1>
                  </div>
                  <div className={style.intentInfoArgs}>
                    <h2>Args:</h2>
                    <textarea
                      className={style.intentInfoArgsBody}
                      value={intentArguments}
                      onChange={Event => setIntentArguments(Event.target.value)}
                    ></textarea>
                  </div>
                  <div className={style.intentInfoRun}>
                    <button
                      onClick={() => {
                        const data ={
                          "name": selectedIntent.name, 
                          "args": JSON.parse(intentArguments)
                        } 
                        
                        console.log("Trying Fetch /api/run-intent with: ", data)
                        fetch("/api/run-intent", {
                          method: 'POST',
                          headers: {
                            'Accept': 'application/json',
                            'Content-type': 'application/json'
                          },
                          body: JSON.stringify(data)
                        })
                      }}
                      className={style.runIntentButton}
                    >
                      Run Intent
                    </button>
                  </div>
                </div>
              );
            }
          })()
        }
      </div>
    </section>
    </>
  )
}

function formatIntentName(name) {
  if (name != null) {
    return name
      .split('_')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }
}