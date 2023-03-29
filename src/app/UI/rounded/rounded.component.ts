import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rounded',
  templateUrl: './rounded.component.html',
  styleUrls: ['./rounded.component.scss'],
})
export class RoundedComponent {
  src: string = './../../../assets/images/rounded/';
  @Input() title: string | undefined;
  @Input()
  set fileName(val: string) {
    this.src += val;
  }
}
