import { Component } from '@angular/core';
// import {MatSlideToggleModule} from '@angular/material/slide-toggle';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  isDark = false;
  onToggleMode(){
    this.isDark = !this.isDark;
  }
}
