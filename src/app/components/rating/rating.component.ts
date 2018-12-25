import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {
  @Input() marks: number[];
  averageRating: number;
  sum: number;
  isActive: boolean[];

  constructor() { }

  ngOnInit() {
    this.sum = 0;
    this.isActive = [false, false, false, false, false];

    for (let i = 0; i < this.marks.length; i++) {
      this.sum += this.marks[i];
    }
    this.averageRating = this.sum / this.marks.length;
    this.averageRating = Math.round(this.averageRating);

    for (let i = 0; i < this.averageRating; i++) {
      this.isActive[i] = true;
    }
  }

  onClick(clickedRating) {
    console.log(clickedRating);

    this.averageRating = (this.sum + clickedRating) / (this.marks.length + 1);
    this.averageRating = Math.round(this.averageRating);
    this.isActive = [false, false, false, false, false];

    for (let i = 0; i < this.averageRating; i++) {
      this.isActive[i] = true;
    }

    console.log(this.isActive);
    console.log(this.averageRating);
  }
}
