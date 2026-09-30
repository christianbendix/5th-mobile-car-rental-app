/* ___ SearchScreen ___________________________________
    The front page of the app: greeting, the search
    card and the list of recent searches. Gets its
    data from hooks, never directly from mock data.
   ____________________________________________________*/

import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSearchForm } from '../../hooks/useSearchForm';
import { useRecentSearches } from '../../hooks/useRecentSearches';
import { Avatar } from '../../components/Avatar/Avatar';
import { SearchCard } from './components/SearchCard/SearchCard';
import { RecentSearchItem } from './components/RecentSearchItem/RecentSearchItem';
import { styles } from './SearchScreen.styles';

export default function SearchScreen() {
  const form = useSearchForm();
  const { recentSearches } = useRecentSearches();

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Hi Mayhar</Text>
            <Text style={styles.title}>Where are you{'\n'}driving next?</Text>
          </View>
          <Avatar initial="M" />
        </View>

        <SearchCard form={form} onSearch={() => console.log('go to results')} />

        <Text style={styles.sectionTitle}>Recent searches</Text>
        <View style={styles.recentList}>
          {recentSearches.map(s => (
            <RecentSearchItem key={s.id} search={s} onPress={() => {}} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}