import style from './Home.module.css'
import {Header} from "../../components/header/Header.jsx"
import { Menu } from '../../components/menu/Menu.jsx'
export function Global(){
  return (
    <>
        <Header active = "global" />
        
      <div>  
        <Menu/> 
      </div>
    </>
  )
}
