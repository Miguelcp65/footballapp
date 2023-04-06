import { useRouter } from "expo-router";
import {
  View,
  Text
} from "react-native";

import styles from "./standings.style";
import StandingsCard from "../../cards/Standings/StandingsCard";

import { standings } from '../../../constants'

const Standings = () => {
  const router = useRouter();
  const handleCardPress = (item) => {
    router.push(`/footballnews-details/${item.id}`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Standings</Text>
      </View>

      <View style={styles.cardsContainer}>
        <StandingsCard
          data={standings}
          handleCardPress={handleCardPress}
        />
      </View>
    </View>
  );
};

export default Standings;
