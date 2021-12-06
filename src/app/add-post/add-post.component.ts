import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from '../post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  post: Post = new Post();
  constructor(private postService: PostService, private router: Router) { }

  ngOnInit(): void {
  }

  savePost(){
    this.postService.createPost(this.post).subscribe( data => {
      this.router.navigate(['/'])
    },
    error => console.log(error));
  }

  onSubmit(){   
    this.savePost();
  }

}
