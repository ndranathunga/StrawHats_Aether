import { StyleSheet, View } from "react-native";
import Slider from "../templates/component/Slider.js";

const HelpScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Slider />
    </View>
  );
};

export default HelpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
