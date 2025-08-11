import useSWR from 'swr'
import {api} from "../lib/axios.ts";

const fetcher = (url: string) => api.get(url).then((res) => res.data);

const fetchWithToken = ([url, token]: [string, string]) =>
    api.get(url, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }).then((res) => res.data);

export function useFetch(url: string | null, token?: string) {
    const key = url ? (token ? [url, token] : url) : null;
    const fetcherFn = token ? fetchWithToken : fetcher;

    const {data, error, isLoading, mutate} = useSWR(key, fetcherFn, {
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
        revalidateIfStale: false,
        refreshInterval: 0,
    });

    return {data, error, isLoading, mutate};
}
