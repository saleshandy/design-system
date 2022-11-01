import { KeyCodes, KeyValues } from './types/keyboard-keys';

type HandlerFunction = (e: React.KeyboardEvent<HTMLButtonElement>) => void;
type AccessibleOnClick = {
  role: string;
  tabIndex: number;
  onKeyDown: HandlerFunction;
  onClick: HandlerFunction;
};

export const onKeyDown =
  (handler: HandlerFunction) =>
  (e: React.KeyboardEvent<HTMLButtonElement>): void => {
    if (
      e.keyCode === KeyCodes.ENTER &&
      e.key.trim().toLowerCase() === KeyValues.ENTER
    ) {
      handler(e);
    }
  };

export const accessibleOnClick = (
  handler: HandlerFunction,
  tabIndex?: number
): AccessibleOnClick => ({
  role: 'button',
  tabIndex: tabIndex || 0,
  onKeyDown: onKeyDown(handler),
  onClick: handler,
});
