import {NgModule} from '@angular/core';
import {MessageComponent} from './message.component';
import {MessageService} from './message.service';
import {BrowserModule} from '@angular/platform-browser';

@NgModule({
  // service
  providers: [MessageService],
  // module
  imports: [BrowserModule],
  // component(私有)
  declarations: [MessageComponent],
  // component
  exports: [MessageComponent]
})
export class MessageModule {}
