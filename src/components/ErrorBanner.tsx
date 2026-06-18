import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useStore } from '../store';

export const ErrorBanner = () => {
  const { bannerError, setBannerError } = useStore();

  if (!bannerError) return null;

  return (
    <View style={styles.bannerContainer}>
      <Text style={styles.errorText}>{bannerError}</Text>
      <TouchableOpacity onPress={() => setBannerError(null)} style={styles.closeButton}>
        <Text style={styles.closeText}>✕</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  bannerContainer: {
    backgroundColor: '#FFD2D2',
    borderColor: '#D8000C',
    borderWidth: 1,
    padding: 12,
    borderRadius: 6,
    marginHorizontal: 15,
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  errorText: { color: '#D8000C', fontSize: 13, fontWeight: '600', flex: 1, paddingRight: 10 },
  closeButton: { padding: 4 },
  closeText: { color: '#D8000C', fontSize: 16, fontWeight: 'bold' },
});