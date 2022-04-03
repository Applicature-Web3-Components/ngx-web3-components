import { AfterViewInit, Directive, Inject, TemplateRef, ViewContainerRef } from '@angular/core';
import { DOCUMENT } from '@angular/common';


@Directive({
  selector: '[aucDropdownMenu]',
  exportAs: 'aucDropdownMenu'
})
export class AucDropdownMenuDirective implements AfterViewInit {

  constructor(private _templateRef: TemplateRef<any>,
              private _viewContainerRef: ViewContainerRef,
              @Inject(DOCUMENT) private document: Document
  ) {
  }

  public ngAfterViewInit(): void {
    let embeddedViewRef = this._viewContainerRef.createEmbeddedView(this._templateRef);

    embeddedViewRef.detectChanges();

    embeddedViewRef.rootNodes.forEach(node => this.document.body.appendChild(node))
  }

}