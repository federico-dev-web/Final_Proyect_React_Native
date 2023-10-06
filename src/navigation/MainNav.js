import { useSelector } from "react-redux"
import { NavigationContainer } from "@react-navigation/native"

import TabNav from "./TabNav.js"
import AuthNav from "./AuthNav.js"

const MainNav = () => {
    const user = useSelector((state) => state.authSlice.user);

    return (
        <NavigationContainer>
            {user ? <TabNav /> : <AuthNav />}
        </NavigationContainer>
    )
}

export default MainNav