import { useState, useEffect } from 'react'
import { Navigate } from 'react-router-dom'

import { auth } from '../services/firebaseConnection'
import { onAuthStateChanged } from 'firebase/auth'
import { async } from '@firebase/util'


export default function Private({ children }){
    const [ Loading, setLoading ] = useState(true)
    const [ signed, setSigned ] = useState(false)

    useEffect(() => {
        
        async function checkLogin(){
            const unsub = onAuthStateChanged(auth, (user)=> {
                if(user){
                    const userData = {
                        uid: user.uid,
                        email: user.email
                    };

                    localStorage.setItem("@detailUser", JSON.stringify(userData))
                    setLoading(false) // Mudando estado para false
                    setSigned(true)  // Mudando estado para true
                }else{
                    setSigned(false)
                    setLoading(false)
                }
            })
        }

        checkLogin()

    },[])

    if(Loading){
        return(<div></div>)
    }

    if(!signed){
        return <Navigate to="/login"/>
    }

    return children
}