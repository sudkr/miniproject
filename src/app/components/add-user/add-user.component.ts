import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/model/User';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  addForm: FormGroup;
  users:User[];
  submitted: boolean = false;
  constructor(private formbuilder:FormBuilder, private router: Router, private userservice: UserService) { }

  ngOnInit() {

    this.addForm=this.formbuilder.group({
      id:[],
      firstName:['', Validators.required],
      lastName:['', Validators.required],
      email:['', Validators.required],
      price:['', Validators.required],
    })
  }
onSubmit(){
  this.submitted=true;
  if(this.addForm.invalid){
    return;
  }
  this.userservice.addUser(this.addForm.value).subscribe(data=>{
    alert("Product Added")
  });
     this.userservice.getusers().subscribe(data=>{
      this.users = data;
    });
  this.router.navigate(['list-user']);
}
}