import {Injectable} from '@angular/core';
import { AngularFirestore, QuerySnapshot } from 'angularfire2/firestore';
import {Observable} from 'rxjs';
import {map, filter} from 'rxjs/operators';
import {Blog} from '../models';

@Injectable({providedIn: 'root'})
export class BlogService {
    constructor(private db: AngularFirestore) {}

    getALlBlogs(): Observable<Blog[]> {
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
        const blogRef = this.db.doc<{title: string}>(`blogs/title`);
        const summaryPromise = blogRef.set({title});
        const contentPromise = blogRef.collection('content')
                .doc<{content: string}>(title).set({content});

        return Promise.all([summaryPromise, contentPromise ]);
    }
}
