import { NgModule } from '@angular/core';
import { BlogDisplayComponent } from './blog_display';
import { MarkdownParserDirectiveModule } from '../directives/markdown_parser/markdown_parser.module';

@NgModule({
    declarations: [BlogDisplayComponent],
    imports: [MarkdownParserDirectiveModule, ],
    exports: [BlogDisplayComponent],
})
export class BlogDisplayModule {}
