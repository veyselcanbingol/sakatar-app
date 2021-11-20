import {StyleSheet, Dimensions} from 'react-native'

const SCREEN_WIDTH = Dimensions.get("window").width;

export const styles = StyleSheet.create({
    container: {
      flex: 0,
      justifyContent: "space-around",
      paddingHorizontal: 5,
      flexDirection: 'row',
      marginTop: 60,
      marginBottom: 20
    },
    container1: {
      flex: 1, 
    },
    container2: {
      alignItems: 'center',
      marginTop: 20,
    },
    button: {
      alignItems: "center",
      backgroundColor: "#DDDDDD",
      padding: 7,
      borderRadius: 50,
      marginBottom: 20,
    },
    input: {
      width: 250,
      height: 44,
      padding: 10,
      marginTop: 20,
      marginBottom: 5,
      backgroundColor: '#e8e8e8',
      borderRadius: 50,
      fontWeight: 'bold'
    },
    sicknessPhoto: {
      marginTop: 25,
      marginBottom: 20,
      width: 400,
      height: 225,
      borderRadius: 50,
    },
    textStyle: {
      alignItems: "center",
      justifyContent: "center",
      marginLeft: 20
    },
    firebase: {
      backgroundColor: "#ffffff",
      paddingVertical: 22,
      paddingHorizontal: 30,
      borderRadius: 30,
      textAlign: 'center',
      width: SCREEN_WIDTH - 210,
      height: 60,
      marginTop: 5,
      overflow: 'hidden'     
    },   
    viewStyle: {
      flexDirection: 'row',
    },
    space: {
      flexDirection: 'row'
    },
    leftTextStyle: {
      backgroundColor: "#DDDDDD",
      paddingTop: 15,
      paddingHorizontal: 30,
      paddingVertical: 15,
      borderRadius: 50,
      textAlign: 'center',
    },
    metView: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      marginBottom: 15,
    },
    metView1: {
      marginVertical: 25,
    },
    scrollView: {
      backgroundColor: 'rgba(52,52,52,0)',
    },
    
    riskView: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: "#39524B",
      width: SCREEN_WIDTH - 40,
      height: 70,
      alignSelf: 'center',
      borderRadius: 50,
      marginBottom: 15,
      overflow: 'hidden'

    },
    riskStyle: {
      backgroundColor: "#39524B",
      paddingVertical: 25,
      paddingHorizontal: 20,
      borderRadius: 50,
      textAlign: 'center',
      overflow: 'hidden',
      color: 'white'
    },
    textSakaTT: {
      margin: 10,
      textAlign: 'center',
      color: 'white'
    },
    textSakaTT2: {
      margin: 10,
      textAlign: 'justify',
      margin: 30,
    },
    containerSakaTT: {
      borderRadius: 50,
      marginVertical: 10,
      width: SCREEN_WIDTH - 35,
      backgroundColor: '#39524B',
      alignSelf: 'center'
    },
    containerSakaTT2: {
      borderRadius: 50,
      marginVertical: 10,
      width: SCREEN_WIDTH - 35,
      backgroundColor: '#F1ECD7',
      alignSelf: 'center'
    },
    containerSayfalar: {
      flex: 0,
      justifyContent: "space-evenly",
      paddingHorizontal: 5,
      flexDirection: 'row',
      marginTop: 60
    },
    buttonSayfalar: {
      alignItems: "center",
      backgroundColor: "#Ffffff",
      padding: 7,
      borderRadius: 50
    },
    textStyleSayfalar: {
      alignItems: "center",
      justifyContent: "center",
      marginLeft: 20
    },
  });