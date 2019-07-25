import React, { Component } from 'react';
import { ActivityIndicator, AppRegistry, Dimensions, FlatList, RefreshControl, StyleSheet, Text, View } from 'react-native';
import CandidateRow from '../components/CandidateRow';
import { bettingDataToFlatList } from '../data/DataMapper';

export default class BasicFlatList extends Component {
  constructor(props){
    super(props);
    this.state ={ isLoading: true}
    var basicFlatList = new BasicFlatList();
  }

  componentDidMount() {
    console.log("BasicFlatList componentDidMount called!!!");

    this._fetchData();
  }

  _fetchData = () => {
    const basicFlatList = this;
    const parseString = require('react-native-xml2js').parseString;
    var fetchedPromise = fetch('https://electionbettingodds.com/DemPrimary2020_api')

    fetchedPromise.then(response => {
      return response.text();
    }).then((response) => {
      return parseString(response, function (error, result) {

      })
    })
    return
      .then(response => response.text())
      .then((response) => {
        return parseString(response, function (err, result) {
          console.log(result);
          if (err) {
            console.log(error)
          } else if (!result.BettingData) {
            console.log("Data returned is not in correct format");
          } else {
            const bettingData = result.BettingData;
            const flatListData = bettingDataToFlatList(bettingData);

            basicFlatList.setState({
              isLoading: false,
              dataSource: flatListData,
              refreshing: false
            }, function() {

            });
          }
        });
      })
      .catch((error) =>{
        console.error(error);
      });
  }

  _onRefresh = () => {
    this._fetchData();
  }

  render() {

    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20, backgroundColor: 'black'}}>
          <ActivityIndicator style={{flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 70}}
          size='large'/>
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
          data={this.state.dataSource}
          renderItem={({item}) => <CandidateRow style={styles.item} candidateName={item.key} imageName={item.imageName} />}
          refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this._onRefresh}
          />} />
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
    marginTop: 20
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
    height: 84,
    backgroundColor: 'white'
  },
})
