// simpleLibrary/Button.js
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const Button = ({ title, onPress, style, textStyle }) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        ...style
      }}
      onPress={onPress}
    >
      <Text style={{ color: 'white', ...textStyle }}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;