import { BrowserRouter as Router, Routes, Route } from "react-router";
import { Control } from './Control/Control';
import { Global } from './Global/Global';
import { Tasks } from './Tasks/Tasks';
import { Devs } from "./Devs/Devs";
import { NotFound } from './NotFound/NotFound';


export function Pages() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Tasks />}/>
          <Route path="/global" element={<Global />}/>
          <Route path="/control" element={<Control />}/>
          <Route path="/devs" element={<Devs />}/>
          <Route path="/*" element={<NotFound />}/>
        </Routes>
      </Router>
  )
}