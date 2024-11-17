import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 12436,
  login: 'nS-@veI\\fAxO\\saQ\\GytGa',
};

export const sampleWithPartialData: IUser = {
  id: 30693,
  login: '2_.FV',
};

export const sampleWithFullData: IUser = {
  id: 15565,
  login: 'XjD',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
