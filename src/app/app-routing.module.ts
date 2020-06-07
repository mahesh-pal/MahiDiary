import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewsModule } from './views/views.module';
import { BlogDisplayViewComponent } from './views/blog_display_view';
import {EditorViewComponent} from './views/editor_view';
import {HomeComponent} from './views/home';

const routes: Routes = [
  {path: 'edit', component: EditorViewComponent},
  { path: 'view/:title', component: BlogDisplayViewComponent },
  {path:'', component: HomeComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ViewsModule],
  exports: [RouterModule],

})
export class AppRoutingModule {


 }
