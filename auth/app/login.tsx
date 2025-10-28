import { View } from 'react-native'
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
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
     <MyButton title='Signup' onPress={handlePress} />
    </View>
  )
}

export default Login;