import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contact } from './contact';
@Injectable({
  providedIn: 'root'
})
export class ContactService {
  
  constructor(private httpClient: HttpClient) { }
  private baseUrl='http://localhost:8080';
  
  public createContact(contact:Contact){
    return this.httpClient.post(`${this.baseUrl}/contact/addcontact`,contact,{responseType:"text"});
  }
  public getallcontact(){
    return this.httpClient.get<Contact[]>(`${this.baseUrl}/contact/getallcontact`);
  }
  removeContact(id:number){
    return this.httpClient.delete(`${this.baseUrl}/contact/deletecontactbyid/${id}`,{responseType:"text"})
  }
  findContact(id:number){
    return this.httpClient.get<Contact>(`${this.baseUrl}/contact/getcontactbyid/${id}`)
  }
}
