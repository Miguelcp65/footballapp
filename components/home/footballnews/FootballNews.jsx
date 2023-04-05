import { useState } from "react";
import { useRouter } from "expo-router";
import {
  View,
  Text,
  TouchableOpacity,
} from "react-native";

import styles from "./footballnews.style";
import FootballNewsCard from "../../cards/FootballNews/FootballNewsCard";

import { footballnews } from '../../../constants'

const FootballNews = () => {
  const router = useRouter();

  const [selectedJob, setSelectedJob] = useState();

  const handleCardPress = (item) => {
    router.push(`/job-details/${item.job_id}`);
    setSelectedJob(item.job_id);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Football News</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {footballnews.map((item) => (
          <FootballNewsCard
            key={item.id}
            item={item}
            selectedJob={selectedJob}
            handleCardPress={handleCardPress}
          />
        ))}
      </View>
    </View>
  );
};

export default FootballNews;
