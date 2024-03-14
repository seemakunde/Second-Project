import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SupplierListComponent } from './supplier-list/supplier-list.component';
import { AddQuestionComponent } from './add-question/add-question.component';
import { SelectQuestionComponent } from './select-question/select-question.component';
import { SelectUserComponent } from './select-user/select-user.component';

export const routes: Routes = [
   { path: '', redirectTo: 'Login', pathMatch: 'full' },
   {
     path: 'Login',
     component: LoginComponent,
   },
 
   {
     path: '',
     children: [
       {
         path: 'home',
         component:HomeComponent
       },
       {
         path: 'supplier',
         component: SupplierListComponent,
       },
       {
         path: 'addQuestion',
         component: AddQuestionComponent,
       },
       {
         path: 'questions',
         component: SelectQuestionComponent,
       },
       {
         path: 'q',
         component: SelectUserComponent,
       },
     ],
   },
];
