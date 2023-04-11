import React, { useState } from 'react';
import { View, Button } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const Option2Screen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { selectedOptions: optionsFromPreviousScreen } = route.params;
  const [selectedOptions, setSelectedOptions] = useState(optionsFromPreviousScreen);

  const handleOptionPress = (option) => {
    const newOptions = [...optionsFromPreviousScreen, option];
    setSelectedOptions(newOptions);
  };

  const goToAllOptions = () => navigation.navigate('AllOptions', { selectedOptions });

  return (
    <View>
      <Button title="Bohimian Style" onPress={() => handleOptionPress('Bohimian')} />
      <Button title="Lolita Style" onPress={() => handleOptionPress('Lolita')} />
      <Button title="Next" onPress={goToAllOptions} />
    </View>
  );
};

export default Option2Screen;
