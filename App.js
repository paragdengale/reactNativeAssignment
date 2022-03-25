
import React from 'react';
import { Node } from 'react';
import {    StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, } from '@react-navigation/native-stack';
//import { Store } from './screen/redux/store'
import { Colors, DebugInstructions, Header, LearnMoreLinks, ReloadInstructions, } from 'react-native/Libraries/NewAppScreen';
//import { Provider } from 'react-redux';
import LoginScreen from './android/Screen/LoginScreen';
import RegisterScrenn from './android/Screen/RegisterScreen';
import RegisterScreen from './android/Screen/RegisterScreen';
import LocationPermission from './android/Screen/LocationPermission';
import CameraPermission from './android/Screen/CameraPermission';
import AppPermission from './android/Screen/AppPermission';
import HomePage from './android/Screen/HomePage';
import AppPermission1 from './android/Screen/AppPermission1';
import Bluetooth from './android/Screen/Bluetooth';
const Section = ({ children, title }) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View >
    </View>
  );
};

const Stack = createNativeStackNavigator()

const Auth = () => {
  return (
    <Stack.Navigator initialRouteName="HomePage">
        <Stack.Screen
        name="HomePage"
        component={HomePage}
        options={{
          title: 'Register',
          headerShown: false,
          headerStyle: {
            backgroundColor: '#00CBFE',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
       <Stack.Screen
        name="CameraPermission"
        component={CameraPermission}
        options={{
          title: 'Register',
          headerShown: false,
          headerStyle: {
            backgroundColor: '#00CBFE',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
       <Stack.Screen
        name="LocationPermission"
        component={LocationPermission}
        options={{
          title: 'Register',
          headerShown: false,
          headerStyle: {
            backgroundColor: '#00CBFE',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen
        name="AppPermission1"
        component={AppPermission1}
        options={{
          title: 'Register',
          headerShown: false,
          headerStyle: {
            backgroundColor: '#00CBFE',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen
        name="Bluetooth"
        component={Bluetooth}
        options={{
          title: 'Register',
          headerShown: false,
          headerStyle: {
            backgroundColor: '#00CBFE',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{
          title: 'Register',
          headerShown: false,
          headerStyle: {
            backgroundColor: '#00CBFE',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      
    
    </Stack.Navigator>
  );
};

const First = () => {
  return (
    <Provider store={Store}>
      <Stack.Navigator initialRouteName="Firsttab">
        <Stack.Screen
          name="FirstTab"
          component={FirstTab}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="About"
          component={About}
        />
      </Stack.Navigator>
    </Provider>
  );
}
const App  = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const Stack = createNativeStackNavigator();
  return (
  
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Auth"
            component={Auth}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
   

  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  container: {
    backgroundColor: '#99ff99'
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'red',
    marginLeft: 120
  }
});

export default App;
