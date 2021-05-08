import { AxiosRequestConfig } from 'axios';

export interface AgrodataApiResponseList<T> {
  message?: string;
  status: string;
  data: AgrodataApiResponseDataPaginated<T>;
}

export interface AgrodataApiResponseDataPaginated<T> {
  data: T[];
  current_page: number;
  per_page: number;
  total: number;
}

export interface AgrodataApiParams<T> extends AxiosRequestConfig {
  language?: string;
  _method?: string;
  params?: T;
}

export interface AgrodataApiModel {
  id?: string;
  created_at?: string;
  updated_at?: string;
  deleted_at?: string;
}
