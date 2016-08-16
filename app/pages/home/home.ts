import {Component, OnInit} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Data} from '../../providers/data/data';

@Component({
  templateUrl: 'build/pages/home/home.html',
  providers: [Data]
})
export class HomePage implements OnInit {
  hot: JSON;

  constructor(public navCtrl: NavController, public data: Data) {

  }

  ngOnInit(): void {
    this.data.getHot().subscribe(json => {
      this.hot = json;
    });
  }
}
