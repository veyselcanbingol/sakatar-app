import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import { styles } from '../styles/styles'



const Sayfalar = ({ navigation }) => {
  return (
    <View>
      <View
        style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            navigation.navigate('Meteoroloji')}
        >
          <Text>METEOROLOJİ</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            navigation.navigate('HastalikliBolgeler')}
        >
          <Text>HASTALIKLI BÖLGELER</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            navigation.navigate('SakaTT')}
        >
          <Text>SAKA TT</Text>
        </TouchableOpacity> 
      </View>
    </View>
  );
};

export default withNavigation(Sayfalar);