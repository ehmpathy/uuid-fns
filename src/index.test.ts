import { given, then } from 'test-fns';

import { isUuid, getUuid, getHash, Uuid } from './index';

describe('uuid-fns', () => {
  given('a valid uuid string', () => {
    const input = '550e8400-e29b-41d4-a716-446655440000';

    then('isUuid should return true', () => {
      expect(isUuid(input)).toBe(true);
    });

    then('isUuid.assure should return the same string typed as Uuid', () => {
      const result: Uuid = isUuid.assure(input);
      expect(result).toBe(input);
    });
  });

  given('an invalid uuid string', () => {
    const input = 'not-a-uuid';

    then('isUuid should return false', () => {
      expect(isUuid(input)).toBe(false);
    });

    then('isUuid.assure should throw', () => {
      expect(() => isUuid.assure(input)).toThrow();
    });
  });

  given('calling getUuid', () => {
    const result = getUuid();

    then('it should return a valid uuid typed as Uuid', () => {
      expect(typeof result).toBe('string');
      expect(isUuid(result)).toBe(true);
    });
  });

  given('calling getHash', () => {
    const input = 'test-input';

    then('it should return a valid uuid', () => {
      const result = getHash(input);
      expect(typeof result).toBe('string');
      expect(isUuid(result)).toBe(true);
    });

    then('it should be deterministic', () => {
      const result1 = getHash(input);
      const result2 = getHash(input);
      expect(result1).toBe(result2);
    });
  });
});
