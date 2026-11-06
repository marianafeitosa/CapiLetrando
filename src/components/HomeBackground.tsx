import React from 'react';
import Svg, { Rect, Ellipse, Path, Defs, LinearGradient, Stop } from 'react-native-svg';
import { StyleSheet } from 'react-native';

/**
 * Fundo ilustrado (céu + nuvens + colinas), desenhado em SVG pra imitar o
 * cenário do wireframe (Home_screen.png). Fica atrás de todo o conteúdo da
 * tela, cobrindo 100% da largura/altura do container pai.
 */
export default function HomeBackground() {
  return (
    <Svg
      style={StyleSheet.absoluteFill}
      width="100%"
      height="100%"
      viewBox="0 0 375 812"
      preserveAspectRatio="xMidYMid slice"
    >
      <Defs>
        <LinearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <Stop offset="0" stopColor="#8FDCF7" />
          <Stop offset="1" stopColor="#C9EFFB" />
        </LinearGradient>
      </Defs>

      {/* céu */}
      <Rect x="0" y="0" width="375" height="812" fill="url(#sky)" />

      {/* nuvens */}
      <Ellipse cx="70" cy="90" rx="34" ry="16" fill="#FFFFFF" opacity={0.9} />
      <Ellipse cx="95" cy="82" rx="24" ry="14" fill="#FFFFFF" opacity={0.9} />
      <Ellipse cx="300" cy="130" rx="30" ry="14" fill="#FFFFFF" opacity={0.85} />
      <Ellipse cx="325" cy="122" rx="20" ry="11" fill="#FFFFFF" opacity={0.85} />
      <Ellipse cx="250" cy="60" rx="18" ry="9" fill="#FFFFFF" opacity={0.7} />

      {/* colina de trás, mais escura */}
      <Path
        d="M0,470 Q90,420 190,455 T375,440 L375,812 L0,812 Z"
        fill="#6FB431"
      />
      {/* arbustos na colina de trás */}
      <Ellipse cx="60" cy="450" rx="26" ry="16" fill="#5FA028" />
      <Ellipse cx="320" cy="435" rx="30" ry="18" fill="#5FA028" />

      {/* colina da frente, grama principal */}
      <Path
        d="M0,540 Q110,490 200,525 T375,505 L375,812 L0,812 Z"
        fill="#8FD14F"
      />
      {/* arbustos na colina da frente */}
      <Ellipse cx="40" cy="560" rx="30" ry="18" fill="#7BBF3E" />
      <Ellipse cx="345" cy="545" rx="26" ry="16" fill="#7BBF3E" />
      <Ellipse cx="200" cy="600" rx="34" ry="16" fill="#7BBF3E" opacity={0.6} />
    </Svg>
  );
}
