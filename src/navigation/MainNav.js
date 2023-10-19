import { useSelector } from "react-redux"
import { NavigationContainer } from "@react-navigation/native"

import TabNav from "./TabNav.js"
import AuthNav from "./AuthNav.js"

import { useState, useEffect } from "react"
import { setIdToken, setUser } from "../redux/slices/authSlice.js"
import { useDispatch } from "react-redux"
import AsyncStorage from '@react-native-async-storage/async-storage'

const MainNav = () => {
    const dispatch = useDispatch()
    const [checkedUser, setCheckedUser] = useState(false)
    const user = useSelector((state) => state.authSlice.user);
    

    useEffect(() => {
        const checkUser = async () => {
            try {
                const sessionInfo = await AsyncStorage.getItem("savedSession")
                if (sessionInfo){
                    let userInfo = JSON.parse(sessionInfo).email
                    let idTokenInfo = JSON.parse(sessionInfo).idToken
                    dispatch(setUser(userInfo))
                    dispatch(setIdToken(idTokenInfo))
                    setCheckedUser(true)
                } else {
                    setCheckedUser(false)
                }
            } catch (err) {
                console.log(err);
            }
        } 
        checkUser()
    }, [user])
    

    return (
        <NavigationContainer>
            {checkedUser ? <TabNav /> : <AuthNav />}
        </NavigationContainer>
    )
}

export default MainNav