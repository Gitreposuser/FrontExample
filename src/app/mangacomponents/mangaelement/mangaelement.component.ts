import { Component, Input } from '@angular/core';
import { IManga } from './manga';

@Component({
  selector: 'app-mangaelement',
  templateUrl: './mangaelement.component.html',
  styleUrls: ['./mangaelement.component.css']
})
export class MangaelementComponent implements IManga{
  @Input() imageUrl: string = "";
  @Input() title: string = "";
  @Input() genre: string = "";
  @Input() name: string = "";

  constructor() { }
}