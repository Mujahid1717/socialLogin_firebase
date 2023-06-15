import { StyleSheet, Button, View } from 'react-native'
import React,{useEffect} from 'react'
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';

const App = () => {
  useEffect(()=>{
    GoogleSignin.configure();
  },[])

  const googleLogIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log('userinfooo',userInfo)
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log(error)
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log(error)
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log(error)
        // play services not available or outdated
      } else {
        // some other error happened
        console.log(error)
      }
    }
  };
  return (
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
      <Button  title = 'Google Login' onPress={googleLogIn}/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})