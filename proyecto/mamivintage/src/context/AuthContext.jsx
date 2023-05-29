import { createContext, useState } from "react";

export const AuthContext = createContext()

const mock = {
    email: 'shotaoouji@gmail.com',
    password: 'abcd1234'
}

export const AuthProvider = ({children}) => {

    const [user, setUser] = useState({
        email: null,
        logged: false
    })
    console.log(user) 

    const login = (values) => {
        if((values.email === mock.email) && (values.password === mock.password)){
            setUser({
                email: values.email,
                logged: true
            })
        }  
    }  

    return (
        <AuthContext.Provider value={{
            user,
            login
        }}>
             {children}
        </AuthContext.Provider>  
    )
}