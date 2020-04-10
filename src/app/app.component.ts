import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'chatbotpages';
  active;
  inactive = false;

  showChat() {
    this.active = true;
    this.inactive = !this.active;
  }

  closeChat() {
    this.active = false;
    this.inactive = !this.active;
  }


  resizeIframe(obj) {
    //obj.path[0].style.height = obj.path[1].style.height + 'px';
  }
}
