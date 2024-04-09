import React, { useRef, useEffect } from 'react';
import { StyleSheet, Text, View, Animated, Easing } from 'react-native';

export default function App() {
  const moonAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(moonAnimation, {
      toValue: 1,
      duration: 10000,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();
  }, [moonAnimation]);

  const moonLeft = moonAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0%', '90%']
  });

  const moonColor = moonAnimation.interpolate({
    inputRange: [0, 0.25, 0.5, 0.75, 1],
    outputRange: ['#FFD700', '#FFA500', '#000000', '#FFA500', '#FFD700']
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Eclipse 2024 🌒</Text>
      <View style={styles.sun} />
      <Animated.View style={[styles.moon, { left: moonLeft, backgroundColor: moonColor }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 20,
  },
  moon: {
    position: 'absolute',
    bottom: '50%',
    width: 70,
    height: 70,
    borderRadius: 35,
    zIndex: 1,
    elevation: 5,
    borderWidth: 3,
    borderColor: '#FFD700',
  },
  sun: {
    position: 'absolute',
    bottom: '50%',
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#FFA500',
    zIndex: 0,
  },
});
