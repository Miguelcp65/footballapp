import {
    View,
    Text,
    Image
} from "react-native";
import styles from "./gamedetails.style";


const GameDetails = ({ selectedgame }) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headertext}>{selectedgame.competition}</Text>
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
                        <Text style={styles.teamName} numberOfLines={1}>{selectedgame.team1}</Text>
                        <View style={styles.goals}>
                            {selectedgame.team1goals.map((goal) => (
                                <Text style={{ fontSize: 16, color: "grey", marginBottom: 5 }} key={goal} numberOfLines={1}>{goal}</Text>

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
                        <Text style={styles.teamName} numberOfLines={1}>{selectedgame.team2}</Text>
                        <View style={styles.goals}>
                            {selectedgame.team2goals.map((goal) => (
                                <Text style={{ fontSize: 16, color: "grey", marginBottom: 5, textAlign: "right" }} key={goal} numberOfLines={1}>{goal}</Text>

                            ))}
                        </View>
                    </View>
                </View >
            </View>
        </View>
    );
};

export default GameDetails;
