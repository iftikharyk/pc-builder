import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CommonModule } from "@angular/common";
import { PartCardComponent } from "../../shared/components/part-card/part-card.component";

@Component({
    standalone: true,
    selector: 'app-part-list',
    imports: [CommonModule, PartCardComponent],
    templateUrl: './part-list.page.html',
    styleUrls: ['./part-list.page.css']
})

export class PartListPage {
    type: string = '';
    parts: any = [];

    partsByType: Record<string, any[]> = {
        cpu: [
            {
                name: 'Intel Core i7-13700K',
                price: 420,
                specs: '16 Cores, 24 Threads, 3.4 GHz',
                image: 'https://via.placeholder.com/200x120?text=CPU'
            },
            {
                name: 'AMD Ryzen 7 7800X',
                price: 389,
                specs: '8 Cores, 16 Threads, 4.2 GHz',
                image: 'https://via.placeholder.com/200x120?text=CPU'
            }
        ],
        gpu: [
            {
                name: 'NVIDIA RTX 4080',
                price: 1199,
                specs: '16GB GDDR6X',
                image: 'https://via.placeholder.com/200x120?text=GPU'
            },
            {
                name: 'AMD Radeon RX 7900 XT',
                price: 899,
                specs: '20GB GDDR6',
                image: 'https://via.placeholder.com/200x120?text=GPU'
            }
        ],
        ram: [
            {
                name: 'Corsair Vengeance 32GB',
                price: 129,
                specs: 'DDR5 6000MHz',
                image: 'https://via.placeholder.com/200x120?text=RAM'
            },
            {
                name: 'G.SKILL Trident Z 16GB',
                price: 79,
                specs: 'DDR4 3600MHz',
                image: 'https://via.placeholder.com/200x120?text=RAM'
            }
        ],
        motherboard: [
            {
                name: 'ASUS ROG Strix Z790-E',
                price: 349,
                specs: 'LGA 1700, DDR5, WiFi 6E',
                image: 'https://via.placeholder.com/200x120?text=Motherboard'
            },
            {
                name: 'MSI MAG B650 TOMAHAWK',
                price: 219,
                specs: 'AM5, DDR5, ATX',
                image: 'https://via.placeholder.com/200x120?text=Motherboard'
            }
        ],
        storage: [
            {
                name: 'Samsung 980 PRO 1TB',
                price: 129,
                specs: 'NVMe Gen4 SSD',
                image: 'https://via.placeholder.com/200x120?text=SSD'
            },
            {
                name: 'WD Blue 2TB HDD',
                price: 55,
                specs: '7200 RPM, 3.5"',
                image: 'https://via.placeholder.com/200x120?text=HDD'
            }
        ],
        psu: [
            {
                name: 'Corsair RM850x',
                price: 139,
                specs: '850W, Fully Modular',
                image: 'https://via.placeholder.com/200x120?text=PSU'
            },
            {
                name: 'EVGA 600 BR',
                price: 59,
                specs: '600W, Bronze Rated',
                image: 'https://via.placeholder.com/200x120?text=PSU'
            }
        ],
        case: [
            {
                name: 'NZXT H510',
                price: 79,
                specs: 'ATX Mid Tower',
                image: 'https://via.placeholder.com/200x120?text=Case'
            },
            {
                name: 'Cooler Master TD500 Mesh',
                price: 99,
                specs: 'ARGB, ATX Mid Tower',
                image: 'https://via.placeholder.com/200x120?text=Case'
            }
        ]
    };

    constructor(private route: ActivatedRoute) {
        this.type = this.route.snapshot.params['type'];

        // Dummy data — replace with real API later
        this.parts = this.partsByType[this.type] || [];
    }


}