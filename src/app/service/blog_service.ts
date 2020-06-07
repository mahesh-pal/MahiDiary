import {Injectable} from '@angular/core';
import { AngularFirestore, QuerySnapshot } from 'angularfire2/firestore';
import {Observable} from 'rxjs';
import {map, filter} from 'rxjs/operators';
import {Blog} from '../models';

@Injectable({providedIn: 'root'})
export class BlogService {
    constructor(private db: AngularFirestore) {}

    moreBlogs(): Observable<Blog[]> {
       return this.db
        .collection<Blog>('blogs')
        .get()
        .pipe(
            map((d: QuerySnapshot<Blog>) => d.docs.map(i => i.data())),
            );
    }

    getBlog(title: string): Observable<Blog> {
        return  this.db.doc<Blog>(`blogs/${title}/content/${title}`)
        .get()
        .pipe(
            filter(s => s.exists),
            map(s => {
                return new Blog(s.id, '' , s.data().content);
            }),
        );
    }

    saveBlog(title: string, content: string) {
        const created = new Date();
        const blogRef = this.db.doc<{title: string,created: Date}>(`blogs/${title}`);
        const summaryPromise = blogRef.set({title,created});
        const contentPromise = blogRef.collection('content')
                .doc<{content: string, created}>(title)
                 .set({content, created});

        return Promise.all([summaryPromise, contentPromise ]);
    }
}
