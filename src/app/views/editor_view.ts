import {Component} from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import {Blog} from '../models';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Router} from '@angular/router';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'editor-view',
    templateUrl: 'editor_view.ng.html',
    styleUrls: ['editor_view.scss'],
})
export class EditorViewComponent {
    constructor(private readonly db: AngularFirestore,
                private snackBar: MatSnackBar,
                private router: Router) {
    }

    content = '';

    latest(latestContent: string) {
        this.content = latestContent;
    }

    publish(isValid: boolean, title: string) {
        if(!isValid) return ;

        //const blog = new Blog(title, this.content);
        const blogRef = this.db.doc<{summary: string, title: string}>('blogs/' + title);
        const summaryPromise = blogRef.set({summary: '', title});
        const contentPromise = blogRef.collection('content')
                .doc<{content: string}>(title).set({content: this.content});

        Promise.all([summaryPromise, contentPromise ])
          .then(() => {
            this.router.navigate(['view/' + title]);
            })
            .catch(error => {
                console.log(error);
                this.snackBar.open('Error: ' + error.message, 'dismiss');
            });
    }
}