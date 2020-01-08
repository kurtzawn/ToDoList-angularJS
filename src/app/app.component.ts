import { model, TodoItem } from './../Model/model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project-todo';
  model =  new model();

  // return user name
  getName()
  {
    return this.model.user;
  }

  getTodoItems()
  {
    //return all items
    return this.model.items;

    //return only items that's done
    // return this.model.items.filter(item => item.done);
  } 

  addItem(newTask)
  {
    if (newTask !="") {
      this.model.items.push(new TodoItem( newTask, false ));
    }
  }
}
