import React, { Component } from "react";
import { StyleSheet, View, Image, TextInput, Text, TouchableOpacity } from "react-native";
import MaterialButtonTransparentHamburger from "../symbols/MaterialButtonTransparentHamburger";
import MaterialButtonDark32 from "../symbols/MaterialButtonDark32";
import MaterialButtonDark33 from "../symbols/MaterialButtonDark33";

export default class OtherBankAccCreditMenuScreen extends Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.root}>
        <View style={styles.rect} />
        <Image
          source={require("../assets/images/1200px-Bank_of_Ceylon.svg.png")}
          resizeMode={"contain"}
          style={styles.image}
        />
        <View style={styles.rect2} />
        <TextInput
          placeholder={
            "Privacy & Security | Terms of use @ 2017 Bank Of Ceylon.  All           Rights Reserved"
          }
          style={styles.textInput}
        />
        <Text style={styles.text2}>Welcome S A Vithanage</Text>
        <Text style={styles.text3}>Last login Aug 05 2019</Text>
        <Text style={styles.text4}>Dashboard</Text>
        <View style={styles.rect3} />
        <MaterialButtonTransparentHamburger
          style={styles.materialButtonTransparentHamburger}
        />
        <Text style={styles.text5}>Other Bank Accounts &amp; Cards</Text>
        {/* <MaterialButtonDark32 style={styles.materialButtonDark32} /> */}
        <View style={styles.materialButtonDark32}>
            <TouchableOpacity style={[styles.aroot, this.props.style]} onPress = { () => navigate('OtherBankAccount')}>
            <Text style={styles.acaption}>Other Bank Accounts</Text>
            </TouchableOpacity>
        </View>
        {/* <MaterialButtonDark33 style={styles.materialButtonDark33} /> */}
        <View style={styles.materialButtonDark33}>
            <TouchableOpacity style={[styles.aroot, this.props.style]} onPress = { () => navigate('OtherBankCreditCard')}>
            <Text style={styles.acaption}>Other Bank Credit Card</Text>
            </TouchableOpacity>
        </View>
      </View>
    );
  }
}


OtherBankAccCreditMenuScreen.navigationOptions = {
  header : null,
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "white"
  },
  aroot: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingRight: 16,
    paddingLeft: 16,
    elevation: 2,
    minWidth: 88,
    borderRadius: 2,
    backgroundColor: "black",
    shadowOffset: {
      height: 1,
      width: 0
    },
    shadowColor: "#000",
    shadowOpacity: 0.35,
    shadowRadius: 5
  },
  acaption: {
    color: "white",
    justifyContent: "center",
    alignContent: "center",
    fontSize: 14,
    fontFamily: "roboto-regular",
    fontWeight: "200",
    borderRadius: 5
  },
  rect: {
    top: 0,
    left: 0,
    width: 375,
    height: 78,
    backgroundColor: "rgba(250,164,51,1)",
    position: "absolute"
  },
  image: {
    top: 18,
    left: 3.5,
    width: 78,
    height: 29.81,
    position: "absolute"
  },
  rect2: {
    top: 570,
    left: 0,
    width: 375.26,
    height: 78.44,
    backgroundColor: "rgba(250,164,51,1)",
    position: "absolute"
  },
  textInput: {
    top: 578,
    left: 1,
    width: 356.44,
    height: 42,
    color: "#121212",
    position: "absolute"
  },
  text2: {
    top: 50,
    fontSize: 10,
    left: 12.81,
    color: "rgba(255,255,255,1)",
    position: "absolute"
  },
  text3: {
    top: 60,
    fontSize: 10,
    left: 12.81,
    color: "rgba(255,255,255,1)",
    position: "absolute"
  },
  text4: {
    top: 23,
    left: 145.18,
    color: "#121212",
    position: "absolute",
    fontSize: 18,
    fontWeight: "bold"
  },
  rect3: {
    top: 77,
    left: 0,
    width: 382,
    height: 78.44,
    backgroundColor: "rgba(24,24,24,1)",
    position: "absolute"
  },
  materialButtonTransparentHamburger: {
    top: 97.64,
    left: 310.1,
    width: 52,
    height: 46,
    position: "absolute"
  },
  text5: {
    top: 208.48,
    left: 59.91,
    color: "rgba(250,164,51,1)",
    position: "absolute",
    fontSize: 20
  },
  materialButtonDark32: {
    top: 303.7,
    left: 40,
    width: 290,
    height: 80,
    position: "absolute"
  },
  materialButtonDark33: {
    top: 423.55,
    left: 40,
    width: 290,
    height: 80,
    position: "absolute"
  }
});
