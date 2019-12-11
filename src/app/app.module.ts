import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



import { AppComponent } from './app.component';
import { AngularBasicsComponent } from './angular-basics/angular-basics.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { AppRoutingModule } from './app/app-routing.module';
import { AngularPipesComponent } from './angular-pipes/angular-pipes.component';
import { GenderPipe } from './pipes/gender.pipe';
import { OrderByPipe } from './pipes/order-by.pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { CaseStudyComponent } from './case-study/case-study.component';
import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';
import { TodosComponent } from './todos/todos.component';
import { CommentsComponent } from './comments/comments.component';
import { AlbumsComponent } from './albums/albums.component';
import { PhotosComponent } from './photos/photos.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersTableComponent } from './users-table/users-table.component';
import { UsersService } from './services/users.service';
import { SpringBootComponent } from './spring-boot/spring-boot.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { NestedComponent } from './nested/nested.component';
import { CountryComponent } from './country/country.component';
import { StateComponent } from './state/state.component';
import { CityComponent } from './city/city.component';
import { CustomDirectivesComponent } from './custom-directives/custom-directives.component';
import { FgColorDirective } from './directives/fg-color.directive';
import { BgColorDirective } from './directives/bg-color.directive';
import { NgShowDirective } from './directives/ng-show.directive';
import { NgHideDirective } from './directives/ng-hide.directive';
import { FormValidationComponent } from './form-validation/form-validation.component';
import { StudentFormComponent } from './student-form/student-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ViewChildComponent } from './view-child/view-child.component';
import { CounterComponent } from './counter/counter.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LibraryModule } from './library/library.module';
import { MustMatchDirective } from './directives/must-match.directive';


@NgModule({
  declarations: [ //directives,components,pipes
    AppComponent, AngularBasicsComponent, TechnologiesComponent, AngularPipesComponent, 
    GenderPipe, OrderByPipe, CaseStudyComponent, UsersComponent, PostsComponent, 
    TodosComponent, CommentsComponent, AlbumsComponent, PhotosComponent,
     UsersListComponent, UsersTableComponent, SpringBootComponent, EditEmployeeComponent,
      DeleteEmployeeComponent, AddEmployeeComponent, NestedComponent, CountryComponent, 
      StateComponent, CityComponent, CustomDirectivesComponent, FgColorDirective, 
      BgColorDirective, NgShowDirective, NgHideDirective, FormValidationComponent, StudentFormComponent, ReactiveFormComponent, ViewChildComponent, CounterComponent, LoginComponent, RegisterComponent, MustMatchDirective
  ],
  imports: [  //modules
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    Ng2SearchPipeModule,
    HttpClientModule,
    ReactiveFormsModule,
    LibraryModule
  ],
 providers: [UsersService],//services  prior to angular5 
 // providers:[],
  bootstrap: [AppComponent] //component
})
export class AppModule { }
