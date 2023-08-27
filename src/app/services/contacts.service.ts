import { Injectable } from '@angular/core';
import { Contact } from '../interfaces/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  contacts: Contact [] = [
    {Id: 1, FirstName: 'John', LastName: 'Johnson', PhoneNumber: '111-111-1111', Address: '111 Main St, Minneapolis, MN 55001'},
    {Id: 2, FirstName: 'Jack', LastName: 'Jackson', PhoneNumber: '222-111-1111', Address: '111 Main St, Minneapolis, MN 55001'},
    {Id: 3, FirstName: 'Mary', LastName: 'Erickson', PhoneNumber: '333-111-1111', Address: '111 Main St, Minneapolis, MN 55001'}
  ];

  constructor() { }


  getContacts(){
    return this.contacts;
  }
}