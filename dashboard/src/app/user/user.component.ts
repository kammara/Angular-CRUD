import { Component, OnInit } from '@angular/core';
import { Http,Response,Headers} from '@angular/http';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private http:Http) { }
  confirmationString:string = "New User has been Added";
  isAdded:boolean = false;
  userObj:object = { };

  addNewUser = function(user){
  	this.userObj = {
  		"name":user.name,
  		"password":user.password,
  		"email":user.email,
  		"role":user.role
  	}
  	this.http.post("http://localhost:7777/users/",this.userObj).subscribe((res: Response) => {
     	this.isAdded = true;
     }
  		)
  }

  ngOnInit() {
  }

}
