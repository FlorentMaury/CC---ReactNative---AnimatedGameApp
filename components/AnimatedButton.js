import React, { useRef } from 'react';
import { StyleSheet, Text, TouchableWithoutFeedback, Animated, View } from 'react-native';

export default function AnimatedButton({ action, onPress }) {
  const opacity = useRef(new Animated.Value(1)).current; // Initialize animated value for opacity

  const handlePress = () => {
    // Animate opacity to 0 and back to 1
    Animated.timing(opacity, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start(() => {
      Animated.timing(opacity, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }).start();
      onPress(); // Call the onPress function passed as a prop
    });
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <Animated.View
        style={[
          styles.button,
          action === 'higher' ? styles.buttonGreen : styles.buttonRed,
          { opacity }, // Apply animated opacity
        ]}
      >
        <Text style={styles.buttonText}>{action}</Text>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderRadius: 15,
    padding: 30,
    marginVertical: 15,
  },
  buttonRed: {
    backgroundColor: 'red',
  },
  buttonGreen: {
    backgroundColor: 'green',
  },
  buttonText: {
    color: 'white',
    fontSize: 24,
    textTransform: 'capitalize',
  },
});