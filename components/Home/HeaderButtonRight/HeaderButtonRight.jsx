import { View, Text } from 'react-native'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function HeaderButtonRight() {
  return (
    <View>
      <View style={{position: 'relative'}}>
        <FontAwesome size={25} name='bell' color="white" />
        <View style={{position: 'absolute', height: 10, width: 10, backgroundColor: '#009CC1', borderRadius: 50, right: 0, top: 2}}></View>
      </View>
    </View>
  )
}