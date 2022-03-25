


import React,{Component} from 'react'
import {Text} from 'react-native'

class  RegisterScreen extends Component {
    render()
    {
        return (
            <Text>This is RegisterScrenn {this.props.route.params.parameters}</Text>
        )

    }
  
    
}


export default RegisterScreen