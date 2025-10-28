// Repo2/src/components/MiddleContent.js
import { Alert, Button, StyleSheet, Text, View } from 'react-native';

export default function MiddleContent() {
  const handlePress = () => {
    Alert.alert("Hello from Repo 2 updated!");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Middle content from Repo 2</Text>
      <Button title="Click Me updated" onPress={handlePress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FAFAD2',
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
  },
});
