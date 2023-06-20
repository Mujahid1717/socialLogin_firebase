import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const UserData = ({name,age,height}) => {
  return (
    <View>
      <Text>Name:{name}</Text>
      <Text>Age:{age}</Text>
      <Text>Age:{height}</Text>
    </View>
  )
}

export default UserData

const styles = StyleSheet.create({})