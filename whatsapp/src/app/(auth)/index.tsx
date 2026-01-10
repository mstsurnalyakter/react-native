import { View, Text, StyleSheet, Image, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import imagePath from '@/src/constants/imagePath'
import {  verticalScale, moderateScale } from 'react-native-size-matters';
import { router } from 'expo-router';

const Auth = () => {
  const [isLoading,setIsLoading] = useState(false)

  const navigate_to_welcome = () =>{
    router.push('/(auth)/term_agree')
    setIsLoading(false)
  }
  const loading_timeout = () =>{
    setIsLoading(true)
    setTimeout(navigate_to_welcome, 3000)
  }
  useEffect(()=>{
    setTimeout(loading_timeout, 2000)
    
  },[])


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image src={imagePath.logo} style={styles.logo_style} resizeMode='contain' />
        <Text style={styles.whatsapp_text}>Whatsapp</Text>
      </View>
      <View style={styles.body}></View>
      <View style={styles.fotter}>
        {
          isLoading ? 
          <>
          <ActivityIndicator size={moderateScale(48)}  color={"#0CCC83"} />
            <Text style={styles.loading_text}>Loading...</Text>
          </>
          
          : <>
        <Text style={styles.from_text}>From</Text>
        <Text style={styles.facebook_text}>Facebook</Text>
        </>
        }
      </View>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: "space-between",
    paddingVertical: verticalScale(50),
    backgroundColor: "white"
  },
  header: {},
  body: {
    alignItems:'center',
    gap:verticalScale(10)
  },
  fotter: {
    alignItems: "center",
    height:verticalScale(80),
    justifyContent:"flex-end"
  },
  from_text: {
    fontSize: moderateScale(12),
    color: "#867373"
  },
  facebook_text: {
    fontSize: moderateScale(15),
    color: "#000000"
  },
  logo_style: {
    width: moderateScale(70),
    height: moderateScale(70),
    borderRadius: moderateScale(10)
  },
  whatsapp_text: {
    fontSize: moderateScale(35),
    color: "#000000",
    fontWeight:'bold'
  },
  loading_text:{
    fontSize: moderateScale(20),
    color: "#867373",
        fontWeight:'bold',
        marginTop:verticalScale(15)
  }
})

export default Auth