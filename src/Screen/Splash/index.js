import React from "react"
import {ActivityIndicator, Text, View} from "react-native"

class Splash extends React.Component{
    render (){
        setTimeout(() => {
            this.props.navigation.replace("Home")
        }, 1000);
        return(
            <View style={{flex:1,justifyContent:"center", alignItems:"center"}}>
                <Text style={{fontSize:30,color:"#444444"}}>Aplikasi Dzikir</Text>
                <ActivityIndicator size="large" color="#148025"/>
            </View>
        )
    }
}
export default Splash