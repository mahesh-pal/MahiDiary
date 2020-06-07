import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {MarkdownEditorComponent} from './markdown_editor';

@NgModule({
    declarations: [MarkdownEditorComponent],
    imports: [CommonModule],
    exports: [MarkdownEditorComponent],
})
export class MarkdownEditorModule {}