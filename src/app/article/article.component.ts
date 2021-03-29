import { Article } from './article.model';
import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row';

  @Input() article: Article;

  constructor() {
    // this.article = new Article('Anuglar 2', 'http://angular.io', 10);
  }

  voteUp(): boolean {
    this.article.voteUp();
    return false;
  }

  voteDown(): boolean {
    this.article.voteDown();
    return false;
  }

  ngOnInit(): void {}
}
