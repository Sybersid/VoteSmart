import React, { Component } from "react";
import {
    View,
    Button,
    Text,
    StyleSheet,
    SafeAreaView,
    Platform,
    StatusBar,
    ScrollView,
    Image,
    Dimensions
} from "react-native";

const { height, width } = Dimensions.get('window')

export default class HomeScreen extends Component {

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
                                News
                            </Text>
                            <Text style={{ fontSize: 20, fontWeight: '300', paddingHorizontal: 20, color:'red' }}>
                                Get the latest news on each canidate.</Text>
                        </View>
                        <View>
                         <Button title="Go to Bernie"
                             onPress={() => this.props.navigation.push('Bernie')} />
                        </View>
                </ScrollView>
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