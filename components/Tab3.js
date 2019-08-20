import React from 'react';
import {
    View,
    StyleSheet, 
    Dimensions,
    Text
} from 'react-native'

export default class Tab3 extends React.Component{
    constructor(props){
        super(props);
        this.props.navigation.setParams({ visible: true });
    }
    render(){
        return(
            <View style = {styles.container}>
                <Text>This is tab 3 screen</Text>
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