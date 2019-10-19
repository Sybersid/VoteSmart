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
        <Text style={{ fontSize: 40, fontWeight: '300', paddingHorizontal: 95, color:'blue' }}> Democrats </Text>
<Card
  title='Bernie Sanders'
  image={require('../voteSmart/images/bsanders.jpg')}>
  <Button
    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
    title='MORE INFO' />
</Card>

<Card
  title='Joe Biden'
  image={require('../voteSmart/images/jbiden.jpeg')}>
  <Button
    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
    title='MORE INFO' />
</Card>

    <Text style={{ fontSize: 40, fontWeight: '300', paddingHorizontal: 80, color:'red' }}> Republicans </Text>
    
<Card
  title='Donald Trump'
  image={require('../voteSmart/images/dtrump.jpg')}>
  <Button
    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
    title='MORE INFO' />
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