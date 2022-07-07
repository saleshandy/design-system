export enum KeyCodes {
  ENTER = 13,
}

export enum KeyValues {
  ENTER = 'enter',
  SPACE = ' ',
}

export const onKeyDown = (handler: any) => (e: any) => {
  if (
    e.keyCode === KeyCodes.ENTER &&
    e.key.trim().toLowerCase() === KeyValues.ENTER
  ) {
    handler(e);
  }
};

export const accessibleOnClick = (handler: any, tabIndex?: number) => ({
  role: 'button',
  tabIndex: tabIndex || 0,
  onKeyDown: onKeyDown(handler),
  onClick: handler,
});
