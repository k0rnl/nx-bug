import React from 'react';
import { SafeAreaView, Text } from 'react-native';

import { Button } from '@testgithub/lemit/shared-ui/button';

export const App = () => {
  return (
    <SafeAreaView>
      <Text>lemit-app</Text>
      <Button label="LoremIpsum component" />
    </SafeAreaView>
  );
};

export default App;
