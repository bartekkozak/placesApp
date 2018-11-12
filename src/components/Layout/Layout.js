import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
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
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "lightblue",
    alignItems: "center",
    justifyContent: "flex-start"
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
