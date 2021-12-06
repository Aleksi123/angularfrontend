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

  getAllPosts(): Observable<Post[]>{
    return this.httpClient.get<Post[]>(`${this.URL}`)
  }

  createPost(post: Post): Observable<Object>{
    return this.httpClient.post(`${this.URL}`, post)
  }

  getPostById(id: number): Observable<Post>{
    return this.httpClient.get<Post>(`${this.URL}/${id}`)
  }

  updatePost(id: number, post: Post): Observable<Object>{
    return this.httpClient.put(`${this.URL}/${id}`,post)
  }

  deletePost(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.URL}/${id}`);
  }
}
