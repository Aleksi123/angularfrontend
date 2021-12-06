import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.css']
})
export class UpdatePostComponent implements OnInit {

  id!: number;
  post: Post = new Post();
  constructor(private postService: PostService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.postService.getPostById(this.id).subscribe(data => {
      this.post = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.postService.updatePost(this.id, this.post).subscribe(data =>{
      this.router.navigate(['/'])
    },
    error => console.log(error));
  }
}
