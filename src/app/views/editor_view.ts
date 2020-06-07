import {Component} from '@angular/core';
import {BlogService} from '../service/blog_service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Router} from '@angular/router';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'editor-view',
    templateUrl: 'editor_view.ng.html',
    styleUrls: ['editor_view.scss'],
})
export class EditorViewComponent {
    constructor(private readonly blogService: BlogService,
                private snackBar: MatSnackBar,
                private router: Router) {
    }

    content = '';

    latest(latestContent: string) {
        this.content = latestContent;
    }

    publish(isValid: boolean, title: string) {
        if(!isValid) return ;

        this.blogService.saveBlog(title, this.content)
          .then(() => {
            this.router.navigate(['view/' + title]);
            })
            .catch(error => {
                console.log(error);
                this.snackBar.open('Error: ' + error.message, 'dismiss');
            });
    }
}