import type { TokenNormalized, TokenNormalizedSet } from '../types.js';
import type { IDGenerator } from './lib.js';

export interface TransformCSSValueOptions {
  /** Callback to resolve a token alias, if present */
  resolveAlias?: (token: TokenNormalized) => TokenNormalized | undefined;
  /** Complete set of tokens (needed to resolve full and partial aliases) */
  tokensSet: TokenNormalizedSet;
  transformAlias?: IDGenerator;
  /** Options for color tokens */
  color?: {
    /** Output legacy hex-6 and hex-8 */
    legacyHex?: boolean;
    /**
     * Color depth
     * @see https://en.wikipedia.org/wiki/Color_depth
     */
    depth?: 24 | 30 | 36 | 48 | 'unlimited';
  };
}
