import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private URL = "http://localhost:8080/api/posts";
  constructor(private httpClient: HttpClient) { }

  getPosts(): Observable<Post[]>{
    return this.httpClient.get<Post[]>(`${this.URL}`)
  }

  createPost(post: Post): Observable<Object>{
    return this.httpClient.post(`${this.URL}`, post)
  }

  getPostById(id: number): Observable<Post>{
    return this.httpClient.get<Post>(`${this.URL}/${id}`)
  }
}
