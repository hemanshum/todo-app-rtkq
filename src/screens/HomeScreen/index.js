import { useState } from 'react';
import { StyleSheet, View, Platform } from 'react-native';
import { Card, Checkbox, Text, MD2Colors } from 'react-native-paper';

const HomeScreen = () => {
  const [checked, setChecked] = useState(false);
  return (
    <View style={styles.container}>
      <Text>Your Todos</Text>
      <Card style={styles.cardContainer}>
        <Card.Content style={styles.cardContent}>
          <View style={styles.checkBox}>
            <Checkbox
              status={checked ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked(!checked);
              }}
            />
          </View>
          <View style={styles.contentContainer}>
            <Text variant="titleSmall">Card title</Text>
            <Text variant="bodyMedium">Test</Text>
          </View>
        </Card.Content>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
    marginHorizontal: 12,
  },
  cardContainer: {
    marginVertical: 4,
  },
  cardContent: {
    flexDirection: 'row',
  },
  contentContainer: {
    marginLeft: 16,
  },
  checkBox: {
    borderWidth: Platform.OS === 'ios' ? 1 : 0,
    alignSelf: 'baseline',
    borderRadius: 100,
    borderColor: MD2Colors.purple100,
  },
});

export default HomeScreen;
