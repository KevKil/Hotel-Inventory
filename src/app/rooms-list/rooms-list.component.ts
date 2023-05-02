import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { RoomsList } from '../rooms/rooms';

@Component({
  selector: 'hinv-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

// This is a child/ dumb component inly concerned with rendering data it doesn,t alter or modify data
// As such the changeDetection is set to on push which only rerenders the component if any change is detected
export class RoomsListComponent implements OnInit, OnChanges{
  ngOnInit(): void {
  }

  // This ensures the data will crate new instance of obj to maintain immutability
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if(changes[`title`]) {
      this.title = changes['title'].currentValue.toUpperCase();
    }
  }

  // This is to get data from parent component
  @Input() roomList: RoomsList[] = [];

  @Input() title: String = '';

  // This is to push data to parent component
  @Output() selectedRoom = new EventEmitter<RoomsList>();

  selectRoom(room: RoomsList) {
    this.selectedRoom.emit(room);
  }
}
