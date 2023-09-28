import React, { Component } from "react";
import {  View,  Text,  StyleSheet,  SafeAreaView,  Platform,  StatusBar,  Image, TouchableOpacity} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import { FlatList } from "react-native-gesture-handler";

let customFonts = {
  "Bubblegum-Sans": require("../assets/fonts/BubblegumSans-Regular.ttf")
};


export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false
    };
  }

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  render() {
    if (!this.state.fontsLoaded) {
      return <AppLoading />;
    } else {
      return (
        <View style={styles.container}>
            <View style={styles.appTitleTextContainer}>
              <Text style={styles.appTitleText}>Astralzen</Text>
            </View>
          <View style={styles.cardContainer}>
            <Image source = {require('../assets/Imagem+Astralzen.png')} style = {styles.image}></Image>
          </View>
          <View>
            <TouchableOpacity style = {styles.botão}>
              <Text style = { styles.textoBotao}>CONFIGURAÇÕES</Text>
            </TouchableOpacity>
          </View>
          <View>
          <TouchableOpacity style = {styles.botão}>
              <Text style = { styles.textoBotao}>CONFIGURAÇÕES</Text>
            </TouchableOpacity>
          </View>
          
          
          <View style={{ flex: 0.08 }} />
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#15193c"
  },
  appTitleTextContainer: {
    flex: 0.7,
    justifyContent: "center",
    textAlign:"center"
  },
  appTitleText: {
    color: "white",
    fontSize: RFValue(80),
    fontFamily: "Bubblegum-Sans",
    marginLeft: 20
  },
  image:{
    width:"50%",
    height: "30%",
    marginLeft: 20,
    height: RFValue(250),
    alignSelf: "center",
    
  },
  textContainer:{
    paddingTop:RFValue(20),
    color: "white",
    fontSize: RFValue(28),
    fontFamily: "Bubblegum-Sans",
    textAlign:"center"
  }, 
  //estilizar botão e texto botão 
  botao2:{
    marginTop: 25,
     backgroundColor: 'white',
     width: "35%",
     alignSelf: 'center',
     height: "65%",
     borderRadius: 15,
     padding: 10,
     paddingLeft: 35,
     paddingRight: 35
   }
});