import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MyHeader from '../component/MyHeader';

export default class BookDonateScreen extends React.Component{
    render(){
       
        return(
            <View>
                 <MyHeader title='donate books' navigation={this.props.navigation}/>
                <Text>
                    donate screen
                </Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    subContainer:{
      flex:1,
      fontSize: 20,
      justifyContent:'center',
      alignItems:'center'
    },
    button:{
      width:100,
      height:30,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:"#ff5722",
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 8
       }
    }
  })
  