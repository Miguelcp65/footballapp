import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  RefreshControl,
} from "react-native";

import { Stack, useRouter, useSearchParams } from "expo-router";
import { useCallback, useState } from "react";
import {
  ScreenHeaderBtn,
  FootballNewsDetails,
} from "../../components";
import { COLORS, icons, footballnews } from "../../constants";

const NewsDetailsPage = () => {
  const params = useSearchParams();
  const router = useRouter();

  const selectedfootballnewsfunction = () => {
    selectedfootballnews = footballnews.find((news) => news.id == params.id)
  };
  selectedfootballnewsfunction();

  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    selectedfootballnewsfunction();
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
            <ScreenHeaderBtn iconUrl={selectedfootballnews.saved ? (icons.savednews) : (icons.unsavednews)} dimension="50%" />
          ),
          headerTitle: "Football News",
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
            <FootballNewsDetails
              selectedfootballnews={selectedfootballnews}
            />
          </View>
        </ScrollView>
      </>
    </SafeAreaView>
  );
};

export default NewsDetailsPage;
