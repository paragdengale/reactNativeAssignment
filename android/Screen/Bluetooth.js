import React,{Component} from 'react'
import {Text,TouchableOpacity,StyleSheet,View} from 'react-native'
import BluetoothSerial from 'react-native-bluetooth-serial';
import { BluetoothStatus } from 'react-native-bluetooth-status';
class Bluetooth extends Component
{
    componentWillMount() {
       
    
        BluetoothSerial.on("connectionLost", () => {
          if (this.state.device) {
            this.connect(this.state.device)
              .then(res => {})
              .catch(err => {
                console.log("error", err);
              });
          }
        });
      }
      async checkInitialBluetoothState() 
      {
      const isEnabled = await BluetoothStatus.state();
      console.log("check bluetooth on or off", isEnabled.message);
      if(isEnabled == true){
        <Text>Bluetooth on</Text>
        this.disable()
        
       } else{
          this.enable()
        }
      }
    enable () {
        BluetoothSerial.enable()
        .then((res) => this.setState({ isEnabled: true }))
        .catch((err) => console.log(err.message))
    }
    disable () {
        BluetoothSerial.disable()
        .then((res) => this.setState({ isEnabled: false }))
        .catch((err) => console.log(err.message))
    }

    renderBluetoothStatus() {
        if (this.state.isEnabled) {
          return <Text>Bluetooth enable</Text>;
        }
        return <Text >Bluetooth Disable</Text>;
      }


    render()
    {
        return(
            <View>
            <TouchableOpacity
              style={styles.buttonStyle}
              activeOpacity={0.5}
              onPress={()=>this.checkInitialBluetoothState() }
              >
              <Text style={styles.buttonTextStyle}>Bluetooth</Text>
            </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    mainBody: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#cc66ff',
      alignContent: 'center',
    },
    SectionStyle: {
      flexDirection: 'row',
      height: 40,
      marginTop: 20,
      marginLeft: 35,
      marginRight: 35,
      margin: 10,
    },
    buttonStyle: {
      backgroundColor: '#00CBFE',
      borderWidth: 0,
      color: '#FFFFFF',
      borderColor: '#7DE24E',
      height: 40,
      alignItems: 'center',
      borderRadius: 30,
      marginLeft: 35,
      marginRight: 35,
      marginTop: 20,
      marginBottom: 25,
    },
    buttonTextStyle: {
      color: '#FFFFFF',
      paddingVertical: 10,
      fontSize: 16,
      fontWeight: 'bold'
    },
    inputStyle: {
      flex: 1,
      color: 'white',
      paddingLeft: 15,
      paddingRight: 15,
      borderWidth: 2,
      borderRadius: 30,
      borderColor: '#FFFFFF',
    },
    registerTextStyle: {
      color: '#FFFFFF',
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 14,
      alignSelf: 'center',
      padding: 10,
    },
    errorTextStyle: {
      color: 'red',
      textAlign: 'center',
      fontSize: 14,
    },
  });




export default Bluetooth