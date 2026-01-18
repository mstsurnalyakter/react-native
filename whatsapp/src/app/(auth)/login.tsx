import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import ButtonComponent from '@/src/components/atoms/ButtonComponent'

const Login = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.heading_container}>
          <Text style={styles.heading}>Enter your phone number</Text>
          <Text style={styles.description}>
            WhatsApp will need to verify your phone number. <Text style={styles.link_description}> What’s    my number?</Text>
          </Text>
        </View>
        <View style={styles.input_container}></View>
      </View>
      <View style={styles.footer}>
        <ButtonComponent title='Next' style={{paddingHorizaontal:scale(20)}}/>
      </View>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:"space-between",
    paddingVertical:verticalScale(70),
    alignItems:"center"
  },
  header: {
    gap:verticalScale(20),
    paddingHorizontal:scale(20)
  },
  footer: {},
  heading_container: {},
  input_container: {},
  heading: {
    fontSize:moderateScale(20),
    color:'black',
    fontWeight:'bold',
    textAlign:"center"
  },
  description: {
    textAlign:"center",
    fontSize:moderateScale(11),
    fontWeight:'400',
    color:"black"
  },
  link_description: {
    color:"#002AC0"
  }
})

export default Login