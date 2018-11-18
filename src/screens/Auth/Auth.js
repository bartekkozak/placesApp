import React, { Component } from "react";
import { Text, View, StyleSheet, Button } from "react-native";

class Auth extends Component {
  loginHandler = () => {
    console.log("kutacz");
  };

  render() {
    return (
      <View style={styles.container}>
        <Text> Auth Screen </Text>
        <Button title="Login" onPress={this.loginHandler} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default Auth;
