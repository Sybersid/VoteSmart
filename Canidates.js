import React, { Component } from "react";
import { View, Text, Button, StyleSheet, SafeAreaView, Platform, StatusBar, ScrollView, Dimensions } from 'react-native'
import { Card } from 'react-native-elements'
import SandersCard from './cards/Sanders'
import BidenCard from './cards/Biden'
import WarrenCard from "./cards/Warren";
import YangCard from "./cards/Yang";
import HarrisCard from "./cards/Harris";
import ButtigiegCard from "./cards/Buttigieg";
import ORourkeCard from "./cards/ORourke";
import BookerCard from "./cards/Booker";
import KlobucharCard from "./cards/Klobuchar";
import CastroCard from "./cards/Castro";
import GabbardCard from "./cards/Gabbard";
import SteyerCard from "./cards/Steyer";
import TrumpCard from "./cards/Trump";
import SanfordCard from "./cards/Sanford";
import WalshCard from "./cards/Walsh";
import WeldCard from "./cards/Weld";
import DelafuenteCard from "./cards/Delafuente";

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
        <Text style={{ fontSize: 40, fontWeight: '300', paddingHorizontal: 95, paddingVertical: 10, color:'blue' }}>Democrats</Text>
        <ScrollView
  horizontal={true}
  showsHorizontalScrollIndicator={false}>

<BidenCard/>

<BookerCard/>

<ButtigiegCard/>

<CastroCard/>

<GabbardCard/>

<HarrisCard/>

<KlobucharCard/>

<ORourkeCard/>

<SandersCard/>

<SteyerCard/>

<WarrenCard/>

<YangCard/>


</ScrollView>
    <Text style={{ fontSize: 40, fontWeight: '300', paddingHorizontal: 80, paddingVertical: 20, color:'red' }}>Republicans</Text>
<ScrollView
  horizontal={true}
  showsHorizontalScrollIndicator={false}
>
<DelafuenteCard/>

<SanfordCard/>

<TrumpCard/>

<WalshCard/>

<WeldCard/>


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