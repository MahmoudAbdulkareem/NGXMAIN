import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { SmartTableData } from '../../../@core/data/smart-table';

@Component({
  selector: 'ngx-smart-table',
  templateUrl: './smart-table.component.html',
  styleUrls: ['./smart-table.component.scss'],
})
export class SmartTableComponent implements OnInit {
  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      id: {
        title: 'ID',
        type: 'number',
      },
      Region: {
        title: 'Region',
        type: 'string',
      },
      Createur: {
        title: 'Createur',
        type: 'string',
      },
      Annee: {
        title: 'Annee',
        type: 'number',
      },
      RechercheMot: {
        title: 'Recherche par mots clés',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();
  demandes: any[] = [];

  constructor(private service: SmartTableData) {
    const data = this.service.getData();
    this.demandes = data;
  }

  ngOnInit() {
    this.initializeTabs();
    this.loadAllDemandes();
  }

  initializeTabs() {
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach((tab: Element) => {
      tab.addEventListener('click', () => {
        const status = tab.getAttribute('data-status');
        this.showDemandesByStatus(status);
      });
    });
  }

  loadAllDemandes() {
    this.source.load(this.demandes);
  }

  showDemandesByStatus(status: string | null) {
    if (status === null) {
      this.loadAllDemandes();
    } else {
      const filteredDemandes = this.demandes.filter(demande => demande.status === status);
      this.source.load(filteredDemandes);
    }
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}
