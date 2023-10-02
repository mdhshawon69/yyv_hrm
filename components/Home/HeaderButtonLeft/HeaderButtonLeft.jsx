import { View, Text, Image } from 'react-native'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Octicons from 'react-native-vector-icons/Octicons';

export default function HeaderButtonLeft() {
  return (
    <View>
      <Octicons name="three-bars" size={30} color="#fff" />
    </View>
  )
}