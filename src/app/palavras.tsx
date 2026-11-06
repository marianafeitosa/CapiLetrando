import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import colors from '../constants/colors';
import RoundIconButton from '../components/RoundIconButton';
import CapybaraMascot from '../components/CapybaraMascot';

// Troque pelo seu banco de palavras/letras embaralhadas real.
const WORDS = [
  { answer: 'SOL', letters: ['S', 'O', 'L'] },
  { answer: 'LUA', letters: ['L', 'U', 'A'] },
  { answer: 'MAR', letters: ['M', 'A', 'R'] },
];

export default function PalavrasScreen() {
  const router = useRouter();
  const [index, setIndex] = useState(0);
  const current = WORDS[index];

  const next = () => setIndex((i) => Math.min(i + 1, WORDS.length - 1));
  const prev = () => setIndex((i) => Math.max(i - 1, 0));

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.header}>
        <RoundIconButton icon="chevron-back" color={colors.red} onPress={() => router.back()} />
        <View style={{ flex: 1, alignItems: 'flex-end' }}>
          <CapybaraMascot size={70} />
        </View>
      </View>

      <View style={styles.tiles}>
        {current.letters.map((l, i) => (
          <TouchableOpacity key={i} style={styles.tile} activeOpacity={0.8}>
            <Text style={styles.tileText}>{l}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.sunWrap}>
        <View style={styles.sun}>
          <Text style={styles.sunFace}>◡ ◡</Text>
        </View>
      </View>

      <View style={styles.navRow}>
        <RoundIconButton icon="arrow-back" color={colors.red} size={56} onPress={prev} />
        <RoundIconButton icon="arrow-forward" color={colors.yellow} size={56} onPress={next} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.blue },
  header: { flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, paddingTop: 10 },
  tiles: { flexDirection: 'row', justifyContent: 'center', gap: 14, marginTop: 30 },
  tile: {
    width: 64,
    height: 64,
    backgroundColor: colors.white,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 3,
    elevation: 3,
  },
  tileText: { fontSize: 28, fontWeight: '900', color: colors.textDark },
  sunWrap: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: colors.green, marginTop: 30, borderTopLeftRadius: 40, borderTopRightRadius: 40 },
  sun: {
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: colors.yellow,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sunFace: { fontSize: 24, fontWeight: '800', color: colors.textDark },
  navRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 40,
    paddingVertical: 24,
    backgroundColor: colors.green,
  },
});
