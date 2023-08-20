import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Body1 from '../atoms/text/Body1';
import { Avatar } from 'react-native-paper';

const Nebula = ({ title, avatarImage }) => {
  return (
    <View style={styles.container}>
        <View style={{flexDirection: 'column'}}>
        <View style={styles.header}>
      <Text style={styles.title}>Chat with Nebula</Text>
      <Icon name="chevron-forward-outline" size={24} color="white" style={{justifyContent: "center", alignItems:"center"}} />
      </View>
      <Body1>Your cosmic companion for Interstellar Inquiries</Body1>

        </View>
      <Avatar.Image
        source={avatarImage}
        size={40}
        style={styles.avatar}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 20,
    margin: 10,
    backgroundColor: 'rgba(129, 194, 255, 0.25)',
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 10,
  },
  header:{
    flexDirection: 'row',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginRight: 20
  },
  avatar: {
    marginRight: 10,
  },
});

export default Nebula;
