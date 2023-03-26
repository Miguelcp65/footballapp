import { useState } from "react";
import { View, ScrollView, SafeAreaView } from "react-native";
import { Stack, useRouter } from "expo-router";

import { COLORS, icons, SIZES } from "../constants";
import {
  ScreenHeaderBtn,
  LiveGames,
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
            <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
          ),
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={icons.notification} dimension="60%" />
          ),
          headerTitle: "LiveScore",
        }}
      />

      <ScrollView showVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            padding: SIZES.medium,
          }}
        >
          <LiveGames />
          <MatchSchedule />
          <FootballNews />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Home;
