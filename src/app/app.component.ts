import { Component } from '@angular/core';
import { ApiService } from './services/common/api.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private api: ApiService
  ) {}

  ngOnInit(){
    this.api.init();
  }
}
