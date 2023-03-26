import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./footballnewscard.style";
import { icons } from "../../../constants";

const FootballNewsCard = ({ item, handleCardPress }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => handleCardPress(item)}

    >
      <View style={styles.infoBox}>
        <View style={styles.logoContainer}>
          <Image
            source={item.image}
            resizeMode="cover"
            style={styles.logoImage}
          />
        </View>

        <View style={styles.title}>
          <Text style={styles.titleText} numberOfLines={3}>{item.title}</Text>
          <View style={styles.topic}>
            <Text style={styles.topicText} numberOfLines={1}>{item.topic}</Text>
          </View>
        </View>


        <View style={styles.bookmark}>
        <Image
          source={icons.saved}
          resizeMode="contain"
          style={styles.bookmarkImage}
        />
        </View>


      </View>
    </TouchableOpacity>
  );
};

export default FootballNewsCard;
