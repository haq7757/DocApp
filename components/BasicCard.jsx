import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

const BasicCard = ({ title, remarks ,doctype, date, buttonLabel, onButtonPress }) => {
  return (
    <View className=" rounded-lg p-4 mx-2 my-2 bg-white">
      
      
      
      <View className="flex-row justify-between items-center">
  
        <View className="flex-1 pr-4">
          <Text className="text-lg font-semibold mb-1">{title}</Text>
          <Text className="text-md font-semibold mb-1">Date : {date}</Text>
          <Text className="text-md font-semibold mb-1">Doctype : {doctype}</Text>
          <Text className="text-gray-500">Your remarks go here: {remarks} </Text>
        </View>

        <View>
        <TouchableOpacity
          className="bg-green-600 rounded-full px-4 py-2 shadow-lg m-1"
          onPress={onButtonPress}
        >
        <Text className="text-white font-medium text-center">{buttonLabel}Approve</Text>
          
        </TouchableOpacity>
        <TouchableOpacity
          className="bg-red-600 rounded-full px-4 py-2 shadow-lg m-1
           "
          onPress={onButtonPress}
        >
          <Text className="text-white font-medium text-center">{buttonLabel}Reject</Text>
          
        </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default BasicCard;

