import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private httpClient: HttpClient) { }

  createOrUpdateArticle(body: { title: string, content: string}, id: number) {
    if(id) {
      return this.httpClient.put<{id: number}>('/api/articles/'+id, body)
    }
    return this.httpClient.post<{id: number}>('/api/articles', body)
  }
}
