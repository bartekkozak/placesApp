import React from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import UsernameInput from "./src/UsernameInput";
import { store, persistor } from "./src/store/store";
import Layout from "./src/components/Layout/Layout";

export default class App extends React.Component {
  renderLoading = () => (
    <View style={styles.container}>
      <ActivityIndicator size="large" />
    </View>
  );
  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={this.renderLoading()}>
          <View style={styles.container}>
            {/* <UsernameInput /> */}
            <Layout />
          </View>
        </PersistGate>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightblue",
    alignItems: "center",
    justifyContent: "flex-start"
  }
});
