import { withAssure } from 'type-fns';
import { validate as isUuidRef, v4 as uuid } from 'uuid';

export type Uuid = string & { _glossary: 'uuid' };

export const isUuid = withAssure((input: string): input is Uuid =>
  isUuidRef(input),
);

export const getUuid = (): Uuid => isUuid.assure(uuid());
