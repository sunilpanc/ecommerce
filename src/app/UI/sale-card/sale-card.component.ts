import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sale-card',
  templateUrl: './sale-card.component.html',
  styleUrls: ['./sale-card.component.scss'],
})
export class SaleCardComponent {
  @Input() fileName: string | undefined;
  @Input() discount: number | undefined;
}
