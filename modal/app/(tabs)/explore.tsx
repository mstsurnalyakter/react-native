
import { useState } from 'react';
import {  Button, StyleSheet, Text, View } from 'react-native';
import Modal from 'react-native-modal';



export default function TabTwoScreen() {
  const [visible,setVisible] = useState(false)
  return (
   <View style={styles.container}>
    <Button title='Open Model' onPress={()=>setVisible(true)} />
    <Modal isVisible={visible}
     onBackdropPress={()=>setVisible(false)}
     onBackButtonPress={()=>setVisible(false)}
      >
    <View style={{
      backgroundColor:"white",
      height:200
    }}>Hello</View>
    </Modal>
   </View>
  );
}

const styles = StyleSheet.create({
container:{
  flex:1,
  justifyContent:'center',
  alignItems:'center'
}
});
