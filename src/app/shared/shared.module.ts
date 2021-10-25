import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './componets/side-bar/side-bar.component';
import { HeaderUserComponent } from './componets/header-user/header-user.component';
import { MediaPlayerComponent } from './componets/media-player/media-player.component';



@NgModule({
  declarations: [
    SideBarComponent,
    HeaderUserComponent,
    MediaPlayerComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    SideBarComponent
  ]
})
export class SharedModule { }
