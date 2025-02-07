import { Button, Text, View} from 'react-native';
import { useAuth } from '../../context/authContext';

export default function HomeScreen() {

  const {logout,user} = useAuth()
  

  const handleLogout = async ()=>{
    await logout();
  }
  return (
    <View className="flex-1 bg-white">
     
      <Text>ChatList</Text>
     
     
    </View>
  );
}