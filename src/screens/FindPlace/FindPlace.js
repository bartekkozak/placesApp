import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

export class FindPlace extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Find Place </Text>
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

export default FindPlace;
