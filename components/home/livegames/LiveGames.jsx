import { useState } from "react";
import { useRouter } from "expo-router";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
} from "react-native";

import styles from "./livegames";
import { SIZES } from "../../../constants";
import LiveGamesCard from "../../cards/LiveGames/LiveGamesCard";
import useFetch from "../../../hook/useFetch";

import { livegames } from '../../../constants'

const LiveGames = () => {
  const router = useRouter();
  const { data, isLoading, error } = useFetch("search", {
    query: "Developer",
    num_pages: "1",
  });

  const [selectedJob, setSelectedJob] = useState();

  const handleCardPress = (item) => {
    router.push(`/job-details/${item.job_id}`);
    setSelectedJob(item.job_id);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Live Games</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        <FlatList
          data={livegames}
          renderItem={({ item }) => (
            <LiveGamesCard
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

export default LiveGames;
