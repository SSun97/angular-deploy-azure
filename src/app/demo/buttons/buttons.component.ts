import { Component } from '@angular/core';

@Component({
  selector: 'mda-buttons',
  template: `
<section>
  <div class="example-label">Basic</div>
  <div class="example-button-row">
    <button mat-button>Basic</button>
    <button mat-button color="primary">Primary</button>
    <button mat-button color="accent">Accent</button>
    <button mat-button color="warn">Warn</button>
    <button mat-button disabled>Disabled</button>
    <a mat-button href="https://www.google.com/" target="_blank">Link</a>
  </div>
</section>

<section>
  <div class="example-label">Raised</div>
  <div class="example-button-row">
    <button mat-raised-button>
      <mat-icon aria-hidden="false" aria-label="Example home icon" fontIcon="card_giftcard"></mat-icon>
      <mat-icon class="mat-icon-rtl-mirror" svgIcon="thumb-up"></mat-icon>
      Basic</button>
    <button mat-raised-button color="primary">Primary</button>
    <button mat-raised-button color="accent">Accent</button>
    <button mat-raised-button color="warn">Warn</button>
    <button mat-raised-button disabled>Disabled</button>
    <a mat-raised-button href="https://www.google.com/" target="_blank">Link</a>
  </div>
</section>

<section class="example-section">
  <mat-checkbox class="example-margin">Check me!</mat-checkbox>
  <mat-checkbox class="example-margin" [disabled]="true">Disabled</mat-checkbox>
</section>
  `,
  styles: [
  ]
})
export class ButtonsComponent {

}
