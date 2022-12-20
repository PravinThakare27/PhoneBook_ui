import { Component } from '@angular/core';
import { Contact } from '../contact';

import { ContactService } from '../contact.service';
@Component({
  selector: 'app-addcontact',
  templateUrl: './addcontact.component.html',
  styleUrls: ['./addcontact.component.css']
})
export class AddcontactComponent {
  constructor(private ContactService:ContactService){

  }
  contact:Contact=new Contact();
onSubmit(){
console.log(this.contact)
this.ContactService.createContact(this.contact).subscribe(msg=>{
console.log(msg)
});
}


}
