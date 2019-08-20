import React from 'react';
import {
    View,
    StyleSheet, 
    Dimensions,
    Text,
    TouchableOpacity
} from 'react-native'
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';

export default class Tab4 extends React.Component{
    static navigationOptions = {
        header: null,
        };
    constructor(props){
        super(props);
        this.props.navigation.setParams({ visible: false });
    }
    render(){
        const { goBack } = this.props.navigation;

        return(
            <Container>
            <Header>
              <Left>
                <Button transparent onPress = {()=>{
                    goBack();
                }}>
                  <Icon name='arrow-back' />
                </Button>
              </Left>
              <Body style={styles.body}>
                <Title>Header</Title>
              </Body>
              <Right>
                <Button transparent>
                  <Icon name='menu' />
                </Button>
              </Right>
            </Header>
          </Container>
        );
    }
}


const styles  = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : "center",
        alignItems : "center"
    },
    body : {
        alignItems : "center",
        justifyContent : "center",
        width : "100%"
    }
})