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
import { Container, Header, Content, Card, CardItem, Body } from "native-base";
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import SandersScreen from "./screens/SandersScreen";
import BidenScreen from "./screens/BidenScreen";
import BookerScreen from "./screens/BookerScreen";
import ButtigiegScreen from "./screens/ButtigiegScreen";


const { height, width } = Dimensions.get('window')

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
        <Content padder>
          <Card>
            <CardItem header>
              <Text style={styles.democrats}>Democrats</Text>
            </CardItem>
            <CardItem button onPress={() =>  this.props.navigation.push('Bernie')}>
              <Body>
                <Text>
                  Joe Biden
                </Text>
              </Body>
            </CardItem>
            <CardItem button onPress={() => this.props.navigation.push('Bernie')}>
              <Body>
                <Text>
                  Cory Booker
                </Text>
              </Body>
            </CardItem>
            <CardItem button onPress={() => this.props.navigation.push('Bernie')}>
              <Body>
                <Text>
                  Pete Buttigieg
                </Text>
              </Body>
            </CardItem>
            <CardItem button onPress={() => this.props.navigation.push('Bernie')}>
              <Body>
                <Text>
                  Julián Castro
                </Text>
              </Body>
            </CardItem>
            <CardItem button onPress={() => this.props.navigation.push('Bernie')}>
              <Body>
                <Text>
                  Tulsi Gabbard
                </Text>
              </Body>
            </CardItem>
            <CardItem button onPress={() => this.props.navigation.push('Bernie')}>
              <Body>
                <Text>
                  Kamala Harris
                </Text>
              </Body>
            </CardItem>
            <CardItem button onPress={() => this.props.navigation.push('Bernie')}>
              <Body>
                <Text>
                  Amy Klobuchar
                </Text>
              </Body>
            </CardItem>
            <CardItem button onPress={() => this.props.navigation.push('Bernie')}>
              <Body>
                <Text>
                  Beto O'Rourke
                </Text>
              </Body>
            </CardItem>
            <CardItem button onPress={() => this.props.navigation.push('Bernie')}>
              <Body>
                <Text>
                  Bernie Sanders
                </Text>
              </Body>
            </CardItem>
            <CardItem button onPress={() => this.props.navigation.push('Bernie')}>
              <Body>
                <Text>
                  Tom Steyer
                </Text>
              </Body>
            </CardItem>
            <CardItem button onPress={() => this.props.navigation.push('Bernie')}>
              <Body>
                <Text>
                  Elizabeth Warren
                </Text>
              </Body>
            </CardItem>
            <CardItem button onPress={() => this.props.navigation.push('Bernie')}>
              <Body>
                <Text>
                  Andrew Yang
                </Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
                        </View>
                <View>
                <Content padder>
          <Card>
            <CardItem header button onPress={() => alert("This is Card Header")}>
              <Text style={styles.republicans}>Republicans</Text>
            </CardItem>
            <CardItem button onPress={() => this.props.navigation.push('Bernie')}>
              <Body>
                <Text>
                  Rocky De La Fuente
                </Text>
              </Body>
            </CardItem>
            <CardItem button onPress={() => this.props.navigation.push('Bernie')}>
              <Body>
                <Text>
                  Mark Sanford
                </Text>
              </Body>
            </CardItem>
            <CardItem button onPress={() => this.props.navigation.push('Bernie')}>
              <Body>
                <Text>
                  Donald Trump
                </Text>
              </Body>
            </CardItem>
            <CardItem button onPress={() => this.props.navigation.push('Bernie')}>
              <Body>
                <Text>
                  Joe Walsh
                </Text>
              </Body>
            </CardItem>
            <CardItem button onPress={() => this.props.navigation.push('Bernie')}>
              <Body>
                <Text>
                  Bill Weld
                </Text>
              </Body>
            </CardItem>
            </Card>
            </Content>
               </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}

const NewsNavigator = createStackNavigator({
    News: HomeScreen,
    Biden: BidenScreen,
    Booker: BookerScreen,
    Buttigieg: ButtigiegScreen,
    Castro: CastroScreen,
    Gabbard: GabbardScreen,
    Harris: HarrisScreen,
    Klobuchar: KlobucharScreen,
    ORourke: ORourkeScreen,
    Sanders: SandersScreen,
    Steyer: SteyerScreen,
    Warren: WarrenScreen,
    Yang: YangScreen,
    Delaf: DelafScreen,
    Sanford: SanfordScreen,
    Trump: TrumpScreen,
    Walsh: WalshScreen,
    Weld: WeldScreen
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
  },
  image : {
    width: 80,
    height: 80,
    display: "flex",
  },
  democrats : {
    fontWeight:"bold",
    justifyContent: "right",
    fontSize: "25",
    color: "blue",
  },
  republicans : {
    fontWeight:"bold",
    justifyContent: "right",
    fontSize: "25",
    color: "red",
  },
button : {
paddingTop: 50,
justifyContent: "center",
marginVertical: 8,
marginHorizontal: 16,
}
});

