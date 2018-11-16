import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  @ViewChild('localRef') paragraph: ElementRef;
  constructor() { }

  ngOnInit() {
  }

  public showSomeText(): void {
    console.log(this.paragraph.nativeElement.innerText);
  }

}
