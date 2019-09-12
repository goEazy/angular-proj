import { InputFormatDirective } from './input-format.directive';
import { ElementRef } from '@angular/core';

describe('InputFormatDirective', () => {
  it('should create an instance', () => {
    let el=null;
    const directive = new InputFormatDirective(el);
    expect(directive).toBeTruthy();
  });
});
