import React from 'react';
import { Image, View, Text } from 'react-native';

export function Button({ label }: { label: string }) {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Image source={require('./assets/bananas.png')} />
      <Text>{label}</Text>
    </View>
  );
}

export default Button;
