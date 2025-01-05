import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BucketComponent } from './components/bucket/bucket.component';
import { GroceryComponent } from './components/grocery/grocery.component';
import { CommonFacade } from './store/facade/common.facade';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,BucketComponent,GroceryComponent],
  providers: [CommonFacade],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private commonFacade: CommonFacade) {
  }

  ngOnInit() {
    this.commonFacade.loadAll();
  }
}
