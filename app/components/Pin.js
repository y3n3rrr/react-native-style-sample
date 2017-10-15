
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import {Back,Heart,PinIcon} from '../icons'



export default class Pin extends Component {
  render() {
    return (
      <View style={styles.PinContainer}>
      <View style={styles.PinHeader}>
      <View style={styles.UtilityNav}>
      <Back />
      <Heart />
      </View>
      <View style={styles.PinButtonContainer}>
      <View style={styles.PinButton}>
      <PinIcon />
      <Text style={styles.PinButtonText}></Text>
      </View>
      </View>
      
      </View>
      <View style={styles.PinContent}>
      <Text style={styles.ImagePlaceholder}>Placeholder</Text>
      </View>

      <View style={styles.PinMeta}>
      <View style={styles.PinMetaTextContainer}>
      <Text style={styles.PinMetaText}>Saved from</Text>
      <Text style={styles.PinMetaText}>website.com</Text>
      </View>
      <View style={styles.PinButtonContainer}>
      <View style={styles.PinButton}>
      <Text style={styles.PinButtonText}>Visit</Text>
      </View>
      </View>
      </View>


      <View style={styles.PinUser}>
      <View style={styles.PinUserAvatar}>
      <Text>Placeholder</Text>
      </View>
      <View style={styles.PinUserAvatar}>
      <Text style={styles.PinUserText}>
      <Text style={styles.TextBold}>User name </Text> saved to 
      <Text style={styles.TextBold}>space</Text></Text>
      <Text style={styles.PinUserText}>Lorem ipsum</Text>
      </View>
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({

})
