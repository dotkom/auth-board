import { getSession, Session } from "next-auth/client";

interface RequestOptions extends RequestInit {
	headers?: Record<string, string>,
	session?: Session,
}

const performRequest = async (query: string, options: RequestOptions = {}) => {
	const { headers, session, ...restOptions } = options; 
  	const url = `https://online.ntnu.no/api/v1${query}`;
  	if (session) {
		headers['Authorization'] = `Bearer ${session.accessToken}`;
  	}

  	const requestOptions = { ...restOptions, headers };
  	const response = await fetch(url, requestOptions);
  	if (response.status === 204) {
		return null;
  	}

  	let data;
  	try {
		data = await response.json();
		data = data.results;
  	} catch {
		throw new Error(
	  		`Expected data from ${url} to be JSON. Attempt to turn the body into JSON resulted in ${JSON.stringify(
			response.body
	 	 	)}`
		);
  	}

  // 403 - Forbidden does not return any meaningful api data (oidc consent api requires that an error is thrown to show error message)
  // 5xx - Gateway/Internal errors do not return any meaningful api data
	if (response.status === 403 || response.status === 404 || response.status > 499) {
		throw new Error(`FetchError: ${response.status} for ${url}`);
	}
	return data;
};

export const get = async <T>(
  query: string,
  options: RequestOptions = {}
): Promise<T> => {
	const session = await getSession();
 	return performRequest(query, { ...options, headers:{}, session });
};

export const post = async <T>(
  query: string,
  data: T | {},
  options: RequestOptions = {}
): Promise<T> => {
	const session = await getSession();
  	const headers = {
  		Accept: 'application/json',
  		'Content-Type': 'application/json',
  };
	const body = JSON.stringify(data);
	const opts = { ...options, method: 'POST', body, headers };
	return performRequest(query, { ...opts, session });
};

export const put = async <T, K = Partial<T>>(
	query: string,
	data: K,
	options: RequestOptions = {}
): Promise<T> => {
  const session = await getSession();
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };
  const body = JSON.stringify(data);
  const opts = { ...options, method: 'PUT', body, headers };
  return performRequest(query, { ...opts, session });
};

export const patch = async <T, K = Partial<T>>(
	query: string,
	data: K,
	options: RequestOptions = {}
): Promise<T> => {
  const session = await getSession();
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };
  const body = JSON.stringify(data);
  const opts = { ...options, method: 'PATCH', body, headers };
  return performRequest(query, { ...opts, session });
};