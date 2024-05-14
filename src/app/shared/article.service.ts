import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Article, Page } from './types';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  constructor(private httpClient: HttpClient) {}

  createOrUpdateArticle(body: { title: string; content: string }, id: number) {
    if (id) {
      return this.httpClient.put<{ id: number }>('/api/articles/' + id, body);
    }
    return this.httpClient.post<{ id: number }>('/api/articles', body);
  }

  togglePublish(id: number) {
    return this.httpClient.patch<{ published: boolean }>(
      `/api/articles/${id}/publish`,
      {}
    );
  }

  fetchArticles(page: number = 0, size: number = 10) {
    return this.httpClient.get<Page<Article>>('/api/articles', {
      params: { page, size, sort: 'published_at' },
    });
  }

  fetchArticle(idOrSlug: string) {
    return this.httpClient.get<Article>(`/api/articles/${idOrSlug}`);
  }
}
