
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { Back, Heart, PinIcon, More, Share } from '../icons'



export default class Pin extends Component {
  render() {
    return (
      <View style={styles.PinContainer}>
        <View style={styles.PinHeader}>
          <View style={styles.UtilityNav}>
            <Back />
            <Heart />
            <Share />
            <More />
          </View>
          <View style={styles.PinButtonContainer}>
            <View style={styles.PinButton}>
              <PinIcon />
              <Text style={styles.PinButtonText}>Save</Text>
            </View>
          </View>
        </View>
        <View style={styles.PinContent}>
          <Text style={styles.ImagePlaceholder}>Placeholder</Text>
        </View>

        <View style={styles.PinMeta}>
          <View style={styles.PinMetaTextContainer}>
            <Text style={styles.PinMetaText}>Saved from</Text>
            <Text style={[styles.PinMetaText,styles.TextBold]}>website.com</Text>
          </View>
          <View style={styles.PinButtonContainer}>
            <View style={[styles.PinButton, styles.UtilityButton]}>
              <Text style={[styles.PinButtonText, styles.UtilityButtonText]}>Visit</Text>
            </View>
          </View>
        </View>


        <View style={styles.PinUser}>
          <View style={styles.PinUserAvatar}>
            <Text></Text>
          </View>
          <View style={styles.PinUserContainer}>
            <Text style={styles.PinUserText}>
              <Text style={styles.TextBold}>User name </Text> 
              saved to
              <Text style={styles.TextBold}> Space</Text>
              </Text>
            <Text style={styles.PinUserText}>Lorem ipsum</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  PinContainer:{
    flex:1,
    alignSelf:'stretch'
  },
  PinHeader:{
    backgroundColor:'white',
    flexDirection:'row',
    alignItems:'flex-end',
    justifyContent:'space-between',
    flex:1,
    padding:8
  },
  UtilityNav:{
    flex:2,
    justifyContent:'space-between',
    flexDirection:'row'
  },
  PinButton:{
    flexDirection:'row',
    backgroundColor:'red',
    padding:5,
    borderRadius:6,
    justifyContent:'space-between',
    width:60
  },
  PinButtonContainer:{
    flex:3,
    alignItems:'flex-end'
  },
  PinContent:{
    flex:3,
    paddingRight:8,
    paddingLeft:8,
    justifyContent:'center',
    alignItems:'center'
  },
  PinMeta:{
    flex:1,
    flexDirection:'row',
    padding:16,
    paddingTop:20
  },
  PinUser:{
    flex:5,
    flexDirection:'row',
    paddingLeft:8,
    paddingRight:8
  },
  ImagePlaceholder:{
    backgroundColor:'#1e1e1e',
    flex:1,
    alignSelf:'stretch',
    borderRadius:6
  },
  PinMetaTextContainer:{
  },
  UtilityButton:{ 
    backgroundColor:'#cecece',
    justifyContent:'center',
    alignItems:'center'},
    UtilityButtonText:{
    color:'black', 
    fontWeight:'bold'
  },
  TextBold:{
    color:'black', 
    fontWeight:'bold'
},
  PinUserAvatar:{
    width:55,
    height:55,
    backgroundColor:'black',
    borderRadius:25,
    margin:8
  },
  PinUserContainer:{
    paddingTop:10
  }
})
