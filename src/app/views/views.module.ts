import { NgModule } from '@angular/core';
import { BlogDisplayViewComponent } from './blog_display_view';
import { BlogDisplayModule } from '../blog_display/blog_display.module';
import { CommonModule } from '@angular/common';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import {EditorViewComponent} from './editor_view';
import {MarkdownEditorModule} from '../markdown_editor/markdown_editor.module';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {HomeComponent} from './home';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import {AboutMeComponent} from './about_me';

@NgModule({
    declarations: [
        BlogDisplayViewComponent,
        EditorViewComponent,
        HomeComponent,
        AboutMeComponent,
     ],
    imports: [
        MatCardModule,
        BlogDisplayModule,
        CommonModule,
        AngularFirestoreModule,
        MarkdownEditorModule,
        MatDividerModule,
        MatButtonModule,
        FormsModule,
        MatInputModule,
        MatSnackBarModule,
        MatGridListModule,
        InfiniteScrollModule,
     ],
    exports: [ ],
})
export class ViewsModule { }
