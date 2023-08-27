import { Injectable } from '@angular/core';
import { Contact } from '../interfaces/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  contacts: Contact [] = [
    {Id: 1, FirstName: 'Ulugbek', LastName: 'Kobulov', PhoneNumber: '111-111-1111', Address: '12345, Musterstadt, Deutschland'},
    {Id: 2, FirstName: 'Max', LastName: 'Mustermann', PhoneNumber: '222-111-1111', Address:  '54234, Musterstadt, Schweiz'},
    {Id: 3, FirstName: 'John', LastName: 'Doe', PhoneNumber: '333-111-1111', Address: '87454, Musterstadt, Österreich'}
  ];


  constructor() { }


  getContacts(){
    return this.contacts;
  }

  createContact(newContact: Contact){

 
    let highestId = 0;
    this.contacts.forEach(contactObject =>{
      if (contactObject.Id > highestId){
       highestId = contactObject.Id;
      }
    })

    this.contacts.push(
      {
        Id: highestId + 1,
        FirstName: newContact.FirstName,
        LastName: newContact.LastName,
        PhoneNumber: newContact.PhoneNumber,
        Address: newContact.Address,
      }
    );
  }

  updateContact(updateContact: Contact){
    const index = this.contacts.findIndex(contact => contact.Id == updateContact.Id);
    this.contacts[index].FirstName = updateContact.FirstName;
    this.contacts[index].LastName = updateContact.LastName;
    this.contacts[index].PhoneNumber = updateContact.PhoneNumber;
    this.contacts[index].Address = updateContact.Address;
  }

  deleteContact(id: number){
    const index = this.contacts.findIndex(contact => contact.Id == id);
    this.contacts.splice(index, 1);
  }

}
