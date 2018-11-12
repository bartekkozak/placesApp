import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { connect } from "react-redux";
import { updateUsername } from "./store/actions/user";

class UsernameInput extends React.Component {
  state = {
    username: this.props.user.username || ""
  };

  handleChange = username => {
    this.setState({ username });
  };

  handleSubmit = () => {
    this.props.dispatch(updateUsername(this.state.username));
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder="Choose a Username"
          onChangeText={this.handleChange}
        />
        <Button title="Submit" onPress={this.handleSubmit} />
        <Text>{this.props.user.blyat}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(UsernameInput);
