import React, { Component } from 'react';
import { ActivityIndicator, AppRegistry, Dimensions, FlatList, StyleSheet, Text, View } from 'react-native';
import CandidateRow from '../components/CandidateRow';

export default class BasicFlatList extends Component {
  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }
  render() {

    if(this.state.isLoading){
      return(
        <View style={styles.Loadingcontainer}>
          <ActivityIndicator style={styles.activityIndicator}/>
        </View>
      )
    }
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
  loadingcontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 70
  },
  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
    color: 'green'
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
