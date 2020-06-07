import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { AngularFirestore } from 'angularfire2/firestore';
import { Subject, Observable } from 'rxjs';
import { takeUntil, map, flatMap, filter } from 'rxjs/operators';
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
        private db: AngularFirestore,
    ) {
        this.blog$ = this.route.paramMap.pipe(
            takeUntil(this.destroyed),
            map((params: ParamMap) => params.get('title') || ''),
            flatMap((title: string) => {
                return this.db.doc<{content: string}>(`blogs/${title}/content/${title}`)
                    .get()
                    .pipe(
                        filter(s => s.exists),
                        map(s => new Blog(s.id, s.data().content)),
                    );
            }),
        );

    }

    ngOnDestroy() {
        this.destroyed.next();
        this.destroyed.complete();
    }

}
