import url from './urlHelper';

export const getClientsOverviewUrl = () => url`/clients`;
export const getClientViewUrl = (id: number) => url`/clients/${{ id }}`;
export const getBasicInfoUrl = (id: number) => url`/clients/${{ id }}/basicInfo`;
export const getCreateAppUrl = () => url`/clients/create`;
