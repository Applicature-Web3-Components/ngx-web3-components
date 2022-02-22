import { CUSTOMIZE_DIALOG_CONFIG_KEYS } from '../enums';
import { DialogPosition } from '../types';

export interface CustomizeDialogConfig {
  [CUSTOMIZE_DIALOG_CONFIG_KEYS.WIDTH]?: string;
  [CUSTOMIZE_DIALOG_CONFIG_KEYS.HEIGHT]?: string;
  [CUSTOMIZE_DIALOG_CONFIG_KEYS.MIN_WIDTH]?: string;
  [CUSTOMIZE_DIALOG_CONFIG_KEYS.MIN_HEIGHT]?: string;
  [CUSTOMIZE_DIALOG_CONFIG_KEYS.MAX_WIDTH]?: string;
  [CUSTOMIZE_DIALOG_CONFIG_KEYS.MAX_HEIGHT]?: string;
  [CUSTOMIZE_DIALOG_CONFIG_KEYS.CLASSES]?: string | string[];
  [CUSTOMIZE_DIALOG_CONFIG_KEYS.POSITION]?: DialogPosition;
}
