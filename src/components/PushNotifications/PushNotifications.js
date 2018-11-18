import React, { Component } from "react";
import { Text, View, TextInput } from "react-native";
import { Constants, Notifications, Permissions } from "expo";

class PushNotifications extends Component {
  // TESTING NOTIFICATIONS

  onSubmit = e => {
    // Keyboard.dismiss();

    const localNotification = {
      title: "Lokalne Notyfikacje",
      body: "Musisz zrobic swoje zadania ziomek"
    };

    const schedulingOptions = {
      time: new Date().getTime() + Number(e.nativeEvent.text)
    };

    // Notifications show only when app is not active.
    // (ie. another app being used or device's screen is locked)
    Notifications.scheduleLocalNotificationAsync(
      localNotification,
      schedulingOptions
    );
  };

  handleNotification = () => {
    console.warn("ok! got your notif");
  };

  async componentDidMount() {
    // We need to ask for Notification permissions for ios devices
    let result = await Permissions.askAsync(Permissions.NOTIFICATIONS);

    if (Constants.isDevice && result.status === "granted") {
      console.log("Notification permissions granted.");
    }

    // If we want to do something with the notification when the app
    // is active, we need to listen to notification events and
    // handle them in a callback
    Notifications.addListener(this.handleNotification);
  }

  render() {
    return (
      <View>
        <Text> Notification </Text>
        <TextInput onSubmitEditing={this.onSubmit} placeholder={"time in ms"} />
      </View>
    );
  }
}

export default PushNotifications;
