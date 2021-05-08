import { AgrodataApiModel } from '../base/types';

export interface StatusForm extends AgrodataApiModel {
  name: string;
}

export interface StatusFilter {
  name?: string;
}

export interface KanbanForm extends AgrodataApiModel {
  name: string;
}

export interface KanbanFilter {
  name?: string;
}

export interface ColumnForm extends AgrodataApiModel {
  status_id: string;
  kanban_id: string;
}

export interface ColumnFilter {
  status_id?: string;
  kanban_id?: string;
}

export interface RulesForm extends AgrodataApiModel {
  kanban_status_id: string;
  kanban_next_status_id: string;
}

export interface RulesFilter {
  kanban_status_id?: string;
  kanban_next_status_id?: string;
}
