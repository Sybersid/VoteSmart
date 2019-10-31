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

const { height, width } = Dimensions.get('window')

export default class ORourkeScreen extends Component {

    componentWillMount() {
        this.startHeaderHeight = 80
        if (Platform.OS == 'android') {
            this.startHeaderHeight = 100 + StatusBar.currentHeight
        }
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                    <Text>ORourkeScreen</Text> 
            </SafeAreaView>
        );
    }
}

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