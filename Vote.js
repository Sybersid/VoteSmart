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
    Dimensions,
    Button
} from "react-native";
import * as WebBrowser from 'expo-web-browser';

const { height, width } = Dimensions.get('window')

class VoteScreen extends Component {

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
                                VoteSmart
                            </Text>
                            <Text style={{ fontSize: 20, fontWeight: '300', paddingHorizontal: 20, color:'red' }}>
                                Informing voters with unbaised and necessary information.</Text>
                        </View>
                        <View>
                            <Text style={styles.content}> 
                            1. Register to Vote.
                            </Text>
                            <Text style={styles.content}> 
                            2. Find the nearest polling center.
                            </Text>
                            <Text style={styles.content}> 
                            3.Request an Absentee Ballot if you can't vote on Election Day.
                            </Text>
                            <Text style={styles.content}> 
                            4.Bring a Photo ID to the polling center. (driver's lisence, state-issued ID, or passport.)
                            </Text>
                        </View>
                    <View>
                  
            <Button
            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
            title='Register to Vote in 2 minutes!'
          onPress={this._handlePressButtonAsync}
        />
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
    _handlePressButtonAsync = async () => {
        let result = await WebBrowser.openBrowserAsync('https://www.vote.org/register-to-vote/');
        this.setState({ result });
      };
}

export default VoteScreen;

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
      padding: 20,
      fontSize: 20,
      fontWeight: '300'
  }
});