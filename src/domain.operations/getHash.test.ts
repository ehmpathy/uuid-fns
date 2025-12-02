import { given, then } from 'test-fns';

import { Uuid } from '../domain.objects/Uuid';
import { getHash } from './getHash';
import { isUuid } from './isUuid';

describe('getHash', () => {
  given('an input string', () => {
    const input = 'hello';

    then('it should return a valid uuid', () => {
      const result = getHash(input);
      expect(typeof result).toBe('string');
      expect(isUuid(result)).toBe(true);
    });

    then('it should return the same uuid for the same input', () => {
      const result1 = getHash(input);
      const result2 = getHash(input);
      expect(result1).toBe(result2);
    });
  });

  given('different input strings', () => {
    const input1 = 'hello';
    const input2 = 'world';

    then('it should return different uuids', () => {
      const result1 = getHash(input1);
      const result2 = getHash(input2);
      expect(result1).not.toBe(result2);
    });
  });

  given('the same input with different namespaces', () => {
    const input = 'hello';
    const namespace1 = isUuid.assure('6ba7b810-9dad-11d1-80b4-00c04fd430c8');
    const namespace2 = isUuid.assure('6ba7b811-9dad-11d1-80b4-00c04fd430c8');

    then('it should return different uuids for different namespaces', () => {
      const result1 = getHash(input, { namespace: namespace1 });
      const result2 = getHash(input, { namespace: namespace2 });
      expect(result1).not.toBe(result2);
    });

    then('it should return the same uuid for the same namespace', () => {
      const result1 = getHash(input, { namespace: namespace1 });
      const result2 = getHash(input, { namespace: namespace1 });
      expect(result1).toBe(result2);
    });
  });

  given('an input with custom namespace vs default namespace', () => {
    const input = 'hello';
    const customNamespace = isUuid.assure(
      '6ba7b810-9dad-11d1-80b4-00c04fd430c8',
    );

    then('it should return different uuids', () => {
      const resultDefault = getHash(input);
      const resultCustom = getHash(input, { namespace: customNamespace });
      expect(resultDefault).not.toBe(resultCustom);
    });
  });
});
