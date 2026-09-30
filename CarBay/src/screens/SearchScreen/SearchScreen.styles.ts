/* ___ SearchScreen styles ____________________________
    Layout of the search screen: page padding, the
    header with the big title and the recent list.
   ____________________________________________________*/

import { StyleSheet } from 'react-native';
import { colors, spacing, typography } from '../../theme';

export const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: colors.background },
  content: { paddingHorizontal: spacing.xl, paddingTop: spacing.md, paddingBottom: 120 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', paddingHorizontal: spacing.xs },
  greeting: { fontSize: 14, fontWeight: '500', color: colors.textSubtle },
  title: { ...typography.display, marginTop: spacing.xs },
  sectionTitle: { ...typography.section, marginTop: 26, marginBottom: 10, marginHorizontal: spacing.xs },
  recentList: { gap: spacing.sm },
});