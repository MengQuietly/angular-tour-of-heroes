import {Injectable, OnInit} from '@angular/core';

@Injectable()
export class MessageService implements OnInit {
  messages: string[] = [];
  constructor() {
  }
  ngOnInit() {
  }
  add(message: string) {
    this.messages.push(message);
  }
  clear() {
    this.messages = [];
  }
}
