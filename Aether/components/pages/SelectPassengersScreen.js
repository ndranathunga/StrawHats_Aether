import React from "react";
import { View, StyleSheet, Text } from "react-native";
import DynamicBackground from "../templates/DynamicBackground";
import CenterViewContainer from "../atoms/view-containers/CenterViewContainer";
import NumberedSelectButtonRow from "../molecules/NumberedSelectButtonRow";
import textStyles from "../atoms/text/Styles";
import Body2 from "../atoms/text/Body2";

export default function ExploreScreen({ navigation }) {
  const [selectedButton, setSelectedButton] = React.useState(null);

  const handleButtonPress = (buttonNumber) => {
    setSelectedButton(buttonNumber);
  };

  return (
    <DynamicBackground>
        <CenterViewContainer>
        <View style={styles.container}>
          <View style={styles.textContainer}>
            <View>
              <Text style={[textStyles.body2, { color: "white" ,textAlign:"left"}]}>Adults</Text>
            </View>
            <View >
              <Text style={[textStyles.body2, { color: "white" }]}>
                12 years or above
              </Text>
            </View>
          </View>
          <NumberedSelectButtonRow
            handlePress={handleButtonPress}
            selectedButton={selectedButton}
            ButtonNumbers={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
            numberOfButtons={10}
          />
          </View>

          <View style={styles.container}>
          <View style={styles.textContainer}>
            <View>
              <Text style={[textStyles.body2, { color: "white" ,textAlign:"left"}]}>Children</Text>
            </View>
            <View >
              <Text style={[textStyles.body2, { color: "white" }]}>
              2 -12 yr
              </Text>
            </View>
          </View>
          <NumberedSelectButtonRow
            handlePress={handleButtonPress}
            selectedButton={selectedButton}
            ButtonNumbers={[1, 2, 3, 4, 5, 6, 7, 8]}
            numberOfButtons={10}
          />
          </View>

          <View style={styles.container}>
          <View style={styles.textContainer}>
              <Text style={[textStyles.body2, { color: "white" }]}>Infants</Text>
              <Text style={[textStyles.body2, { color: "white" }]}>0 - 2 yr</Text>
              
          </View>
          
          <NumberedSelectButtonRow
            handlePress={handleButtonPress}
            selectedButton={selectedButton}
            ButtonNumbers={[1, 2, 3, 4]}
            numberOfButtons={10}
          />
          </View>
        </CenterViewContainer>
    </DynamicBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Takes up full height
  },
  textContainer: {
    flexDirection: "row",
    flex: 1,

    alignItems: "center",
    marginBottom: 10,
    width: "100%",
    backgroundColor: "#1E1E1E",
  },

});
