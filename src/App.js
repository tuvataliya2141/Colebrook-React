import React from "react";
import router from "./router";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loding from "./component/Loding";


function App() {
  return (
    <div>
      <Loding/>
      <BrowserRouter>
        <Routes>
          {router.map((item, k) => {
            return (<Route key={k}  element={<item.element />}  path={item.path}  exact={item.exact}/> );
          })}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
