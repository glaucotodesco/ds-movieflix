import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { theme } from '../styles';

export default function Movies() {
    return (
      <View style={theme.container}>
          <View style={theme.card}>
            <Text>Movies</Text>
            </View>
      </View>
    )
}

