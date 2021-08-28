import React from "react";
import { View } from "react-native";

type Props={
    children:React.ReactNode
}

const Astroidcard = ({children}:Props)=>{
    return(
        <View>
            {children}
        </View>
    )
}

export default Astroidcard