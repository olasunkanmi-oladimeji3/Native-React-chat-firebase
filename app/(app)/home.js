import { Button, Text, View} from 'react-native';
import { useAuth } from '../../context/authContext';
import { useState, useEffect } from 'react';
import Loading from '../../components/loading';
import ChatList from '../../components/chatlist';

export default function HomeScreen() {

  const {user} = useAuth()
  const [users,setusers] = useState([1,2,3])

  useEffect(() => {
    if (user?.uid) {
      getUserList();
    }
  }, [])
  
  const getUserList = async()=>{

  }

  return (
    <View className="flex-1 bg-white">
     
      { users.length >0?(
        <ChatList users={users} />
      ):(
        <Loading />
      )
      
      }
     
     
    </View>
  );
}