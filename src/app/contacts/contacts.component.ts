import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../services/contacts.service';
import { Contact } from '../interfaces/contact';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  contactsDataArray: Contact[] = [];
  columnsToDisplay = ['FirstName', 'LastName', 'PhoneNumber', 'Address', 'Update', 'Delete'];


  constructor(private contactsService: ContactsService) {
    
  }

  ngOnInit(){
    this.contactsDataArray = this.contactsService.getContacts();
    console.log(this.contactsDataArray);
    
    
  }
}