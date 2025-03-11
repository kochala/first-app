import React, {createContext, useState} from 'react'


export const IsDarkContext = createContext();

const IsDarkProvider = ({children}) => {
    const [isDark, setIsDark] = useState(false)

  return (
    <IsDarkContext.Provider value={{isDark, setIsDark}}>
        {children}
    </IsDarkContext.Provider>
  )
}

export default IsDarkProvider