import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule} from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { UpdateComponent } from './update/update.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    UpdateComponent,
    LoginComponent,
    LogoutComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot([
       {path:"",component:WelcomeComponent},
       {path:"login",component:LoginComponent},
       {path:"home",component:HomeComponent},
       {path:"user",component:UserComponent},
       {path:"update/:id",component:UpdateComponent},
       {path:"logout",component:LogoutComponent}
    	])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
