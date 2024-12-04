import { Image,View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../constants'

const Profile = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <Text>Profile</Text>
      <Image source=""/>
    </SafeAreaView>
  )
}

export default Profile