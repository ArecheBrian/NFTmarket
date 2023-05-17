import { FlatList, SafeAreaView, View } from "react-native";
import FocusedStatusBar from "../components/FocusedStatusBar";
import { COLORS, NFTData } from "../constants";
import { HomeHeader, NFTCard } from "../components";

 export const HomeScreen = () =>  {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <FocusedStatusBar background={COLORS.primary} />
        <View style={{ flex: 1 }}>
          <View style={{ zIndex: 0 }}>
            <FlatList 
            // flatlist nos permite renderizar una lista de elemento es como hacer un MAP
              data={NFTData}
              renderItem={({item})=> <NFTCard data={item}/>}
              keyExtractor={(item) => (item.id)}
              showsVerticalScrollIndicator={false}
              ListHeaderComponent={ <HomeHeader/>}
            />
          </View>
          <View 
            style={{
              zIndex: -1,
              position: "absolute",
              top: 0,
              bottom: 0,
              left: 0,
              right: 0 
            }}>
              <View style={{ height: 300, backgroundColor: COLORS.primary }}/>
              <View style={{ flex: 1, backgroundcolor: COLORS.white }} />
          </View>
        </View>
      </SafeAreaView>
    )
  }


