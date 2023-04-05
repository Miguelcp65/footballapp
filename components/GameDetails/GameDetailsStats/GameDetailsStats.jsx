import {
    View,
    Text
} from "react-native";
import styles from "./gamedetailsstats.style";
import ProgressBar from 'react-native-progress/Bar';
import { COLORS } from "../../../constants";

const GameDetailsStats = ({ selectedgamedetails }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.matchstats}>Match Statistics</Text>
            <View style={styles.statscontainer}>
                <View style={styles.statscontainerlines}>
                    <View>
                        <Text style={styles.statslinetext}>{selectedgamedetails.team1xg}</Text>
                    </View>
                    <View>
                        <Text style={{ color: "grey", fontSize: 18 }}>Expected Goals</Text>
                    </View>
                    <View>
                        <Text style={styles.statslinetext}>{selectedgamedetails.team2xg}</Text>
                    </View>
                </View>
                {selectedgamedetails.team1xg + selectedgamedetails.team2xg !== 0 ? (
                    <View style={styles.statsprogress}>

                        <ProgressBar style={{ transform: [{ rotate: '180deg' }] }} progress={((selectedgamedetails.team1xg * 100) / (selectedgamedetails.team1xg + selectedgamedetails.team2xg)) * 0.01} width={195} borderWidth={0.5} color={COLORS.secondary} borderColor={"grey"} borderRadius={0} />
                        <ProgressBar progress={((selectedgamedetails.team2xg * 100) / (selectedgamedetails.team1xg + selectedgamedetails.team2xg)) * 0.01} width={195} color={COLORS.secondary} borderColor={"grey"} borderWidth={0.5} borderRadius={0} />
                    </View>
                ) : (
                    <View style={styles.statsprogress}>
                        <ProgressBar style={{ transform: [{ rotate: '180deg' }] }} progress={0} width={195} borderWidth={0.5} color={COLORS.secondary} borderColor={"grey"} borderRadius={0} />
                        <ProgressBar progress={0} width={195} color={COLORS.secondary} borderColor={"grey"} borderWidth={0.5} borderRadius={0} />
                    </View>
                )}
                <View style={styles.statscontainerlines}>
                    <View>
                        <Text style={styles.statslinetext}>{selectedgamedetails.team1shoots}</Text>
                    </View>
                    <View>
                        <Text style={{ color: "grey", fontSize: 18 }}>Shoots</Text>
                    </View>
                    <View>
                        <Text style={styles.statslinetext}>{selectedgamedetails.team2shoots}</Text>
                    </View>
                </View>
                {selectedgamedetails.team1shoots + selectedgamedetails.team2shoots !== 0 ? (
                    <View style={styles.statsprogress}>

                        <ProgressBar style={{ transform: [{ rotate: '180deg' }] }} progress={((selectedgamedetails.team1shoots * 100) / (selectedgamedetails.team1shoots + selectedgamedetails.team2shoots)) * 0.01} width={195} borderWidth={0.5} color={COLORS.secondary} borderColor={"grey"} borderRadius={0} />
                        <ProgressBar progress={((selectedgamedetails.team2shoots * 100) / (selectedgamedetails.team1shoots + selectedgamedetails.team2shoots)) * 0.01} width={195} color={COLORS.secondary} borderColor={"grey"} borderWidth={0.5} borderRadius={0} />
                    </View>
                ) : (
                    <View style={styles.statsprogress}>
                        <ProgressBar style={{ transform: [{ rotate: '180deg' }] }} progress={0} width={195} borderWidth={0.5} color={COLORS.secondary} borderColor={"grey"} borderRadius={0} />
                        <ProgressBar progress={0} width={195} color={COLORS.secondary} borderColor={"grey"} borderWidth={0.5} borderRadius={0} />
                    </View>
                )}
                <View style={styles.statscontainerlines}>
                    <View>
                        <Text style={styles.statslinetext}>{selectedgamedetails.team1shootsontarget}</Text>
                    </View>
                    <View>
                        <Text style={{ color: "grey", fontSize: 18 }}>Shoots on Target</Text>
                    </View>
                    <View>
                        <Text style={styles.statslinetext}>{selectedgamedetails.team2shootsontarget}</Text>
                    </View>
                </View>
                {selectedgamedetails.team1shootsontarget + selectedgamedetails.team2shootsontarget !== 0 ? (
                    <View style={styles.statsprogress}>

                        <ProgressBar style={{ transform: [{ rotate: '180deg' }] }} progress={((selectedgamedetails.team1shootsontarget * 100) / (selectedgamedetails.team1shootsontarget + selectedgamedetails.team2shootsontarget)) * 0.01} width={195} borderWidth={0.5} color={COLORS.secondary} borderColor={"grey"} borderRadius={0} />
                        <ProgressBar progress={((selectedgamedetails.team2shootsontarget * 100) / (selectedgamedetails.team1shootsontarget + selectedgamedetails.team2shootsontarget)) * 0.01} width={195} color={COLORS.secondary} borderColor={"grey"} borderWidth={0.5} borderRadius={0} />
                    </View>
                ) : (
                    <View style={styles.statsprogress}>
                        <ProgressBar style={{ transform: [{ rotate: '180deg' }] }} progress={0} width={195} borderWidth={0.5} color={COLORS.secondary} borderColor={"grey"} borderRadius={0} />
                        <ProgressBar progress={0} width={195} color={COLORS.secondary} borderColor={"grey"} borderWidth={0.5} borderRadius={0} />
                    </View>
                )}
                <View style={styles.statscontainerlines}>
                    <View>
                        <Text style={styles.statslinetext}>{selectedgamedetails.team1ballpossession}%</Text>
                    </View>
                    <View>
                        <Text style={{ color: "grey", fontSize: 18 }}>Ball Possession</Text>
                    </View>
                    <View>
                        <Text style={styles.statslinetext}>{selectedgamedetails.team2ballpossession}%</Text>
                    </View>
                </View>
                {selectedgamedetails.team1ballpossession + selectedgamedetails.team2ballpossession !== 0 ? (
                    <View style={styles.statsprogress}>

                        <ProgressBar style={{ transform: [{ rotate: '180deg' }] }} progress={((selectedgamedetails.team1ballpossession * 100) / (selectedgamedetails.team1ballpossession + selectedgamedetails.team2ballpossession)) * 0.01} width={195} borderWidth={0.5} color={COLORS.secondary} borderColor={"grey"} borderRadius={0} />
                        <ProgressBar progress={((selectedgamedetails.team2ballpossession * 100) / (selectedgamedetails.team1ballpossession + selectedgamedetails.team2ballpossession)) * 0.01} width={195} color={COLORS.secondary} borderColor={"grey"} borderWidth={0.5} borderRadius={0} />
                    </View>
                ) : (
                    <View style={styles.statsprogress}>
                        <ProgressBar style={{ transform: [{ rotate: '180deg' }] }} progress={0} width={195} borderWidth={0.5} color={COLORS.secondary} borderColor={"grey"} borderRadius={0} />
                        <ProgressBar progress={0} width={195} color={COLORS.secondary} borderColor={"grey"} borderWidth={0.5} borderRadius={0} />
                    </View>
                )}
                <View style={styles.statscontainerlines}>
                    <View>
                        <Text style={styles.statslinetext}>{selectedgamedetails.team1passes}</Text>
                    </View>
                    <View>
                        <Text style={{ color: "grey", fontSize: 18 }}>Total Passes</Text>
                    </View>
                    <View>
                        <Text style={styles.statslinetext}>{selectedgamedetails.team2passes}</Text>
                    </View>
                </View>
                {selectedgamedetails.team1passes + selectedgamedetails.team2passes !== 0 ? (
                    <View style={styles.statsprogress}>

                        <ProgressBar style={{ transform: [{ rotate: '180deg' }] }} progress={((selectedgamedetails.team1passes * 100) / (selectedgamedetails.team1passes + selectedgamedetails.team2passes)) * 0.01} width={195} borderWidth={0.5} color={COLORS.secondary} borderColor={"grey"} borderRadius={0} />
                        <ProgressBar progress={((selectedgamedetails.team2passes * 100) / (selectedgamedetails.team1passes + selectedgamedetails.team2passes)) * 0.01} width={195} color={COLORS.secondary} borderColor={"grey"} borderWidth={0.5} borderRadius={0} />
                    </View>
                ) : (
                    <View style={styles.statsprogress}>
                        <ProgressBar style={{ transform: [{ rotate: '180deg' }] }} progress={0} width={195} borderWidth={0.5} color={COLORS.secondary} borderColor={"grey"} borderRadius={0} />
                        <ProgressBar progress={0} width={195} color={COLORS.secondary} borderColor={"grey"} borderWidth={0.5} borderRadius={0} />
                    </View>
                )}
                <View style={styles.statscontainerlines}>
                    <View>
                        <Text style={styles.statslinetext}>{selectedgamedetails.team1passesaccuracy}%</Text>
                    </View>
                    <View>
                        <Text style={{ color: "grey", fontSize: 18 }}>Pass Acurancy</Text>
                    </View>
                    <View>
                        <Text style={styles.statslinetext}>{selectedgamedetails.team2passesaccuracy}%</Text>
                    </View>
                </View>
                {selectedgamedetails.team1passesaccuracy + selectedgamedetails.team2passesaccuracy !== 0 ? (
                    <View style={styles.statsprogress}>

                        <ProgressBar style={{ transform: [{ rotate: '180deg' }] }} progress={((selectedgamedetails.team1passesaccuracy * 100) / (selectedgamedetails.team1passesaccuracy + selectedgamedetails.team2passesaccuracy)) * 0.01} width={195} borderWidth={0.5} color={COLORS.secondary} borderColor={"grey"} borderRadius={0} />
                        <ProgressBar progress={((selectedgamedetails.team2passesaccuracy * 100) / (selectedgamedetails.team1passesaccuracy + selectedgamedetails.team2passesaccuracy)) * 0.01} width={195} color={COLORS.secondary} borderColor={"grey"} borderWidth={0.5} borderRadius={0} />
                    </View>
                ) : (
                    <View style={styles.statsprogress}>
                        <ProgressBar style={{ transform: [{ rotate: '180deg' }] }} progress={0} width={195} borderWidth={0.5} color={COLORS.secondary} borderColor={"grey"} borderRadius={0} />
                        <ProgressBar progress={0} width={195} color={COLORS.secondary} borderColor={"grey"} borderWidth={0.5} borderRadius={0} />
                    </View>
                )}
                <View style={styles.statscontainerlines}>
                    <View>
                        <Text style={styles.statslinetext}>{selectedgamedetails.team1corners}</Text>
                    </View>
                    <View>
                        <Text style={{ color: "grey", fontSize: 18 }}>Corners</Text>
                    </View>
                    <View>
                        <Text style={styles.statslinetext}>{selectedgamedetails.team2corners}</Text>
                    </View>
                </View>
                {selectedgamedetails.team1corners + selectedgamedetails.team2corners !== 0 ? (
                    <View style={styles.statsprogress}>

                        <ProgressBar style={{ transform: [{ rotate: '180deg' }] }} progress={((selectedgamedetails.team1corners * 100) / (selectedgamedetails.team1corners + selectedgamedetails.team2corners)) * 0.01} width={195} borderWidth={0.5} color={COLORS.secondary} borderColor={"grey"} borderRadius={0} />
                        <ProgressBar progress={((selectedgamedetails.team2corners * 100) / (selectedgamedetails.team1corners + selectedgamedetails.team2corners)) * 0.01} width={195} color={COLORS.secondary} borderColor={"grey"} borderWidth={0.5} borderRadius={0} />
                    </View>
                ) : (
                    <View style={styles.statsprogress}>
                        <ProgressBar style={{ transform: [{ rotate: '180deg' }] }} progress={0} width={195} borderWidth={0.5} color={COLORS.secondary} borderColor={"grey"} borderRadius={0} />
                        <ProgressBar progress={0} width={195} color={COLORS.secondary} borderColor={"grey"} borderWidth={0.5} borderRadius={0} />
                    </View>
                )}
                <View style={styles.statscontainerlines}>
                    <View>
                        <Text style={styles.statslinetext}>{selectedgamedetails.team1fouls}</Text>
                    </View>
                    <View>
                        <Text style={{ color: "grey", fontSize: 18 }}>Fouls</Text>
                    </View>
                    <View>
                        <Text style={styles.statslinetext}>{selectedgamedetails.team2fouls}</Text>
                    </View>
                </View>
                {selectedgamedetails.team1fouls + selectedgamedetails.team2fouls !== 0 ? (
                    <View style={styles.statsprogress}>

                        <ProgressBar style={{ transform: [{ rotate: '180deg' }] }} progress={((selectedgamedetails.team1fouls * 100) / (selectedgamedetails.team1fouls + selectedgamedetails.team2fouls)) * 0.01} width={195} borderWidth={0.5} color={COLORS.secondary} borderColor={"grey"} borderRadius={0} />
                        <ProgressBar progress={((selectedgamedetails.team2fouls * 100) / (selectedgamedetails.team1fouls + selectedgamedetails.team2fouls)) * 0.01} width={195} color={COLORS.secondary} borderColor={"grey"} borderWidth={0.5} borderRadius={0} />
                    </View>
                ) : (
                    <View style={styles.statsprogress}>
                        <ProgressBar style={{ transform: [{ rotate: '180deg' }] }} progress={0} width={195} borderWidth={0.5} color={COLORS.secondary} borderColor={"grey"} borderRadius={0} />
                        <ProgressBar progress={0} width={195} color={COLORS.secondary} borderColor={"grey"} borderWidth={0.5} borderRadius={0} />
                    </View>
                )}
                <View style={styles.statscontainerlines}>
                    <View>
                        <Text style={styles.statslinetext}>{selectedgamedetails.team1offsides}</Text>
                    </View>
                    <View>
                        <Text style={{ color: "grey", fontSize: 18 }}>Offsides</Text>
                    </View>
                    <View>
                        <Text style={styles.statslinetext}>{selectedgamedetails.team2offsides}</Text>
                    </View>
                </View>
                {selectedgamedetails.team1offsides + selectedgamedetails.team2offsides !== 0 ? (
                    <View style={styles.statsprogress}>

                        <ProgressBar style={{ transform: [{ rotate: '180deg' }] }} progress={((selectedgamedetails.team1offsides * 100) / (selectedgamedetails.team1offsides + selectedgamedetails.team2offsides)) * 0.01} width={195} borderWidth={0.5} color={COLORS.secondary} borderColor={"grey"} borderRadius={0} />
                        <ProgressBar progress={((selectedgamedetails.team2offsides * 100) / (selectedgamedetails.team1offsides + selectedgamedetails.team2offsides)) * 0.01} width={195} color={COLORS.secondary} borderColor={"grey"} borderWidth={0.5} borderRadius={0} />
                    </View>
                ) : (
                    <View style={styles.statsprogress}>
                        <ProgressBar style={{ transform: [{ rotate: '180deg' }] }} progress={0} width={195} borderWidth={0.5} color={COLORS.secondary} borderColor={"grey"} borderRadius={0} />
                        <ProgressBar progress={0} width={195} color={COLORS.secondary} borderColor={"grey"} borderWidth={0.5} borderRadius={0} />
                    </View>
                )}
                <View style={styles.statscontainerlines}>
                    <View>
                        <Text style={styles.statslinetext}>{selectedgamedetails.team1yellowcards}</Text>
                    </View>
                    <View>
                        <Text style={{ color: "grey", fontSize: 18 }}>Yellow Cards</Text>
                    </View>
                    <View>
                        <Text style={styles.statslinetext}>{selectedgamedetails.team2yellowcards}</Text>
                    </View>
                </View>
                <View style={styles.statsprogress}>
                    <ProgressBar style={{ transform: [{ rotate: '180deg' }] }} progress={((selectedgamedetails.team1yellowcards * 100) / (selectedgamedetails.team1yellowcards + selectedgamedetails.team2yellowcards)) * 0.01} width={195} borderWidth={0.5} color={COLORS.secondary} borderColor={"grey"} borderRadius={0} />
                    <ProgressBar progress={((selectedgamedetails.team2yellowcards * 100) / (selectedgamedetails.team1yellowcards + selectedgamedetails.team2yellowcards)) * 0.01} width={195} color={COLORS.secondary} borderColor={"grey"} borderWidth={0.5} borderRadius={0} />
                </View>
                <View style={styles.statscontainerlines}>
                    <View>
                        <Text style={styles.statslinetext}>{selectedgamedetails.team1redcards}</Text>
                    </View>
                    <View>
                        <Text style={{ color: "grey", fontSize: 18 }}>Red Cards</Text>
                    </View>
                    <View>
                        <Text style={styles.statslinetext}>{selectedgamedetails.team2redcards}</Text>
                    </View>
                </View>
                {selectedgamedetails.team1redcards + selectedgamedetails.team2redcards !== 0 ? (
                    <View style={styles.statsprogress}>

                        <ProgressBar style={{ transform: [{ rotate: '180deg' }] }} progress={((selectedgamedetails.team1redcards * 100) / (selectedgamedetails.team1redcards + selectedgamedetails.team2redcards)) * 0.01} width={195} borderWidth={0.5} color={COLORS.secondary} borderColor={"grey"} borderRadius={0} />
                        <ProgressBar progress={((selectedgamedetails.team2redcards * 100) / (selectedgamedetails.team1redcards + selectedgamedetails.team2redcards)) * 0.01} width={195} color={COLORS.secondary} borderColor={"grey"} borderWidth={0.5} borderRadius={0} />
                    </View>
                ) : (
                    <View style={styles.statsprogress}>
                        <ProgressBar style={{ transform: [{ rotate: '180deg' }] }} progress={0} width={195} borderWidth={0.5} color={COLORS.secondary} borderColor={"grey"} borderRadius={0} />
                        <ProgressBar progress={0} width={195} color={COLORS.secondary} borderColor={"grey"} borderWidth={0.5} borderRadius={0} />
                    </View>
                )}

            </View>
        </View>
    );
};

export default GameDetailsStats;
