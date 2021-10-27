import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ChatAdminComponent} from "./chat/chat-admin/chat-admin.component";
import {ChatUserComponent} from "./chat/chat-user/chat-user.component";

const routes: Routes = [
  {
    path: "admin", component: ChatAdminComponent
  },
  {
    path: "user", component: ChatUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
