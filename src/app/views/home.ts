import {Component} from '@angular/core';
import { BlogService } from '../service/blog_service';
import {Observable} from 'rxjs';
import {Blog} from '../models';
import {Router} from '@angular/router';
import {PaginationService} from '../service/pagination_service';

@Component({
    selector: 'home',
    templateUrl: 'home.ng.html',
    styleUrls: ['home.scss'],
})
export class HomeComponent {
    blog$: Observable<Blog[]>;

    constructor(private blogService: BlogService,
                private readonly router: Router,
                private readonly paginationService: PaginationService) {
            this.paginationService.init('blogs', 'title', { reverse: false });
    }

    moveTo(title: string) {
        this.router.navigate(['view/' + title]);

    }

    onScrollDown(ev) {
            this.paginationService.more();
      }
}
