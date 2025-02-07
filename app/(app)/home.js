import { Text, View} from 'react-native';

export default function HomeScreen() {
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-3xl">Home</Text>
      <Text className="text-3xl">Authenticated user</Text> 
      
    </View>
  );
}