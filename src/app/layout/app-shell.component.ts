import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterOutlet } from "@angular/router";
import { NavbarComponent } from "../shared/components/navbar/navbar.component";

@Component({
    standalone: true,
    selector: 'app-shell',
    imports: [CommonModule, RouterOutlet, NavbarComponent],
    template: `
        <app-navbar />
        <main class="min-h-screen bg-gray-50">
            <router-outlet />
        </main>
    `
})

export class AppShellComponent {}