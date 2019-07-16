import React, { Component } from 'react';
import { AppRegistry, Dimensions, FlatList, StyleSheet, Text, View } from 'react-native';
import CandidateRow from '../components/CandidateRow';

export default class BasicFlatList extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text
          style={styles.text}
          adjustsFontSizeToFit={true}
          numberOfLines={1}>Chances of Winning...
        </Text>
        <FlatList style={styles.flatList}
          data={[
            {key: 'Donald Trump', imagename: 'Donald'},
            {key: 'Bernie Sanders', imagename: 'Donald'},
            {key: 'Kamala Harris', imagename: 'Donald'},
            {key: 'Joe Biden', imagename: 'Donald'},
            {key: 'John', imagename: 'Donald'},
            {key: 'Jillian', imagename: 'Donald'},
            {key: 'Jimmy', imagename: 'Donald'},
            {key: 'Julie', imagename: 'Donald'}
          ]}
          renderItem={({item}) => <CandidateRow candidateName={item.key} imageName={item.imagename} />}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 40
  },
  flatList: {
    backgroundColor: 'gray'
  },
  text: {
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 20,
    color: 'red',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 200,
    width: Dimensions.get('window').width
  },
  item: {
    padding: 10,
    height: 44,
  },
})
