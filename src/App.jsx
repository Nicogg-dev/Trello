import { Route, Routes } from "react-router-dom";

import { BackLog } from "./journal/BackLog";
import { Add } from "./journal/Add";
import {  Nav } from "./components/Nav";

export function App() {

  return (
    <>
      <Nav />

      <Routes>

        <Route path="/add/*" element={<Add />} />
        <Route path="/*" element={<BackLog />} />

      </Routes>
    </>
  )
}

