import { Component, OnInit, OnDestroy } from '@angular/core';
import { MangaelementService } from './mangaelement.service';
import { IManga } from '../mangaelement/manga';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-mangalist',
  templateUrl: './mangalist.component.html',
  styleUrls: ['./mangalist.component.css']
})
export class MangalistComponent implements OnInit, OnDestroy {
  sub!: Subscription;
  mangas: IManga[] = [];
  errorMessage: string = "";

  constructor(private managaService: MangaelementService){}

  ngOnInit(): void {
    this.sub = this.managaService.getMangas().subscribe({
      next: mangas => this.mangas = mangas,
      error: err => this.errorMessage = err
    });
  }

  ngOnDestroy(): void{
    this.sub.unsubscribe();
  }
}