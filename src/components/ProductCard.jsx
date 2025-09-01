import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function ProductCard({ product, onPress }) {
  const { name, calories, price, imageUrl } = product;
  return (
    <TouchableOpacity onPress={() => onPress?.(product)} activeOpacity={0.8} style={styles.card}>
      <Image source={{ uri: imageUrl }} style={styles.thumb} />
      <View style={styles.info}>
        <Text style={styles.name} numberOfLines={1}>{name}</Text>
        <Text style={styles.meta}>{calories} Calorias</Text>
        <Text style={styles.price}>R${price.toFixed(2)}</Text>
      </View>
      <View style={styles.chevron}>
        <Text style={styles.chevronText}>{'›'}</Text>
      </View>
    </TouchableOpacity>
  );
}

const CARD_RADIUS = 14;

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: CARD_RADIUS,
    padding: 12,
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    marginVertical: 8,
    marginHorizontal: 16,
  },
  thumb: {
    width: 72,
    height: 72,
    borderRadius: CARD_RADIUS,
    backgroundColor: '#f2f2f2',
  },
  info: {
    flex: 1,
    marginLeft: 12,
  },
  name: {
    fontSize: 16,
    fontWeight: '700',
    color: '#222',
  },
  meta: {
    marginTop: 4,
    fontSize: 12,
    color: '#6b7280',
  },
  price: {
    marginTop: 6,
    fontSize: 14,
    fontWeight: '700',
    color: '#16a34a',
  },
  chevron: {
    width: 24,
    alignItems: 'flex-end',
  },
  chevronText: {
    fontSize: 28,
    color: '#9ca3af',
    lineHeight: 28,
    marginRight: 2,
  },
});