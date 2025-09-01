import React, { useMemo } from 'react';
import { View, FlatList, SafeAreaView, StatusBar, StyleSheet, Text } from 'react-native';
import ProductCard from '../components/ProductCard';

const MOCK_DATA = [
  {
    id: '1',
    name: 'Hambúrguer',
    calories: 230,
    price: 35.0,
    imageUrl: 'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: '2',
    name: 'Panqueca',
    calories: 190,
    price: 15.0,
    imageUrl: 'https://images.unsplash.com/photo-1528207776546-365bb710ee93?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: '3',
    name: 'Batata Frita',
    calories: 150,
    price: 8.5,
    imageUrl: 'https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

export default function HomeScreen({ navigation }) {
  const data = useMemo(() => MOCK_DATA, []);

  const handlePress = (product) => {
    navigation.navigate('Details', { product });
  };

  const renderItem = ({ item }) => (
    <ProductCard product={item} onPress={handlePress} />
  );

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.header}>
        <Text style={styles.title}>FastFood</Text>
        <Text style={styles.subtitle}>Encontre suas refeições favoritas!</Text>
      </View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  header: {
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 4,
  },
  title: {
    fontSize: 22,
    fontWeight: '800',
    color: '#111827',
  },
  subtitle: {
    marginTop: 2,
    fontSize: 13,
    color: '#6b7280',
  },
  listContent: {
    paddingBottom: 24,
  },
});