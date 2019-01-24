import { Component, OnInit, Input } from '@angular/core';
import { Ingredient } from '../ingredients.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
  @Input() ingredients: Ingredient[];
  constructor() { }

  ngOnInit() {
  }

}
