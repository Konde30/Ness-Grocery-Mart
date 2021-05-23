import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../http-service.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  email : string;
  subject : string;
  message : string;
  contact = {"id":"5","email":"","subject":"","message":"","date":"20-2-21"}

  constructor(private http:HttpServiceService) { }

  ngOnInit() {
    
  }
  processForm() {
    const allInfo = `Your subject is: ${this.subject}. My email is ${this.email}. My message is ${this.message}`;
    alert(allInfo); 
  } 
  newContact(){
    if(this.contact.email ==""){
      alert("Email should not be empty");
      return
    }
    if(this.contact.subject ==""){
     alert("Subject should not be empty");
     return
    }
    if(this.contact.message ==""){
      alert("Message should not be empty");
      return
     }
     

    let request ={   
       "id":this.contact.id,
       "email":this.contact.email,
      "subject":this.contact.subject,
      "message":this.contact.message,
      "date":this.contact.date
  
    }
    this.http.postRequest('api/contact',request).subscribe(data=>{
      console.log(request);
         alert("Send Message successfully..")
        // this.dialogType = "login";
    },error=>{
      alert("Message Not Send");
    })
  }
}



