import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

@Component({
    standalone: true,
    selector: 'app-home',
    imports: [CommonModule, RouterModule],
    templateUrl: './home.page.html',
    styleUrls: ['./home.page.css']
})

export class HomePage {
    categories = [
        { name: 'CPU', icon: '🧠', type: 'cpu' },
        { name: 'GPU', icon: '🎮', type: 'gpu' },
        { name: 'Motherboard', icon: '🧩', type: 'motherboard' },
        { name: 'RAM', icon: '💾', type: 'ram' },
        { name: 'Storage', icon: '📀', type: 'storage' },
        { name: 'Power Supply', icon: '🔌', type: 'psu' },
        { name: 'Case', icon: '📦', type: 'case' },
    ];
}