import { Component, Input }  from '@angular/core';
import { AdComponent }       from './ad.component';

@Component({
  template: `
    <div style='border: 1px solid gray;padding: 5px;padding-bottom: 20px;padding-left: 20px;border-radius: 10px;
        background-color: lightblue;color: black;'>
        <h4>{{data.name}}</h4>{{data.bio}}
    </div>
  `
})
export class HeroProfileComponent implements AdComponent {
  @Input() data: any;
}


