import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

import colors from '../constants/colors';
import fonts from '../constants/fonts';

import HomeBackground from '../components/HomeBackground';
import MenuButton from '../components/MenuButton';

// Como o index.tsx está em src/app,
// precisamos voltar duas pastas para chegar em assets.
const LOGO = require('../../assets/images/Logo.png');
const CAPIVARA_MOCHILA = require('../../assets/images/CapivaraMochila.png');
const LETREIRO = require('../../assets/images/Letreiro.png');

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.root}>
      <HomeBackground />

      <SafeAreaView style={styles.safe}>
        {/* HEADER */}
        <View style={styles.header}>
          <View style={styles.logoRow}>
            <View style={styles.logoIconWrap}>
              <Image
                source={LOGO}
                style={styles.logoIconImg}
                resizeMode="contain"
              />
            </View>

            <View>
              <Text style={styles.logoTitle}>CapiLetrando</Text>

              <Text style={styles.logoSubtitle}>
                Protótipos inclusivos
              </Text>
            </View>
          </View>

          <View style={styles.agesBadge}>
            <Text style={styles.agesText}>
              4-8{'\n'}anos
            </Text>
          </View>
        </View>

        {/* CONTEÚDO PRINCIPAL */}
        <View style={styles.hero}>
          <Image
            source={LETREIRO}
            style={styles.heroLogo}
            resizeMode="contain"
          />

          <Image
            source={CAPIVARA_MOCHILA}
            style={styles.mascotImg}
            resizeMode="contain"
          />
        </View>

        {/* MENU */}
        <View style={styles.menu}>
          <MenuButton
            label="ATIVIDADES"
            color={colors.blue}
            onPress={() => router.push('/atividades')}
          />

          <MenuButton
            label="HISTÓRIAS"
            color={colors.yellow}
            onPress={() => router.push('/historias')}
          />

          <MenuButton
            label="MINHA CAPIVARA"
            color={colors.red}
            onPress={() => {}}
          />

          <MenuButton
            label="CONFIGURAÇÕES"
            color={colors.purple}
            icon={
              <Ionicons
                name="settings-sharp"
                size={22}
                color="#fff"
              />
            }
            onPress={() => {}}
          />
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },

  safe: {
    flex: 1,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 10,
  },

  logoRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  logoIconWrap: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
    overflow: 'hidden',
  },

  logoIconImg: {
    width: 42,
    height: 42,
  },

  logoTitle: {
    fontFamily: fonts.extraBold,
    fontSize: 16,
    color: colors.textDark,
  },

  logoSubtitle: {
    fontFamily: fonts.medium,
    fontSize: 11,
    color: colors.textMuted,
    marginTop: 1,
  },

  agesBadge: {
    backgroundColor: colors.yellow,
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
  },

  agesText: {
    fontFamily: fonts.extraBold,
    fontSize: 12,
    textAlign: 'center',
    color: colors.textDark,
  },

  hero: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 18,
  },

  heroLogo: {
    width: 250,
    height: 70,
    marginBottom: 4,
  },

  mascotImg: {
    width: 230,
    height: 220,
     marginBottom: 50,
  },

  menu: {
    paddingHorizontal: 24,
    paddingTop: 55,
    paddingBottom: 24,
    gap: 7,
  },
});