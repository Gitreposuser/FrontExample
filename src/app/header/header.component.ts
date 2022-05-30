import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  images = [
    {
      imageSrc:
      'https://images.unsplash.com/photo-1576023867099-db39d6f37a03?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2728&q=80',
      imageAlt: 'nature1'
    },
    {
      imageSrc:
      'https://images.unsplash.com/photo-1604168612704-edf7120be425?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2666&q=80',
      imageAlt: 'nature2'
    },
    {
      imageSrc:
      'https://images.unsplash.com/photo-1620405116976-f735da963c02?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2583&q=80',
      imageAlt: 'nature3'
    },
    {
      imageSrc:
      'https://images.unsplash.com/photo-1578174756708-b11252ec6e01?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2664&q=80',
      imageAlt: 'nature4'
    },
    {
      imageSrc:
      'https://images.unsplash.com/photo-1602851688358-f72cc9e847a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2611&q=80',
      imageAlt: 'nature5'
    },
    {
      imageSrc:
      'https://images.unsplash.com/photo-1597234496463-d0a82e73b3a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2579&q=80',
      imageAlt: 'nature6'
    },
    {
      imageSrc:
      'https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2747&q=80',
      imageAlt: 'nature7'
    }
  ]
}