# uuid-fns

![test](https://github.com/ehmpathy/uuid-fns/workflows/test/badge.svg)
![publish](https://github.com/ehmpathy/uuid-fns/workflows/publish/badge.svg)

A glossary of intuitive, universally unambiguous **uuid** definitions and useful procedures.

# purpose

1. declare an intuitive and stable definition of `Uuid`

2. create a pit of success for uuid utilization

3. declare a ubiquitious language for
    - domain objects related to `uuid`s
      - Uuid
    - procedures related to `uuid`s
      - etc

# install

```sh
npm install uuid-fns
```

# use

### `Uuid` type guard

it's not just a string, its a `Uuid`

```ts
import { Uuid, isUuid, getUuid } from 'uuid-fns';

const uuid: Uuid = 'abc' // 🛑 at compile time, typescript knows that string != Uuid

const uuid: Uuid = isUuid.assure('abc') // 🛑 at runtime, the guard detect that this string is assuredly not a uuid

const uuid: Uuid = getUuid() // ✅ at compile time, typescript knows that this method returns a uuid

const uuid: Uuid = isUuid.assure('18fbc5a7-2677-4c6e-8251-8c1b6634959d') // ✅ at runtime, the guard will detect that this string is indeed a uuid
```
