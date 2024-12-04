import BasicCard from "./BasicCard";
import { FlatList, View } from "react-native";
const HomeCard = () => {
   //the function fetches three parameters the id number , the date and the remarks
    const data = Array.from({ length: 4 }, (date, i,doctype, remarks) => ({
      id: `${i + 1}`,
      title: `Doc ${i + 1}`,
      date : `22/07/2002`,
      doctype :`sales order`,
      remarks : `delayed sale`,
    }));
  //this part renders the parameters received in the data function 
    const renderCard = ({ item }) => (
      <BasicCard
        title={item.title}
        date={item.date}
        doctype = {item.doctype}
        remarks = {item.remarks}
        onButtonPress={() => alert(`${item.title} button pressed!`)}
      />
    );
  
    return (
      <View className="flex-1 bg-[#121212]">
        <FlatList
          data={data}
          renderItem={renderCard}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ paddingVertical: 20 }}
        />
      </View>
    );
  };
  
  export default HomeCard;