import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ChatAdminComponent} from './chat-admin/chat-admin.component';
import {ChatUserComponent} from './chat-user/chat-user.component';
import {ReactiveFormsModule} from "@angular/forms";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";


@NgModule({
  declarations: [
    ChatAdminComponent,
    ChatUserComponent
  ],
  exports: [
    ChatAdminComponent,
    ChatUserComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FontAwesomeModule,
  ]
})
export class ChatModule {
}
