export type Modify<T, K> = Omit<T, keyof K> & K;
