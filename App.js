import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';
import * as Font from 'expo-font';
import { AppLoading, Logs } from 'expo';

const fecthFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/fonts/OpenSans-Bold.ttf'),
  });
};
export default function App() {
  const [userNum, setUserNum] = useState();
  const [guessRounds, setGuessRounds] = useState(0);
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fecthFonts}
        onFinish={() => setDataLoaded(true)}
        onError={(error) => console.log(error)}
      />
    );
  }
  const restartGame = () => {
    setGuessRounds(0);
    setUserNum(null);
  };

  const startGameHandler = (selectedNumber) => {
    setUserNum(selectedNumber);
  };

  const gameOverHandler = (numOfRounds) => {
    setGuessRounds(numOfRounds);
  };

  let content = <StartGameScreen onStartGameHandler={startGameHandler} />;
  if (userNum && guessRounds <= 0) {
    content = <GameScreen onGameOver={gameOverHandler} userChoice={userNum} />;
  } else if (guessRounds > 0) {
    content = <GameOverScreen onRestartGame={restartGame} userNumber={userNum} numOfRounds={guessRounds} />;
  } else if (guessRounds === 0 && !userNum) {
    content = <StartGameScreen onStartGameHandler={startGameHandler} />;
  }

  return (
    <View style={styles.screen}>
      <Header title="cc" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
