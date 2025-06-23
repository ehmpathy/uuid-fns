import { withAssure } from 'type-fns';
import { isUuid as isUuidRef, uuid } from 'uuidv4';

export type Uuid = string & { _glossary: 'uuid' };

export const isUuid = withAssure((input: string): input is Uuid =>
  isUuidRef(input),
);

export const getUuid = (): Uuid => isUuid.assure(uuid());
