import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { TouchSequence } from 'selenium-webdriver';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public isShowNav: boolean;
  public isShowSearch: boolean;

  /* Detect when click on document. */
  @HostListener('document:click', ['$event'])
  clickout(event) {
    const targetClass: string = event.target.className;

    if (targetClass !== 'aside-btn' && targetClass !== 'fa fa-bars') {
      this.onCloseNav();
    }

  }

  constructor() {
  }

  ngOnInit() {
  }

  public onCloseNav(): void {
    this.isShowNav = false;
  }

  public onShowNav(): void {
    this.isShowNav = true;
  }

  public onShowSearch(): void {
    this.isShowSearch = true;
  }

  public onCloseSearch(): void {
    this.isShowSearch = false;
  }


}
