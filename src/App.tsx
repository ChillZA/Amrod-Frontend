import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useStore } from './store';
import { api } from './api';
import { CustomersScreen, ProductsScreen, OrdersScreen } from './components/Screens';

const Tab = createBottomTabNavigator();

export default function App() {
  const { setCustomers, setProducts, setOrders } = useStore();

  useEffect(() => {
    const bootstrapAppData = async () => {
      try {
        const [cData, pData, oData] = await Promise.all([
          api.get('/customers'),
          api.get('/products'),
          api.get('/orders'),
        ]);
        setCustomers(cData.data);
        setProducts(pData.data);
        setOrders(oData.data);
      } catch {
      }
    };
    bootstrapAppData();
  }, []);

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ tabBarLabelStyle: { fontSize: 13, fontWeight: '600' } }}>
        <Tab.Screen name="Customers" component={CustomersScreen} />
        <Tab.Screen name="Products" component={ProductsScreen} />
        <Tab.Screen name="Orders" component={OrdersScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}