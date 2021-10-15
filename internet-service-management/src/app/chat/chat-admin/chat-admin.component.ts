import {Component, OnInit} from '@angular/core';
import {ChatService} from "../../service/chat.service";
import {ChatModel} from "../../model/Chat.model";
import {map} from "rxjs/operators";
import {FormControl, FormGroup} from "@angular/forms";


@Component({
  selector: 'app-chat-admin',
  templateUrl: './chat-admin.component.html',
  styleUrls: ['./chat-admin.component.css']
})
export class ChatAdminComponent implements OnInit {
  chat: ChatModel = {};
  roomName: string = "room1";
  chats?: ChatModel[] = [];
  chatForm!: FormGroup;
  todayDate ?: Date;

  constructor(private chatService: ChatService) {

  }

  ngOnInit(): void {
    this.chatForm = new FormGroup({
      message : new FormControl('')
    });
    this.getAllMessages(this.roomName)
  }

  getAllMessages(romeName: string) {
    this.chatService.getAll(romeName).snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({key: c.payload.key, ...c.payload.val()})
        )
      )
    ).subscribe(data => {
      this.chats = data;
    })
  }

  sendMessage(chat: ChatModel) {
    this.chatService.create(chat, this.roomName);
  }

  onsubmit() {
    this.chat.userName = "admin 1";
    this.todayDate = new Date();
    this.chat.dateTime = this.todayDate.toString();
    this.chat.status = "sent";
    this.chat.message = this.chatForm.value.message;
    this.sendMessage(this.chat);
  }
}
