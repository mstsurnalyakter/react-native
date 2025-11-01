import { Image, TextInput, View } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router';
import MyButton from '@/components/MyButton';

const Login = () => {
  const router = useRouter();
  const handlePress = () => {
    console.log('Button Pressed!');
    router.push('/signup');
  }
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image source={require('@/assets/images/icon.png')} style={{
        width: "100%",
        height: 400
      }} resizeMode='cover' />
      <View style={{
        padding:20,
        gap:10
      }}>
        <TextInput style={{
          borderWidth: 1,
          height: 30,
          paddingHorizontal: 5,
          borderRadius:10

        }} placeholder='Enter you email' />
        <TextInput style={{
          borderWidth: 1,
          height: 30,
          paddingHorizontal: 5,
          borderRadius:10

        }} 
        placeholder='Enter you password' 
        onChangeText={e=>console.log(e)}
         />
        <TextInput style={{
          borderWidth: 1,
          height: 30,
          paddingHorizontal: 5,
          borderRadius:10

        }} placeholder='Enter you email' />
        <MyButton title='Signup' onPress={handlePress} />
      </View>

    </View>
  )
}

export default Login;