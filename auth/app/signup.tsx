import { View, Text } from 'react-native'
import React from 'react'
import MyButton from '@/components/MyButton';
import { useRouter } from 'expo-router';
const Signup = () => {
  const router = useRouter();
    const handlePress = () => {
        console.log('Button Pressed!');
        router.push('/');
    }
  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
     <MyButton title='Home' onPress={handlePress} />
    </View>
  )
}

export default Signup;