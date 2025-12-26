import { NgModule } from "@angular/core";
import {RouterModule, Routes } from "@angular/router";
import { StudentsComponent } from "./shared/component/students/students.component";
import { DashboardComponent } from "./shared/component/dashboard/dashboard.component";
import { UsersComponent } from "./shared/component/users/users.component";
import { PageNotFoundComponent } from "./shared/component/page-not-found/page-not-found.component";
import { StudentFormComponent } from "./shared/component/students/student-form/student-form.component";
import { StudentComponent } from "./shared/component/students/student/student.component";

const AppRoutes: Routes=[
    { path:"dashboard",
        component:DashboardComponent
    },
       {
        path:"",
        redirectTo:"dashboard",
        pathMatch:"full"
    },
     { path:"student",
        component:StudentComponent
    },
      { path:"student/:id",
        component:StudentComponent
    },
     { path:"student/:id/editstd",
        component:StudentFormComponent
    },
    { path:"form",
        component:StudentFormComponent
    },
    { path:"dashboard/form",
        component:StudentFormComponent
    },
     { path:"page-not-found",
        component: PageNotFoundComponent
    },
    {
        path : "**",
        redirectTo:"page-not-found"
    }
]

@NgModule({
    imports:[RouterModule.forRoot(AppRoutes)],
    exports:[RouterModule],
})
export class AppRoutingModule {

}