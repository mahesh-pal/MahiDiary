import { Component, ViewChild, ElementRef, AfterViewInit, EventEmitter, Input, Output } from '@angular/core';
import 'codemirror/lib/codemirror';
import 'codemirror/mode/markdown/markdown';
import { fromTextArea, Editor } from 'codemirror';

const DEFAULT_CONFIG = {
    theme: 'eclipse',
    mode: 'markdown',
    highlightFormatting: true,
    lineNumbers: true,
    autoFocus: true,
    cursorHeight: 0.85,
    spellcheck: true,
};

type configValueType = string | number | boolean;

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'markdown-editor',
    templateUrl: 'markdown_editor.ng.html',
    styleUrls: ['markdown_editor.scss'],
    // encapsulation: ViewEncapsulation.None,
})
export class MarkdownEditorComponent implements AfterViewInit {
    @Input() config: { [key: string]: configValueType } = DEFAULT_CONFIG;
    @Output() latest = new EventEmitter<string>();

    @ViewChild('editor', { read: ElementRef, static: true })
    editor: ElementRef;

    ngAfterViewInit(): void {
      fromTextArea(this.editor.nativeElement, this.config)
          .on('change', (editor: Editor) => this.emit(editor));
    }

    emit(editor: Editor) {
        this.latest.emit(editor.getDoc().getValue());
    }

}
