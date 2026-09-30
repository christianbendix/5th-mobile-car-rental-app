/* ___ Search types ___________________________________
    Typefile for searches, so that we can declare sea-
    rches uniformally
   ____________________________________________________*/

export type RecentSearch = {
  id: string;
  location: string;
  dateRange: string;
  carSize: string;
};