import { Function } from "../../components/function/Function";
import { Header } from "../../components/header/Header";
import { Smallermenu } from "../../components/Smallermenu/Smallermenu"

export function Tasks(){
  return(
    <>

    <Header active = 'tasks'/>
    <div >
    <Smallermenu/>
    <Function/>
    </div>
    
    </>
  )
}