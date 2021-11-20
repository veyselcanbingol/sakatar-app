import React, { useState } from "react";
import { Text, View, ImageBackground, TextInput, Image, ScrollView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Sayfalar from '../components/Sayfalar';
import { styles } from '../styles/styles'
import { AntDesign } from '@expo/vector-icons';




const HastalikliBolgeler = () => {

  const [photo, setPhoto] = useState(1);
  const [folder, setFolder] = useState('');


  const link = `https://firebasestorage.googleapis.com/v0/b/sakatar-c2fb3.appspot.com/o/${folder}.scan%2Fdetected${photo}.jpg?alt=media&token=Saka-TT`

  const azalt = () => {
    parseInt(photo) <= 1 ? setPhoto(parseInt(photo)) : setPhoto(parseInt(photo) - 1)
  }

  return <View>
    <ImageBackground
      source={require('../../assets/background.png')}
      style={{ width: '100%', height: '100%' }}
    >
      <Sayfalar />
      <ScrollView
        keyboardShouldPersistTaps='handled'
      >
        <View style={styles.container2}>
          <Text style={{ fontWeight: 'bold' }}>Dosya Numarası</Text>

          <TextInput
            keyboardType='numeric'
            value={folder}
            onChangeText={(folder) => setFolder(folder)}
            placeholder={'Dosya numarasını giriniz'}
            style={styles.input}
            numeric
            keyboardType={'numeric'}
            textAlign='center' />

          <Text style={{ fontWeight: 'bold', marginTop: 20 }}>Tespit Edilen Hastalık Görselleri</Text>

          <Image
            style={styles.sicknessPhoto}
            source={{
              uri: link
            }}
          />
          
          <View style={styles.space}>
            <TouchableOpacity
              onPress={() => azalt()}
            >
              <AntDesign name="caretleft" size={50} color="black" />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => setPhoto(parseInt(photo) + 1)}
            >
              <AntDesign name="caretright" size={50} color="black" />
            </TouchableOpacity>
          </View>
          <Text style={{ color: 'black', fontSize: 25, fontWeight: 'bold' }}>{photo}</Text>
        </View>
      </ScrollView>
    </ImageBackground>
  </View>
};

export default HastalikliBolgeler;
