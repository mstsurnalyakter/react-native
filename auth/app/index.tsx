import React from 'react'
import MyButton from '@/components/MyButton'
import { useRouter } from 'expo-router'
import { View, Text } from 'react-native'

const Index = () => {
    const router = useRouter();
    const handlePress = () => {
        console.log('Button Pressed!');
        router.push('/login');
    }
  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
     <MyButton title='Login' onPress={handlePress} />
    </View>
  )
}

export default Index