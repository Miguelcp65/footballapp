import {
    View,
    Text,
    Image,
    TouchableOpacity
} from "react-native";
import styles from "./footballnewsdetails.style";


const FootballNewsDetails = ({ selectedfootballnews }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{selectedfootballnews.title}</Text>
            <TouchableOpacity>
                <Text style={styles.topic}>{selectedfootballnews.topic}</Text>
            </TouchableOpacity>
            <View style={styles.date}>
                <Text style={styles.datetext}>{selectedfootballnews.date}</Text>
                <Text style={styles.datetext}>{selectedfootballnews.hour}</Text>
            </View>
            <Image
                source={selectedfootballnews.image}
                resizeMode="cover"
                style={styles.image}
            />

            {selectedfootballnews.description.map((p) => (
                <Text key={p} style={styles.description}>{p}</Text>
            ))}

        </View>
    );
};

export default FootballNewsDetails;
