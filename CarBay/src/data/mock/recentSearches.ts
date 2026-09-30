/* ___ Mock recent searches ___________________________
    Fake data used until the backend exists. Only the
    hooks may import from data/mock - never screens.
   ____________________________________________________*/

import { RecentSearch } from '../../types/search';

export const mockRecentSearches: RecentSearch[] = [
  { id: '1', location: 'Aarhus C', dateRange: '14 – 17 Nov', carSize: 'SUV' },
  { id: '2', location: 'Gdańsk Airport (GDN)', dateRange: '7 – 14 Oct', carSize: 'Any size' },
];