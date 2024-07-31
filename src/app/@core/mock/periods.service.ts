import { Injectable } from '@angular/core';

@Injectable()
export class PeriodsService {
  getYears() {
    return [
      '2010', '2011', '2012',
      '2013', '2014', '2015',
      '2016', '2017', '2018',
    ];
  }

  getMonths() {
    return [
    'Jan', 'Fév', 'Mar',
'Avr', 'Mai', 'Juin',
'Juil', 'Août', 'Sept',
'Oct', 'Nov', 'Déc',
    ];
  }

  getWeeks() {
    return [
     'Lun',
'Mar',
'Mer',
'Jeu',
'Ven',
'Sam',
'Dim',
    ];
  }
}
