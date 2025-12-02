import { NIL, v5 as uuidV5 } from 'uuid';

import type { Uuid } from '../domain.objects/Uuid';
import { isUuid } from './isUuid';

/**
 * Options for generating a hash UUID.
 */
export interface GetHashOptions {
  /**
   * The namespace UUID to use for hashing.
   *
   * UUID v5 uses a namespace to ensure that the same input string produces
   * different UUIDs when used with different namespaces. This is useful for:
   * - Avoiding collisions between different applications or domains
   * - Creating deterministic UUIDs scoped to your specific use case
   *
   * @default NIL ('00000000-0000-0000-0000-000000000000')
   *
   * @example
   * ```ts
   * // Use a custom namespace for your application
   * const appNamespace = getUuid(); // Generate once and reuse
   * const hash = getHash('user@example.com', { namespace: appNamespace });
   * ```
   */
  namespace?: Uuid;
}

/**
 * Generates a deterministic UUID v5 hash from an input string.
 *
 * UUID v5 uses SHA-1 hashing to create a consistent UUID from any string input.
 * The same input will always produce the same UUID (within the same namespace).
 *
 * @param input - The string to hash into a UUID
 * @param options - Optional configuration for the hash generation
 * @returns A deterministic UUID based on the input string
 *
 * @example
 * ```ts
 * // Basic usage - same input always returns same UUID
 * const hash1 = getHash('hello');
 * const hash2 = getHash('hello');
 * console.log(hash1 === hash2); // true
 *
 * // Different inputs produce different UUIDs
 * const hashA = getHash('hello');
 * const hashB = getHash('world');
 * console.log(hashA === hashB); // false
 *
 * // Using a custom namespace for isolation
 * const myNamespace = isUuid.assure('6ba7b810-9dad-11d1-80b4-00c04fd430c8');
 * const scopedHash = getHash('hello', { namespace: myNamespace });
 * ```
 */
export const getHash = (input: string, options?: GetHashOptions): Uuid => {
  const namespace = options?.namespace ?? (NIL as Uuid);
  return isUuid.assure(uuidV5(input, namespace));
};
