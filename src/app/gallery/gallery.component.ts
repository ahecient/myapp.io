import { Component, OnInit } from '@angular/core';
import { PHOTOS } from '../mock-photos';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  photos = PHOTOS;

  constructor() { }

  ngOnInit() {
  }

}
