import { StyleSheet, Text,  TouchableOpacity } from 'react-native'


type MyButtonProps = {
  title: string;
    onPress?: () => void;
};

const MyButton = ({ title,onPress }: MyButtonProps) => {
  return (
        <TouchableOpacity activeOpacity={0.4}  onPress={onPress} style={styles.button}>
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>




    //  <TouchableOpacity activeOpacity={0.4}  onPress={() => alert('Button Pressed!')} style={{backgroundColor: 'purple', padding: 10, borderRadius: 5}}>
    //     <Text style={{color: 'white'}}>Press Me</Text>
    //   </TouchableOpacity>
    // <View>
    //   <Button title="Press Me" onPress={() => alert('Button Pressed!')} /> 
     
    // </View>
  )
}
const styles = StyleSheet.create({
  button: {
    backgroundColor: 'purple',
    padding: 10,
    borderRadius: 5,
    alignItems:'center'
  },
  buttonText: {
    color: 'white',
  },
})

export default MyButton