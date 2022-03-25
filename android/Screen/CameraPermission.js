import React,{Component} from 'react'

import { Button, PermissionsAndroid, SafeAreaView, StatusBar, StyleSheet, Text, View,Alert } from "react-native";


const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: "Cool Photo App Camera Permission",
          message:
            "Cool Photo App needs access to your camera " +
            "so you can take awesome pictures.",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK"
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        Alert.alert("You can use Camera")
      } else {
     }
    } catch (err) {
      console.warn(err);
    }
  };

  

class CameraPermission extends Component
{
    render(){
        return(
          <View style={styles.container}>
          <Text style={styles.item}>Try permissions</Text>
          <Button title="request permissions" onPress={requestCameraPermission} />
        </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      paddingTop: StatusBar.currentHeight,
      backgroundColor: "#ecf0f1",
      padding: 8
    },
    item: {
      margin: 24,
      fontSize: 18,
      fontWeight: "bold",
      textAlign: "center"
    }
  });

export default CameraPermission