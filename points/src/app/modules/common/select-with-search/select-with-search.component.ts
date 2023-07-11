import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import type { OnInit } from '@angular/core';
import { SelectWithSearchItem } from './select-with-search.interface';
import { InfiniteScrollCustomEvent } from '@ionic/angular';

@Component({
  selector: 'app-select-with-search',
  templateUrl: './select-with-search.component.html',
  styleUrls: ['./select-with-search.component.scss'],
})
export class SelectWithSearchComponent implements OnInit {
  @Input() items: SelectWithSearchItem[] = [];
  @Input() title = 'Select Items';
  @Input() totalItems: number;

  @Output() selectionCancel = new EventEmitter<void>();
  @Output() selectionChange = new EventEmitter<SelectWithSearchItem>();
  @Output() searchQuery = new EventEmitter<string>();
  @Output() ionInfinite = new EventEmitter<any>();

  ngOnInit() {
    this.searchQuery.emit('');
  }

  cancel() {
    this.selectionCancel.emit();
  }

  confirm(item: SelectWithSearchItem) {
    this.selectionChange.emit(item);
  }

  onSearchbarInput(event: any) {
    const query = event.target.value;
    const normalizedQuery = query.toLowerCase();
    this.searchQuery.emit(normalizedQuery);
  }

  onIonInfinite(event: any) {
    this.ionInfinite.emit();
    (event as InfiniteScrollCustomEvent).target.complete();
  }
}
