import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from '../model/User';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { first } from "rxjs/operators";

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
editForm: FormGroup;
  users:User[];
  submitted: boolean = false;
  constructor(private formbuilder:FormBuilder, private router: Router, 
  private userservice: UserService) { }


  ngOnInit() {
    if(localStorage.getItem("username")!=null){
      let userId = localStorage.getItem("editUserId");
      if(!userId){
        alert('Invalid Action');
        this.router.navigate(['list-user']);
        return;
      }
    this.editForm=this.formbuilder.group({
      id:[],
      firstName:['', Validators.required],
      lastName:['', Validators.required],
      email:['', Validators.required],
      price:['', Validators.required]

    });
    this.userservice.getUsersById(+userId).subscribe(data=>{
      this.editForm.setValue(data)
    });
  }
else{
  this.router.navigate(['/login'])
}
}
onSubmit(){
  this.submitted = true;
  if(this.editForm.invalid){
    return;
  }
  this.userservice.updateUser(this.editForm.value).pipe(first()).subscribe(data=>{
    this.router.navigate(['list-user']);
  },error=>{
    alert(error);
  }
  );
}
}
