import React from "react";
import { View, StyleSheet,TouchableOpacity } from "react-native";
import { defultBoxStyle } from '../Styles/defultBoxStyle';
import Icon from "react-native-vector-icons/Ionicons";

import Title3 from "../text/Title3";
import Body1 from '../text/Body1';

const SelectedDateCard = ({ title, content,onPress}) => (
    <TouchableOpacity
    style={[defultBoxStyle.container,defultBoxStyle.sizes, styles.container]}
    onPress={onPress}
    >
        <Body1>{title}</Body1>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding: 0 }}>
        <Icon name="calendar-outline" size={20} color={"white"} style={{paddingRight:10}}/>
        <Title3 style={{ textAlign: 'center' }}>
            {content}
        </Title3>
        </View>
    </TouchableOpacity>

);

export default SelectedDateCard;

const styles = StyleSheet.create({
  container: {
    margin: 5, 
    padding: 0, 
    marginTop: 0, 
    marginBottom: 0, 
    paddingTop: 5,
    paddingBottom:5 
  },
});
