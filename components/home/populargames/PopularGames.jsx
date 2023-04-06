import { useState } from "react";
import { useRouter } from "expo-router";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
} from "react-native";
import styles from "./populargames.style";
import PopularGamesCard from "../../cards/PopularGames/PopularGamesCard";
import { populargames } from '../../../constants'

const PopularGames = () => {
  const router = useRouter();
  const handleCardPress = (item) => {
    router.push(`/populargames-details/${item.id}`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular Games</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        <FlatList
          data={populargames}
          renderItem={({ item }) => (
            <PopularGamesCard
              item={item}
              key={item.id}
              handleCardPress={handleCardPress}
            />
          )}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ columnGap: 16 }}
          horizontal
        />
      </View>
    </View>
  );
};

export default PopularGames;
