import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AFormComponent } from './aform/aform.component';
import { HomeComponent } from './home/home.component';
import { NameEditorComponent } from './name-editor/name-editor.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'profile',
    component: ProfileEditorComponent,
  },
  {
    path: 'form',
    component: AFormComponent,
  },
  {
    path: 'formv1',
    component: NameEditorComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
