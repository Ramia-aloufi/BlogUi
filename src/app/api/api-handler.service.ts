import { Injectable } from '@angular/core';
import { IApiBaseActions, ParamsType } from './iapi-base-actions';
import {  map } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { APIResponse } from '../model/response';

@Injectable({
  providedIn: 'root'
})
export class ApiHandlerService implements IApiBaseActions {

  constructor(public httpClient: HttpClient,private toastr:ToastrService) { }
  
  Get<T>(url: string, params?: ParamsType) {
    return this.httpClient
      .get<APIResponse<T>>(url, {params: this.createParams(params)})
      .pipe(map((x) => {return x.data}));

  }

  GetAll<T>(url: string, params?: ParamsType) {
    return this.httpClient
      .get<APIResponse<T>>(url, {params: this.createParams(params)})
      .pipe(map((x:APIResponse<T>) => {return x.data}));
      }

  Post<T>(url: string, data: any, params?: ParamsType) {
    return this.httpClient
      .post<APIResponse<T>>(url, data, {params: this.createParams(params) })     
       .pipe(map((x) => this.HandleResponse<T>(x)));

  }
  Delete<T>(url: string, data:any, params?: ParamsType) {
    return this.httpClient
      .delete<APIResponse<T>>(url, {params: this.createParams(params)})
      .pipe(map((x) => this.HandleResponse<T>(x)));

  }
  Put<T>(url: string, data: any, params?: ParamsType) {
    return this.httpClient
      .put<APIResponse<T>>(url, data, {params: this.createParams(params)})
      .pipe(map((x) => this.HandleResponse<T>(x)));

  }
  createParams(params?: ParamsType) {
    let httpParams = new HttpParams();
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        httpParams = httpParams.append(key, value);
      });
    }
    return httpParams;
  }
  HandleResponse<T>(response: APIResponse<T>) {
        
    if (response.status) {
      this.toastr.success(response.message)
      return response.data;
    }else{
      console.log('response:',response);
      console.log('message:',response.message);

      
      this.toastr.error('response')
      throw new Error(response.message);

    }
  }

}
