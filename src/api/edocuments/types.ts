import { AgrodataApiModel } from '../base/types';

export interface EDocumentsForm extends AgrodataApiModel {
  number: string | number;
  operation_id?: string;
  edocument_type_id?: string;
  subsidiary_id?: string;
  status_id?: string;
  user_id?: string;
  checklist_id?: string;
  observations: string;
}

export interface EDocumentsFilter {
  number?: string | number;
  operation_id?: string;
  edocument_type_id?: string;
  status_id?: string;
}

export interface EDocumentsTypeForm extends AgrodataApiModel {
  name: string;
}

export interface EDocumentsTypeFilter {
  number?: string | number;
  operation_id?: string;
  edocument_type_id?: string;
  status_id?: string;
}
