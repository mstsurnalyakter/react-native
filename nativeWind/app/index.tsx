import { Text, View } from "react-native";
import { useFonts, Poppins_700Bold_Italic, Poppins_300Light_Italic } from "@expo-google-fonts/poppins"
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';

SplashScreen.preventAutoHideAsync();


export default function Home() {
  const [loaded, error] = useFonts({
    Poppins_700Bold_Italic,
    Poppins_300Light_Italic
  })
  console.log("Font loaded:", loaded);
  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);



  return (
    <View
      className="flex-1 items-center justify-center bg-white"
    >
      <Text
        style={{
          fontFamily: "Poppins_700Bold_Italic",
          fontSize: 24,
          marginBottom: 12
        }}
      >Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}
