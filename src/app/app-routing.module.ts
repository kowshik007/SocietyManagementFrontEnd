import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { DocumentsComponent } from './documents/documents.component';
import { CreateSocietyComponent } from './society/create-society/create-society.component';
import { SocietyComponent } from './society/society.component';
import { SocietyDetailsComponent } from './society/society-details/society-details.component';
import { SocietyListComponent } from './society/society-list/society-list.component';
import { SocietyEditComponent } from './society/society-edit/society-edit.component';

const appRoutes: Routes=[
    {
      path: '',component: IndexComponent
    },
    {
      path: 'documents',component: DocumentsComponent
    },
    {
      path: 'register',component: CreateSocietyComponent
    },
    {
      path: 'societies',component: SocietyComponent, children:[
        {
          path: '',component: SocietyListComponent
        },
        {
          path: ':id',component: SocietyDetailsComponent
        },
        {
          path: ':id/edit',component: SocietyEditComponent
        }
      ]
    }
  ];
@NgModule({
    imports: [
        RouterModule,
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule{

}