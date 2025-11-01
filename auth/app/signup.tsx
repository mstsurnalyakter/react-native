// import { View, Image, TextInput, ScrollView } from 'react-native'
// import React from 'react'
// import MyButton from '@/components/MyButton';
// import { useRouter } from 'expo-router';
// const Signup = () => {
//   const router = useRouter();
//   const [value, setValue] = React.useState({
//     name: '',
//     email: '',
//     password: '',
//     confirmPassword: ''
//   });
//   const handlePress = () => {
//    console.log(value);
//   }
//   return (
//    <ScrollView showsVerticalScrollIndicator={false}>
//      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Image source={require('@/assets/images/icon.png')} style={{
//         width: "100%",
//         height: 400
//       }} resizeMode='cover' />
//       <View style={{
//         padding: 20,
//         gap: 10
//       }}>
//         <TextInput style={{
//           borderWidth: 1,
//           height: 30,
//           paddingHorizontal: 5,
//           borderRadius: 10

//         }}
//           placeholder='Enter you name'
//           onChangeText={e => setValue({ ...value, name: e })}
//         />
//         <TextInput style={{
//           borderWidth: 1,
//           height: 30,
//           paddingHorizontal: 5,
//           borderRadius: 10

//         }}
//           placeholder='Enter you email'
//           onChangeText={e => setValue({...value,email:e})}
//         />
//         <TextInput style={{
//           borderWidth: 1,
//           height: 30,
//           paddingHorizontal: 5,
//           borderRadius: 10

//         }}
//           placeholder='Enter you password'
//           onChangeText={e => setValue({...value,password:e})}
//         />
//         <TextInput style={{
//           borderWidth: 1,
//           height: 30,
//           paddingHorizontal: 5,
//           borderRadius: 10

//         }}
//           placeholder='Enter you confirm password'
//           onChangeText={e => setValue({...value, confirmPassword:e})}
//         />
//         <MyButton title='Signup' onPress={handlePress} />
//       </View>

//     </View>
//    </ScrollView>
//   )
// }

// export default Signup;

// import { View, Text, ScrollView } from 'react-native'
// import React from 'react'
// // import { ScrollView } from 'react-native-reanimated/lib/typescript/Animated'

// const Signup = () => {
//   return (
//     <ScrollView horizontal contentContainerStyle={{
//       marginTop:60,
//       paddingHorizontal:10
//       }}>
//       {
//         [1, 2, 3, 4, 5,6,7,8,9,10,1, 2, 3, 4, 5,6,7,8,9,10].map((item) => (

//           <View key={item} style={{
//             width: 100,
//             height: 100,
//             backgroundColor: 'red',
//             marginBottom: 10,
//             marginRight:10
//           }} />
//         ))
//       }

//     </ScrollView>
//   )
// }

// export default Signup


// FlatLis
import { View, Text, FlatList } from 'react-native'
import React from 'react'

const SignUp = () => {
  return (
    <View>
      <FlatList
        contentContainerStyle={{
          marginTop: 50,
          marginHorizontal: 20
        }}
        numColumns={3}
        ListHeaderComponent={
          <View style={{
            width: "100%",
            height: 200,
            backgroundColor: "green"
          }}></View>
        }
        ListFooterComponent={
          <View style={{
            width: "100%",
            height: 200,
            backgroundColor: "green"
          }}></View>
        }
        showsHorizontalScrollIndicator={false}
        horizontal
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
        renderItem={({ item }) => (
          <View style={{
            width: 100,
            height: 100,
            backgroundColor: 'red',
            marginBottom: 10,
            marginRight: 10,
            alignItems: 'center',
            justifyContent: 'center',

          }} >
            <Text style={{
              color: 'white'
            }}>{item}</Text>
          </View>
        )} />

    </View>
  )
}

export default SignUp