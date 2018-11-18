import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import ListItem from "../ListItem/ListItem";

const PlaceList = props => {
  // const placesOutput = props.places.map((place, i) => (

  // ));

  return (
    <View style={styles.listWrapper}>
      <FlatList
        style={styles.listContainer}
        data={props.places}
        renderItem={info => (
          <ListItem
            placeName={info.item.name}
            placeImage={info.item.image}
            onItemPressed={() => props.onItemSelected(info.item.key)}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listWrapper: {
    flexDirection: "row",
    flexWrap: "wrap"
  },
  listContainer: {
    width: "100%"
  }
});

export default PlaceList;
