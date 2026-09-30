/* ___ useSearchForm hook _____________________________
    Holds the state of the search form (locations,
    dates, driver age, same-location toggle). The
    values are hardcoded for now and will later come
    from pickers and the backend.
   ____________________________________________________*/

import { useState } from 'react';

export function useSearchForm() {
  const [sameLocation, setSameLocation] = useState(true);

  return {
    pickupLocation: 'Copenhagen Airport (CPH)',
    dropoffLocation: 'Copenhagen Central Station',
    pickupDate: { day: 'Fri 2 Oct', time: '10:00' },
    returnDate: { day: 'Mon 5 Oct', time: '10:00' },
    driverAge: '26 – 65',
    sameLocation,
    toggleSameLocation: () => setSameLocation(v => !v),
  };
}