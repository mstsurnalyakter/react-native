import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import imagePath from '@/src/constants/imagePath'
import ButtonComponent from '@/src/components/atoms/ButtonComponent'
import { router } from 'expo-router'

const TermAgree = () => {
  const oneAgreeHandler = () => {
    router.push('/(auth)/login')
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.welcome_text}  >Welcome to Whatsapp</Text>
        <Image resizeMode='contain' style={styles.image_style} source={imagePath.welcome} />
        <Text style={styles.description_text }>
          Read our <Text style={styles.link_text}>Privacy Policy.</Text> Tap “Agree and continue” to accept the <Text style={styles.link_text}>Terms of Service.</Text>
        </Text>
        <View style={{width:moderateScale(300), marginTop: verticalScale(10)}}>
          <ButtonComponent title="AGREE AND CONTINUE" onPress={oneAgreeHandler} />
        </View>

      </View>
      <View style={styles.footer}>
        <Text style={styles.from_text}>From</Text>
        <Text style={styles.facebook_text}>Facebook</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: verticalScale(84),
    paddingHorizontal: scale(30)
  },
  header: {
    alignItems: "center",
    gap: verticalScale(30)

  },
  footer: {
    alignItems: "center",
    height: verticalScale(80),
    justifyContent: "flex-end"
  },
  from_text: {
    fontSize: moderateScale(12),
    color: "#867373"
  },
  facebook_text: {
    fontSize: moderateScale(15),
    color: "#000000",
    textTransform: "uppercase"
  },
  welcome_text: {
    fontSize: moderateScale(30),
    fontWeight: "bold",
    color: 'black'
  },
  image_style: {
    width: moderateScale(250),
    height: moderateScale(250),
    borderRadius: moderateScale(250),
  },
  description_text: {
    textAlign: "center",
    fontSize: moderateScale(13),
    color: "black"
  },
  link_text:{
    color: "#0000FF"
  }

})

export default TermAgree