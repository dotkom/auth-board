import url from "./urlHelper";

export const getClientViewUrl = (id: number) => url`/clients/${{ id }}`;
export const getBasicInfoUrl = (id: number) => url`/clients/${{ id }}/basicInfo`;