import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'chatbotpages';
  active;

  showChat() {
    this.active = true;
  }

  resizeIframe(obj) {
    obj.path[0].style.height = obj.path[1].style.height + 'px';
  }
}
