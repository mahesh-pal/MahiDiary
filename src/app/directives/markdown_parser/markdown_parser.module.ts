import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarkDownParserDirective } from './markdown_parser';

@NgModule({
    imports: [CommonModule],
    declarations: [MarkDownParserDirective],
    exports: [MarkDownParserDirective],
})
export class MarkdownParserDirectiveModule {
}
