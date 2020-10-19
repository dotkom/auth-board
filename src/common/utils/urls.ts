import url, { URLHelper } from './urlHelper';

export const getClientsOverviewUrl = (): URLHelper => url`/clients`;
export const getClientViewUrl = (id: number): URLHelper => url`/clients/${{ id }}`;
export const getBasicInfoUrl = (id: number): URLHelper => url`/clients/${{ id }}/basicInfo`;
export const getCreateAppUrl = (): URLHelper => url`/clients/create`;
