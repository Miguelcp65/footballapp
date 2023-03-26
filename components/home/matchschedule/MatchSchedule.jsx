import { useState } from "react";
import { useRouter } from "expo-router";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
} from "react-native";

import styles from "./matchschedule";
import MatchScheduleCard from "../../cards/MatchSchedule/MatchScheduleCard";
import useFetch from "../../../hook/useFetch";

import { matchschedule } from '../../../constants'

const MatchSchedule = () => {
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
        <Text style={styles.headerTitle}>Match Schedule</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        <FlatList
          data={matchschedule}
          renderItem={({ item }) => (
            <MatchScheduleCard
              item={item}
              selectedJob={selectedJob}
              handleCardPress={handleCardPress}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

export default MatchSchedule;
