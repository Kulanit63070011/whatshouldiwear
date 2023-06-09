import { React, useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';

const AllOptionsScreen = () => {
  const route = useRoute();
  const { selectedOptions } = route.params;
  console.log(selectedOptions);
  // const mon = ['blue', 'green', 'pink'];

  // const [randomColor, setRandomColor] = useState(null);

  // useEffect(() => {
  //   const randomIndex = Math.floor(Math.random() * selectedOptions.length);
  //   const color = selectedOptions[randomIndex];
  //   setRandomColor(color);
  // }, []);

  return (
    <View style={[styles.container, {backgroundColor: '#ea1b15'}]}>
      <View style={styles.card}>
      <Text style={styles.title}>Selected Options:</Text>
      {selectedOptions.map((option, index) => (
        <Text key={index} style={styles.option}>
          {option}
        </Text>
      ))}
      {/* {randomColor && (
        <Text>Random Word: {randomColor}</Text>
      )} */}
    </View>
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
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 5,
    alignItems: 'center',
    height: '500px',
    justifyContent: 'center',
    width: '95%'
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
