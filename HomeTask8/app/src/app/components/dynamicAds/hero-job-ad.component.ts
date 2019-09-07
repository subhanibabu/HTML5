import { Component, Input } from '@angular/core';
import { AdComponent }      from './ad.component';

@Component({
  template: `
    <div style='border: 1px solid gray;padding: 5px;padding-bottom: 20px;padding-left: 10px;border-radius: 10px;
    background-color: lightblue;color: black;'>
      <h4>{{data.headline}}</h4>
      {{data.body}}
    </div>
  `
})
export class HeroJobAdComponent implements AdComponent {
  @Input() data: any;

}

