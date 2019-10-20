import React, { Component } from "react";
import { View, Text, Button, StyleSheet, SafeAreaView, Platform, StatusBar, ScrollView, Dimensions } from 'react-native'
import { Card } from 'react-native-elements'
import BernieCard from './cards/Bernie'
import BidenCard from './cards/Biden'
import WarrenCard from "./cards/Warren";
import YangCard from "./cards/Yang";
import HarrisCard from "./cards/Harris";
import ButtigiegCard from "./cards/Buttigieg";
import ORourkeCard from "./cards/ORourke";
import BookerCard from "./cards/Booker";
import KlobucharCard from "./cards/Klobuchar";
import CastroCard from "./cards/Castro";


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
        <Text style={{ fontSize: 40, fontWeight: '300', paddingHorizontal: 95, color:'blue' }}>Democrats</Text>
        <ScrollView
  horizontal={true}
  showsHorizontalScrollIndicator={false}>

<BernieCard/>

<BidenCard/>

<WarrenCard/>

<YangCard/>

<HarrisCard/>

<ButtigiegCard/>

<ORourkeCard/>

<BookerCard/>

<KlobucharCard/>

<CastroCard/>

<Card
  title='Tulsi Gabbard'
  image={require('../VoteSmart/images/tgabbard.jpeg')}>
  <Button
    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
    title='MORE INFO' />
</Card>

<Card
  title='Tom Steyer'
  image={require('../VoteSmart/images/tsteyer.jpeg')}>
  <Button
    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
    title='MORE INFO' />
</Card>
</ScrollView>
    <Text style={{ fontSize: 40, fontWeight: '300', paddingHorizontal: 80, color:'red' }}>Republicans</Text>
<ScrollView
  horizontal={true}
  showsHorizontalScrollIndicator={false}
>
<Card
  title='Donald Trump'
  image={require('../voteSmart/images/dtrump.jpg')}>
  <Button
    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
    title='MORE INFO' />
</Card>

<Card
  title='Mark Sanford'
  image={require('../VoteSmart/images/msanford.png')}>
  <Button
    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
    title='MORE INFO' />
</Card>

<Card
  title='Joe Walsh'
  image={require('../VoteSmart/images/jwalsh.jpg')}>
  <Button
    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
    title='MORE INFO' />
</Card>

<Card
  title='Bill Weld'
  image={require('../VoteSmart/images/bweld.jpg')}>
  <Button
    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
    title='MORE INFO' />
</Card>
</ScrollView>
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