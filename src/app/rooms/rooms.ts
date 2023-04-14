export interface Rooms {
    totalRooms?: number;
    availableRooms?: number;
    bookedRooms?: number;
}

export interface RoomsList {
    roomNumber: number;
    roomType: string;
    amenities: string;
    price: number;
    photos: string;
    checkinTime: Date;
    checkoutTime: Date
}