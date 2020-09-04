import { Component, OnInit } from '@angular/core';
import { PetsService } from '../pets.service';
import { Pet } from 'src/model/Pet';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { TokenStorageService } from '../token-storage.service';


@Component({
  selector: 'app-favourite-pets',
  templateUrl: './favourite-pets.component.html',
  styleUrls: ['./favourite-pets.component.css']
})
export class FavouritePetsComponent implements OnInit {

  constructor(private petService: PetsService,
    private tokenStorage: TokenStorageService) { }

  all: Pet[];
  sublist: Pet[];
  heart = faHeart;
  limit = 3;
  stop = false;
  logged = false;
  empty = true;
  size=0;

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.logged = true;
      this.petService.getLiked().subscribe(
        pets => {
          this.all = pets;
          this.sublist = this.all.slice(0, this.limit);
          this.size = this.all.length;
          if (this.size > 0)
            this.empty = false;
        }
      );

    }

  }

  onClick() {
    console.log("more")
    this.limit += 3;
    if (this.limit >= this.all.length) {
      this.stop = true;
    }
    this.sublist = this.all.slice(0, this.limit);
  }

  onLike(id: Number) {
    this.petService.likeOrDislike(id).subscribe(
      res => this.ngOnInit()
    );
  }
}