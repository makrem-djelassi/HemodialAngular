import { Component } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
@Component({
  selector: 'app-compose',
  templateUrl: './compose.component.html',
  styleUrls: ['./compose.component.scss'],
})
export class ComposeComponent {
  public Editor: any = ClassicEditor;
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}
}
