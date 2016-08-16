import {Component, OnInit} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Data} from '../../providers/data/data';
import {GamePage} from '../game/game';

@Component({
  templateUrl: 'build/pages/home/home.html',
  providers: [Data]
})
export class HomePage implements OnInit {
  hot: JSON;

  constructor(private navCtrl: NavController, private data: Data) {

  }

  ngOnInit(): void {
    this.data.getHot().subscribe(json => {
      this.hot = json;
    });
  }

  openGame(id: string): void {
    this.navCtrl.push(GamePage, {
      id: id
    });
  }
}
