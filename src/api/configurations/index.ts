import api from '../base';
import { AgrodataApiResponseList, AgrodataApiParams } from '../base/types';
import {
  ColumnFilter,
  ColumnForm,
  KanbanFilter,
  KanbanForm,
  RulesFilter,
  RulesForm,
  StatusFilter,
  StatusForm,
} from './types';

export const statusModule = {
  store: async (
    data: StatusForm,
    params?: AgrodataApiParams<any>,
  ): Promise<AgrodataApiResponseList<StatusForm>> => {
    return api.post('status', data, params);
  },
  update: async (
    id: StatusForm['id'],
    data: StatusForm,
    params?: AgrodataApiParams<any>,
  ): Promise<AgrodataApiResponseList<StatusForm>> => {
    return api.put(`status/${id}`, data, params);
  },
  destroy: async (
    id: StatusForm['id'],
    params?: AgrodataApiParams<any>,
  ): Promise<AgrodataApiResponseList<StatusForm>> => {
    return api.delete(`status/${id}`, params);
  },
  get: async (
    params?: AgrodataApiParams<StatusFilter>,
  ): Promise<AgrodataApiResponseList<StatusFilter>> => {
    return api.get('status', params);
  },
};

export const kanbanModule = {
  store: async (
    data: KanbanForm,
    params?: AgrodataApiParams<any>,
  ): Promise<AgrodataApiResponseList<KanbanForm>> => {
    return api.post('kanban', data, params);
  },
  update: async (
    id: KanbanForm['id'],
    data: KanbanForm,
    params?: AgrodataApiParams<any>,
  ): Promise<AgrodataApiResponseList<KanbanForm>> => {
    return api.put(`kanban/${id}`, data, params);
  },
  destroy: async (
    id: KanbanForm['id'],
    params?: AgrodataApiParams<any>,
  ): Promise<AgrodataApiResponseList<KanbanForm>> => {
    return api.delete(`kanban/${id}`, params);
  },
  get: async (
    params?: AgrodataApiParams<KanbanFilter>,
  ): Promise<AgrodataApiResponseList<KanbanFilter>> => {
    return api.get('kanban', params);
  },
};

export const columnModule = {
  store: async (
    data: ColumnForm,
    params?: AgrodataApiParams<any>,
  ): Promise<AgrodataApiResponseList<ColumnForm>> => {
    return api.post('kanban-status', data, params);
  },
  update: async (
    id: ColumnForm['id'],
    data: ColumnForm,
    params?: AgrodataApiParams<any>,
  ): Promise<AgrodataApiResponseList<ColumnForm>> => {
    return api.put(`kanban-status/${id}`, data, params);
  },
  destroy: async (
    id: ColumnForm['id'],
    params?: AgrodataApiParams<any>,
  ): Promise<AgrodataApiResponseList<ColumnForm>> => {
    return api.delete(`kanban-status/${id}`, params);
  },
  get: async (
    params?: AgrodataApiParams<ColumnFilter>,
  ): Promise<AgrodataApiResponseList<ColumnFilter>> => {
    return api.get('kanban-status', params);
  },
};

export const rulesModule = {
  store: async (
    data: RulesForm,
    params?: AgrodataApiParams<any>,
  ): Promise<AgrodataApiResponseList<RulesForm>> => {
    return api.post('kanban-status/rules', data, params);
  },
  update: async (
    id: RulesForm['id'],
    data: RulesForm,
    params?: AgrodataApiParams<any>,
  ): Promise<AgrodataApiResponseList<RulesForm>> => {
    return api.put(`kanban-status/rules/${id}`, data, params);
  },
  destroy: async (
    id: RulesForm['id'],
    params?: AgrodataApiParams<any>,
  ): Promise<AgrodataApiResponseList<RulesForm>> => {
    return api.delete(`kanban-status/rules/${id}`, params);
  },
  get: async (
    params?: AgrodataApiParams<RulesFilter>,
  ): Promise<AgrodataApiResponseList<RulesFilter>> => {
    return api.get('kanban-status/rules', params);
  },
};
