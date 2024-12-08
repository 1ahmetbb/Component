import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function DesingScreen() {
  return (
    <View style={{ flex:1 }}>
      <View style={styles.mainView}>
        {/* <Text style={styles.mainTextOne}>1</Text> */}
        {/* <Text style={styles.mainTextTwo}>2</Text> */}
        {/* <Text style={styles.mainTextThree}>3</Text> */}
      </View>

      <View
        style={{
          backgroundColor: "blue",
          height: 300,
          width: 100,
          bottom: 0,
          right: 0,
          position: "absolute",
          borderRadius: 20,
        }}
      />

      <View
        style={{
          backgroundColor: "red",
          height: 300,
          width: 100,
          bottom: 0,
          position: "absolute",
          borderRadius: 20,
        }}
      />

      <View
        style={{
          backgroundColor: "yellow",
          height: 300,
          width: 100,
          right: 0,
          position: "absolute",
          borderRadius: 20,
        }}
      />

      <View
        style={{
          backgroundColor: "green",
          height: 300,
          width: 100,
          left: 0,
          position: "absolute",
          borderRadius: 20,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  // mainView: {
  //   height: 400,
  //   borderWidth: 1,
  //   borderColor: "black",
  //   borderRadius: 10,
  //   margin: 20,
  //   //alignItems:'flex-end',
  //   //flexDirection:'row',
  //   //justifyContent:'center'
  // },
  mainTextOne: {
    borderWidth: 1,
    borderColor: "red",
    margin: 10,
    //marginHorizontal:30
    //marginVertical:30
    padding: 20,
    borderRadius: 10,
    //flex:4,
    // alignSelf: "flex-end",
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  // mainTextTwo: {
  //   borderWidth: 1,
  //   borderColor: "red",
  //   margin: 10,
  //   padding: 20,
  //   borderRadius: 10,
  //   //flex:5,
  //   alignSelf: "center",
  //   //top:10,
  //   //right: 40,
  //   //left:40,
  //   //bottom:15
  // },
  // mainTextThree: {
  //   borderWidth: 1,
  //   borderColor: "red",
  //   margin: 10,
  //   padding: 20,
  //   borderRadius: 10,
  //   //flex:1,
  //   alignSelf: "flex-start",
  // },
});
