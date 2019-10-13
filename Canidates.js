import React, { Component } from "react";
import { View, Text, Image, StyleSheet, SafeAreaView, Platform, StatusBar, ScrollView, Dimensions } from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'

const { height, width } = Dimensions.get('window')

class CanidatesScreen extends Component {

    componentWillMount() {
        this.startHeaderHeight = 80
        if (Platform.OS == 'android') {
            this.startHeaderHeight = 100 + StatusBar.currentHeight
        }
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                    <ScrollView
                        scrollEventThrottle={16}>
                    <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 20, justifyContent: "center" }}>
                            <Text style={{ fontSize: 32, fontWeight: '800', paddingHorizontal: 20, color:'blue' }}>Canidates</Text>
                            <Text style={{ fontSize: 20, fontWeight: '300', paddingHorizontal: 20, color:'red' }}>Make an informed voting decision by learning about each canidates.</Text>
                        </View>
                        <View>
                        <Card
  title='HELLO WORLD'
  image={require('./assets/icon.png')}>
  <Text style={{marginBottom: 10}}>
    The idea with React Native Elements is more about component structure than actual design.
  </Text>
  <Button
    icon={<Icon name='code' color='#ffffff' />}
    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
    title='VIEW NOW' />
</Card>
                        </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}

export default CanidatesScreen;

const styles = StyleSheet.create({
  container: {

  },
  header: {
      paddingRight: 15,
      paddingLeft: 15
  },
  content: {
      display: "flex",
      flex: 1,
      justifyContent: "center",
      padding: 15
  }
});