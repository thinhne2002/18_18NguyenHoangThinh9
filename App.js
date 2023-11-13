import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Screen1 from './Screen/Screen1.js';
import Screen2 from './Screen/Screen2.js';
import Screen3 from './Screen/Screen3.js';
import Screen4 from './Screen/Screen4.js';
import Screen5 from './Screen/Screen5.js';


let Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Screen1} options={{headerShown:false}} />
        <Stack.Screen name='Coffee Shop List' component={Screen2} options={{headerShown:false}} />
        <Stack.Screen name='Menu' component={Screen3} options={{headerShown:false}} />
        <Stack.Screen name='Pay' component={Screen4} options={{headerShown:false}} />
        <Stack.Screen name='Finish' component={Screen5} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
