/* ___ InfoField component ____________________________
    Grey box with a small label and a bold value,
    optionally an icon and a sub value. Reused for
    pick-up/drop-off location and the date fields.
   ____________________________________________________*/

import { ReactNode } from 'react';
import { Text, View } from 'react-native';
import { styles } from './InfoField.styles';

type Props = { label: string; value: string; subValue?: string; icon?: ReactNode };

export function InfoField({ label, value, subValue, icon }: Props) {
  return (
    <View style={styles.container}>
      {icon}
      <View style={styles.textWrap}>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.value}>{value}</Text>
        {subValue && <Text style={styles.subValue}>{subValue}</Text>}
      </View>
    </View>
  );
}