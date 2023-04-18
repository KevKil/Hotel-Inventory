import { Component } from '@angular/core';
import { Rooms, RoomsList } from './rooms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent {

  hotelName = "Hilton Hotel";
  numberOfRooms = 10;
  hideRooms: boolean = false;

  rooms: Rooms = {
    totalRooms: 20,
    availableRooms: 1,
    bookedRooms: 5
  }
  //https://www.publicdomainpictures.net/pictures/100000/velka/hotel-room-1408755885Nti.jpg
  //https://www.publicdomainpictures.net/pictures/80000/velka/hotel-room-1395584662zbr.jpg
  roomList: RoomsList[] = [
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

  toggle() {
    return this.hideRooms = !this.hideRooms;
  }
}
