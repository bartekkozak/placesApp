import React, { Component } from "react";
import { Text, View, StyleSheet, Button, TextInput } from "react-native";
import { connect } from "react-redux";
import PlaceInput from "../PlaceInput/PlaceInput";
import PlaceList from "../PlaceList/PlaceList";
import PlaceDetail from "../PlaceDetail/PlaceDetail";

import {
  addPlace,
  deletePlace,
  selectPlace,
  deselectPlace
} from "../../store/actions/index";
import PushNotifications from "../PushNotifications/PushNotifications";

// import { Constants, Notifications, Permissions } from "expo";

class Layout extends Component {
  placeAddedHandler = placeName => {
    this.props.onAddPlace(placeName);
    // this.setState(prevState => {
    //   return {
    //     places: [
    //       ...prevState.places,
    //       { key: "" + Math.random(), name: placeName, image: placeImage }
    //     ]
    // this.setState(prevState => {
    //   return {
    //     places: prevState.places.concat(prevState.placeName),
    //     places: [...prevState.places, prevState.placeName]
    //   };
    // });
    //   };
    // });
  };

  placeSelectHandler = key => {
    this.props.onSelectPlace(key);
    // this.setState(prevState => {
    //   return {
    //     selectedPlace: prevState.places.find(place => {
    //       return place.key === key;
    //     })
    //   };
    // });
  };
  // placeDeletedHandler = key => {
  //   this.setState(prevState => {
  //     return {
  //       places: prevState.places.filter(place => {
  //         return place.key !== key;
  //       })
  //     };
  //   });
  //   // let listOfItems = this.state.places;
  //   // listOfItems.splice(index, 1);
  //   // this.setState({ places: listOfItems });
  // };

  placeDeletedHandler = () => {
    this.props.onDeletePlace();
    // this.setState(prevState => {
    //   return {
    //     places: prevState.places.filter(place => {
    //       return place.key !== prevState.selectedPlace.key;
    //     }),
    //     selectedPlace: null
    //   };
    // });
  };

  modalClosedHandler = () => {
    this.props.onDeselectPlace();
  };

  // // TESTING NOTIFICATIONS

  // onSubmit = e => {
  //   // Keyboard.dismiss();

  //   const localNotification = {
  //     title: "done kurwa szwa",
  //     body: "You have some tasks to complete"
  //   };

  //   const schedulingOptions = {
  //     time: new Date().getTime() + Number(e.nativeEvent.text)
  //   };

  //   // Notifications show only when app is not active.
  //   // (ie. another app being used or device's screen is locked)
  //   Notifications.scheduleLocalNotificationAsync(
  //     localNotification,
  //     schedulingOptions
  //   );
  // };

  // handleNotification = () => {
  //   console.warn("ok! got your notif");
  // };

  // async componentDidMount() {
  //   // We need to ask for Notification permissions for ios devices
  //   let result = await Permissions.askAsync(Permissions.NOTIFICATIONS);

  //   if (Constants.isDevice && result.status === "granted") {
  //     console.log("Notification permissions granted.");
  //   }

  //   // If we want to do something with the notification when the app
  //   // is active, we need to listen to notification events and
  //   // handle them in a callback
  //   Notifications.addListener(this.handleNotification);
  // }

  render() {
    return (
      <View style={styles.container}>
        <PlaceInput onPlaceAdded={this.placeAddedHandler} />
        <PlaceList
          places={this.props.places}
          onItemSelected={this.placeSelectHandler}
        />
        <PlaceDetail
          selectedPlace={this.props.selectedPlace}
          onItemDeleted={this.placeDeletedHandler}
          onModalClosed={this.modalClosedHandler}
        />
        <View style={styles.buttonContainer}>
          <Button
            title="GO TO AUTH"
            onPress={() => this.props.navigation.navigate("Auth")}
          />
          {/* <TextInput
            onSubmitEditing={this.onSubmit}
            placeholder={"time in ms"}
          /> */}
          <PushNotifications />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "lightblue"
  },
  buttonContainer: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "center"
  }
});

const mapStateToProps = state => {
  return {
    places: state.places.places,
    selectedPlace: state.places.selectedPlace
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddPlace: name => dispatch(addPlace(name)),
    onDeletePlace: () => dispatch(deletePlace()),
    onSelectPlace: key => dispatch(selectPlace(key)),
    onDeselectPlace: () => dispatch(deselectPlace())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Layout);
