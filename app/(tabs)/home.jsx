import { View, Text, FlatList, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../constants'
import SearchInput from '../../components/SearchInput'
import HomeCard from '../../components/HomeCard'

const Home = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <FlatList
        data = {[{id:1}, {id:2},{id:3}]}
       keyExtractor = {(item) => item.id}
       renderItem ={({item})=> (
        <Text className = "text-3xl">{item.id}</Text>
       )}
       ListHeaderComponent = {() => (
        <View className="my-6 px-4 space-y-6">
           <View className="justify-between items-start flex-row">
             <View>
              <Text className="text-gray-100 text-sm font-pmedium">
                 Welcome to the 
              </Text>
              <Text className="text-gray-100 text-3xl font-pmedium mt-2">
                Home Page
              </Text>
             </View>
             <View className="mt-2">
               <Image source = {images.logoSmall} className="w-9 h-10" resizeMode='contain'/>
             
             </View>
              
           </View>
           <SearchInput/>
           <View>
            
           </View>
           <HomeCard/>
          </View>
        
        )}
      />
     
    </SafeAreaView>
  )
}

export default Home