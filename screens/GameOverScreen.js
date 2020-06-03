import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';
import Colors from '../constants/colors';
import MainButton from '../components/MainButton';
const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <TitleText>Game Over</TitleText>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          resizeMode="cover"
          //source={require('../assets/cc.jpg')}
          source={{
            uri:
              'https://scontent-hel2-1.xx.fbcdn.net/v/t1.0-9/p960x960/91520382_2646835038973027_4586301211224834048_o.jpg?_nc_cat=102&_nc_sid=85a577&_nc_ohc=a7mjSV1cjVsAX-wO-uq&_nc_ht=scontent-hel2-1.xx&_nc_tp=6&oh=e4343dc870a4f6b2e33151d6d472a011&oe=5EF89803',
          }}
        />
      </View>
      <View style={styles.resultContainer}>
        <BodyText style={styles.resultText}>
          Your device needed <Text style={styles.highlight}>{props.numOfRounds}</Text> to guess the number{' '}
          <Text style={styles.highlight}>{props.userNumber}</Text>. Are you okela?
        </BodyText>
      </View>
      <MainButton onPress={props.onRestartGame}>Restart</MainButton>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  imageContainer: {
    borderRadius: 150,
    borderWidth: 3,
    borderColor: 'black',
    width: 300,
    height: 300,
    overflow: 'hidden',
    marginVertical: 30,
  },
  resultContainer: {
    marginHorizontal: 30,
    marginVertical: 15,
  },
  highlight: {
    color: Colors.primary,
    fontFamily: 'open-sans-bold',
  },
  resultText: {
    textAlign: 'center',
    fontSize: 20,
  },
});

export default GameOverScreen;
