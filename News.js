import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TextInput,
    Button,
    Platform,
    StatusBar,
    ScrollView,
    Image,
    Dimensions
} from "react-native";
import { Card, ListItem } from 'react-native-elements'
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import BernieScreen from "./screens/BernieScreen";

const { height, width } = Dimensions.get('window')

const users = [
    {
       name: 'brynn',
       avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
    },
    
   ]

export default class NewsScreen extends Component {

    render() {
        return (
        <NewsContainer /> 
       );
    }
}

class HomeScreen extends Component {

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
                            <Card containerStyle={{padding: 0}} >
                                {
                                    users.map((u, i) => {
                                    return (
                                    <ListItem
                                    key={i}
                                    roundAvatar
                                    title={u.name}
                                    avatar={{uri:u.avatar}}
                                /> );
                            })
                        }
                    <Button title="Go to Bernie"
                             onPress={() => this.props.navigation.push('Bernie')} />
                    </Card>
                        </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}

const NewsNavigator = createStackNavigator({
    News: HomeScreen,
    Bernie: BernieScreen
},
{
    initialRouteName: 'News'    
});

const NewsContainer = createAppContainer(NewsNavigator);

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

