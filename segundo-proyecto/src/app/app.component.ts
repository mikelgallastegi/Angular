import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'segundo-proyecto';

  constructor(private http  : HttpClient){
    
  }

  probarGet(){
    this.http.get("http://localhost:3000/contactos").subscribe({
      next : (data) => {
        alert(JSON.stringify(data));
      }
    })
  }
}
