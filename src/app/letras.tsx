import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import colors from '../constants/colors';
import RoundIconButton from '../components/RoundIconButton';
import { Ionicons } from '@expo/vector-icons';

// Troque este array pelo seu banco de letras/palavras/imagens real.
const CARDS = [
  { letter: 'A', word: 'ABACAXI', hint: 'Fruta amarela e espinhenta, doce por dentro.' },
  { letter: 'B', word: 'BOLA', hint: 'Redonda, quica e rola no chão.' },
  { letter: 'C', word: 'CASA', hint: 'Lugar onde a gente mora.' },
];

export default function LetrasScreen() {
  const router = useRouter();
  const [index, setIndex] = useState(0);
  const card = CARDS[index];

  const next = () => setIndex((i) => Math.min(i + 1, CARDS.length - 1));
  const prev = () => setIndex((i) => Math.max(i - 1, 0));

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.header}>
        <RoundIconButton icon="chevron-back" color={colors.red} onPress={() => router.back()} />
        <Text style={styles.logo}>CapiLetrando</Text>
        <RoundIconButton icon="help" color={colors.blue} onPress={() => {}} />
      </View>

      <View style={styles.card}>
        <View style={styles.cardTop}>
          <Text style={styles.letter}>{card.letter}</Text>
          {/* Troque por <Image source={require('../assets/images/abacaxi.png')} /> quando tiver a arte */}
          <View style={styles.illustrationPlaceholder}>
            <Ionicons name="nutrition" size={72} color={colors.yellow} />
          </View>
        </View>
        <Text style={styles.word}>{card.word}</Text>
        <Text style={styles.hint}>{card.hint}</Text>
      </View>

      <View style={styles.navRow}>
        <RoundIconButton icon="arrow-back" color={colors.blue} size={56} onPress={prev} />
        <RoundIconButton icon="arrow-forward" color={colors.red} size={56} onPress={next} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.greenLight },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  logo: { fontWeight: '800', fontSize: 18, color: colors.textDark },
  card: {
    flex: 1,
    backgroundColor: colors.white,
    marginHorizontal: 24,
    marginTop: 24,
    borderRadius: 28,
    alignItems: 'center',
    paddingVertical: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  cardTop: { flexDirection: 'row', alignItems: 'center', gap: 20, marginBottom: 20 },
  letter: { fontSize: 90, fontWeight: '900', color: colors.red },
  illustrationPlaceholder: {
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  word: { fontSize: 28, fontWeight: '900', color: colors.textDark, letterSpacing: 1 },
  hint: {
    marginTop: 12,
    textAlign: 'center',
    paddingHorizontal: 30,
    color: colors.textMuted,
    fontSize: 14,
  },
  navRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 40,
    paddingVertical: 24,
  },
});
