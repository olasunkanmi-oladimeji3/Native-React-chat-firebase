import { View, Text,Platform } from 'react-native'
import React from 'react'
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Image } from 'expo-image';
import { blurhash } from '../utilis/common';
import { useAuth } from '../context/authContext';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';


const ios = Platform.OS =='ios';

export default function HomeHeader() {
    const {user,logout} = useAuth();
    
    const {top} = useSafeAreaInsets();

    const handleLogout = async ()=>{
      await logout();
    }
  return (
    <View style={{paddingTop: ios? top:top+20,backgroundColor:"blue",flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 20,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 4,elevation: 5,paddingBottom: hp(2),
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,}} className="flex-row justify-between px-5 bg-indigo-500 pb-6 rounded-b-3xl shadow">
      <View>
        <Text style={{fontSize:hp(3)}} className="font-bold text-white">Chats</Text>
      </View>
      <View > 
          <Menu>
          <MenuTrigger >
          <Image
          style={{height:hp(4.3),aspectRatio:1,borderRadius:100}}
          source={user?.profileUrl}
          placeholder={{blurhash }}
          transition={500}
        />
          </MenuTrigger>
          <MenuOptions>
            <MenuOption onSelect={() => alert(`Save`)} text='Profile' />
              <View className='p-[1px] w-full bg-neutral-200' />
            <MenuOption onSelect={() => handleLogout()} >
              <Text style={{color: 'red'}}>Log Out</Text>
            </MenuOption>
           
          </MenuOptions>
        </Menu>
       
      </View>
    </View>
  )
}
