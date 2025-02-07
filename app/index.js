import { Link } from "expo-router";
import {ActivityIndicator, Text, View } from "react-native";
import "../global.css";

export default function SplashScreen (){
    return (
       <View className="flex-1 justify-center items-center">
        <Text>welcome  splash</Text>
       <ActivityIndicator size={"large"} color={"green"} />
        {/* <Link href="/about" className="btn bg-blue border-o rounded btn-lg">About</Link> */}
       </View>
    )
}