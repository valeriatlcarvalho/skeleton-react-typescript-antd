import api from '../base';
import { AgrodataApiParams, AgrodataApiResponseList } from '../base/types';
import {
  EDocumentsFilter,
  EDocumentsForm,
  EDocumentsTypeFilter,
  EDocumentsTypeForm,
} from './types';

export const eDocumentsModule = {
  store: async (
    data: EDocumentsForm,
    params?: AgrodataApiParams<any>,
  ): Promise<AgrodataApiResponseList<EDocumentsForm>> => {
    return api.post('edocument', data, params);
  },
  update: async (
    id: EDocumentsForm['id'],
    data: EDocumentsForm,
    params?: AgrodataApiParams<any>,
  ): Promise<AgrodataApiResponseList<EDocumentsForm>> => {
    return api.put(`edocument/${id}`, data, params);
  },
  destroy: async (
    id: EDocumentsForm['id'],
    params?: AgrodataApiParams<any>,
  ): Promise<AgrodataApiResponseList<EDocumentsForm>> => {
    return api.delete(`edocument/${id}`, params);
  },
  get: async (
    params?: AgrodataApiParams<EDocumentsFilter>,
  ): Promise<AgrodataApiResponseList<EDocumentsFilter>> => {
    return api.get('edocument', params);
  },
};

export const eDocumentsTypeModule = {
  store: async (
    data: EDocumentsTypeForm,
    params?: AgrodataApiParams<any>,
  ): Promise<AgrodataApiResponseList<EDocumentsTypeForm>> => {
    return api.post('edocument/type', data, params);
  },
  update: async (
    id: EDocumentsTypeForm['id'],
    data: EDocumentsTypeForm,
    params?: AgrodataApiParams<any>,
  ): Promise<AgrodataApiResponseList<EDocumentsTypeForm>> => {
    return api.put(`edocument/type/${id}`, data, params);
  },
  destroy: async (
    id: EDocumentsTypeForm['id'],
    params?: AgrodataApiParams<any>,
  ): Promise<AgrodataApiResponseList<EDocumentsTypeForm>> => {
    return api.delete(`edocument/type/${id}`, params);
  },
  get: async (
    params?: AgrodataApiParams<EDocumentsTypeFilter>,
  ): Promise<AgrodataApiResponseList<EDocumentsTypeFilter>> => {
    return api.get('edocument/type', params);
  },
};
