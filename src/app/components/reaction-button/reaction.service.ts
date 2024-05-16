import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Reaction } from '../../shared/types';

@Injectable({
  providedIn: 'root',
})
export class ReactionService {
  constructor(private httpClient: HttpClient) {}

  reactToArticle(id: number, category: Reaction) {
    return this.httpClient.post<{ result: boolean }>('/api/reactions', {
      entityType: 'article',
      entityId: id,
      category,
    });
  }
}
