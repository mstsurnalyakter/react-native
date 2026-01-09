import { Redirect } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import React, { useEffect, useState } from 'react';


SplashScreen.preventAutoHideAsync();
const RootNavigation = () => {
 const [isLogin, SetIsLogin] = useState(false)

  useEffect(() => {
    SplashScreen.hideAsync()
  }, [])
  return (
    <>
         {
          isLogin ? <Redirect href="/(main)/" />
           : <Redirect href="/(auth)/" />
         }
    </>
  )
}

export default RootNavigation