/**
 * A branded type representing a valid UUID string.
 *
 * This type is a string that has been validated as a proper UUID format.
 * The branded type ensures compile-time safety, preventing raw strings
 * from being used where a validated UUID is expected.
 *
 * @example
 * ```ts
 * import { Uuid, isUuid } from 'uuid-fns';
 *
 * // Type-safe function that only accepts validated UUIDs
 * function processUuid(id: Uuid) {
 *   // ...
 * }
 *
 * // Must use isUuid.assure or getUuid to get a Uuid type
 * const validUuid: Uuid = isUuid.assure('550e8400-e29b-41d4-a716-446655440000');
 * processUuid(validUuid); // OK
 *
 * // This would be a compile-time error:
 * // processUuid('some-string'); // Error: string is not assignable to Uuid
 * ```
 */
export type Uuid = string & { _glossary: 'uuid' };
