import { ApplicatureDialogPosition } from './types';
import { ApplicatureCustomizeDialogOverlayConfigInterface } from './interfaces';

export class ApplicatureDialogConfig<D = any> {
  data?: D;
  width?: string; // '300px', '50%', '1rem' ...
  height?: string; // '300px', '50%', '1rem' ...
  minWidth?: string; // '300px', '50%', '1rem' ...
  minHeight?: string; // '300px', '50%', '1rem' ...
  maxWidth?: string; // '300px', '50%', '1rem' ...
  maxHeight?: string; // '300px', '50%', '1rem' ...
  position?: ApplicatureDialogPosition;
  dialogClass?: string | string[];
  panel?: {
    panelClass: string | string[];
  };
  overlay?: ApplicatureCustomizeDialogOverlayConfigInterface;
}