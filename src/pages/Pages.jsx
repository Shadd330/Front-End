import { BrowserRouter as Router, Routes, Route } from "react-router";
import { Audio } from "./Audio/Audio.jsx";
import { Tasks } from "./Tasks/Tasks.jsx";
import { Devs } from "./Devs/Devs.jsx";
import { NotFound } from "./NotFound/NotFound.jsx";

export function Pages() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Tasks />} />
        <Route path="/audio" element={<Audio />} />
        <Route path="/devs" element={<Devs />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
