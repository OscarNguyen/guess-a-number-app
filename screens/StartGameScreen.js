import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, Alert, Button, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Card from '../components/Card';
import Colors from '../constants/colors';
import Input from '../components/Input';
import NumberContainer from '../components/NumberContainer';
import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';
import MainButton from '../components/MainButton';

const StartGameScreen = (props) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();
  const numberInputHandler = (inputText) => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ''));
  };

  const resetInputHandler = () => {
    setEnteredValue('');
    setConfirmed(false);
  };

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredValue);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert('Invalid number', 'Please input the number from 1 to 99', [
        { text: 'Okay', style: 'destructive', onPress: { resetInputHandler } },
      ]);
      return;
    } else {
      setConfirmed(true);
      setSelectedNumber(chosenNumber);
      setEnteredValue('');
      Keyboard.dismiss();
    }
  };

  let confirmedOutput;
  if (confirmed) {
    confirmedOutput = (
      <Card style={styles.summaryContainer}>
        <BodyText>You selected</BodyText>
        <NumberContainer>{selectedNumber}</NumberContainer>
        <MainButton onPress={() => props.onStartGameHandler(selectedNumber)}>START GAME</MainButton>
      </Card>
    );
  }
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.screen}>
        <TitleText>Start a new game</TitleText>
        <Card style={styles.inputContainer}>
          <BodyText>Select a number</BodyText>
          <Input
            blurOnSubmit
            onChangeText={numberInputHandler}
            value={enteredValue}
            keyboardType="number-pad"
            maxLength={2}
            style={styles.input}
          />
          <View style={styles.buttonsContainer}>
            <View style={styles.button}>
              <Button onPress={resetInputHandler} color={Colors.accent} title="Reset" />
            </View>
            <View style={styles.button}>
              <Button onPress={confirmInputHandler} color={Colors.primary} title="Confirm" />
            </View>
          </View>
        </Card>
        {confirmedOutput}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  inputContainer: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
    fontFamily: 'open-sans-bold',
  },
  buttonsContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    marginTop: 10,
  },
  button: {
    width: '40%',
    justifyContent: 'center',
  },
  input: {
    width: 150,
    textAlign: 'center',
  },
  summaryContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  text: {
    fontFamily: 'open-sans',
  },
});

export default StartGameScreen;
