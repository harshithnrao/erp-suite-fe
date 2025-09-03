export interface ResponseStatusModel {
  notification: ResponseStatus
}

export type ResponseStatus = {
  code: string;
  message: string;
  retry: boolean;
  error: boolean;
}

export type EventTriggerModel = {
  type?: string;
  value?: unknown;
}

export interface CustomAgGridColumnDef {
  utilFieldNm?: string;
  businessObjectName?: string;
  dateFilter?: (d: Date) => boolean;
  label?: string;
  name?: string;
  inputType?: string;
  options?: any[];
  collections?: any;
  type?: string;
  value?: any;
  styleClass?: any;
  styleColor?: any;
  min?: any;
  max?: any;
  currentDate?: boolean;
  dateFormat?: string;
  purple?: any;
  disabled?: boolean;
  multiSelect?: boolean;
  validations?: ColValidator[];
  accept?: string; // MIME TYPE
  styleId?: string;
  hidden?: boolean;
  readonly?: boolean;
  suffix?: string;
  checkboxCard?: CheckBoxCard;
  validPattern?: any;
  selectSettings?: { valField: any, nameField: any };
  canAdd?: boolean;
  property?: string;
  visibleType?: string;
  field?: string;
  isModelProperty?: boolean;
  visible?: boolean;
  showEdit?: boolean;
  isPrimaryKey?: boolean;
  values?: any;
  labelMask?: any;
  required?: boolean;
}

export interface CustomCreateUpdateDynamicForm {
  name: string;
  form_name: string;
  entity: string;
  fields: CustomAgGridColumnDef[];
}

export interface CheckBoxCard {
  inputType: string;
  cardStyle?: string;
  divClass?: string;
  layoutStaticContent?: { content: string, contentStyle?: string }[];
  menu: { name: string, label: string, value?: any }[];
}

export interface ColValidator {
  name: string;
  validator: string;
  message: string;
}

export type PaginationModel = {
  countPageNumber: number;
  rowCountPerPage: number;
  matchedRecordsCount?: number;
  sort?: GridSortModel;
  length?: number;
  disabled?: boolean;
  showFirstLastButtons?: boolean;
  pageSizeOptions?: number[];
  hidePageSize?: boolean;
  size?: number;
  first?: boolean;
  last?: boolean;
  empty?: boolean;
  number?: number;
  numberOfElements: number;
  totalElements: number;
  totalPages: number;
}

export type GridSortModel = {
  sortKey: string;
  sortType: 'asc' | 'desc' | null;
}

export type CountryModel = {
  ctryCd?: string;
  ctryNm?: string;
  defaultLang?: string;
  langs?: string[];
}

export type HttpRequestModel = {
  name?: string;
  url: string,
  param?: any;
  type: string;
  headers?: any;
  downloadObject?: { httpType: string, downloadFileName: string, }
}


export type DynamicTableParams = {
  pageSize: number, pageNumber: number, sort: string[]
}
