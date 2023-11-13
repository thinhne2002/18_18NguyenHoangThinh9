import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

export default function App() {
  let nav = useNavigation();
  return (
    <View style={{flex:1,alignItems:'center',backgroundColor:'#DEE1E6'}}>
      <Text style={{marginTop:89,width:272,height:36,color: '#171A1F', fontSize: 24, fontFamily: 'Arial', fontWeight: '700', lineHeight: 36, wordWrap: 'break-word'}}>
        Welcome to Cafe world
      </Text>
      <Image source={require('../assets/Trung Nguyen Legend.png')} style={{marginTop:72,width:190,height:62, borderRadius:7,resizeMode:'contain'}}></Image>
      <Image source={require('../assets/Javasti Cafe.png')} style={{marginTop:61,width:200,height:62,resizeMode:'contain'}}></Image>
      <Image source={require('../assets/Jewel Box Cafe.png')} style={{marginTop:61,width:200,height:62,resizeMode:'contain'}}></Image>
      <Pressable onPress={()=>nav.navigate('Coffee Shop List')} style={{borderRadius: 6,backgroundColor:'#00BDD6',width:312,height:50,marginTop:80,alignItems:'center',justifyContent:'center'}}>
        <Text style={{color: 'white', fontSize: 14, fontFamily: 'Arial', fontWeight: '400', lineHeight: 22, wordWrap: 'break-word'}}>GET STARTED</Text>
      </Pressable>
    </View>
  );
}
