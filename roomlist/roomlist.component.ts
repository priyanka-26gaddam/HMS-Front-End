import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Room } from '../model/room';
import { RoomService } from '../room.service';

@Component({
  selector: 'app-roomlist',
  templateUrl: './roomlist.component.html',
  styleUrls: ['./roomlist.component.css']
})
export class RoomlistComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// } formValue!: FormGroup
 
  room:Room=new Room
    
  rooms: any
  formValue: any;
  loginForm: any;
  router: any;
  roomAvl!: boolean;
  constructor(private roomService: RoomService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getRooms();
    this.formValue = this.formBuilder.group({
      roomId:[''],
      roomCharges:[''],
     roomType :[''],
      roomDesc:[''],
     
      roomAvl:['']
        })
  }

  private getRooms() {
    this.roomService.getRoomList().subscribe(data => {

      console.log(Object.values(data.allRoom));
      this.rooms = data.allRoom;
      // console.log(this.rooms.allRoom+"rooms");
    });
  }
 selectRooms(){
     alert("selected")
    //this.router.navigate(['/booking'])
    window.location.href="/booking"

 }
 deleteRooms(){
  window.location.href="/"
 }
  // }
  // onSubmit(){

  //   if(!this.loginForm.valid){
  //     // if(!this.room.){
   

  //    return;

  //   }

    
    //this.router.navigate(['/room'])
   // this.router.navigate(['/reservation'])
   //this.router.navigate(['/booking'])
   //this.router.navigate(['/roomlist'])

  
}