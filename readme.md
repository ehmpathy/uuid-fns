# uuid-fns

![test](https://github.com/ehmpathy/uuid-fns/workflows/test/badge.svg)
![publish](https://github.com/ehmpathy/uuid-fns/workflows/publish/badge.svg)

A glossary of intuitive, universally unambiguous **uuid** definitions and useful procedures.

Isomorphic - works in both Node.js and browser environments.

# purpose

1. declare an intuitive and stable definition of `Uuid`

2. create a pit of success for uuid utilization

3. declare a ubiquitous language for
    - domain objects related to `uuid`s
      - `Uuid`
    - domain operations related to `uuid`s
      - `isUuid`
      - `getUuid`
      - `getHash`

# install

```sh
npm install uuid-fns
```

# use

### `Uuid`

branded type for compile-time safety

```ts
import { Uuid, isUuid, getUuid } from 'uuid-fns';

// compile-time error: string is not assignable to Uuid
const id: Uuid = '550e8400-e29b-41d4-a716-446655440000'; // error

// use isUuid.assure to validate and cast
const id: Uuid = isUuid.assure('550e8400-e29b-41d4-a716-446655440000'); // ok

// or use getUuid which returns Uuid directly
const id: Uuid = getUuid(); // ok
```

### `isUuid`

type guard to check if a string is a valid uuid

```ts
import { isUuid, Uuid } from 'uuid-fns';

// type guard usage
const maybeUuid = '550e8400-e29b-41d4-a716-446655440000';
if (isUuid(maybeUuid)) {
  // typescript now knows maybeUuid is of type Uuid
}

// check without assertion
isUuid('not-a-uuid'); // false
isUuid('550e8400-e29b-41d4-a716-446655440000'); // true

// runtime assertion - throws if invalid
const validUuid: Uuid = isUuid.assure('550e8400-e29b-41d4-a716-446655440000');
```

### `getUuid`

get a new random uuid v4

```ts
import { getUuid, Uuid } from 'uuid-fns';

const id: Uuid = getUuid();
// e.g., '550e8400-e29b-41d4-a716-446655440000'

// each call returns a unique id
const id1 = getUuid();
const id2 = getUuid();
console.log(id1 === id2); // false
```

### `getHash`

get a deterministic uuid from any string via SHA-1 hash (UUID v5)

```ts
import { getHash, isUuid } from 'uuid-fns';

// same input always returns the same uuid
const hash1 = getHash('hello');
const hash2 = getHash('hello');
console.log(hash1 === hash2); // true

// different inputs return different uuids
const hashA = getHash('hello');
const hashB = getHash('world');
console.log(hashA === hashB); // false

// use a custom namespace for isolation
const myNamespace = isUuid.assure('6ba7b810-9dad-11d1-80b4-00c04fd430c8');
const scopedHash = getHash('hello', { namespace: myNamespace });
```
