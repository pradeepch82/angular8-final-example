import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadingStrategy } from '@angular/router';
import { AngularBasicsComponent } from '../angular-basics/angular-basics.component';
import { TechnologiesComponent } from '../technologies/technologies.component';
import { AngularPipesComponent } from '../angular-pipes/angular-pipes.component';
import { CaseStudyComponent } from '../case-study/case-study.component';
import { UsersComponent } from '../users/users.component';
import { PostsComponent } from '../posts/posts.component';
import { CommentsComponent } from '../comments/comments.component';
import { TodosComponent } from '../todos/todos.component';
import { AlbumsComponent } from '../albums/albums.component';
import { PhotosComponent } from '../photos/photos.component';
import { UsersListComponent } from '../users-list/users-list.component';
import { UsersTableComponent } from '../users-table/users-table.component';
import { SpringBootComponent } from '../spring-boot/spring-boot.component';
import { AddEmployeeComponent } from '../add-employee/add-employee.component';
import { EditEmployeeComponent } from '../edit-employee/edit-employee.component';
import { DeleteEmployeeComponent } from '../delete-employee/delete-employee.component';
import { CustomDirectivesComponent } from '../custom-directives/custom-directives.component';
import { NestedComponent } from '../nested/nested.component';
import { FormValidationComponent } from '../form-validation/form-validation.component';
import { ViewChildComponent } from '../view-child/view-child.component';
import { RegisterComponent } from '../register/register.component';
import { LoginComponent } from '../login/login.component';
import { MultiGuard } from '../guards/multi-guard.guard';
import { LibraryModule } from '../library/library.module';
import { CanDeactivateFormValidation } from '../guards/can-deactivate-form-validation.service';

const routes: Routes = [
  {path:'basics',component:AngularBasicsComponent,canActivate:[MultiGuard] },
  {path:'home',component:AngularBasicsComponent,canActivate:[MultiGuard]},
  
  {path:'technologies',component:TechnologiesComponent,canActivate:[MultiGuard],
},
  {path:'pipes',component:AngularPipesComponent,canActivate:[MultiGuard]},
  {path:'spring-boot',component:SpringBootComponent,canActivate:[MultiGuard]},
  {path:'add',component:AddEmployeeComponent,canActivate:[MultiGuard]},
  {path:'edit/:employeeId',component:EditEmployeeComponent,canActivate:[MultiGuard]},
  {path:'delete/:employeeId',component:DeleteEmployeeComponent,canActivate:[MultiGuard]},
  {path:'custom-directives',component:CustomDirectivesComponent,canActivate:[MultiGuard]},
  {path:'nested-component',component:NestedComponent,canActivate:[MultiGuard]},
  {path:'form-validation',component:FormValidationComponent,canActivate:[MultiGuard],canDeactivate:[CanDeactivateFormValidation]},
  {path:'view-child',component:ViewChildComponent,canLoad:[MultiGuard]},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'library',canLoad: [MultiGuard], loadChildren : '../library/library.module#LibraryModule'},
  {path:'address',canLoad: [MultiGuard], loadChildren : '../address/address.module#AddressModule'},
  
  
     
  
  {path:'casestudy',component:CaseStudyComponent,
  canActivateChild:[MultiGuard], 
  children:[
    {path:'users',component:UsersComponent,
    children:[
      {path:'list',component:UsersListComponent},
      {path:'table',component:UsersTableComponent},
     ],
     },
     {path:'users/:userId',component:UsersComponent},
     {path:'posts',component:PostsComponent},
    {path:'comments',component:CommentsComponent},
    {path:'todos',component:TodosComponent},
    {path:'albums',component:AlbumsComponent},
    {path:'photos',component:PhotosComponent},
   ]
    
  },
  
  
  {path:'**',redirectTo:'basics'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)
  
  
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
