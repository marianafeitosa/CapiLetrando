import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { useRouter } from 'expo-router';
import colors from '../constants/colors';
import RoundIconButton from '../components/RoundIconButton';
import CapybaraMascot from '../components/CapybaraMascot';
import { Ionicons } from '@expo/vector-icons';

// Troque pelos dados reais de progresso do usuário (ex: vindos do Firestore).
const MINUTES = [
  { day: '01', value: 20, color: colors.red },
  { day: '16', value: 35, color: colors.yellow },
  { day: '06', value: 55, color: colors.green },
  { day: '08', value: 15, color: colors.purple },
  { day: '09', value: 28, color: colors.yellow },
  { day: '06', value: 40, color: colors.blue },
  { day: '29', value: 48, color: colors.purple },
];

export default function ProgressoScreen() {
  const router = useRouter();
  const maxValue = Math.max(...MINUTES.map((m) => m.value));

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.header}>
        <RoundIconButton icon="chevron-back" color={colors.red} onPress={() => router.back()} />
      </View>

      <View style={styles.starsRow}>
        {[...Array(6)].map((_, i) => (
          <Ionicons key={i} name="star" size={i % 2 === 0 ? 20 : 14} color={colors.star} style={styles.star} />
        ))}
      </View>

      <View style={styles.mascotWrap}>
        <CapybaraMascot size={130} />
      </View>

      <View style={styles.panel}>
        <View style={styles.starsCard}>
          <Text style={styles.cardLabel}>ESTRELAS GANHAS:</Text>
          <View style={styles.starsCountRow}>
            <Ionicons name="star" size={22} color={colors.star} />
            <Text style={styles.starsCount}>43</Text>
          </View>
        </View>

        <View style={styles.chartCard}>
          <Text style={styles.cardLabel}>MINUTOS DE ESTUDO</Text>
          <View style={styles.chart}>
            {MINUTES.map((m, i) => (
              <View key={i} style={styles.barCol}>
                <View
                  style={[
                    styles.bar,
                    { height: (m.value / maxValue) * 70, backgroundColor: m.color },
                  ]}
                />
                <Text style={styles.barLabel}>{m.day}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.achievementsCard}>
          <Text style={styles.cardLabel}>CONQUISTAS</Text>
          <View style={styles.achievementsRow}>
            <View style={[styles.badge, { backgroundColor: colors.yellow }]}>
              <Ionicons name="star" size={22} color="#fff" />
            </View>
            <View style={[styles.badge, { backgroundColor: colors.blue }]}>
              <Ionicons name="trophy" size={22} color="#fff" />
            </View>
            <View style={[styles.badge, { backgroundColor: colors.purple }]}>
              <Ionicons name="star" size={22} color="#fff" />
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.blue },
  header: { paddingHorizontal: 20, paddingTop: 10 },
  starsRow: { flexDirection: 'row', justifyContent: 'space-evenly', paddingHorizontal: 20, marginTop: 4 },
  star: { marginTop: 4 },
  mascotWrap: { alignItems: 'center', marginBottom: 10 },
  panel: {
    flex: 1,
    backgroundColor: colors.greenLight,
    borderTopLeftRadius: 36,
    borderTopRightRadius: 36,
    padding: 20,
    gap: 16,
  },
  starsCard: {
    backgroundColor: colors.white,
    borderRadius: 20,
    padding: 18,
    alignItems: 'center',
  },
  cardLabel: { fontWeight: '800', color: colors.textDark, marginBottom: 8, letterSpacing: 0.5 },
  starsCountRow: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  starsCount: { fontSize: 22, fontWeight: '900', color: colors.textDark },
  chartCard: { backgroundColor: colors.white, borderRadius: 20, padding: 18 },
  chart: { flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between', height: 90, marginTop: 6 },
  barCol: { alignItems: 'center', width: 24 },
  bar: { width: 14, borderRadius: 4 },
  barLabel: { fontSize: 10, color: colors.textMuted, marginTop: 4 },
  achievementsCard: { backgroundColor: colors.white, borderRadius: 20, padding: 18, alignItems: 'center' },
  achievementsRow: { flexDirection: 'row', gap: 16, marginTop: 6 },
  badge: {
    width: 54,
    height: 54,
    borderRadius: 27,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
