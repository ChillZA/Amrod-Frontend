import React from 'react';
import { StyleSheet, Text, View, FlatList, Button, SafeAreaView } from 'react-native';
import { useStore } from '../store';
import { api } from '../api';
import { ErrorBanner } from './ErrorBanner';

export const CustomersScreen = () => {
  const customers = useStore((state) => state.customers);
  return (
    <SafeAreaView style={styles.container}>
      <ErrorBanner />
      <FlatList
        data={customers}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <View style={styles.card}><Text style={styles.title}>{item.name}</Text><Text>{item.email}</Text></View>}
      />
    </SafeAreaView>
  );
};

export const ProductsScreen = () => {
  const products = useStore((state) => state.products);
  return (
    <SafeAreaView style={styles.container}>
      <ErrorBanner />
      <FlatList
        data={products}
        keyExtractor={(item) => item.sku}
        renderItem={({ item }) => <View style={styles.card}><Text style={styles.title}>{item.name}</Text><Text>${item.price.toFixed(2)}</Text></View>}
      />
    </SafeAreaView>
  );
};

export const OrdersScreen = () => {
  const { orders, customers, products, addOrder } = useStore();

  const handleCreateOrder = async () => {
    if (!customers.length || !products.length) return;
    
    // Simulated RowVersion
    const mockSqlRowVersionBase64 = "AAAAAAAAzhc=";

    try {
      const response = await api.post('/orders', {
        customerId: customers[0].id,
        sku: products[0].sku,
      }, { rowVersion: mockSqlRowVersionBase64 } as any);
      
      addOrder(response.data);
    } catch {
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ErrorBanner />
      <View style={styles.actionBlock}>
        <Button title="Trigger Idempotent Order Dispatch" onPress={handleCreateOrder} color="#007AFF" />
      </View>
      <FlatList
        data={orders}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.title}>Order Reference ID: {item.id}</Text>
            <Text style={styles.meta}>Total Charged: ${item.totalAmount}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FAFAFA' },
  actionBlock: { padding: 15 },
  card: { padding: 16, backgroundColor: '#FFF', marginHorizontal: 15, marginTop: 10, borderRadius: 8, elevation: 1 },
  title: { fontSize: 15, fontWeight: 'bold', marginBottom: 2 },
  meta: { fontSize: 12, color: '#666' }
});