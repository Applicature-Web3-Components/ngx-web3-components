import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
  Renderer2
} from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { ApplicatureCustomClassDirective } from '../applicature-custom-class/applicature-custom-class.directive';


@Directive({
  selector: '[applicatureTrigger]',
  exportAs: 'applicatureTrigger'
})
export class ApplicatureTriggerDirective {
  @Input() triggerClass = 'applicature-trigger-opened';
  @Output() onShowHide: EventEmitter<boolean> = new EventEmitter<boolean>();

  private _customClass: ApplicatureCustomClassDirective;
  private _isOpened: boolean = false;

  public opened$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this._isOpened);

  public get opened(): boolean {
    return this._isOpened;
  }

  private set _opened(opened: boolean) {
    this._isOpened = opened;
    this.opened$.next(this.opened);
    this.onShowHide.emit(this.opened);
  }

  @HostListener('click', [ '$event' ]) onClick(e: MouseEvent): void {
    e.preventDefault();
    e.stopPropagation();

    this.showHide();
  }

  public get nativeElement() {
    return this._elementRef?.nativeElement;
  }

  constructor(private _renderer2: Renderer2, private _elementRef: ElementRef) {
    this._customClass = new ApplicatureCustomClassDirective(this._renderer2, this._elementRef);
  }

  public showHide(isOpen?: boolean): void {
    if ((isOpen ?? null) !== null) {
      this._opened = isOpen;
    } else {
      this._opened = !this._opened;
    }

    if (this._customClass) {
      if (this.opened) {
        this._customClass.setClasses([ this.triggerClass ]);

        return;
      }

      this._customClass.removeClasses([ this.triggerClass ]);
    }
  }

}