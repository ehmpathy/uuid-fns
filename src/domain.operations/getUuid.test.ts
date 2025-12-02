import { given, then } from 'test-fns';

import { getUuid } from './getUuid';
import { isUuid } from './isUuid';

describe('getUuid', () => {
  given('calling getUuid', () => {
    const result = getUuid();

    then('it should return a valid uuid typed as Uuid', () => {
      expect(typeof result).toBe('string');
      expect(isUuid(result)).toBe(true);
    });
  });

  given('calling getUuid multiple times', () => {
    const result1 = getUuid();
    const result2 = getUuid();

    then('it should return different uuids each time', () => {
      expect(result1).not.toBe(result2);
    });
  });
});
