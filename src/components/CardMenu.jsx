import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const CardMenu = ({ title, img }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={() => {}}>
      <Image source={img} style={styles.image} resizeMode="cover" />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f3f4f6',
    width: 264, 
    height: 208, 
    borderRadius: 12,
    margin: 20,
    justifyContent: 'flex-start',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  image: {
    backgroundColor: '#fff',
    width: '100%',
    height: '75%',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  title: {
    textAlign: 'center',
    fontSize: 24, 
    color: '#000',
    paddingTop: 10,
  },
});

export default CardMenu;
