import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { User } from 'src/app/model/User';


@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  users: User[];

  constructor(private userservice: UserService, private router: Router) { }

  ngOnInit() {
    this.userservice.getusers().subscribe(data => {
      this.users = data;
    });
  }
  deleteUser(user: User): void {
    let result = confirm("Do you want to delete Product");
    if (result) {
      this.userservice.deleteUser(user.id).subscribe(data => {
        this.users = this.users.filter(u => u !== user);
      })
    }
  }
  addUser(): void {
    this.router.navigate(['add-user'])
  }
  getusers() {
    if (localStorage.getItem("username") != null) {
      this.userservice.getusers().subscribe(data => {
        this.users = data;
      });
    }
    else {
      this.router.navigate(['/login']);
    }
  }

  editUser(user: User): void {
    localStorage.removeItem("editUserId");
    localStorage.setItem("editUserId", user.id.toString());
    this.router.navigate(['edit-user']);
  }

}
