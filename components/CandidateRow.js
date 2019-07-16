import React, { Component } from 'react';
import { AppRegistry, FlatList, StyleSheet, Text, View, Image } from 'react-native';

export default class CandidateRow extends Component {
  render() {
    return (
      <View style={styles.container}>
      <Image
        source={
          __DEV__
            ? require('../assets/images/Trump.png')
            : require('../assets/images/robot-prod.png')
        }
        style={styles.welcomeImage}
      />
        <Text style={styles.text}>{this.props.candidateName + " " + this.props.imageName}
        </Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 10
  },
  text: {
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 20,
    color: 'blue',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})
