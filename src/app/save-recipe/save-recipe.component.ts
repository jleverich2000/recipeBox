import { Component, OnInit } from '@angular/core'; 
import { FormGroup, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-save-recipe',
  templateUrl: './save-recipe.component.html',
  styleUrls: ['./save-recipe.component.css']
})
export class SaveRecipeComponent implements OnInit {
  saveRecipeForm: FormGroup;
  constructor() { }

  ngOnInit() {
    this.initForm();
  }

  onSubmit(){
    console.log(this.saveRecipeForm)
  }

  onAddIngredient() {
    (<FormArray>this.saveRecipeForm.get('ingredients')).push(
      new FormGroup({
        'name': new FormControl(),
        'amount': new FormControl()
      })
    );
  }

  onAddSteps() {
    (<FormArray>this.saveRecipeForm.get('directions')).push(
      new FormGroup({
        'step': new FormControl(),
        'order': new FormControl()
      })
    );

}

  get controls() {
    return (<FormArray>this.saveRecipeForm.get('ingredients')).controls;
  }
  get stepControls() {
    return (<FormArray>this.saveRecipeForm.get('directions')).controls;
  }
  
  private initForm() {
      let recipeName = "";
       let Ingredients = new FormArray([]);
       let Directions = new FormArray([]);
      let category = "";

      this.saveRecipeForm = new FormGroup({
        'recipeName': new FormControl(recipeName),
        'ingredients': Ingredients,
        'directions' : Directions,
        'category': new FormControl(category)
      });
    }
    

}

