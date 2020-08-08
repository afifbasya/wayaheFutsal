import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';
import {
  HeaderInformation,
  Layanan,
  SmallButton,
  BoxKlub,
  UpdateScore,
} from '../../components';
import {ImageBanner} from '../../assets';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      layanan: 'booking',
    };
  }

  clickLayanan(value) {
    this.setState({
      layanan: value,
    });
  }

  render() {
    return (
      <View style={styles.page}>
        <ScrollView vertical showsVerticalScrollIndicator={false}>
          <View style={styles.wrapperHeader}>
            <HeaderInformation />
            <Image source={ImageBanner} style={styles.banner} />
          </View>
          <View style={styles.wrapperLabel}>
            <Text style={styles.label}>
              Ayo <Text style={styles.textBold}>Wayahe Futsal</Text>
            </Text>
          </View>
          <View style={styles.layanan}>
            <Layanan
              title="Paket Langganan"
              onPress={() => this.clickLayanan('paket')}
              active={this.state.layanan === 'paket' ? true : false}
            />
            <Layanan
              title="Booking Lapangan"
              onPress={() => this.clickLayanan('booking')}
              active={this.state.layanan === 'booking' ? true : false}
            />
            <Layanan
              title="Join Team"
              onPress={() => this.clickLayanan('join')}
              active={this.state.layanan === 'join' ? true : false}
            />
          </View>
          <View style={styles.labelSparing}>
            <Text style={styles.label}>
              Pilih Tim <Text style={styles.textBold}>Sparing</Text> Kamu
            </Text>
            <SmallButton text="Lihat Semua" />
          </View>
          <View style={styles.wrapperScroll}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.klub}>
                <BoxKlub klub="An-Nahl FA" statistik="WWWDDDD" />
                <BoxKlub klub="Vamos FC" statistik="WWWWWW" />
                <BoxKlub klub="VE FC" statistik="WWDDLL" />
                <BoxKlub klub="Arsyil FC" statistik="DDWDDDD" />
                <BoxKlub klub="Awang Long FA" statistik="WWLDDDD" />
              </View>
            </ScrollView>
          </View>
          <View style={styles.labelSparing}>
            <Text style={styles.label}>Update Score</Text>
            <SmallButton text="Lihat Semua" />
          </View>
          <View style={styles.wrapperScroll}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.score}>
                <UpdateScore
                  klub1="An-Nahl FA"
                  klub2="Vamos FC"
                  score1="5"
                  score2="2"
                  date="Rabu, 1 Juli 2020 19.00 WIB"
                />
                <UpdateScore
                  klub1="VE FC"
                  klub2="Arsyil FC"
                  score1="7"
                  score2="4"
                  date="Kamis, 2 Juli 2020 19.00 WIB"
                />
                <UpdateScore
                  klub1="Bogor FC"
                  klub2="Awang Long FA"
                  score1="1"
                  score2="4"
                  date="Kamis, 2 Juli 2020 19.00 WIB"
                />
              </View>
            </ScrollView>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default Home;

const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  wrapperHeader: {
    paddingHorizontal: 30,
    paddingTop: 30,
  },
  banner: {
    marginTop: windowHeight * 0.016,
    width: '100%',
    height: windowHeight * 0.16,
  },
  label: {
    fontSize: 18,
    fontFamily: 'Poppins-Light',
  },
  textBold: {
    fontSize: 18,
    fontFamily: 'Poppins-Bold',
  },
  wrapperLabel: {
    paddingHorizontal: 30,
    marginTop: 14,
  },
  layanan: {
    marginTop: windowHeight * 0.035,
    flexDirection: 'row',
    paddingHorizontal: 30,
    justifyContent: 'space-between',
  },
  labelSparing: {
    flexDirection: 'row',
    paddingHorizontal: 30,
    marginTop: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  klub: {
    marginTop: 10,
    flexDirection: 'row',
  },
  score: {
    marginTop: 10,
    flexDirection: 'row',
  },
  wrapperScroll: {
    paddingHorizontal: 30,
  },
});
