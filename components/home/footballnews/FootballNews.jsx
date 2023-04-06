import { useRouter } from "expo-router";
import {
  View,
  Text
} from "react-native";

import styles from "./footballnews.style";
import FootballNewsCard from "../../cards/FootballNews/FootballNewsCard";

import { footballnews } from '../../../constants'

const FootballNews = () => {
  const router = useRouter();
  const handleCardPress = (item) => {
    router.push(`/footballnews-details/${item.id}`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Football News</Text>
      </View>

      <View style={styles.cardsContainer}>
        {footballnews.map((item) => (
          <FootballNewsCard
            key={item.id}
            item={item}
            handleCardPress={handleCardPress}
          />
        ))}
      </View>
    </View>
  );
};

export default FootballNews;
