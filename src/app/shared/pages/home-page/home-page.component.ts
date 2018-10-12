import {Component, OnInit} from '@angular/core';
import {AppConfig} from '../../../configs/app.config';
import {fadeInOut} from '../../helpers/utils.helper';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  animations: [fadeInOut]
})

export class HomePageComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }
}
