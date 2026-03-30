import { Injectable, signal } from '@angular/core';
import { Post } from '../interfaces/post.interface';
import { POSTS } from '../../core/data/posts';
import { INFOS } from '../../core/data/infos';

@Injectable({ providedIn: 'root' })
export class SearchService {
  private _query = signal('');
  private _mode = signal<'anunt' | 'informatie'>('anunt');
  private _results = signal<Post[]>(POSTS);

  get query() { return this._query(); }
  set query(val: string) {
    this._query.set(val);
    this.updateResults();
  }

  get mode() { return this._mode(); }
  set mode(val: 'anunt' | 'informatie') {
    this._mode.set(val);
    this.updateResults();
  }

  get results() { return this._results(); }
  get results$() { return this._results; }

  private updateResults() {
    const q = this._query().toLowerCase();
    const source = this._mode() === 'anunt' ? POSTS : INFOS;
    let filtered = source.filter(post => post.type === this._mode());

    if (q.trim()) {
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(q) ||
        (post.tags?.some(tag => tag.toLowerCase().includes(q))) ||
        post.content.toLowerCase().includes(q)
      );
    }

    // Sort by date (newest first)
    filtered.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    this._results.set(filtered);
  }
}
