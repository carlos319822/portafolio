import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AboutComponent } from "./pages/about/about.component";
import { ItemComponent } from "./pages/item/item.component";
import { PortafolioComponent } from "./pages/portafolio/portafolio.component";




const app_routes: Routes =[
    { path:'home', component: PortafolioComponent},
    { path:'about', component: AboutComponent},
    { path:'item/:id', component: ItemComponent},
    { path:'**', pathMatch: 'full', redirectTo:''}
    
]


@NgModule({

    imports: [
        RouterModule.forRoot( app_routes, {useHash: true} )
    ],

    exports:[
        RouterModule
    ]

})




export class AppRoutingModule{

}