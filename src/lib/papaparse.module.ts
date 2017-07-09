import { NgModule, ModuleWithProviders, OpaqueToken, Optional, SkipSelf, Inject } from '@angular/core';

import { CommonModule } from '@angular/common';

import {PapaParseService} from "./papaparse.service";


export const DROPZONE_GUARD = new OpaqueToken('DROPZONE_GUARD');
export const DROPZONE_CONFIG = new OpaqueToken('DROPZONE_CONFIG');

@NgModule({
  imports: [CommonModule],
  providers: [PapaParseService],
  declarations: [],
  exports: [CommonModule]
})
export class PapaParseModule {
    constructor (@Optional() @Inject(DROPZONE_GUARD) guard: any) {
    }

  static forRoot(config?: any): ModuleWithProviders {
    return {
      ngModule: PapaParseModule,
      providers: [
          PapaParseService
      ]
    };
  }

  static forChild(): ModuleWithProviders {
    return {
      ngModule: PapaParseModule
    };
  }
}

export function provideForRootGuard(config: any): any {
  if (config) {
    throw new Error(`
      Application called DropzoneModule.forRoot() twice.
      For submodules use DropzoneModule.forChild() instead.
    `);
  }

  return 'guarded';
}
