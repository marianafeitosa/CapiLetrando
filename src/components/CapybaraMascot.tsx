import React from 'react';
import Svg, { Ellipse, Circle, Path, Rect } from 'react-native-svg';

type Props = {
  size?: number;
  withBackpack?: boolean;
};

/**
 * Mascote da capivara em SVG simples (placeholder).
 * A arte final (a do seu mockup) foi feita por ilustrador/design —
 * troque este componente por um <Image source={require('../assets/images/capivara.png')} />
 * quando tiver o PNG/SVG oficial exportado do Figma. Ver README para instruções.
 */
export default function CapybaraMascot({ size = 160, withBackpack = true }: Props) {
  const w = size;
  const h = size * 0.9;

  return (
    <Svg width={w} height={h} viewBox="0 0 200 180">
      {/* corpo */}
      <Ellipse cx="100" cy="110" rx="70" ry="55" fill="#B98B5E" />
      {/* cabeça */}
      <Ellipse cx="100" cy="65" rx="55" ry="48" fill="#C79A6B" />
      {/* focinho */}
      <Ellipse cx="100" cy="85" rx="30" ry="20" fill="#E0BC90" />
      {/* narinas */}
      <Ellipse cx="90" cy="88" rx="3" ry="4" fill="#5A3E28" />
      <Ellipse cx="110" cy="88" rx="3" ry="4" fill="#5A3E28" />
      {/* orelhas */}
      <Circle cx="55" cy="35" r="10" fill="#B98B5E" />
      <Circle cx="145" cy="35" r="10" fill="#B98B5E" />
      {/* óculos */}
      <Circle cx="80" cy="60" r="14" fill="none" stroke="#3A2E1F" strokeWidth="4" />
      <Circle cx="120" cy="60" r="14" fill="none" stroke="#3A2E1F" strokeWidth="4" />
      <Rect x="94" y="58" width="12" height="4" fill="#3A2E1F" />
      {/* olhos */}
      <Circle cx="80" cy="60" r="4" fill="#3A2E1F" />
      <Circle cx="120" cy="60" r="4" fill="#3A2E1F" />
      {/* mochila */}
      {withBackpack && (
        <>
          <Rect x="45" y="95" width="34" height="42" rx="10" fill="#5CC8F2" />
          <Rect x="55" y="90" width="14" height="10" rx="4" fill="#3AB0E0" />
        </>
      )}
    </Svg>
  );
}
