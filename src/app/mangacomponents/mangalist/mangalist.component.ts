import { Component, OnInit } from '@angular/core';
import { IManga } from '../mangaelement/manga';

@Component({
  selector: 'app-mangalist',
  templateUrl: './mangalist.component.html',
  styleUrls: ['./mangalist.component.css']
})
export class MangalistComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  mangalist: IManga[] = [
    {
      imageUrl: "abc1",
      title: "111",
      genre: "fighting",
      name: "sldkfh"
    },
    {
      imageUrl: "asd",
      title: "222",
      genre: "fighting",
      name: "sldkfh"
    },
    {
      imageUrl: "dsgf",
      title: "333",
      genre: "fighting",
      name: "sldkfh"
    },
    {
      imageUrl: "abfgc1",
      title: "444",
      genre: "fighting",
      name: "sldkfh"
    },
    {
      imageUrl: "fgh",
      title: "555",
      genre: "fighting",
      name: "sldkfh"
    },
    {
      imageUrl: "hjk",
      title: "666",
      genre: "fighting",
      name: "sldkfh"
    },
    {
      imageUrl: "jkl",
      title: "777",
      genre: "fighting",
      name: "sldkfh"
    },
    {
      imageUrl: "uio",
      title: "888",
      genre: "fighting",
      name: "sldkfh"
    },
    {
      imageUrl: "wrer",
      title: "999",
      genre: "fighting",
      name: "sldkfh"
    },
    {
      imageUrl: "cvb",
      title: "111",
      genre: "fighting",
      name: "sldkfh"
    },
  ];
}