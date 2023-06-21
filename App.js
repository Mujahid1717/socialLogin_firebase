import { StyleSheet, Button, View,TextInput,TouchableOpacity,Text,FlatList } from 'react-native'
import React,{useEffect,useState} from 'react'
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import {exStyle} from './config/styles'
import UserData from './src/screens/UserData'
import UserCustom from './src/components/UserCustom';

const App = () => {
  const users = [
    {
      id:1,
      name:'Mujahid Akhtar',
      email:"mujhaid@gmail.com"
    },
    {
      id:2,
      name:'sardar jalil',
      email:"sardar@gmail.com"
    },
    {
      id:3,
      name:'zeshan',
      email:"zeshan@gmail.com"
    },
    {
      id:4,
      name:'qalab',
      email:"qalab@gmail.com"
    },
  ]
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [display, setDisplay] = useState(false);
  // let name1 = 'peter'
  const [num,setNum] = useState('Tony');

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
      
      <TouchableOpacity style = {exStyle.Btn} onPress={()=>setNum('spiderman')}>
        <Text style={exStyle.BtnText}>Update Data</Text>
      </TouchableOpacity>
      <UserData name={num} age = {29} height = {6}/>
      <FlatList 
        data = {users}
        renderItem={({item})=><UserCustom data = {item}/>
          
        }
      />     
    </View>
  )
}
// const UserCustom = (props) => {
//   const item = props.data
//   return(
//     <View style={styles.box}>
//         <Text style={styles.item}>{item.id}</Text>
//         <Text style={styles.item}>{item.name}</Text>
//         <Text style={styles.item}>{item.email}</Text>
//     </View>
//   )
// }

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
  // box:{
  //   flexDirection:'row',
  //   borderColor:'skyblue',
  //   borderWidth:2,
  //   marginBottom:6,
  // },
  // item:{
  //   fontSize:20,
  //   color:'black',
  //   borderWidth:1,
  //   textAlignVertical:'center',
  //   textAlign:'center'
  // }
  
  
});
export default App;