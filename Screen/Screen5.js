import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

export default function App() {
    var nav = useNavigation();
    return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <Text>ĐÃ THANH TOÁN THÀNH CÔNG</Text>
        <Pressable onPress={()=>nav.navigate('Home')} style={{marginTop:240,width:350,height:44,paddingTop: 9, paddingBottom: 9, background: '#EFB034', borderRadius: 6, overflow: 'hidden', justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
          <Text style={{color: 'white', fontSize: 16, fontFamily: 'Inter', fontWeight: '400', lineHeight: 26, wordWrap: 'break-word'}}>
            Về lại Trang Chủ</Text>
        </Pressable>
    </View>
  );
}
