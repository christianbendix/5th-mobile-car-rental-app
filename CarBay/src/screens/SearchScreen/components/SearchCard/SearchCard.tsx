/* ___ SearchCard component ___________________________
    The white card on the search screen: pick-up and
    drop-off location, dates, driver age and the
    "Search cars" button. All values come from the
    useSearchForm hook through the `form` prop.
   ____________________________________________________*/

import { Pressable, Text, View } from 'react-native';
import { ChevronDown, MapPin, Search } from 'lucide-react-native';
import { useSearchForm } from '../../../../hooks/useSearchForm';
import { InfoField } from '../../../../components/InfoField/InfoField';
import { Toggle } from '../../../../components/Toggle/Toggle';
import { PrimaryButton } from '../../../../components/PrimaryButton/PrimaryButton';
import { colors } from '../../../../theme';
import { styles } from './SearchCard.styles';

type Props = {
  form: ReturnType<typeof useSearchForm>;
  onSearch: () => void;
};

export function SearchCard({ form, onSearch }: Props) {
  return (
    <View style={styles.card}>
      <InfoField
        label="Pick-up location"
        value={form.pickupLocation}
        icon={<MapPin size={20} color={colors.primary} />}
      />

      {/* Return to same location - toggles the drop-off field */}
      <View style={styles.toggleRow}>
        <Text style={styles.rowLabel}>Return to same location</Text>
        <Toggle value={form.sameLocation} onChange={form.toggleSameLocation} />
      </View>

      {!form.sameLocation && (
        <InfoField
          label="Drop-off location"
          value={form.dropoffLocation}
          icon={<MapPin size={20} color={colors.ink} />}
        />
      )}

      {/* Pick-up and return dates side by side */}
      <View style={styles.dateRow}>
        <View style={styles.dateCell}>
          <InfoField label="Pick-up" value={form.pickupDate.day} subValue={form.pickupDate.time} />
        </View>
        <View style={styles.dateCell}>
          <InfoField label="Return" value={form.returnDate.day} subValue={form.returnDate.time} />
        </View>
      </View>

      {/* Driver age - will open a picker later */}
      <Pressable style={styles.ageRow}>
        <Text style={styles.rowLabel}>Driver age</Text>
        <View style={styles.ageValue}>
          <Text style={styles.ageText}>{form.driverAge}</Text>
          <ChevronDown size={16} color={colors.ink} />
        </View>
      </Pressable>

      <PrimaryButton
        title="Search cars"
        onPress={onSearch}
        icon={<Search size={19} color={colors.surface} strokeWidth={2.2} />}
      />
    </View>
  );
}
