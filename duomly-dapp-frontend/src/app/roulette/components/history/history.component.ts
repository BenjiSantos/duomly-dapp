import { Component, OnInit } from '@angular/core';
import { RouletteService } from '../../services/roulette.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  history = [];
  web3;
  constructor(public rouletteService: RouletteService) {

  }

  subscribeData() {
    this.rouletteService.historySubject.subscribe((res) => {
      this.history = res;
    });
  }

  ngOnInit() {
    this.subscribeData();
  }

}
