import { Button, Text, View} from 'react-native';
import { useAuth } from '../../context/authContext';

export default function HomeScreen() {

  const {logout,user} = useAuth()
  console.log("user creditail",user);
  

  const handleLogout = async ()=>{
    await logout();
  }
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-3xl">Home</Text>
      <Button className="rounded" title='Sign Out' onPress={handleLogout}/>
      <Text className="text-3xl">Authenticated user</Text> 
      <Text>{user.username}</Text>
    </View>
  );
}