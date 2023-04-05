import { useState } from "react";
import { useRouter } from "expo-router";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
} from "react-native";
import styles from "./populargames.style";
import { SIZES } from "../../../constants";
import PopularGamesCard from "../../cards/PopularGames/PopularGamesCard";
import { populargames } from '../../../constants'

const PopularGames = () => {
  const router = useRouter();

  const [selectedJob, setSelectedJob] = useState();

  const handleCardPress = (item) => {
    router.push(`/populargames-details/${item.id}`);
    setSelectedJob(item.id);
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
              selectedJob={selectedJob}
              handleCardPress={handleCardPress}
            />
          )}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ columnGap: SIZES.medium }}
          horizontal
        />
      </View>
    </View>
  );
};

export default PopularGames;