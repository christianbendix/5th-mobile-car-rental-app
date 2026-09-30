/* ___ useRecentSearches hook _________________________
    Gives screens the user's recent searches. Right
    now it returns mock data - when the backend is
    ready, only this file changes (fetch from
    services/api.ts), the screens stay untouched.
   ____________________________________________________*/

import { mockRecentSearches } from '../data/mock/recentSearches';

export function useRecentSearches() {
  return { recentSearches: mockRecentSearches, isLoading: false };
}
