import { v4 as uuid } from 'uuid';

import { Uuid } from '../domain.objects/Uuid';
import { isUuid } from './isUuid';

/**
 * Generates a new random UUID v4.
 *
 * UUID v4 uses random or pseudo-random numbers to generate a universally
 * unique identifier. Each call produces a different UUID with extremely
 * high probability of uniqueness (collision probability is negligible).
 *
 * @returns A new random UUID typed as `Uuid`
 *
 * @example
 * ```ts
 * import { getUuid, Uuid } from 'uuid-fns';
 *
 * // Generate a new UUID
 * const id: Uuid = getUuid();
 * console.log(id); // e.g., '550e8400-e29b-41d4-a716-446655440000'
 *
 * // Each call generates a unique ID
 * const id1 = getUuid();
 * const id2 = getUuid();
 * console.log(id1 === id2); // false
 *
 * // Use for creating unique identifiers
 * const user = {
 *   id: getUuid(),
 *   name: 'John',
 * };
 * ```
 */
export const getUuid = (): Uuid => isUuid.assure(uuid());
