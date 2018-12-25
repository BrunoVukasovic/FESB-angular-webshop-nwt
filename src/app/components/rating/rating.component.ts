import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {
  @Input() marks: number[];
  averageRating: number;

  constructor() { }

  ngOnInit() {
    let sum = 0;
    for (let i = 0; i < this.marks.length; i++) {
      sum += this.marks[i];
    }
    this.averageRating = sum / this.marks.length;
  }
}
