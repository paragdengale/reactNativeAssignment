
import React, { Component ,useState} from "react";


import {StyleSheet,View,Image,Text,ActivityIndicator} from 'react-native'

class FlashScreen extends Component{
    constructor(){  
        super();  
        this.state={  
        isVisible : true,  
       }  
     }  
      Hide_Splash_Screen=()=>{  
          let isVisible = true
       this.setState({   
         isVisible : false   
       });  
     }  
      


      render()
      {  
        const [animating, setAnimating] = useState(true);

        let Splash_Screen = (  
            <View>
            <Image
              source={{
                uri: 'https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/react-512.png',
                method: 'POST',
                headers: {
                  Pragma: 'no-cache'
                },
                body: 'Your Body goes here'
              }}
              style={{ width: 200, height: 200, marginLeft: 50,marginTop:200 }}
            />
          </View> )  
         return(  
            <View style={styles.container}>
            <Image
              source={require('../Screen/image/react11.png')}
              style={{width: '90%', resizeMode: 'contain', margin: 30}}
            />
            <ActivityIndicator
              animating={animating}
              color="#FFFFFF"
              size="large"
              style={styles.activityIndicator}
            />
          </View>
              );  
    }  
}  
const styles = StyleSheet.create(  
    {  
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#307ecc',
          },
          activityIndicator: {
            alignItems: 'center',
            height: 80,
          },
    });  

    export default FlashScreen