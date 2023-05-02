import { AfterViewChecked, AfterViewInit, Component, DoCheck, OnInit, ViewChild } from '@angular/core';
import { Rooms, RoomsList } from './rooms';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit, AfterViewInit, AfterViewChecked{

  @ViewChild(HeaderComponent)
  headerComponent!: HeaderComponent;

  //// Will listsn to any events and data changes in view
  // ngDoCheck(): void {
  //   console.log("On changes is called");
  // }

  hotelName = "Hilton Hotel";
  numberOfRooms = 10;
  hideRooms: boolean = false;

  selectedRooms!: RoomsList
  title: String = 'Rooms List Available Here';

  rooms: Rooms = {
    totalRooms: 20,
    availableRooms: 1,
    bookedRooms: 5
  }
  //https://www.publicdomainpictures.net/pictures/100000/velka/hotel-room-1408755885Nti.jpg
  //https://www.publicdomainpictures.net/pictures/80000/velka/hotel-room-1395584662zbr.jpg
  roomList: RoomsList[] = []

  ngOnInit(): void {
    console.log(this.headerComponent);
    this.roomList = [
      {
        roomNumber: 1,
        roomType: "Deluxe",
        amenities: "Air Conditioner, Free wi-fi, TV, Bathtub",
        price: 5000,
        checkinTime: new Date('11-Nov-2022'),
        checkoutTime: new Date('12-Nov-2022'),
        photos: "https://wallpapercave.com/wp/wp6181354.jpg",
        rating: 3.5999
      },
      {
        roomNumber: 2,
        roomType: "Private suite",
        amenities: "Air Conditioner, Free wi-fi, TV, Bathtub",
        price: 25000,
        checkinTime: new Date('11-Nov-2022'),
        checkoutTime: new Date('16-Nov-2022'),
        photos: "https://www.publicdomainpictures.net/pictures/100000/velka/hotel-room-1408755885Nti.jpg",
        rating: 4.6900
      },
      {
        roomNumber: 3,
        roomType: "Super Deluxe",
        amenities: "Air Conditioner, Free wi-fi, TV, Bathtub",
        price: 50000,
        checkinTime: new Date('11-Nov-2022'),
        checkoutTime: new Date('20-Nov-2022'),
        photos: "https://www.publicdomainpictures.net/pictures/80000/velka/hotel-room-1395584662zbr.jpg",
        rating: 4.1223
      }
    ]

  }
  toggle() {
    return this.hideRooms = !this.hideRooms;
    this.title = "Rooms";
  }

  selectRoom(room: RoomsList) {
    this.selectedRooms = room;
    console.log(room);
  }

  addRoom(): void {
    // To create a new room 
    const room: RoomsList = {
      roomNumber: 4,
      roomType: "Cheap",
      amenities: "Air Conditioner, Free wi-fi, TV, Bathtub",
      price: 50,
      checkinTime: new Date('11-Nov-2022'),
      checkoutTime: new Date('20-Nov-2022'),
      photos: "https://www.publicdomainpictures.net/pictures/80000/velka/hotel-room-1395584662zbr.jpg",
      rating: 2.9999
    }

    // Add new room to rooms list
    // This will not work with .OnPush in child component which ensures the child only re rendered if 
    ////there is change in parent componenent
    // this.roomList.push(room);

    // With .OnPush
    // This ensures the child only rerenders if there is changes
    this.roomList = [...this.roomList, room];

  }

  ngAfterViewInit(): void {
    this.headerComponent.title = "Available Rooms View";
    console.log(this.headerComponent);
  }

  // Used to modify values or run functions after components are initialised
  ngAfterViewChecked(): void {
    throw new Error('Method not implemented.');
  }
}
