import React, {createContext, useState} from "react";
import { useNavigate } from "react-router-dom";

export const GlobalContext = createContext();

const GlobalProvider = (props)=>{
  return(
    <GlobalContext.Provider value={null}>
      {props.children}
    </GlobalContext.Provider>
  )
}