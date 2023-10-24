import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/common/api.service';

@Component({
  selector: 'app-finance',
  templateUrl: './finance.page.html',
  styleUrls: ['./finance.page.scss'],
})
export class FinancePage implements OnInit {

  constructor(
    private api: ApiService
  ) { }

  ln: any = this.api.ln.data
  all: any[] = [
    {
        "key": "financial_accountant",
        "name": "Financial Accountant",
        "icon": "cash-outline",
        "path": ["/finance", "financial-accountant"]
    },
    {
        "key": "chartered_accountant",
        "name": "Chartered Accountant",
        "icon": "calculator-outline",
        "path": ["/finance", "chartered-accountant"]
    }
  ];
  ngOnInit() {
  }

}
