import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./standingscard.style";

const StandingsCard = ({ data }) => {
  data.sort((a, b) => b.points - a.points);
  return (
    <View
      style={styles.container}
    >
      <Text style={styles.tablestandings}>Table Standings</Text>
      <View style={styles.tablecontainer}>
        <View style={styles.tableheader}>
          <Text style={styles.tablecolumn1}>Club</Text>
          <Text style={styles.tablecolumn}>W</Text>
          <Text style={styles.tablecolumn}>D</Text>
          <Text style={styles.tablecolumn}>L</Text>
          <Text style={styles.tablecolumn5}>P</Text>
        </View>
        <View style={styles.tablebody}>
          {data.map((item) => (
            <>
              <View style={styles.tablebodycontent}>
                <TouchableOpacity style={styles.tablecolumnbodyview}>
                  <Image
                    source={item.img}
                    resizeMode="contain"
                    style={styles.logoImage}
                  />
                  <Text style={styles.tablecolumnbody1}>{item.name}</Text>
                </TouchableOpacity>
                <Text style={styles.tablecolumnbody}>{item.wins}</Text>
                <Text style={styles.tablecolumnbody}>{item.draws}</Text>
                <Text style={styles.tablecolumnbody}>{item.losses}</Text>
                <Text style={styles.tablecolumnbody}>{item.points}</Text>
              </View>
            </>
          ))}
        </View>
      </View>
    </View>
  );
};

export default StandingsCard;
