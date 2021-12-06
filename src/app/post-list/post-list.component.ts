import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from '../post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts!: Post[];

  constructor(private postService: PostService,
    private router: Router) { }

  ngOnInit(): void {
    this.getPosts();
  }

  private getPosts(){
    this.postService.getAllPosts().subscribe(data => {
      this.posts = data;
      console.log(data);
    });
  }

  updatePost(id: number){
    this.router.navigate(['update-post', id]);
  }

  deletePost(id: number){
    this.postService.deletePost(id).subscribe(data => {
      this.getPosts();
    })
  }
}
