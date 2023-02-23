import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() text: string;
  @Output() btnClick = new EventEmitter();

  constructor() {
    this.text = 'click';
  }

  ngOnInit(): void {}

  onClick() {
    this.btnClick.emit();
  }
}
