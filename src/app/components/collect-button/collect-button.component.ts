import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { CollectedService } from 'src/app/services/collected.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-collect-button',
  templateUrl: './collect-button.component.html',
  styleUrls: ['./collect-button.component.css']
})
export class CollectButtonComponent implements OnInit {

  public loading: boolean = false;
  public collected: boolean = false;
  @Input() pokemonName: string = "";

  constructor(
    private userService: UserService,
    private readonly collectedService: CollectedService
  ) { }

  ngOnInit() {
    this.collected = this.userService.isCollected(this.pokemonName);
    //console.log(this.collected)
  }

  onCollectClick(): void {
    this.loading = true;
    this.collectedService.collectPokemon(this.pokemonName)
      .subscribe({
        next: (user: User) => {
          this.loading = false;
          this.collected = this.userService.isCollected(this.pokemonName);
        },
        error: (error: HttpErrorResponse) => {
          console.log("ERROR", error.message)
        }
      })
  }
}
