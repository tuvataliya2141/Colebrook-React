import React from "react";
import router from "./router";
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className="App">
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
