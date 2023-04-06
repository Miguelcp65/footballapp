import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./matchschedulecard.style";

const MatchScheduleCard = ({ item, handleCardPress }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => handleCardPress(item)}

    >
      <View style={styles.gameInfo}>
        <Text style={styles.infoCompetition}>{item.competition}</Text>
        <Text style={{ color: "#fff" }}>{item.date}</Text>
      </View>
      <View style={styles.scoreBoardView}>
        <Text style={styles.teamName} numberOfLines={1}>{item.team1}</Text>
        <View style={styles.logoContainer}>
          <Image
            source={item.team1image}
            resizeMode="contain"
            style={styles.logoImage}
          />
        </View>
        <View style={styles.hour}>
          <Text style={styles.hourText}>
            {item.hour}
          </Text>
        </View>
        <View style={styles.logoContainer}>
          <Image
            source={item.team2image}
            resizeMode="contain"
            style={styles.logoImage}
          />
        </View>
        <Text style={styles.teamName} numberOfLines={1}>{item.team2}</Text>
      </View >
    </TouchableOpacity>
  );
};

export default MatchScheduleCard;
