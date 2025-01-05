import { FC, LazyExoticComponent, FunctionComponent } from 'react';

export type LazyComponent = LazyExoticComponent<FunctionComponent<any>>;

export interface RouteConfig {
    path: string;
    component: LazyExoticComponent<FC<any>> | FC<any>;
  layout: LazyExoticComponent<FC<any>> | FC<any>;
  }