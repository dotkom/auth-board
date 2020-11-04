import { ResponseType } from 'client/models/model';

export const ResponseTypes: ResponseType[] = [
  {
    id: 1,
    value: 'code',
    description: 'code (Authorization Code Flow)',
  },
  {
    id: 2,
    value: 'id_token',
    description: 'id_token (Implicit Flow)',
  },
  {
    id: 3,
    value: 'id_token token',
    description: 'id_token token (Implicit Flow)',
  },
  {
    id: 4,
    value: 'code token',
    description: 'code token (Hybrid Flow)',
  },
  {
    id: 5,
    value: 'code id_token',
    description: 'code id_token (Hybrid Flow)',
  },
  {
    id: 6,
    value: 'code id_token token',
    description: 'code id_token token (Hybrid Flow)',
  },
];
