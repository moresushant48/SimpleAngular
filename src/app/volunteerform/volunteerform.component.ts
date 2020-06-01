import { Component, OnInit } from '@angular/core';
import { Volunteer } from './VolunteerModel';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-volunteerform',
  templateUrl: './volunteerform.component.html',
  styleUrls: ['./volunteerform.component.css']
})
export class VolunteerformComponent implements OnInit {

  volunteerForm: FormGroup;
  

  constructor(private fb: FormBuilder, private http: HttpClient){
    
  }

  title = "Volunteer Detail";

  ngOnInit(): void {

    this.volunteerForm = this.fb.group({
      vName: '',
      vEmailId: '',
      vMobileNo: '',
      vAddress: ''
    })
    
  }

  registerVolunteer(volunteer : Volunteer) {
    
    this.http.post('http://localhost:9090/api/post/volunteer', volunteer).subscribe(
    (response) => console.log(response),
    (error) => console.log(error)
    )
  }

}
