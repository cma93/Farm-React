

  import { apiCall } from "../../../apiConfig/apiCall";
    
  export const submitRequest = () => {
    return apiCall({
      url: '/pac-user-date-greater-than-filter-list',
      method: "get"
    });
  };


export interface QueryResultItem {
 
    dateGreaterThanFilterCode: string;
 
    dateGreaterThanFilterDayCount: number;
 
    dateGreaterThanFilterDescription: string;
 
    dateGreaterThanFilterDisplayOrder: number;
 
    dateGreaterThanFilterIsActive: boolean;
 
    dateGreaterThanFilterLookupEnumName: string;
 
    dateGreaterThanFilterName: string;  
}


export interface QueryRequest {
    
    pageNumber: number;
    ItemCountPerPage: number;
    OrderByColumnName: string;
    OrderByDescending: boolean;
    ForceErrorMessage: string;
}


export interface QueryResult {
    pageNumber: number;
    items: QueryResultItem[];
    itemCountPerPage: number;
    orderByColumnName: string;
    orderByDescending: boolean;
    success: boolean;
    recordsTotal: number;
    recordsFiltered: number;
    message: string;
    appVersion: string;
    request: string;
}
 





export interface InitRequest {
    
}

export interface InitResult {
    
    success: boolean;
    message: string;
    validationErrors: InitValidationError[];
}

export interface InitValidationError {
    property: string;
    message: string;

}

export class InitRequestInstance implements InitRequest {
    

    constructor() {
        
    }
}


export class InitResultInstance implements InitResult {
    
    success: boolean;
    message: string;
    validationErrors: InitValidationError[];

    constructor() {
        
        this.success = false;
        this.message = '';
        this.validationErrors =  [];
    }
}



export class InitValidationErrorInstance implements InitValidationError {
    property: string;
    message: string;

    constructor() { 
        this.property = '';
        this.message = ''; 
    }
}


  

export class QueryResultItemInstance implements QueryResultItem {
 
    dateGreaterThanFilterCode: string;
 
    dateGreaterThanFilterDayCount: number;
 
    dateGreaterThanFilterDescription: string;
 
    dateGreaterThanFilterDisplayOrder: number;
 
    dateGreaterThanFilterIsActive: boolean;
 
    dateGreaterThanFilterLookupEnumName: string;
 
    dateGreaterThanFilterName: string;

    constructor() {
 
        this.dateGreaterThanFilterCode = '00000000-0000-0000-0000-000000000000';
 
        this.dateGreaterThanFilterDayCount = 0;
 
        this.dateGreaterThanFilterDescription = '';
 
        this.dateGreaterThanFilterDisplayOrder = 0;
 
        this.dateGreaterThanFilterIsActive = false;
 
        this.dateGreaterThanFilterLookupEnumName = '';
 
        this.dateGreaterThanFilterName = '';  
    }
}


export class QueryRequestInstance implements QueryRequest {
    
    pageNumber: number;
    ItemCountPerPage: number;
    OrderByColumnName: string;
    OrderByDescending: boolean;
    ForceErrorMessage: string;

    constructor() {
        
        this.pageNumber = 1;
        this.ItemCountPerPage = 10;
        this.OrderByColumnName = '';
        this.OrderByDescending = false;;
        this.ForceErrorMessage = '';
    }
}


export class QueryResultInstance implements QueryResult {
    pageNumber: number;
    items: QueryResultItem[];
    itemCountPerPage: number;
    orderByColumnName: string;
    orderByDescending: boolean;
    success: boolean;
    recordsTotal: number;
    recordsFiltered: number;
    message: string;
    appVersion: string;
    request: string;

    constructor() {
        this.pageNumber = 1;
        this.items = [];
        this.itemCountPerPage = 10;
        this.orderByColumnName = '';
        this.orderByDescending = false;
        this.success = false;
        this.recordsTotal = 0;
        this.recordsFiltered = 0;
        this.message = '';
        this.appVersion = '';
        this.request = '';
    }
}


export class QueryResultTestInstance implements QueryResult {
    pageNumber: number;
    items: QueryResultItem[];
    itemCountPerPage: number;
    orderByColumnName: string;
    orderByDescending: boolean;
    success: boolean;
    recordsTotal: number;
    recordsFiltered: number;
    message: string;
    appVersion: string;
    request: string;

    constructor() {
        this.pageNumber = 1;
        this.items = [];
        this.itemCountPerPage = 10;
        this.orderByColumnName = '';
        this.orderByDescending = false;
        this.success = false;
        this.recordsTotal = 0;
        this.recordsFiltered = 0;
        this.message = '';
        this.appVersion = '';
        this.request = '';
        
        this.items.push(new QueryResultItemInstance)
    }
}
