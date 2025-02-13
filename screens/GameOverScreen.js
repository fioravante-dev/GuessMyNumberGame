import {
  View,
  Text,
  StyleSheet,
  Image,
  useWindowDimensions,
  ScrollView,
} from "react-native";

import Title from "../components/ui/Title";
import Colors from "../constants/colors";
import PrimaryButton from "../components/ui/PrimaryButton";

function GameOverScreen({ userNumber, numberOfRounds, onStartNewGame }) {
  const { width, height } = useWindowDimensions();

  const marginTop = height < 400 ? 10 : 100;
  const imageDimensions = height > 400 ? width * 0.8 : 100;

  const imameStyle = {
    width: imageDimensions,
    height: imageDimensions,
    borderRadius: imageDimensions / 2,
  };

  return (
    <ScrollView style={styles.screen}>
      <View style={[styles.rootContainer, { marginTop }]}>
        <Title>Game Over!</Title>
        <View style={[styles.imageContainer, imameStyle]}>
          <Image
            style={styles.image}
            source={require("../assets/images/success.png")}
          />
        </View>
        <Text style={styles.summaryText}>
          Your phone needed{" "}
          <Text style={styles.highlight}>{numberOfRounds}</Text> rounds to guess
          the number <Text style={styles.highlight}>{userNumber}</Text>.
        </Text>
        <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
      </View>
    </ScrollView>
  );
}

export default GameOverScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontFamily: "openSans",
    fontSize: 24,
    textAlign: "center",
    marginBottom: 24,
  },
  highlight: {
    fontFamily: "openSansBold",
    color: Colors.primary500,
  },
});
