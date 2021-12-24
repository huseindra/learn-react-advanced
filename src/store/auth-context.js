import React, { useState } from 'react'
import { useEffect } from 'react/cjs/react.development';


const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogout: () => {},
    onLogin: (email, password) => {}
})

export const AuthContextProvider = (props) =>{
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() =>{
        const userLoggedInformation = localStorage.getItem('isLoggedIn')
        if(userLoggedInformation === '1'){
          setIsLoggedIn(true)
        }
      }, [])
 
    const logoutHandler = () => {
        localStorage.removeItem('isLoggedIn')
        setIsLoggedIn(false)
    }

    const loginHandler = () => {
        localStorage.setItem('isLoggedIn', '1')
        setIsLoggedIn(true)
        
    }

    return(
        <AuthContext.Provider value={{
            isLoggedIn:isLoggedIn,
            onLogout: logoutHandler,
            onLogin: loginHandler
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext