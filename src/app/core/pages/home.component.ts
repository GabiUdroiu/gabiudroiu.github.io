import { Component, inject, signal, computed, effect } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DatePipe } from '@angular/common';
import { SearchService } from '../../shared/services/search.service';

@Component({
  selector: 'app-home',
  imports: [RouterLink, DatePipe],
  template: `
    <div class="container">
      <div class="post-list">
        @for (post of paginatedResults(); track post.id) {
          <div class="post-item" [routerLink]="['/post', post.id]">
            <span class="date">{{ post.date | date:'dd MMM' }}</span>
            <span class="title">{{ post.title }}</span>
            <div class="tags">
              @for (tag of post.tags; track tag) {
                <span class="tag" [class]="tag">{{ tag }}</span>
              }
            </div>
            <span class="read-more"></span>
          </div>
        }
      </div>

      @if (totalPages() > 1) {
        <div class="pagination">
          <button
            class="pagination-btn"
            [disabled]="currentPage() === 0"
            (click)="previousPage()">
            ← Anterior
          </button>
          <span class="pagination-info">
            {{ currentPage() + 1 }} / {{ totalPages() }}
          </span>
          <button
            class="pagination-btn"
            [disabled]="currentPage() === totalPages() - 1"
            (click)="nextPage()">
            Următor →
          </button>
        </div>
      }
    </div>
  `,
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  search = inject(SearchService);

  readonly itemsPerPage = 8;
  currentPage = signal(0);

  constructor() {
    // Reset pagination when search results change
    effect(() => {
      this.search.results$();
      this.currentPage.set(0);
    });
  }

  totalPages = computed(() =>
    Math.ceil(this.search.results$().length / this.itemsPerPage)
  );

  paginatedResults = computed(() => {
    const start = this.currentPage() * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    return this.search.results$().slice(start, end);
  });

  nextPage() {
    if (this.currentPage() < this.totalPages() - 1) {
      this.currentPage.set(this.currentPage() + 1);
    }
  }

  previousPage() {
    if (this.currentPage() > 0) {
      this.currentPage.set(this.currentPage() - 1);
    }
  }
}
