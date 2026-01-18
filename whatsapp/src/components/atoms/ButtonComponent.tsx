import { Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { moderateScale, verticalScale } from 'react-native-size-matters'

const ButtonComponent = ({ title ,style,textStyle,onPress}:{title: string, style?: object, textStyle?: object, onPress?: () => void}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} style={[styles.button_container, style]} onPress={onPress}>
      <Text style={[styles.button_text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    button_container:{
    backgroundColor: "#00A884",
    width: "100%",
    paddingVertical: verticalScale(12),
    paddingHorizontal: verticalScale(10),
    borderRadius: moderateScale(4),
    alignItems: "center",
    justifyContent: "center"
    },
    button_text:{
      color: "white",
      fontSize: moderateScale(14),
      fontWeight: "bold"
    }
})
export default ButtonComponent