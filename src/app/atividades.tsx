import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { useRouter } from 'expo-router';
import colors from '../constants/colors';
import RoundIconButton from '../components/RoundIconButton';
import MenuButton from '../components/MenuButton';
import { Ionicons } from '@expo/vector-icons';

export default function AtividadesScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.header}>
        <RoundIconButton icon="chevron-back" color={colors.red} onPress={() => router.back()} />
        <RoundIconButton icon="help" color={colors.blue} onPress={() => {}} />
      </View>

      <View style={styles.menu}>
        <MenuButton
          label="LETRAS E SONS"
          color={colors.red}
          icon={<Text style={styles.iconLetters}>As</Text>}
          onPress={() => router.push('/letras')}
        />
        <MenuButton
          label="PALAVRAS DIVERTIDAS"
          color={colors.yellow}
          icon={<Ionicons name="happy" size={24} color="#fff" />}
          onPress={() => router.push('/palavras')}
        />
        <MenuButton
          label="DESAFIOS"
          color={colors.purple}
          icon={<Ionicons name="trophy" size={22} color="#fff" />}
          onPress={() => router.push('/progresso')}
        />
      </View>

      <View style={styles.bottomNav}>
        <Ionicons name="home" size={26} color={colors.textDark} onPress={() => router.push('/')} />
        <View style={styles.navGrid}>
          <View style={[styles.navSquare, { backgroundColor: colors.red }]} />
          <View style={[styles.navSquare, { backgroundColor: colors.blue }]} />
        </View>
        <Ionicons name="settings-sharp" size={24} color={colors.textDark} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.yellow },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 20,
  },
  menu: {
    flex: 1,
    backgroundColor: colors.white,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingHorizontal: 24,
    paddingTop: 40,
  },
  iconLetters: { color: '#fff', fontWeight: '900', fontSize: 20 },
  bottomNav: {
    height: 70,
    backgroundColor: colors.greenLight,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  navGrid: {
    width: 34,
    height: 34,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  navSquare: { width: 15, height: 15, borderRadius: 4 },
});
