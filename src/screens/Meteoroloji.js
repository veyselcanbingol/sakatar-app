import React, { useEffect, useState } from "react";
import { Text, View, ImageBackground, LogBox, RefreshControl, SafeAreaView, ScrollView, Dimensions } from "react-native";
import Sayfalar from '../components/Sayfalar';
import firebase from '../../firebase'
import { styles } from '../styles/styles'
import { Icon } from 'react-native-elements';

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}


LogBox.ignoreAllLogs();//Ignore all log notifications


const Meteoroloji = () => {

  const firestore = firebase.firestore();

  const [weatherData, setWeatherData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [uyari, setUyari] = useState(true);
  const [uyariSicaklik, setUyariSicaklik] = useState(true);
  const [uyariNem, setUyariNem] = useState(true);
  const [uyariRuzgar, setUyariRuzgar] = useState(true);

  const SCREEN_HEIGHT = Dimensions.get("window").height;

  useEffect(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false))
  }, []);

  useEffect(() => {
    if (temperature > 24 && temperature < 33) {
      setUyariSicaklik(false);
    }
    else {
      setUyariSicaklik(true);
    }
  })

  useEffect(() => {
    if (humidity > 59) {
      setUyariNem(false);
    }
    else {
      setUyariNem(true);
    }
  })

  useEffect(() => {
    if (wind > 21) {
      setUyariRuzgar(false);
    }
    else {
      setUyariRuzgar(true);
    }
  })

  useEffect(() => {
    if ((uyariSicaklik == false && uyariNem == false) ||
      (uyariRuzgar == false && uyariNem == false) ||
      (uyariSicaklik == false && uyariRuzgar == false && uyariNem == false) ||
      (uyariSicaklik == false && uyariRuzgar == false)) {
      setUyari(false);
    }
    else {
      setUyari(true);
    }
  })

  useEffect(() => {
    readData()
  }, [])

  const doc = firestore.collection('SAKATAR').doc('ZGİ Veriler');

  // const observer = doc.onSnapshot(() => {
  //   setTimeout(() => {
  //     readData();
  //   }, 30000);
  // }, err => {
  //   console.log(`Encountered error: ${err}`);
  // });

  /**
   * Reads the data from firestore's weather-condition collection and returns that data
   * @returns [{weather-condition objects}]
   */
  const readData = async () => {
    const snapShot = await firestore.collection('SAKATAR').get()
    setWeatherData(snapShot.docs.map(document => document.data()))
    return (weatherData)
  }

  const riskDurumu = () => {
    if (uyari === false) {
      return <Icon
        raised
        name='exclamation-circle'
        type='font-awesome-5'
        color='#FF0000'
        size={25}
      />
    }
    else {
      return <Icon
        raised
        name='check-circle'
        type='font-awesome'
        color='#00FF00'
        size={25}

      />
    }
  }

  const sicaklikDegeri = () => {
    if (temperature > 27 && temperature < 32) {


      return <Icon
        raised
        name='exclamation-circle'
        type='font-awesome-5'
        color='#FF0000'
        size={25}
      />
    }
    else {

      return <Icon
        raised
        name='check-circle'
        type='font-awesome'
        color='#00FF00'
        size={25}
      />
    }
  }

  const nemDegeri = () => {
    if (humidity > 59) {

      return <Icon
        raised
        name='exclamation-circle'
        type='font-awesome-5'
        color='#FF0000'
        size={25}
      />
    }
    else {
      return <Icon
        raised
        name='check-circle'
        type='font-awesome'
        color='#00FF00'
        size={25}
      />
    }
  }

  const ruzgarDegeri = () => {
    if (wind > 21) {

      return <Icon
        raised
        name='exclamation-circle'
        type='font-awesome-5'
        color='#FF0000'
        size={25}
      />
    }
    else {
      return <Icon
        raised
        name='check-circle'
        type='font-awesome'
        color='#00FF00'
        size={25}
      />
    }
  }

  const basincDegeri = () => {
    if (pressure < 700) {

      return <Icon
        raised
        name='exclamation-circle'
        type='font-awesome-5'
        color='#FF0000'
        size={25}
      />
    }
    else {
      return <Icon
        raised
        name='check-circle'
        type='font-awesome'
        color='#00FF00'
        size={25}
      />
    }
  }

  const droneDegeri = () => {
    if (drone == 0) {

      return <Icon
        raised
        name='exclamation-circle'
        type='font-awesome-5'
        color='#FF0000'
        size={25}
      />
    }
    else {
      return <Icon
        raised
        name='check-circle'
        type='font-awesome'
        color='#00FF00'
        size={25}
      />
    }
  }

  const wind = weatherData.map(obj => obj.Rüzgar)
  const humidity = weatherData.map(obj => obj.Nem)
  const temperature = weatherData.map(obj => obj.Sıcaklık)
  const pressure = weatherData.map(obj => obj.Basınç)
  const drone = weatherData.map(obj => obj.DroneUçabilirlikDurumu)

  return (
    <View>
      <ImageBackground
        source={require('../../assets/background2.png')}
        style={{ width: '100%', height: '100%' }}
      >

        <Sayfalar />

        <SafeAreaView style={{ flex: 1 }}>
          <ScrollView
            style={{ flex: 1, height: SCREEN_HEIGHT }}

            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={readData}
              />
            }
          >
            <View
              style={styles.metView1}
            >
              <View
                style={styles.metView}
              >
                <Icon
                  raised
                  name='thermometer-three-quarters'
                  type='font-awesome-5'
                  color='#000000'
                  size={25}
                />
                <View style={{ overflow: 'hidden' }}><Text
                  style={styles.firebase}
                  numberOfLines={1}
                  adjustsFontSizeToFit
                >{`${temperature} ${'°C'}`}</Text></View>

                {sicaklikDegeri()}

              </View>
              <View
                style={styles.metView}
              >
                <Icon
                  raised
                  name='tint'
                  type='font-awesome'
                  color='#000000'
                  size={25}
                />
                <Text
                  style={styles.firebase}
                  numberOfLines={1}
                  adjustsFontSizeToFit
                >{`${'%'} ${humidity} `}</Text>
                {nemDegeri()}
              </View>
              <View
                style={styles.metView}
              >
                <Icon
                  raised
                  name='wind'
                  type='font-awesome-5'
                  color='#000000'
                  size={25}
                />

                <Text
                  style={styles.firebase}
                  numberOfLines={1}
                  adjustsFontSizeToFit
                >{`${wind} ${'km/sa'}`}</Text>
                {ruzgarDegeri()}
              </View>
              <View
                style={styles.metView}
              >
                <Icon
                  raised
                  name='tachometer'
                  type='font-awesome'
                  color='#000000'
                  size={25}
                />
                <Text
                  style={styles.firebase}
                  numberOfLines={1}
                  adjustsFontSizeToFit
                >{`${pressure} ${'hPA'}`}</Text>
                {basincDegeri()}
              </View>

              <View
                style={styles.riskView}
              >
                <Text
                  style={styles.riskStyle}
                >Hastalık Risk Durumu{"   "}</Text>
                <View>
                  {riskDurumu()}
                </View>
              </View>
              <View
                style={styles.riskView}
              >
                <Text
                  style={styles.riskStyle}
                >Drone Uçabilirlik{"   "}</Text>
                <View>
                  {droneDegeri()}
                </View>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </ImageBackground>
    </View>

  );
};

export default Meteoroloji;