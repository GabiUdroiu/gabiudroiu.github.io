import { Component, signal, OnDestroy, inject, computed } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-head',
  imports: [DatePipe],
  template: `
    <header class="header">
      <div class="header-container">
        <span class="academic-week">{{ academicWeek() }}</span>
        <div class="header-row header-title-row">
          <h1>gite</h1>
          <div class="searchbar">
            <input
              type="text"
              placeholder="Caută..."
              [value]="search.query"
              (input)="onSearch($event.target.value)"
              aria-label="Caută posturi"
            />
          </div>
        </div>
        <div class="header-row header-subtitle-row">
          <div class="subtitle-toggle">
            <button (click)="switchMode('anunt')" [class.active]="search.mode === 'anunt'">anunțuri</button>
            <span class="separator">&</span>
            <button (click)="switchMode('informatie')" [class.active]="search.mode === 'informatie'">informații</button>
          </div>
          <span class="month">{{ time() | date:'dd/MM/yyyy HH:mm:ss' }}</span>
        </div>
      </div>
    </header>
  `,
  styleUrl: './head.component.scss'
})
export class HeadComponent implements OnDestroy {

  time = signal(Date.now());
  search = inject(SearchService);
  private router = inject(Router);
  private sub: Subscription;
  private debounceTimer?: ReturnType<typeof setTimeout>;

  constructor() {
    this.sub = interval(1000).subscribe(() => this.time.set(Date.now()));
  }

  onSearch(val: string) {
    clearTimeout(this.debounceTimer);
    this.debounceTimer = setTimeout(() => {
      this.search.query = val;
    }, 250);
  }

  switchMode(mode: 'anunt' | 'informatie') {
    this.search.query = '';
    this.search.mode = mode;
    this.router.navigate(['/']);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
    if (this.debounceTimer) clearTimeout(this.debounceTimer);
  }

  // Data de început a Semestrului II
  private readonly SEM_2_START = new Date('2026-02-23T00:00:00');

  // Calculăm săptămâna academică automat
  academicWeek = computed(() => {
    const acum = new Date(this.time());

    // Calculăm diferența în milisecunde și o transformăm în zile
    const diffInMs = acum.getTime() - this.SEM_2_START.getTime();
    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

    // Calculăm numărul săptămânii (1, 2, 3...)
    // Math.floor(zile / 7) + 1
    const weekNr = Math.floor(diffInDays / 7) + 1;

    // Verificăm dacă suntem înainte de începerea semestrului sau după cele 14 săptămâni
    if (weekNr < 1) return 'Vacanță';
    if (weekNr > 14) return 'Sesiune / Practică';

    const parity = weekNr % 2 === 0 ? 'pară' : 'impară';

    return `Săptămâna ${weekNr} (${parity})`;
  });
}
