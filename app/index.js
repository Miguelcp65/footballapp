import { View, ScrollView, SafeAreaView } from "react-native";
import { Stack, useRouter } from "expo-router";

import { COLORS, icons } from "../constants";
import {
  ScreenHeaderBtn,
  PopularGames,
  MatchSchedule,
  FootballNews
} from "../components";

const Home = () => {
  const router = useRouter();


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.primary }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.primary },
          headerTitleStyle: {
            color: COLORS.lightWhite
          },
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn iconUrl={icons.menu} dimension="50%" />
          ),
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={icons.notification} dimension="50%" />
          ),
          headerTitle: "FootballApp",
        }}
      />

      <ScrollView showVerticalScrollIndicator={false} >
        <View
          style={{
            flex: 1,
            padding: 16,
          }}
        >
          <PopularGames />
          <MatchSchedule />
          <FootballNews />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Home;
