import React, { Component } from 'react';
import { AppRegistry, FlatList, StyleSheet, Text, View } from 'react-native';
import CandidateRow from '../components/CandidateRow';

export default class BasicFlatList extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Below is an example of a table. In React Native this component is called a SectionList.
        In Swift this is called a UITableView.
        </Text>
        <FlatList
          data={[
            {key: 'Donlad Trump'},
            {key: 'Barnie Sanders'},
            {key: 'Kamala Harris'},
            {key: 'Joe Biden'},
            {key: 'John'},
            {key: 'Jillian'},
            {key: 'Jimmy'},
            {key: 'Julie'},
          ]}
          renderItem={({item}) => <CandidateRow/>}
        />
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
