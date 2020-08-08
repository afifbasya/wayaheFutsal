import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import {HeaderInformation, Layanan} from '../../components';
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
});
