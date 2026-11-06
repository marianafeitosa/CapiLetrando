import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { useRouter } from 'expo-router';
import colors from '../constants/colors';
import RoundIconButton from '../components/RoundIconButton';
import CapybaraMascot from '../components/CapybaraMascot';

export default function HistoriasScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.header}>
        <RoundIconButton icon="chevron-back" color={colors.red} onPress={() => router.back()} />
        <RoundIconButton icon="volume-high" color={colors.yellow} onPress={() => {}} />
      </View>

      <View style={styles.mascotWrap}>
        <CapybaraMascot size={150} />
      </View>

      <View style={styles.book}>
        <View style={styles.bookCover}>
          <Text style={styles.bookCoverText}>DESCOBRIR</Text>
        </View>
        <View style={styles.bookPages}>
          <View style={styles.page} />
          <View style={styles.page} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.cream },
  header: { flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, paddingTop: 10 },
  mascotWrap: { alignItems: 'center', marginTop: 6, marginBottom: 10 },
  book: { flex: 1, marginHorizontal: 24, marginBottom: 24 },
  bookCover: {
    backgroundColor: colors.blueDark,
    borderRadius: 16,
    paddingVertical: 18,
    alignItems: 'center',
    marginBottom: -20,
    zIndex: 2,
    marginHorizontal: 20,
  },
  bookCoverText: { color: '#fff', fontWeight: '900', fontSize: 16, letterSpacing: 1 },
  bookPages: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#F3E3C6',
    borderRadius: 20,
    padding: 16,
    gap: 12,
  },
  page: { flex: 1, backgroundColor: colors.white, borderRadius: 10 },
});
