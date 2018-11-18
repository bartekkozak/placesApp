import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Easing,
  Animated,
  SafeAreaView
} from "react-native";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./src/store/store";
import Layout from "./src/components/Layout/Layout";
import Auth from "./src/screens/Auth/Auth";
import FindPlace from "./src/screens/FindPlace/FindPlace";
import SharePlace from "./src/screens/SharePlace/SharePlace";
import Icon from "react-native-vector-icons/MaterialIcons";

import {
  createStackNavigator,
  createBottomTabNavigator,
  createMaterialTopTabNavigator
} from "react-navigation";

import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

const authTabs = createMaterialTopTabNavigator(
  {
    Auth: {
      screen: Auth,
      navigationOptions: {
        title: "Login",
        tabBarIcon: <Icon name="autorenew" color="white" size={20} />
      }
    },
    SharePlace: {
      screen: SharePlace,
      navigationOptions: {
        tabBarIcon: <Icon name="autorenew" color="white" size={20} />
      }
    },
    FindPlace: {
      screen: FindPlace,
      navigationOptions: {
        tabBarIcon: <Icon name="autorenew" color="white" size={20} />
      }
    }
  },
  {
    tabBarOptions: {
      indicatorStyle: {
        height: 0
      },
      showIcon: true,
      style: {
        borderTopColor: "white",
        borderTopWidth: 0.5
      },
      labelStyle: {
        fontSize: 10
      }
    },
    tabBarPosition: "bottom"
  }
);

const RootStack = createStackNavigator(
  {
    Layout: {
      screen: Layout,
      navigationOptions: {
        header: null
      }
    },
    Auth: {
      screen: authTabs,
      navigationOptions: {
        title: "Login"
      }
    }
  },
  {
    initialRouteName: "Layout",
    transitionConfig: () => ({
      transitionSpec: {
        duration: 300,
        easing: Easing.out(Easing.poly(4)),
        timing: Animated.timing
      },
      screenInterpolator: sceneProps => {
        const { layout, position, scene } = sceneProps;
        const { index } = scene;

        const width = layout.initWidth;
        const translateX = position.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [width, 0, 0]
        });

        const opacity = position.interpolate({
          inputRange: [index - 1, index - 0.99, index],
          outputRange: [0, 1, 1]
        });

        return { opacity, transform: [{ translateX: translateX }] };
      }
    })
  }
);

class App extends React.Component {
  renderLoading = () => (
    <View style={styles.container}>
      <ActivityIndicator size="large" />
    </View>
  );
  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={this.renderLoading()}>
          <SafeAreaView style={styles.container}>
            <RootStack />
          </SafeAreaView>
        </PersistGate>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default App;
