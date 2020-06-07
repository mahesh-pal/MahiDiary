import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-blog-display',
    templateUrl: 'blog_display.ng.html',
    styleUrls: ['blog_display.scss'],
})
export class BlogDisplayComponent {
    @Input() content = '';
    constructor() {
    }
}

