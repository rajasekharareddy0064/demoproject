import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:'', loadChildren:'./user-registration/user-registration.module#UserRegistrationModule'},
 {path:'login', loadChildren:'./login-module/login-module.module#LoginModuleModule'},
 {path:'user-details', loadChildren:'./user-details/user-details.module#UserDetailsModule'},
 {path: 'file-upload', loadChildren: './file-upload/file-upload.module#FileUploadModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
