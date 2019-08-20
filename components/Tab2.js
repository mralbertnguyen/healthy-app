import React from 'react';
import {
    View,
    StyleSheet, 
    Dimensions,
    Text,
    TouchableOpacity
} from 'react-native'

export default class Tab2 extends React.Component{
    static navigationOptions = { header: null } 

    constructor(props){
        super(props);
        this.props.navigation.setParams({ visible: true });
    }
    render(){
        return(
            <View style = {styles.container}>
                <Text>This is Tab 2 screen</Text>
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