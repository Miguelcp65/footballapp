import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./populargames.style";

const PopularGamesCard = ({ item, handleCardPress }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => handleCardPress(item)}

    >
      <View style={styles.gameInfo}>
        <Text style={styles.infoCompetition}>{item.competition}</Text>
      </View>
      <View style={styles.scoreBoardView}>
        <View style={styles.logoContainer}>
          <Image
            source={item.team1image}
            resizeMode="contain"
            style={styles.logoImage}
          />
          <Text style={styles.teamName} numberOfLines={1}>{item.team1}</Text>
        </View>
        <View>

          <Text style={styles.scoreBoardText}>
            {item.scoreboard}
          </Text>
        </View>
        <View style={styles.logoContainer}>
          <Image
            source={item.team2image}
            resizeMode="contain"
            style={styles.logoImage}
          />
          <Text style={styles.teamName} numberOfLines={1}>{item.team2}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default PopularGamesCard;
