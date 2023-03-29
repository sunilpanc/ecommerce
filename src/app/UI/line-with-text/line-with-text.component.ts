import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-line-with-text',
  templateUrl: './line-with-text.component.html',
  styleUrls: ['./line-with-text.component.scss'],
})
export class LineWithTextComponent {
  @Input() content: string | undefined;
}
