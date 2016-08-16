import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Data } from '../../providers/data/data';
import {Observable} from 'rxjs';


/*
  Generated class for the GamePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  inputs: ['id'],
  providers: [Data],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: 'build/pages/game/game.html',
})
export class GamePage {
  id: string;
  thing: Observable<JSON>;
  showDescription: boolean = true;
  Description: string;

  constructor(private navCtrl: NavController, private cd: ChangeDetectorRef, private params: NavParams, private data: Data) {
    this.id = params.get('id');
  }

  ngOnInit(): void {
    this.thing = this.data.getThing(this.id);
    this.thing.subscribe(res =>
    {
      if (res['description']) {
        this.Description = ((String)(res['description'])).replace(/&#10;/g, '\r\n').replace(/&ldquo;|&rdquo;/g, '"');
      }
    });
  }

  toggleShowDescription(): void {
    this.showDescription = !this.showDescription;
    this.cd.markForCheck();
  }

  openGame(id: string): void {
    console.log(id);
    this.navCtrl.push(GamePage, {
      id: id
    });
  }

}
