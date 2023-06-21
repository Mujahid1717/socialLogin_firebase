import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const UserCustom = (props) => {
    const item = props.data
    return(
      <View style={styles.box}>
          <Text style={styles.item}>{item.id}</Text>
          <Text style={styles.item}>{item.name}</Text>
          <Text style={styles.item}>{item.email}</Text>
      </View>
    )
}
const styles = StyleSheet.create({
    box:{
        flexDirection:'row',
        borderColor:'skyblue',
        borderWidth:2,
        marginBottom:6,
      },
      item:{
        fontSize:20,
        color:'black',
        borderWidth:1,
        textAlignVertical:'center',
        textAlign:'center'
      }
})
export default UserCustom;