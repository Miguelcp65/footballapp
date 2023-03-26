import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./livegamescard.style";
import { icons } from "../../../constants";

const LiveGamesCard = ({ item, handleCardPress }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => handleCardPress(item)}

    >
      <View style={styles.gameInfo}>
        <Text style={styles.infoCompetition}>{item.competition}</Text>
        <Image
          source={icons.liveicon}
          resizeMode="contain"
          style={styles.liveicon}
        />
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
          <View style={styles.minuteText}>
            <Text style={{ marginLeft: 5, color: "#AB0404" }}>
              {item.minute}
            </Text>
            <Text style={{ color: "#AB0404", }}>'</Text>
          </View>
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
      </View >
    </TouchableOpacity>
  );
};

export default LiveGamesCard;
