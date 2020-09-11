import { Component, OnInit } from '@angular/core';
import { Article } from '../../model/Article';
import {ArticleService} from '../article.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-article-create',
  templateUrl: './article-create.component.html',
  styleUrls: ['./article-create.component.css']
})
export class ArticleCreateComponent implements OnInit {

  constructor(private articleService: ArticleService,
    private router:Router) { }

  article: Article = new Article();
  error:String;
  

  ngOnInit(): void {
  }

  onSubmit() {
    this.articleService.createArticle(this.article).subscribe(
      succ => { 
        this.router.navigate([`/articles/${this.article.theme}/page/1`])
      },
      error => {
        this.error = error.error;
      });
  }

  handleInputChange(e) {
    var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];

    var pattern = /image-*/;
    var reader = new FileReader();

    if (!file.type.match(pattern)) {
      alert('invalid format');
      return;
    }
    reader.readAsDataURL(file);
    reader.onload = this._handleReaderLoaded.bind(this);
  }
  _handleReaderLoaded(e) {
    var reader = e.target;
    this.article.image = reader.result;
  }
}
