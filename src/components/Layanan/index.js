import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {IconLangganan, IconBooking, IconJoinTeam} from '../../assets';
import {WARNA_UTAMA, WARNA_SEKUNDER} from '../../utils/constants';

const Layanan = ({title, active, onPress}) => {
  const Icon = () => {
    if (title === 'Paket Langganan') return <IconLangganan />;
    if (title === 'Booking Lapangan') return <IconBooking />;
    if (title === 'Join Team') return <IconJoinTeam />;
    return <IconJoinTeam />;
  };
  return (
    <TouchableOpacity style={styles.container(active)} onPress={onPress}>
      <View style={styles.icon}>
        <Icon />
        <Text style={styles.text(active)}>{title.replace(' ', '\n')}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Layanan;

const styles = StyleSheet.create({
  container: active => ({
    alignItems: 'center',
    backgroundColor: active ? WARNA_UTAMA : '#FFFFFF',
    borderRadius: 10,
    padding: 10,
    borderColor: WARNA_SEKUNDER,
    borderWidth: active ? 0 : 2 
  }),
  text: active => ({
    fontSize: 14,
    fontFamily: 'Poppins-Bold',
    color: active ? 'white' : WARNA_SEKUNDER,
    textAlign: 'center',
  }),
  icon: {
      marginTop: -30
  }
});
