import React, { Component } from 'react';
import { AppRegistry, Text, View, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import LocationSwitch from 'react-native-location-permission';

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    padding: 20,
  },
  text: {
    fontSize: 20,
  },
  textSuccess: {
    fontSize: 20,
    color: 'green',
  },
});

export default class LocationPermission extends Component {

  constructor(props) {
    super(props);

    this.state = { locationEnabled: false };
    this.onEnableLocationPress = this.onEnableLocationPress.bind(this);
  }

  componentDidMount() {
    LocationSwitch.isLocationEnabled(
      () => {
        Alert.alert('Location is enabled');
        this.setState({ locationEnabled: true });
      },
      () => { Alert.alert('Location is disabled'); },
    );
  }

  onEnableLocationPress() {
    LocationSwitch.enableLocationService(100, true,
      () => { this.setState({ locationEnabled: true }); },
      () => { this.setState({ locationEnabled: false }); },
    );
  }

  renderLocationStatus() {
    if (this.state.locationEnabled) {
      return <Text style={style.textSuccess} >Location enabled</Text>;
    }
    return <Text style={style.text}>Location disabled</Text>;
  }

  render() {
    return (
      <View style={style.container}>
        <TouchableOpacity style={style.button} onPress={this.onEnableLocationPress}>
          <Text style={style.text}>Enable location service</Text>
        </TouchableOpacity>
        {this.renderLocationStatus()}
      </View>
    );
  }
}

AppRegistry.registerComponent('reactClientSandbox', () => LocationSwitchApp);