import { Component, OnInit,ViewChild,ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements AfterViewInit {
  @ViewChild('footertext', { static: false }) myfootertext: ElementRef;
  @ViewChild('footer', { static: false }) myfooter: ElementRef;

  constructor() { }

  ngAfterViewInit() {
    this.myfooter.nativeElement.innerHTML = '<pre>     <b>Footer</b></pre>';
    this.myfootertext.nativeElement.innerHTML = '<pre><b>Powered By NewsAPI       </b></pre>';
  }
}
