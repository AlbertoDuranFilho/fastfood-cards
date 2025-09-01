import React, { useState, useMemo } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

export default function DetailsScreen({ route }) {
  const { product } = route.params || {};
  const [qty, setQty] = useState(1);
  const total = useMemo(() => (product?.price || 0) * qty, [product, qty]);

  const dec = () => setQty((q) => Math.max(1, q - 1));
  const inc = () => setQty((q) => q + 1);

  if (!product) {
    return (
      <View style={styles.center}>
        <Text>Produto não encontrado.</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: product.imageUrl }} style={styles.hero} />
      <Text style={styles.name}>{product.name}</Text>
      <View style={styles.row}>
        <View style={styles.badge}><Text style={styles.badgeText}>{product.calories} Calorias</Text></View>
        <View style={styles.badge}><Text style={styles.badgeText}>⭐ 4.9</Text></View>
        <View style={styles.badge}><Text style={styles.badgeText}>20-30 Min</Text></View>
      </View>

      <View style={styles.qtyRow}>
        <TouchableOpacity onPress={dec} style={styles.qtyBtn}><Text style={styles.qtyBtnText}>-</Text></TouchableOpacity>
        <Text style={styles.qtyText}>{qty}</Text>
        <TouchableOpacity onPress={inc} style={styles.qtyBtn}><Text style={styles.qtyBtnText}>+</Text></TouchableOpacity>
        <Text style={styles.total}>R${total.toFixed(2)}</Text>
      </View>

      <Text style={styles.section}>Description</Text>
      <Text style={styles.desc}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries,
        but also the leap into electronic typesetting, remaining essentially unchanged.
      </Text>

      <View style={styles.actions}>
        <TouchableOpacity style={[styles.actionBtn, styles.add]}>
          <Text style={styles.actionText}>Adicione ao Carrinho</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.actionBtn, styles.buy]}>
          <Text style={styles.actionText}>Compre agora</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const RADIUS = 16;

const styles = StyleSheet.create({
  container: {
    paddingBottom: 24,
    backgroundColor: '#fff',
  },
  hero: {
    width: '100%',
    height: 260,
    backgroundColor: '#f3f4f6',
  },
  name: {
    marginTop: 16,
    marginHorizontal: 16,
    fontSize: 22,
    fontWeight: '800',
    color: '#111827',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 16,
    marginTop: 8,
  },
  badge: {
    backgroundColor: '#eef2ff',
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 6,
    marginRight: 8,
  },
  badgeText: {
    fontSize: 12,
    color: '#4338ca',
    fontWeight: '600',
  },
  qtyRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 16,
    marginTop: 12,
  },
  qtyBtn: {
    width: 36,
    height: 36,
    borderRadius: 8,
    backgroundColor: '#f3f4f6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  qtyBtnText: {
    fontSize: 18,
    fontWeight: '800',
    color: '#111827',
  },
  qtyText: {
    marginHorizontal: 12,
    fontSize: 16,
    fontWeight: '700',
    color: '#111827',
  },
  total: {
    marginLeft: 'auto',
    fontSize: 18,
    fontWeight: '800',
    color: '#16a34a',
  },
  section: {
    marginTop: 16,
    marginHorizontal: 16,
    fontSize: 16,
    fontWeight: '700',
    color: '#111827',
  },
  desc: {
    marginTop: 6,
    marginHorizontal: 16,
    fontSize: 14,
    color: '#4b5563',
    lineHeight: 20,
  },
  actions: {
    flexDirection: 'row',
    marginHorizontal: 16,
    marginTop: 16,
  },
  actionBtn: {
    flex: 1,
    paddingVertical: 14,
    borderRadius: RADIUS,
    alignItems: 'center',
    justifyContent: 'center',
  },
  add: {
    backgroundColor: '#f3f4f6',
    marginRight: 8,
  },
  buy: {
    backgroundColor: '#16a34a',
    marginLeft: 8,
  },
  actionText: {
    fontSize: 14,
    fontWeight: '800',
    color: '#111827',
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});