import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: 'dec7d7f8-add1-481f-b3b2-43f057782f61',
};

export const sampleWithPartialData: IAuthority = {
  name: 'f5001c17-6bf6-4d0a-8e29-c634fe7f70a9',
};

export const sampleWithFullData: IAuthority = {
  name: 'abe0579d-70b7-410d-bbee-ae7ee36cd599',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
