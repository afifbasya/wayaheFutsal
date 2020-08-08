import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {
  LogoAnnahl,
  LogoVamos,
  LogoVeFC,
  LogoAwang,
  LogoArsyil,
} from '../../assets';
import { WARNA_UTAMA } from '../../utils/constants';

const UpdateScore = ({klub1, klub2, score1, score2, data}) => {
  const Logo = (klub) => {
    if (klub.klub === 'An-Nahl FA')
      return <Image source={LogoAnnahl} style={styles.logo} />;

    if (klub.klub === 'Vamos FC')
      return <Image source={LogoVamos} style={styles.logo} />;

    if (klub.klub === 'VE FC')
      return <Image source={LogoVeFC} style={styles.logo} />;

    if (klub.klub === 'Awang Long FA')
      return <Image source={LogoAwang} style={styles.logo} />;

    if (klub.klub === 'Arsyil FC')
      return <Image source={LogoArsyil} style={styles.logo} />;

    return <Image source={LogoArsyil} style={styles.logo} />;
  };

  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.match}>
        <View style={styles.box}>
          <Logo klub={klub1} />
          <Text style={styles.text}>{klub1}</Text>
        </View>
        <View style={styles.score}>
          <Text style={styles.textScore}>
            {score1} : {score2}
          </Text>
        </View>
        <View style={styles.box}>
          <Logo klub={klub2} />
          <Text style={styles.text}>{klub2}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default UpdateScore;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginRight: 10,
  },
  logo: {
    width: 52,
    height: 52,
  },
  text: {
    fontSize: 10,
    fontFamily: 'Poppins-Bold',
    color: 'black'
  },
  match: {
      flexDirection: 'row'
  },
  box: {
    backgroundColor: 'white',
   
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 1,
    marginBottom: 10
  },
  textScore: {
      fontSize: 10,
      fontFamily: 'Poppins-Bold',
      color: WARNA_UTAMA
  },
  score: {
      height: 21,
      backgroundColor: 'white',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
      borderRadius: 5,
      paddingHorizontal: 6,
      paddingVertical: 3,
      position: 'relative',
      zIndex: 1,
      marginHorizontal: -15,
  }
});
