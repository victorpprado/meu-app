import { View, Image, Dimensions } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {LinearGradient} from ".expo-linear-gradient"
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


export default function Index() {
  const { height, width } = Dimensions.get('window');

  return (
    <View className="flex-1 bg-white">
      <StatusBar style="light" />

      <Image
        source={require('../assets/images/welcome.png')}
        style={{ height: height, width: width, position: 'absolute' }}
        resizeMode="cover" // ou "cover" se preferir
      />
      <linearGradient colors={['transparent', '#18181b']}
      style={{width: wp(100), height: hp(70)}}
      start={{x:0.5, y:0}}
      end={{x:0.5, y:0.8}}
      className='flex justify-end pb-12 space-y-8'
      />
    </View>
  );
}
