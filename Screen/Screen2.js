import { NavigationContainer, useNavigation, useRoute } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

var data = [];
var url = 'https://65462ad3fe036a2fa955498e.mockapi.io/Cafe'
export default function App() {
  var nav = useNavigation();
  var rou = useRoute();
  var [data, setData] = useState([]);
  
  var fc = ()=> {
    fetch(url)
      .then(response => response.json())
      .then(json => {
        data = json,
        setData(data)
      });
  }
  useEffect(fc, []);
  return (
    <View style={{flex:1,backgroundColor:'#F3F4F6'}}>
      <View style={{height:50,flexDirection:'row',alignItems:'center'}}>
        <Pressable onPress={()=>nav.navigate('Home')} style={{marginLeft:18,width:44,height:44,alignItems:'center', justifyContent:'center'}}>
          <Image source={require('../assets/Back.png')} style={{width:20,height:20,resizeMode:'contain'}} />
        </Pressable>
        <Text style={{marginLeft:14,width:178,height:36,color: '#171A1F', fontSize: 24, fontFamily: 'Arial', fontWeight: '700', lineHeight: 36, wordWrap: 'break-word'}}>Shops Near Me</Text>
        <Image source={require('../assets/search.png')} style={{marginLeft:62,width:24,height:24,resizeMode:'contain'}} />
      </View>
      {data.map((item,index)=>{
        return(
          <View style={{borderRadius:6,marginLeft:22,marginTop:19,width:347,height:200,backgroundColor:'#D9D9D9'}}>
            <Pressable key={item} onPress={ item?.status === 'Accepting Orders' ? ()=>nav.navigate('Menu',{namecoffeeshop: item.name}) : ()=>console.log('Quán Đóng Cửa') }>
              <Image source={{uri:item.image}} style={{width:347,height:117,borderRadius:6}} />
            </Pressable>
            <View style={{marginTop:7,flexDirection:'row',width:347,height:30,alignItems:'center'}}>
              <Image source={require(item?.status == 'Accepting Orders' ? '../assets/open.png' : '../assets/close.png')} style={{width:19,height:19,marginLeft:13,resizeMode:'contain'}}/>
              <Text style={{marginRight:17,width:140,height:22, color: item?.status == 'Accepting Orders' ? '#1DD75B' : '#DE3B40', fontSize: 14, fontFamily: 'Arial', fontWeight: '400', lineHeight: 22, wordWrap: 'break-word'}}>
                {item.status}</Text>
              <Image source={require('../assets/time.png')} style={{width:18,height:18,marginRight:5,resizeMode:'contain'}}/>
              <Text style={{width:100,marginRight:10,height:22, color: '#DE3B40', fontSize: 14, fontFamily: 'Arial', fontWeight: '400', lineHeight: 22, wordWrap: 'break-word'}}>
                {item.time}</Text>
              <Image source={require('../assets/address.png')} style={{width:18,height:18,resizeMode:'contain'}} />
            </View>
            <Text style={{marginLeft:7,width:271,height:26,color: '#171A1F', fontSize: 16, fontFamily: 'Arial', fontWeight: '700', lineHeight: 26, wordWrap: 'break-word'}}>
              {item.name}</Text>
            <Text style={{marginLeft:7,width:91,height:22,opacity: 0.62, color: '#171A1F', fontSize: 14, fontFamily: 'Arial', fontWeight: '400', lineHeight: 22, wordWrap: 'break-word'}}>
              {item.address}
            </Text>
          </View>
        )
      })}
    </View>
  );
}
