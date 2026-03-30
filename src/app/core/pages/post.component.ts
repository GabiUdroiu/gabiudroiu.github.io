import { Component, inject, computed } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Post } from '../../shared/interfaces/post.interface';
import { POSTS } from '../data/posts';
import { INFOS } from '../data/infos';
import { DatePipe, NgOptimizedImage } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  imports: [RouterLink, DatePipe, NgOptimizedImage],
  template: `
    <div class="container">
    @let p = post();
    @if (p) {
      <div class="post-header">
        <h2>{{ p.title }}</h2>
        <div class="meta">
          <span>{{ p.date | date:'dd MMMM yyyy' }}</span>
          @for (tag of p.tags; track tag) {
            <span class="tag" [class]="tag">{{ tag }}</span>
          }
        </div>
      </div>
      @if (p.images && p.images.length > 0) {
        <div class="gallery">
          @for (img of p.images; track img) {
            <div class="gallery-item">
              <img
                [ngSrc]="img"
                [alt]="p.title"
                class="gallery-image"
                fill
                sizes="100vw"
                loading="lazy"
              />
            </div>
          }
        </div>
      }
      <div class="post-content" [innerHTML]="safeContent()"></div>
      <button class="back" routerLink="/">înapoi</button>
    } @else {
      <button class="back" routerLink="/">înapoi</button>
      <p style="color: var(--text-dim); margin-top: 40px;">post negăsit.</p>
    }
    </div>
  `,
  styleUrl: './post.component.scss'
})
export class PostComponent {
  private route = inject(ActivatedRoute);
  private sanitizer = inject(DomSanitizer);

  post = computed(() =>
    [...POSTS, ...INFOS].find(p => p.id === this.route.snapshot.paramMap.get('id'))
  );

  safeContent = computed(() =>
    this.sanitizer.bypassSecurityTrustHtml(this.post()?.content || '')
  );
}
