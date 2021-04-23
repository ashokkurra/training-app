import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataBindingComponent } from "./data-binding/data-binding.component";
import { RouteTestComponent } from "./route-test/route-test.component";

const routes: Routes = [
  { path: 'binding', component: DataBindingComponent },
  {path: 'test', component: RouteTestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
