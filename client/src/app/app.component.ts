import { Component } from '@angular/core';
import { NzIconService } from 'ng-zorro-antd/icon';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Hello App';

  constructor(
    private nzIconService: NzIconService
  ) {
    // Set AssetsSource NzIcon
    if(environment.devfs || environment.production) {
      this.nzIconService.changeAssetsSource("/client")
    }
  }
}
