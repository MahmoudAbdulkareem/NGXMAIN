import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SmartTableData {
  getData() {
    // Replace with your actual data fetching logic
    return [
      { id: 1, Region: 'North', Createur: 'User1', Annee: 2023, RechercheMot: 'Keyword1' },
      { id: 2, Region: 'South', Createur: 'User2', Annee: 2024, RechercheMot: 'Keyword2' },
      // More data here
    ];
  }
}
