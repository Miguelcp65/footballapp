import {
  View,
  SafeAreaView,
  ScrollView,
  RefreshControl,
} from "react-native";

import { Stack, useRouter, useSearchParams } from "expo-router";
import { useCallback, useState } from "react";
import {
  ScreenHeaderBtn,
  GameDetails,
  GameDetailsStats
} from "../../components";
import { COLORS, icons, populargames, livegamestatus } from "../../constants";

const GameDetailsPage = () => {
  const params = useSearchParams();
  const router = useRouter();

  const selectedgamefunction = () => {
    selectedgame = populargames.find((game) => game.id == params.id)
  };
  const selectedgamedetailsfunction = () => {
    selectedgamedetails = livegamestatus.find((gamedetails) => gamedetails.game_id == params.id)
  };
  selectedgamefunction();
  selectedgamedetailsfunction();


  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    selectedgamefunction();
    setRefreshing(false);
  }, []);



  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.primary }}>
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: COLORS.primary,
          },
          headerTitleStyle: {
            color: COLORS.lightWhite
          },
          headerShadowVisible: false,
          headerBackVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={icons.back}
              dimension="50%"
              handlePress={() => router.back()}
            />
          ),
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={selectedgame.saved ? (icons.savedgame) : (icons.unsavedgame)} dimension="50%" />
          ),
          headerTitle: "Match Details",
        }}
      />
      <>
        <ScrollView
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          <View>
            <GameDetails
              selectedgame={selectedgame}
            />
            <GameDetailsStats
              selectedgamedetails={selectedgamedetails}
            />
          </View>
        </ScrollView>
      </>
    </SafeAreaView>
  );
};

export default GameDetailsPage;
