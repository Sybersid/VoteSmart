import React, { Component } from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';
import { Card } from 'react-native-elements'
import * as WebBrowser from 'expo-web-browser';
import Constants from 'expo-constants';

export default class WeldCard extends Component {
  state = {
    result: null,
  };

  render() {
    return (
        <Card   
        title='Bill Weld'
        image={require('../images/bweld.jpg')}>
            <Button
            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
            title='MORE INFO'
          onPress={this._handlePressButtonAsync}
        />
      </Card>
    );
  }

  _handlePressButtonAsync = async () => {
    let result = await WebBrowser.openBrowserAsync('https://www.citizenscount.org/candidate/bill-weld');
    this.setState({ result });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
});