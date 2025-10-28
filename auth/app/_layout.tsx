import { Stack } from 'expo-router';
import 'react-native-reanimated';


export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {


  return (
      <Stack screenOptions={{headerShown:false}}>
        <Stack.Screen name="index" options={{ headerTitle: 'Home' }} />
        <Stack.Screen name="login" options={{ headerTitle: 'Login' }} />
        <Stack.Screen name="signup" options={{ headerTitle: 'Signup' }} />

        </Stack>
  );
}
