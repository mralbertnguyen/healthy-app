import React from 'react';
import {
    View,
    StyleSheet, 
    Dimensions,
    Text
} from 'react-native'

export default class Tab1 extends React.Component{
    constructor(props){
        super(props);
        this.props.navigation.setParams({ visible: true });
    }
    render(){
        return(
            <View style = {styles.container}>
                <Text>This is Tab 1 Screen</Text>
            </View>
        );
    }
}


const styles  = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : "center",
        alignItems : "center"
    }
})