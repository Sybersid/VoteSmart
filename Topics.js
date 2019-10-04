import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TextInput,
    Platform,
    StatusBar,
    ScrollView,
    Image,
    Dimensions
} from "react-native";
import TopicsList from './TopicsList'

const { height, width } = Dimensions.get('window')

class TopicScreen extends Component {

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
                        scrollEventThrottle={16}
                    >
                        <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 20, justifyContent: "center" }}>
                            <Text style={{ fontSize: 32, fontWeight: '800', paddingHorizontal: 20, color:'blue' }}>
                                Topics
                            </Text>
                            <Text style={{ fontSize: 20, fontWeight: '300', paddingHorizontal: 20, color:'red' }}>
                                Find out where you stand on the main topics of debate during the election.</Text>
                                <TopicsList/>
                        </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}

export default TopicScreen;

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