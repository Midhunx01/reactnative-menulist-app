import { StyleSheet, Text, View } from 'react-native';
import  CategoryScreen from './screens/CategoryScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <CategoryScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
