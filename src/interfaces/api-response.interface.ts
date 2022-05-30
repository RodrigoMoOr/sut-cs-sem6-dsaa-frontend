export interface MetaData {
  totalItems: number;
  itemCount: number;
  itemsPerPage: number;
  totalPage: number;
  currentPage: number;
}

export interface NavigationLinks {
  first: string;
  previous: string;
  next: string;
  last: string;
}

export interface ApiResponse<T> {
  items: T;
  meta: MetaData;
  links: NavigationLinks;
}
