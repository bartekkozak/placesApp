import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

export class SharePlace extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Share Place </Text>
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

export default SharePlace;
