import {
    View,
    Text,
    Image,
    TouchableOpacity
} from "react-native";
import styles from "./gamedetails.style";


const GameDetails = ({ selectedgame }) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity>
                    <Text style={styles.headertext}>{selectedgame.competition}</Text>
                </TouchableOpacity>
                <Text style={styles.headertext}>{selectedgame.stadium}</Text>
            </View>
            <View style={styles.matchcontainer}>
                <View style={styles.scoreBoardView}>
                    <View style={styles.logoContainer}>
                        <Image
                            source={selectedgame.team1image}
                            resizeMode="contain"
                            style={styles.logoImage}
                        />
                        <TouchableOpacity>
                            <Text style={styles.teamName} numberOfLines={1}>{selectedgame.team1}</Text>
                        </TouchableOpacity>
                        <View style={styles.goals}>
                            {selectedgame.team1goals.map((goal) => (
                                <TouchableOpacity>
                                    <Text style={{ fontSize: 16, color: "grey", marginBottom: 5 }} key={goal} numberOfLines={1}>{goal}</Text>
                                </TouchableOpacity>

                            ))}
                        </View>
                    </View>
                    <View>

                        <Text style={styles.scoreBoardText}>
                            {selectedgame.scoreboard}
                        </Text>
                    </View>
                    <View style={styles.logoContainer}>
                        <Image
                            source={selectedgame.team2image}
                            resizeMode="contain"
                            style={styles.logoImage}
                        />
                        <TouchableOpacity>
                            <Text style={styles.teamName} numberOfLines={1}>{selectedgame.team2}</Text>
                        </TouchableOpacity>
                        <View style={styles.goals}>
                            {selectedgame.team2goals.map((goal) => (
                                <TouchableOpacity>
                                    <Text style={{ fontSize: 16, color: "grey", marginBottom: 5, textAlign: "right" }} key={goal} numberOfLines={1}>{goal}</Text>
                                </TouchableOpacity>

                            ))}
                        </View>
                    </View>
                </View >
            </View>
        </View >
    );
};

export default GameDetails;
