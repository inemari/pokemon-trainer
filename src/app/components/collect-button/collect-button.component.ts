import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { CollectedService } from 'src/app/services/collected.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-collect-button',
  templateUrl: './collect-button.component.html'
})
export class CollectButtonComponent implements OnInit {

  public loading: boolean = false;     // Indicates if a data operation is in progress
  public collected: boolean = false;   // Indicates if the item (in this case, a Pokemon) has been collected
  @Input() pokemonName: string = "";  // Input property to specify the name of the Pokemon

  constructor(
    private userService: UserService,
    private readonly collectedService: CollectedService,
  ) { }

  ngOnInit() {
    // When the component initializes, check if the Pokemon is already collected for the current user
    this.collected = this.userService.isCollected(this.pokemonName);
  }


  onCollectClick(): void {

    this.collectedService.collectPokemon(this.pokemonName)
      .subscribe({

        next: (user: User) => {
          this.loading = false;
          this.collected = this.userService.isCollected(this.pokemonName);
        },
        // If an error occurs, log the error message to the console
        error: (error: HttpErrorResponse) => {
          console.log("ERROR", error.message)
        }
      })
  }
}