import { TouchableOpacity, Text} from 'react-native'
import React from 'react'

const CustomButton = ({title,handlePress, containerStyles, textSyles, isLoading } ) => {
  return (
    <TouchableOpacity 
      onPress={ handlePress}
      activeOpacity={0.7}
      className={`bg-secondary rounded-xl min-h[62x] justify-center items-center ${containerStyles} ${isLoading ? 'opacity-50' : ' '}`}
      disabled={isLoading}
    >
      <Text className={`text-primary font-psemibold text-lg m-3 ${textSyles}`} >
        {title}
      </Text>
    </TouchableOpacity>
  ) 
}

export default CustomButton