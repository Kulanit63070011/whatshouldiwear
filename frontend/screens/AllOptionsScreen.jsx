import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';

const AllOptionsScreen = () => {
  const route = useRoute();
  const { selectedOptions } = route.params;
  console.log(selectedOptions);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Selected Options:</Text>
      {selectedOptions.map((option, index) => (
        <Text key={index} style={styles.option}>
          {option}
        </Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  option: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default AllOptionsScreen;
