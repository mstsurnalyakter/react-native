import { useState } from 'react';
import { Button, Modal, StyleSheet, View } from 'react-native';


export default function HomeScreen() {
  const [visible, setVisible] = useState(false);
  return (
    <View style={styles.container}>
      <Button onPress={() => setVisible(true)} title="Open Modal" />
        {/* animation type --> fade, slide */}
      <Modal visible={visible} animationType='slide' transparent >
        {/* <View style={{
          flex: 1,
          justifyContent: 'flex-end',
          backgroundColor: 'transparent'
        }}> */}
          <View style={{
            backgroundColor: "blue",
            height: 300,
            position:'absolute',
            bottom:0,
            width:200

          }}>
            <Button title='Close Modal' onPress={()=>setVisible(false)} />

          </View>

        {/* </View> */}
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})