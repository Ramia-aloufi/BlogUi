import { Injectable } from '@angular/core';
import { ApiHandlerService } from './api-handler.service';
import { environment } from '../../environments/environment';
import { APIResponse } from '../model/response';

@Injectable({
  providedIn: 'root'
})


export class ApiService {
  public apiUrl = environment.baseURL;


  constructor(private apiService: ApiHandlerService) {}
  get<T>(endpoint:string,id:any){
    return this.apiService.Get<T>(this.apiUrl+endpoint+'/'+id)
  }
  getAll<T>(endpoint:string,aa:{pageNumber:number,pageSize:number}){
    return this.apiService.GetAll<T>(this.apiUrl+endpoint+'?pageNumber=' + aa.pageNumber+'&pageSize='+aa.pageSize)
  }
  post<T>(endpoint:string,body?:any){
    return this.apiService.Post<T>(this.apiUrl+endpoint,body)
  }

  put<T>(endpoint:string,body?:any){
    return this.apiService.Put<T>(this.apiUrl+endpoint,body)
  }

  delete<T>(endpoint:string,id:number){
    return this.apiService.Delete<T>(this.apiUrl+endpoint+'/'+id,null)
  }
}
