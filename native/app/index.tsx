import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {

  return (

    <View style={[styles.container, {backgroundColor: "#171717"}]}>

      {/* Navigator */}
      
      <View style={[styles.flexRow, {marginTop: 30, width: '100%', justifyContent: "center", gap: 30, alignItems: 'center'}]}>
        
        <Image style={[styles.iconS, {marginRight:50, marginLeft:20}]} source={require('../assets/images/menu.png')} />
        <Text style={[styles.subtitle]}>Studying</Text>
        
        <TouchableOpacity style={[styles.button, {marginLeft: 30}]} onPress={() => console.log("Button Clicked!")}>
            <Image style={[styles.iconS]} source={require('../assets/images/clock.png')} />
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, {marginRight: 20}]} onPress={() => console.log("Button Clicked!")}>
            <Image style={[styles.iconS]} source={require('../assets/images/clock.png')} />
        </TouchableOpacity>

      </View>

      {/* Main */}
      <View style={[{marginHorizontal: 10, width: '100%', display: 'flex', justifyContent: 'space-around', alignItems: 'center'}]}>
        
        <Text style={styles.title}>Timer Mode</Text>
        
        <Image style={[styles.image]} source={require('../assets/images/study.jpg')} />

        <Text style={styles.timer}>1:00:00</Text>
        
        <View  style={styles.audio}></View>

      </View>

     {/* End */}
      <View style={[styles.flexRow, { marginBottom: 40, width: '100%', alignItems: 'center', justifyContent: 'space-around'}]}>

        <TouchableOpacity style={[styles.button, {height:70}]} onPress={() => console.log("Button Clicked!")}>
            <Image style={[styles.iconM]} source={require('../assets/images/clock.png')} />
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, {height:110, width:110}]} onPress={() => console.log("Button Clicked!")}>
            <Text style={[{color: 'white', alignSelf: "center", fontSize: 24, fontWeight: 600}]}>FOCUS</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, {height:70}]} onPress={() => console.log("Button Clicked!")}>
            <Image style={[styles.iconM]} source={require('../assets/images/clock.png')} />
        </TouchableOpacity>

      </View>

      {/* <TextInput placeholder="Email" onChangeText={(value) => setEmail(value)} /> */}

    </View>
  );
}

const styles = StyleSheet.create({

  iconS: {
    height: 30, width: 30
  },

  iconM: {
    height: 60, width: 60
  },

  iconB: {
    height: 90, width: 90
  },

  image: {
    width: '70%',
    height: 250,
  },

  flexRow: {
    display: 'flex',
    flexDirection: 'row'
   },

  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 30,
  },

  timer: {
    color:"rgb(156, 156, 156)",
    alignSelf: "center",
    fontWeight: 500,
    fontSize: 30,
    margin: 10,
   },

  title: {
    color:"rgb(156, 156, 156)",
    alignSelf: "center",
    fontSize: 20,
    marginBottom: 10,
  },

  subtitle: {
    color:"rgb(126, 126, 126)",
    alignSelf: "flex-start",
    fontWeight: 400,
    fontSize: 18,
    marginTop: 20
  },

  audio: {
    backgroundColor: "#333333",
    color: "rgb(156, 156, 156)",
    borderRadius: 15,
    height: 15,
    paddingHorizontal: 10,
    width: "100%", 
    marginBottom: 10,
  },

  button: {
    backgroundColor: "#d12121",
    borderRadius: '100%',
    padding: 6,
    display: 'flex',
    alignItems: "center",
    justifyContent: 'center',
    marginVertical: 10,
  },
});