import {Component} from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Router} from '@angular/router';

@Component({
    selector: 'home',
    templateUrl: 'home.ng.html',
    styleUrls: ['home.scss'],
})
export class HomeComponent {
    blog$: Observable<{title: string, summary: string}[]>;
    constructor(private db: AngularFirestore, private readonly router: Router){
     this.blog$ = this.db
       .collection<{content: string, summary: string}>('blogs')
       .get()
       .pipe(
           map((d) => d.docs.map(i => i.data()  as {summary: string, title: string})),
           );
    }

    moveTo(title: string) {
        this.router.navigate(['view/' + title]);

    }
}