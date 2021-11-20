import React from "react";
import { View, ImageBackground, Text } from "react-native";
import Sayfalar from '../components/Sayfalar';
import { ScrollView } from "react-native";
import { styles } from '../styles/styles';

const SakaTT = () => {
  return (
    <View>
      <ImageBackground
        source={require('../../assets/background4.png')}
        style={{ width: '100%', height: '100%' }}
      >
        <Sayfalar />
        <ScrollView>

        <View style={styles.containerSakaTT}>
          <Text style={styles.textSakaTT} appearance='alternative'>
            BİZ KİMİZ?
        </Text>
        </View>

        <View style={styles.containerSakaTT2}>
          <Text style={styles.textSakaTT2} appearance='alternative'>
            Bizler, dünyada yaşanmakta olan dijital dönüşüm sürecinde Türkiye’nin de
            son yıllarda yakından takip ederek ortaya koyduğu teknolojideki yerli
            ve milli atılımını büyük bir heyecanla takip eden vatansever gençleriz.
            Eğitim gördüğümüz kurum olan Konya Gıda ve Tarım Üniversitesi
            bünyesinde teknolojik gelişmeleri sadece takip etmek değil aynı
            zamanda geliştirmek amacıyla Saka Teknoloji Takımı'nı kurmuş
            bulunuyoruz. Ekibimizin tamamı mühendislik programları
            öğrencilerinden oluşmaktadır.
        </Text>
        </View>

        <View style={styles.containerSakaTT}>
          <Text style={styles.textSakaTT} appearance='alternative'>
            MİSYONUMUZ
        </Text>
        </View>

        <View style={styles.containerSakaTT2}>
          <Text style={styles.textSakaTT2} appearance='alternative'>
            Üniversitemiz “Bilgiyi Ürüne Dönüştüren Üniversite” sloganıyla
            uluslararası bir araştırma üniversitesi olmak hedefiyle kurulmuştur.
            Takım olarak bu hedef doğrultusunda görüntü işleme, veri bilimi,
            yapay zekâ, makine öğrenmesi alanlarında donanımlı mühendisler
            olmaya çalışmaktayız.
        </Text>
        </View>

        <View style={styles.containerSakaTT}>
          <Text style={styles.textSakaTT} appearance='alternative'>
            VİZYONUMUZ
        </Text>
        </View>

        <View style={styles.containerSakaTT2}>
          <Text style={styles.textSakaTT2} appearance='alternative'>
            Vizyonumuz hedeflediğimiz alanlarda kendimizi en iyi şekilde
            geliştirmek, ülkemizin yerli ve milli teknoloji atılımına omuz vermek,
            çalışmalarımızda oluşan bilgi birikimi ve hatalarımızı paylaşarak
            ülkemizin bu büyük atılım dönemine katkı sağlamaktır.
        </Text>
        </View>

        <View style={styles.containerSakaTT}>
          <Text style={styles.textSakaTT} appearance='alternative'>
            İLETİŞİM
        </Text>
        </View>

        <View style={styles.containerSakaTT2}>
          <Text style={styles.textSakaTT2} appearance='alternative'>
            {
            `E-Posta: sakateknolojitakimi@gmail.com\n\nInstagram: @sakateknolojitakimi\n\nTakım Üyeleri:
            
            Yunus Emre Güçlü
            Mehmet Taha Uyar
            Muaz Asilkan
            Veysel Can Bingöl
            Furkan Özçelik`}

        </Text>
        </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default SakaTT;
