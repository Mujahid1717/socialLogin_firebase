import { StyleSheet, Button, View,TextInput,TouchableOpacity,Text } from 'react-native'
import React,{useEffect,useState} from 'react'
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import {exStyle} from './config/styles'

const App = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [display, setDisplay] = useState(false);

 const clearData = () => {
    setDisplay(false)
    setName('');
    setEmail('');
    setPassword('');
 }
  // useEffect(()=>{
  //   GoogleSignin.configure();
  // },[])

  // const googleLogIn = async () => {
  //   try {
  //     await GoogleSignin.hasPlayServices();
  //     const userInfo = await GoogleSignin.signIn();
  //     console.log('userinfooo',userInfo)
  //   } catch (error) {
  //     if (error.code === statusCodes.SIGN_IN_CANCELLED) {
  //       console.log(error)
  //       // user cancelled the login flow
  //     } else if (error.code === statusCodes.IN_PROGRESS) {
  //       console.log(error)
  //       // operation (e.g. sign in) is in progress already
  //     } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
  //       console.log(error)
  //       // play services not available or outdated
  //     } else {
  //       // some other error happened
  //       console.log(error)
  //     }
  //   }
  // };
  return (
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
      <Button  title = 'Google Login' onPress={()=>{}}/>
      <TextInput 
      style={styles.inputText} 
      placeholder = "Enter Name"
      value = {name}
      onChangeText = {(text)=>setName(text)}
      />
      <TextInput 
      style={styles.inputText} 
      placeholder = "Enter Email"
      value = {email}
      onChangeText = {(text)=>setEmail(text)}
      />
      <TextInput 
      style={styles.inputText} 
      placeholder = "Enter Password"
      secureTextEntry = {true}
      value = {password}
      onChangeText = {(text)=>setPassword(text)}
      />
      <TouchableOpacity style = {exStyle.Btn} onPress={()=>setDisplay(true)}>
        <Text style={exStyle.BtnText}>Show Data</Text>
      </TouchableOpacity>

      <TouchableOpacity style = {exStyle.Btn} onPress={()=>{clearData()}}>
        <Text style={exStyle.BtnText}>Clear Data</Text>
      </TouchableOpacity>
      <View>
        {
          display?
          <View>
            <Text style = {{fontSize:18}}>Name:{name}</Text>
            <Text style = {{fontSize:18}}>Email:{email}</Text>
            <Text style = {{fontSize:18}}>Password:{password}</Text>
          </View>
          :null
        }
      </View>
      
    </View>
  )
}

const styles = StyleSheet.create({
  inputText:{
    borderColor:'skyblue',
    borderWidth:2,
    width:"80%",
    height:55,
    marginTop:20,
    paddingHorizontal:15,
    fontSize:18,
    borderRadius:20
  },
  
  
});
export default App;