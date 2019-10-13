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
import { FlatList } from "react-native-gesture-handler";

/*
Quick to do
    Get News Api and use Json data to populate news
    API key:
    a1215f14d6e3425d9c12e87fbd59bed1
*/


const { height, width } = Dimensions.get('window')

class NewsScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            dataSource:[]
        };
    }
    componentDidMount(){
        fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=a1215f14d6e3425d9c12e87fbd59bed1")
        .then(response => response.json())
        .then((responseJson)=> {
          this.setState({
           loading: false,
           dataSource: responseJson
          })
        })
        .catch(error=>console.log(error)) //If errors do occur. They should be caught here
    }

    componentWillMount() {
        this.startHeaderHeight = 80
        if (Platform.OS == 'android') {
            this.startHeaderHeight = 100 + StatusBar.currentHeight
        }
    }

    render() {
        if(this.state.loading) {
            return (
                <View style={styles.content}>
                    <ActivityIndicator size="large" color="#0c9"/>
                </View>
            )
        }
        return(
            <View style={styles.container}>
                <FlatList
                    data = {this.state.dataSource}
                    ItemSeparatorComponent = {this.FlatListItemSeparator}
                    renderItem = {item=> this.renderItem(item)}
                    keyExtractor = {item=>item.id.toString()}
                />
            </View>
        )
        // return (
        //     <SafeAreaView style={{ flex: 1 }}>
        //             <ScrollView
        //                 scrollEventThrottle={16}
        //             >
        //                 <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 20, justifyContent: "center" }}>
        //                     <Text style={{ fontSize: 32, fontWeight: '800', paddingHorizontal: 20, color:'blue' }}>
        //                         News
        //                     </Text>
        //                     <Text style={{ fontSize: 20, fontWeight: '300', paddingHorizontal: 20, color:'red' }}>
        //                         Get the latest news on each canidate.</Text>
        //                 </View>
        //                 <View>
                            
        //                 </View>
        //         </ScrollView>
        //     </SafeAreaView>
        // );
    }
}

export default NewsScreen;

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