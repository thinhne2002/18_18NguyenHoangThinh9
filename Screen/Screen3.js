import { NavigationContainer, useNavigation, useRoute } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React,{ useEffect, useState } from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

var data = [];
var drink = [];
var url = 'https://65462ad3fe036a2fa955498e.mockapi.io/Cafe'
export default function App() {
  var nav = useNavigation();
  var [data, setData] = useState([]);
  var [total,setTotal] = useState(0);
  var [quantities, setQuantities] = useState(0);
  var rou = useRoute();
  var fc = ()=> {
    fetch(url)
      .then(response => response.json())
      .then(json => {
        data = json,
        setData(data),
        drink = data[0].Menu
        const initialQuantities = {};
        const initTotal = {};
        drink.forEach((item) => {
          initialQuantities[item.id] = 0;
          initTotal[item.id] = 0;
        });
        setQuantities(initialQuantities);
        setTotal(initTotal);
      });
  }
  useEffect(fc, []);
  
  return (
    <View style={{}}>
      <View style={{height:50,flexDirection:'row',alignItems:'center'}}>
      <Pressable onPress={()=>nav.navigate('Coffee Shop List')} style={{marginLeft:18,width:44,height:44,alignItems:'center', justifyContent:'center'}}>
        <Image source={require('../assets/Back.png')} style={{width:20,height:20,resizeMode:'contain'}} />
      </Pressable>
      <Text style={{marginLeft:14,width:178,height:36,color: '#171A1F', fontSize: 24, fontFamily: 'Arial', fontWeight: '700', lineHeight: 36, wordWrap: 'break-word'}}>DRINKS</Text>
      <Image source={require('../assets/search.png')} style={{marginLeft:62,width:24,height:24,resizeMode:'contain'}} />
      </View>
      <View style={{alignItems:'center'}}>
        <Text style={{textAlign:'center',width:'100%',height:36,color: '#171A1F', fontSize: 15, fontFamily: 'Arial', fontWeight: '700', lineHeight: 36, wordWrap: 'break-word'}}>
          Welcome to {rou?.params?.namecoffeeshop}</Text>
      </View>
      <View style={{alignItems:'center'}}>
      {drink.map((item,index)=>{
        return(
          <View key={item} style={{borderRadius:6,width:350,height:64,flexDirection:'row',marginBottom:16,border: '1px #BCC1CA solid'}}>
            <Image source={{uri:item.img}} style={{width:64,height:64,borderRadius:6}}/>
            <View style={{marginLeft:10,height:64,width:85,justifyContent:'space-between'}}>
              <Text style={{color: '#171A1F', fontSize: 16, fontFamily: 'Inter', fontWeight: '500', lineHeight: 26, wordWrap: 'break-word'}}>
                {item.name}</Text>
              <Text style={{color: '#565E6C', fontSize: 12, fontFamily: 'Inter', fontWeight: '400', lineHeight: 20, wordWrap: 'break-word'}}>
                <Image source={require('../assets/price.png')} style={{width:12,height:12,resizeMode:'center'}}/>
                ${item.price}</Text>
            </View>
            <View style={{marginLeft:95,height:64,width:80,flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
              <Pressable onPress={()=>{setQuantities(...quantities,[item.id] = quantities[item.id] - 1)
                ,setTotal(...total,[item.id] = total[item.id] - item.price)}}>
                <Image source={require('../assets/Minus.png')} style={{width:30,height:30,resizeMode:'contain'}}/>
              </Pressable>
              <Text>{quantities[item.id]}</Text>
              <Pressable onPress={()=>{ setQuantities({ ...quantities, [item.id]: quantities[item.id] + 1 }),setTotal({ ...total, [item.id]: total[item.id] + item.price }) }}>
                <Image source={require('../assets/Plus.png')} style={{width:30,height:30,resizeMode:'contain'}}/>
              </Pressable>
            </View>
          </View>
        )
      })}
      <View style={{flexDirection:'row',width:350,height:40,justifyContent:'space-around'}}>
          <Text>Tổng số Lượng: {Object.values(quantities).reduce((acc, curr) => acc + curr, 0)}</Text>
          <Text>Tổng Tiền: {Object.values(total).reduce((acc, curr) => acc + curr, 0)}</Text>
      </View>
      <Pressable onPress={()=>{
          nav.navigate('Pay',{
          soluong:  Object.values(quantities).reduce((acc, curr) => acc + curr, 0),
          tongtien: Object.values(total).reduce((acc, curr) => acc + curr, 0),
          namecoffeeshop: rou?.params?.namecoffeeshop
      })}} style={{justifyContent:'center',alignItems:'center',width:347,height:44,backgroundColor:'#EFB034',borderRadius:5}}>
        <Text style={{width:98,height:26,color: 'white', fontSize: 16, fontFamily: 'Inter', fontWeight: '400', lineHeight: 26, wordWrap: 'break-word'}}>
          GO TO CART</Text>
      </Pressable>
      </View>
    </View>
  );
}
