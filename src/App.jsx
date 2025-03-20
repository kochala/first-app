import React, {useContext} from 'react';
import  Routers from  "./routers/Routers";
import './App.css'
import {IsDarkContext} from "@/context/IsDarkProvider"
const App = () => {
  const {isDark} = useContext(IsDarkContext)

  return (
    <div className={isDark?"app dark" : "app"}>
      <Routers/>
    </div>
    
  );
};
export default App;


