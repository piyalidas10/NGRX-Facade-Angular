import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Grocery } from '../../models/grocery.model';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { CommonFacade } from '../../store/facade/common.facade';
import { Bucket } from '../../models/bucket.model';


@Component({
  selector: 'app-grocery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './grocery.component.html',
  styleUrl: './grocery.component.css'
})
export class GroceryComponent {
  groceries$?: Observable<Grocery[]>;
  filteredGroceries$?: Observable<Grocery[]>;
  
  constructor(private commonFacade: CommonFacade) {
    this.groceries$ = this.commonFacade.getGroceries();
  }
  onTypeChange(event: Event) {
    const selectedType = (event.target as HTMLSelectElement).value;
    if (selectedType) {
      this.commonFacade.filterByGroceryType(selectedType);
    } else {
      this.filteredGroceries$ = undefined;
    }
  }
  increment(item: Grocery) {
    const payload: Bucket = {
      id: item.id,
      name: item.name,
      quantity: 1
    }
    this.commonFacade.addToBucket(payload);
  }
  decrement(item: Grocery) {
    const payload = {
      id: item.id
    };    
    this.commonFacade.removeFromBucket(payload);
  }

}
