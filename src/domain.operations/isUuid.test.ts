import { given, then } from 'test-fns';

import type { Uuid } from '../domain.objects/Uuid';
import { isUuid } from './isUuid';

describe('isUuid', () => {
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
});
