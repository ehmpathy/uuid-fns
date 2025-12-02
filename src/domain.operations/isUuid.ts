import { withAssure } from 'type-fns';
import { validate } from 'uuid';

import type { Uuid } from '../domain.objects/Uuid';

/**
 * A type guard that checks if a string is a valid UUID.
 *
 * This function validates that the input string conforms to the UUID format
 * (RFC 4122). It also provides an `assure` method for runtime assertion.
 *
 * @param input - The string to validate as a UUID
 * @returns `true` if the input is a valid UUID, `false` otherwise
 *
 * @example
 * ```ts
 * import { isUuid, Uuid } from 'uuid-fns';
 *
 * // Type guard usage - narrows type to Uuid
 * const maybeUuid = '550e8400-e29b-41d4-a716-446655440000';
 * if (isUuid(maybeUuid)) {
 *   // TypeScript now knows maybeUuid is of type Uuid
 *   console.log('Valid UUID:', maybeUuid);
 * }
 *
 * // Check without assertion
 * console.log(isUuid('not-a-uuid')); // false
 * console.log(isUuid('550e8400-e29b-41d4-a716-446655440000')); // true
 *
 * // Using assure for runtime assertion - throws if invalid
 * const validUuid: Uuid = isUuid.assure('550e8400-e29b-41d4-a716-446655440000');
 *
 * // This will throw an error at runtime:
 * // isUuid.assure('invalid'); // throws AssuranceError
 * ```
 */
export const isUuid = withAssure((input: string): input is Uuid =>
  validate(input),
);
