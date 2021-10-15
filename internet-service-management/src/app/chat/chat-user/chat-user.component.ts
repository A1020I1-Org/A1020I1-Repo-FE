import {Component, DoCheck, OnInit} from '@angular/core';
import { faPaperPlane} from '@fortawesome/free-solid-svg-icons';
import {faFacebookMessenger} from '@fortawesome/free-brands-svg-icons'
import {ChatModel} from "../../model/Chat.model";
import {FormControl, FormGroup} from "@angular/forms";
import {ChatService} from "../../service/chat.service";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-chat-user',
  templateUrl: './chat-user.component.html',
  styleUrls: ['./chat-user.component.css']
})
export class ChatUserComponent implements OnInit, DoCheck {
  faFacebookMessenger = faFacebookMessenger;
  faPaperPlane = faPaperPlane;

  chat: ChatModel = {};
  roomName: string = "room1";
  chats?: ChatModel[] = [];
  chatForm!: FormGroup;
  todayDate ?: Date;

  constructor(private chatService: ChatService) { }

  ngOnInit(): void {
    this.chatForm = new FormGroup({
      message : new FormControl('')
    });
    this.getAllMessages(this.roomName);
  }

  ngDoCheck() {
    // @ts-ignore
    document.getElementById("chatPage").scrollTop = document.getElementById("chatPage").scrollHeight;
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
    this.chat.userName = "room1";
    this.todayDate = new Date();
    this.chat.dateTime = this.todayDate.toString();
    this.chat.status = "sent";
    this.chat.message = this.chatForm.value.message;
    this.sendMessage(this.chat);
    // @ts-ignore
    document.getElementById("message").value = "";
  }
}
