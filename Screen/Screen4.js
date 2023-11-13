import { NavigationContainer, useNavigation, useRoute } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

export default function App() {
  var nav = useNavigation();
  var rou = useRoute();
  return (
    <View style={{}}>
      <View style={{height:50,flexDirection:'row',alignItems:'center'}}>
        <Pressable onPress={()=>nav.navigate('Menu')} style={{marginLeft:18,width:44,height:44,alignItems:'center', justifyContent:'center'}}>
          <Image source={require('../assets/Back.png')} style={{width:20,height:20,resizeMode:'contain'}} />
        </Pressable>
        <Text style={{marginLeft:14,width:178,height:36,color: '#171A1F', fontSize: 24, fontFamily: 'Arial', fontWeight: '700', lineHeight: 36, wordWrap: 'break-word'}}>Your Oders</Text>
        <Image source={require('../assets/search.png')} style={{marginLeft:62,width:24,height:24,resizeMode:'contain'}} />
      </View>
      <View style={{alignItems:'center'}}>
        <Text style={{textAlign:'center',width:'100%',height:36,color: '#171A1F', fontSize: 15, fontFamily: 'Arial', fontWeight: '700', lineHeight: 36, wordWrap: 'break-word'}}>
          Welcome to {rou?.params?.namecoffeeshop}</Text>
      </View>
      <View style={{alignItems:'center'}}>
        <View style={{width:347,height:100,backgroundColor:'#00BDD6',borderRadius:6,flexDirection:'row'}}>
          <View style={{width:160,height:100}}>
            <Text style={{marginLeft:13,marginTop:24,color: 'white', fontSize: 16, fontFamily: 'Arial', fontWeight: '700', lineHeight: 26, wordWrap: 'break-word'}}>
              CAFE QUANLITIES</Text>
            <Text style={{marginLeft:13,marginTop:11,color: 'white', fontSize: 16, fontFamily: 'Arial', fontWeight: '700', lineHeight: 26, wordWrap: 'break-word'}}>
              Order</Text>
          </View>
          <View>
            <Text style={{marginLeft:140,marginTop:35,color: 'white', fontSize: 20, fontFamily: 'Inter', fontWeight: '700', lineHeight: 30, wordWrap: 'break-word'}}>
              ${rou?.params?.soluong}</Text>
          </View>
        </View>
        <View style={{marginTop:7,width:347,height:100,backgroundColor:'#8353E2',borderRadius:6,flexDirection:'row'}}>
          <View style={{width:160,height:100}}>
            <Text style={{marginLeft:13,marginTop:24,color: 'white', fontSize: 16, fontFamily: 'Arial', fontWeight: '700', lineHeight: 26, wordWrap: 'break-word'}}>
              CAFE</Text>
            <Text style={{marginLeft:13,marginTop:11,color: 'white', fontSize: 16, fontFamily: 'Arial', fontWeight: '700', lineHeight: 26, wordWrap: 'break-word'}}>
              Order</Text>
          </View>
          <View>
            <Text style={{marginLeft:140,marginTop:35,color: 'white', fontSize: 20, fontFamily: 'Inter', fontWeight: '700', lineHeight: 30, wordWrap: 'break-word'}}>
              ${rou?.params?.tongtien}</Text>
          </View>
        </View>
        <Pressable onPress={()=>nav.navigate('Finish')} style={{marginTop:240,width:350,height:44,paddingTop: 9, paddingBottom: 9, background: '#EFB034', borderRadius: 6, overflow: 'hidden', justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
          <Text style={{color: 'white', fontSize: 16, fontFamily: 'Inter', fontWeight: '400', lineHeight: 26, wordWrap: 'break-word'}}>
            Pay Now</Text>
        </Pressable>
      </View>
    </View>
  );
}
