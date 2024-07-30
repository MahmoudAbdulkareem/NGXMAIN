import { Injectable } from '@angular/core';
import * as XLSX from 'xlsx';

@Injectable({
  providedIn: 'root'
})
export class TableUtilService {

  exportTableToExcel(tableId: string, name: string = 'ExportResult'): void {
    const timeSpan = new Date().toISOString();
    const fileName = `${name}-${timeSpan}.xlsx`;
    const targetTableElm = document.getElementById(tableId);

    if (!targetTableElm) {
      alert('Table not found!');
      return;
    }

    const wb = XLSX.utils.table_to_book(targetTableElm, { sheet: name });
    XLSX.writeFile(wb, fileName);
  }

  resetFilters(): void {
    document.querySelectorAll('.filter input').forEach((input: HTMLInputElement) => input.value = '');
  }
}
