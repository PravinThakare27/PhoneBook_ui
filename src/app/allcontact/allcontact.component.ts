import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-allcontact',
  templateUrl: './allcontact.component.html',
  styleUrls: ['./allcontact.component.css']
})

export class AllcontactComponent {
  constructor(private contactservice:ContactService,private router:Router){

  }
contacts:Contact[]=[]
ngOnInit(){
  this.contactservice.getallcontact().subscribe(data=>{
    this.contacts=data;
  });

  
}
  deleteContact(id:number){
      console.log(id)
  }
  editContact(id:number){
    console.log(id)
    this.router.navigate(['/editcontact',id]); 
  }
}
