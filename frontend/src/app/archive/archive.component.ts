import { Component, OnInit } from '@angular/core';
import { MealService } from '../meal.service';
import { Router } from '@angular/router';
import { Meal } from '../meal.model';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {

  meals: Meal[]

  constructor(private mealService: MealService, private router: Router) { }

  ngOnInit() {
    this.fetchMeals()
  }

  fetchMeals() {
    this.mealService.getAllMeals().subscribe((data: Meal[]) => {
      this.meals = data
      console.log("Data Requested...")
      console.log(this.meals)
    })
  }

  editMeal(id) {
    this.router.navigate(['/edit/${id}'])
  }

  deleteMeal(id) {
    this.mealService.deleteMeal(id).subscribe(() => {
      this.fetchMeals()
    })
  }
}
