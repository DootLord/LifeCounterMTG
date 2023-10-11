import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IPlayer } from 'src/app/interfaces/player.interface';

@Component({
  selector: 'app-play-space',
  templateUrl: './play-space.component.html',
  styleUrls: ['./play-space.component.scss']
})
export class PlaySpaceComponent {

  @Input() player: IPlayer | null;

  @Output() onValueChange: EventEmitter<number>;

  constructor() {
    this.player = null
    this.onValueChange = new EventEmitter<number>();
  }

  get life() {
    return this.player?.life;
  }

  get textColour() {
    return this.player?.textColour;
  }

  get bgColour() {
    return this.player?.bgColour;
  }

  get orientation() {
    return this.player?.orientation;
  }

  onLifeChange(amount: number) {
    this.onValueChange.emit(amount);
  }
}
