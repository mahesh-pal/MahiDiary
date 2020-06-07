import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { BlogService } from '../service/blog_service';
import { Subject, Observable } from 'rxjs';
import { takeUntil, map, flatMap} from 'rxjs/operators';
import { Blog } from '../models';

@Component({
    selector: 'app-blog-display-view',
    templateUrl: 'blog_display_view.ng.html',
    styleUrls: ['blog_display_view.scss'],
})
export class BlogDisplayViewComponent implements OnDestroy {
    destroyed = new Subject();
    blog$: Observable<Blog>;

    constructor(private readonly route: ActivatedRoute,
                private readonly blogService: BlogService
    ) {
        this.blog$ = this.route.paramMap.pipe(
            takeUntil(this.destroyed),
            map((params: ParamMap) => params.get('title') || ''),
            flatMap((title: string) => {
                return this.blogService.getBlog(title);
            }),
        );

    }

    ngOnDestroy() {
        this.destroyed.next();
        this.destroyed.complete();
    }

}
