import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPostComponent } from './add-post/add-post.component';
import { HomeComponent } from './home/home.component';
import { UpdatePostComponent } from './update-post/update-post.component';

const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "add-post", component: AddPostComponent},
  {path: "update-post/:id", component: UpdatePostComponent},
  {path: "", redirectTo: "home", pathMatch: "full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
