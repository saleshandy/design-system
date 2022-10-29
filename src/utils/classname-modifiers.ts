type Modifiers = string | number | undefined;

/**
 * This helper function creates modifier class names that are used for our flat BEM styling
 * it takes in a base and modifier and returns the modified class if a modifier was passed in and null otherwise
 * @param base The base class of the output
 * @param modifier The modifier to add onto the base
 * @returns the modified class name or null
 */
export const getClassNameByModifier = (
  base: string,
  modifier: Modifiers
): string => (modifier ? `${base}--${modifier}` : '');

/**
 * This helper function creates modified class names that are used for our flat BEM styling
 * it takes in a base, modifier, and flag and returns the modified class name if the flag is true and null if the flag is false
 * @param base
 * @param modifier
 * @param flag
 * @returns the modified class name or null
 */
export const getClassNameByModifierBasedOnFlag = (
  base: string,
  modifier: Modifiers,
  flag: boolean | undefined
): string => (flag ? `${base}--${modifier}` : '');
