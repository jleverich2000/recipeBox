import { Component, OnInit } from '@angular/core'; 
import { FormGroup, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-save-recipe',
  templateUrl: './save-recipe.component.html',
  styleUrls: ['./save-recipe.component.css']
})
export class SaveRecipeComponent implements OnInit {
  saveRecipeForm: FormGroup;
  indexOfElement: number;
  constructor() { }

  ngOnInit() {
    this.initForm();
  }

  onSubmit(){
    console.log(this.saveRecipeForm)
  }

  onAddIngredient( indexofIngredient: number) {
    (<FormArray>this.saveRecipeForm.get('ingredients')).push(
      new FormGroup({
        'name': new FormControl(),
        'unitType': new FormControl(),
        'quantity': new FormControl(),
        'orderOf': new FormControl((indexofIngredient? indexofIngredient:0))
      })
    );
  }

  onAddSteps( indexofelement: number) {
    (<FormArray>this.saveRecipeForm.get('directions')).push(
      new FormGroup({
        'Instruction': new FormControl(),
        'StepNumber': new FormControl((indexofelement? indexofelement:0))
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

