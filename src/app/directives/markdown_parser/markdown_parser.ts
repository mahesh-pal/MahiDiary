import { Directive, Input, ElementRef, OnChanges, SimpleChanges } from '@angular/core';
import * as MarkdownIt from 'markdown-it';
import * as abbrPlugin from 'markdown-it-abbr';
import * as markdownnAttr from 'markdown-it-attrs';

@Directive({
    selector: '[appMarkdownParser]',
})
export class MarkDownParserDirective implements OnChanges {
    @Input('appMarkdownParser') content = '';

    md = new MarkdownIt();


    constructor(private readonly element: ElementRef) {
        this.md.use(abbrPlugin).use(markdownnAttr, {
            leftDelimiter: '{',
            rightDelimiter: '}',
            allowedAttributes: []
        });
    }

    ngOnChanges(change: SimpleChanges) {
        if (change['content']) {
            const parsedContent = this.md.render(change['content'].currentValue);
            this.element.nativeElement.innerHTML = parsedContent;
        }

    }

}
