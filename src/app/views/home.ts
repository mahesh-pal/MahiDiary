import {Component} from '@angular/core';
import { BlogService } from '../service/blog_service';
import {Observable} from 'rxjs';
import {Blog} from '../models';
import {Router} from '@angular/router';

@Component({
    selector: 'home',
    templateUrl: 'home.ng.html',
    styleUrls: ['home.scss'],
})
export class HomeComponent {
    blog$: Observable<Blog[]>;

    constructor(private blogService: BlogService, private readonly router: Router) {
     this.blog$ = this.blogService.getALlBlogs();
    }

    moveTo(title: string) {
        this.router.navigate(['view/' + title]);

    }

    onScrollDown(ev) {
        console.log('scrolled down!!', ev);
      }

      onUp(ev) {

      }
}
