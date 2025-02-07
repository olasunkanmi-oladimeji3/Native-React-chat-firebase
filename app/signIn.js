import { Alert, Image, Pressable, SafeAreaView, Text, TextInput, TouchableOpacity, View} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen'
import {Octicons} from '@expo/vector-icons'
import { useRouter } from 'expo-router';
import { useRef,useState } from 'react';
import Loading from '../components/loading';
import CustomKeyboard from '../components/customeKeyboardView';
import { useAuth } from '../context/authContext';
export default function SignInScreen() {
  const {login} = useAuth()
  const [loading, setloading] = useState(false)
  const router = useRouter();
  const emailRef = useRef("");
  const passwordRef = useRef("")

  const handleLogin = async ()=>{
    if (!emailRef.current || !passwordRef.current ) {
      Alert.alert("Sign In","Please fill all the fields!")
      return;
    }
    setloading(true)
    let response = await login(emailRef.current,passwordRef.current)
    setloading(false)
    if (!response.success) {
      Alert.alert("Sign In",response.msg);
      return;
    }
  }

  return (
    <CustomKeyboard>
      <StatusBar style="dark" />
      <View
        style={{ paddingHorizontal: wp(5), paddingTop: hp(8) }}
        className="flex-1 gap-12"
      >
        <View className="items-center">
          <Image
            style={{ height: hp(25) }}
            resizeMode="contain"
            source={require("../assets/images/sign.png")}
          />
        </View>

        {/* Form container */}
        <View className="gap-10">
          <Text
            style={{ fontSize: hp(3) }}
            className="text-3xl text-center font-bold tracking-wider"
          >
            Sign In
          </Text>
          {/* form Inputs */}
          <View className="gap-4">
            {/* Email Input */}
            <View
              style={{ height: hp(7) }}
              className="flex-row px-4 gap-4 bg-neutral-100 items-center rounded-2xl"
            >
              <Octicons name="mail" color="grey" size={hp(2.7)} />
              <TextInput
                onChangeText={(value) => (emailRef.current = value)}
                style={{ fontSize: hp(2) }}
                className="flex-1 font-semibold text-neutral-700"
                placeholder="Email Address"
                placeholderTextColor={"grey"}
              />
            </View>
            {/* PasswordInput */}
            <View className="gap-3">
              <View
                style={{ height: hp(7) }}
                className="flex-row px-4 gap-4 bg-neutral-100 items-center rounded-2xl"
              >
                <Octicons name="lock" color="grey" size={hp(2.7)} />
                <TextInput
                  onChangeText={(value) => (passwordRef.current = value)}
                  style={{ fontSize: hp(2) }}
                  className="flex-1 font-semibold text-neutral-700"
                  placeholder="Password"
                  secureTextEntry
                  placeholderTextColor={"grey"}
                />
              </View>
              <Text
                style={{ fontSize: hp(1.8) }}
                className="text-right font-neutral-500 font-semibold"
              >
                Forgot Password?
              </Text>
            </View>
            {/* submit Button */}
            <View>
              {loading ? (
                <View className="flex-row justify-center ">
                  <Loading size={hp(15)} />
                </View>
              ) : (
                <TouchableOpacity
                  onPress={handleLogin}
                  style={{ height: hp(6.5) }}
                  className="bg-blue-600 rounded-xl justify-center items-center"
                >
                  <Text
                    style={{ fontSize: hp(2.7) }}
                    className="text-white tracking-wider font-bold"
                  >
                    Sign In
                  </Text>
                </TouchableOpacity>
              )}
            </View>

            {/* Create Account */}
            <View className="flex-row justify-center">
              <Text
                style={{ fontSize: hp(1.8) }}
                className="text-netural-500 font-semibold"
              >
                Don't have an account?
              </Text>
              <Pressable
                onPress={() => {
                  router.push("signUp");
                }}
              >
                <Text
                  style={{ fontSize: hp(1.8) }}
                  className="text-blue-500 font-bold "
                >
                  {" "}
                  Sign UP
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </CustomKeyboard>
  );
}