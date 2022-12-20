import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';
@Component({
  selector: 'app-editcontact',
  templateUrl: './editcontact.component.html',
  styleUrls: ['./editcontact.component.css']
})
export class EditcontactComponent {
  id:number=0;
  constructor(private activeRouter:ActivatedRoute,private contactService:ContactService,private router:Router){

  }
  contact:Contact=new Contact();
  
  ngOnInit(){
   this.getContact();
   
  }
  onSubmit(){
  console.log(this.contact)
  }
  getContact(){
    this.id=this.activeRouter.snapshot.params['id'];
    console.log("UPDATED ID ::"+this.id);
    this.contactService.findContact(this.id).subscribe(
      data=>{
        console.log("GETTING A CONTACT..");
        console.log(data);
        this.contact=data;
      },
      error=>{
        console.log("SOMETHING WENT WRONG DURING GETTING A CONTACT..");
        console.log(error);  
      }
    );
  }
  updateContact(){
    console.log("UPDATED ..");
    this.contactService.createContact(this.contact).subscribe(
      data=>{
        console.log("UPDATING A CONTACT..");
        console.log(data);
        this.router.navigate(['/contacts'])
      },
      error=>{
        console.log("SOMETHING WENT WRONG DURING UPDATING A CONTACT..");
        console.log(error);
      });
    }
}
