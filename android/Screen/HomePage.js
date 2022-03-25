
import React,{Component} from 'react'


import {Text,View,StyleSheet,TouchableOpacity,TextInput} from 'react-native'


class HomePage extends Component
{
    constructor(props)
    {
        super(props)
    }

    render()
    {
        return(
            <View>
                <TextInput></TextInput>
             <TouchableOpacity
              style={styles.buttonStyle}
              activeOpacity={0.5}
              onPress={() => this.props.navigation.navigate('LocationPermission', {parameters : 'sanket'})}
              >
              <Text style={styles.buttonTextStyle}>Permission</Text>
            </TouchableOpacity>
             <View>
             <TouchableOpacity style={styles.buttonStyle}
              activeOpacity={0.5}
              onPress={() => this.props.navigation.navigate('Bluetooth', {parameters : 'sanket'})}><Text style={styles.buttonTextStyle}>Bluetooth</Text></TouchableOpacity>
             </View>
            </View>
        )
    }
}

export default HomePage
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