import React from 'react';
import { View } from 'react-native';
import Button from '../components/Button';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();
  const goToOption1 = () => navigation.navigate('Option1');

  return (
    <View>
      <Button title="Go to Option1" onPress={goToOption1} />
    </View>
  );
};

export default HomeScreen;
