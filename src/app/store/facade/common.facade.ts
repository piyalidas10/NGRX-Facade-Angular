import { Injectable } from '@angular/core';
import { StateModel } from '../../models/state.model';
import { Store } from '@ngrx/store';
import { selectGroceries, selectGroceriesByType } from '../selectors/grocery.selectors';
import { groceryAction } from '../actions/grocery.action';
import { addToBucket, removeFromBucket } from '../actions/bucket.action';
import { Bucket } from '../../models/bucket.model';
import { selectBuckets } from '../selectors/bucket.selectors';

@Injectable({
  providedIn: 'root'
})
export class CommonFacade {
    
    constructor(private store: Store<StateModel>) {
    }

    loadAll() {
        this.store.dispatch(groceryAction.loadGroceries());
    }

    getGroceries() {
        return this.store.select(selectGroceries);
    }

    getBuckets() {
        return this.store.select(selectBuckets)
    }

    filterByGroceryType(selectedType: string) {
        return this.store.select(selectGroceriesByType(selectedType));
    }

    addToBucket(payload: Bucket) {
        this.store.dispatch(addToBucket({payload}));
    }

    removeFromBucket(payload: Partial<Bucket>) {
        this.store.dispatch(removeFromBucket({payload}));
    }

}