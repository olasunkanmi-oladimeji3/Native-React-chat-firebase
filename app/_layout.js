import {useSegments,useRouter, Slot } from "expo-router";
import { useEffect } from "react";
import "../global.css";
import { AuthProvider, useAuth } from "../context/authContext";

const MainLayout =()=>{
    const {isauthenticated} = useAuth();
    const segments = useSegments();
    const router= useRouter();

    useEffect(() => {
        if(typeof !isauthenticated == false)return;
        const inApp = segments[0]=='(app)';
        if(isauthenticated && !inApp){
            router.replace('home')
        } else if(isauthenticated == false){
            router.replace('signIn')
        }

    }, [isauthenticated])
    return <Slot/>
    

}

export default function _layout (){
    return (

      <AuthProvider>
        <MainLayout/>
      </AuthProvider>
 
    )
}