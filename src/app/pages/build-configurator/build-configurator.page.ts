import { Component, signal } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { PartCardComponent } from "../../shared/components/part-card/part-card.component";

@Component({
    standalone: true,
    selector: "app-build-configurator",
    imports: [CommonModule, FormsModule],
    templateUrl: "./build-configurator.page.html",
    styleUrls: ["./build-configurator.page.css"]
})

export class BuildConfiguratorPage {
    // // Categories to build
    // categories = ["cpu", "gpu", "ram", "motherboard", "storage", "psu", "case"];

    // // Dummy parts by category (reuse from part-list)
    // partsByType: Record<string, any[]> = {
    //     cpu: [
    //         { id: 'cpu1', name: 'Intel Core i5-12400F', price: 180, socket: 'LGA1700' },
    //         { id: 'cpu2', name: 'AMD Ryzen 5 5600X', price: 200, socket: 'AM4' },
    //     ],
    //     motherboard: [
    //         { id: 'mb1', name: 'ASUS Prime B660M-A', price: 150, socket: 'LGA1700', ramType: 'DDR4' },
    //         { id: 'mb2', name: 'MSI B550M Pro', price: 130, socket: 'AM4', ramType: 'DDR4' },
    //         { id: 'mb3', name: 'ASRock X670E Pro RS', price: 250, socket: 'AM5', ramType: 'DDR5' },
    //     ],
    //     ram: [
    //         { id: 'ram1', name: 'Corsair Vengeance LPX 16GB DDR4', price: 70, type: 'DDR4' },
    //         { id: 'ram2', name: 'G.SKILL Trident Z5 RGB 32GB DDR5', price: 160, type: 'DDR5' },
    //     ],
    //     gpu: [
    //         { id: 'gpu1', name: 'NVIDIA RTX 3060 Ti', price: 400, length: 242, powerDraw: 200 },
    //         { id: 'gpu2', name: 'AMD Radeon RX 6700 XT', price: 380, length: 267, powerDraw: 230 },
    //     ],
    //     storage: [
    //         { id: 'ssd1', name: 'Samsung 970 EVO Plus 1TB NVMe', price: 90, type: 'M.2 NVMe' },
    //         { id: 'ssd2', name: 'Crucial MX500 1TB SATA', price: 60, type: 'SATA' },
    //     ],
    //     psu: [
    //         { id: 'psu1', name: 'Corsair RM750x 750W 80+ Gold', price: 120, wattage: 750 },
    //         { id: 'psu2', name: 'EVGA 600 BR 600W 80+ Bronze', price: 70, wattage: 600 },
    //     ],
    //     case: [
    //         { id: 'case1', name: 'NZXT H510 Mid Tower', price: 80, maxGpuLength: 381 },
    //         { id: 'case2', name: 'Cooler Master NR200 Mini-ITX', price: 90, maxGpuLength: 330 },
    //     ]
    // };

    // sortOption: string = 'priceAsc';

    // selectedParts = signal<Record<string, any>>({});

    // selectPart(category: string, part: any) {
    //     this.selectedParts.update(current => {
    //         return { ...current, [category]: part };
    //     })
    // }

    // getFilteredAndSortedParts(type: string): any[] {
    //     let parts = [...(this.partsByType[type] || [])];

    //     // Sorting logic
    //     switch (this.sortOption) {
    //         case 'priceAsc':
    //             parts.sort((a, b) => a.price - b.price);
    //             break;
    //         case 'priceDesc':
    //             parts.sort((a, b) => b.price - a.price);
    //             break;
    //         case 'nameAsc':
    //             parts.sort((a, b) => a.name.localeCompare(b.name));
    //             break;
    //         case 'nameDesc':
    //             parts.sort((a, b) => b.name.localeCompare(a.name));
    //             break;
    //     }

    //     return parts;
    // }

    // get totalPrice() {
    //     return Object.values(this.selectedParts()).reduce((sum, part) => sum + (part?.price ?? 0), 0);
    // }

    get objectKeys() {
        return Object.keys;
    }

    // get compatibilityWarning(): string | null {
    //     const parts = this.selectedParts();

    //     const cpu = parts['cpu'];
    //     const motherboard = parts['motherboard'];

    //     if (cpu && motherboard && cpu.socket !== motherboard.socket) {
    //         return `Incompatible CPU and Motherboard sockets: ${cpu.socket} vs ${motherboard.socket}`;
    //     }

    //     return null;
    // }


    // Dummy parts data
    partsByType: Record<string, any[]> = {
        cpu: [
            { id: 'cpu1', name: 'Intel Core i5-12400F', price: 180, socket: 'LGA1700' },
            { id: 'cpu2', name: 'AMD Ryzen 5 5600X', price: 200, socket: 'AM4' },
        ],
        motherboard: [
            { id: 'mb1', name: 'ASUS Prime B660M-A', price: 150, socket: 'LGA1700', ramType: 'DDR4' },
            { id: 'mb2', name: 'MSI B550M Pro', price: 130, socket: 'AM4', ramType: 'DDR4' },
            { id: 'mb3', name: 'ASRock X670E Pro RS', price: 250, socket: 'AM5', ramType: 'DDR5' },
        ],
        ram: [
            { id: 'ram1', name: 'Corsair Vengeance LPX 16GB DDR4', price: 70, type: 'DDR4' },
            { id: 'ram2', name: 'G.SKILL Trident Z5 RGB 32GB DDR5', price: 160, type: 'DDR5' },
        ],
        gpu: [
            { id: 'gpu1', name: 'NVIDIA RTX 3060 Ti', price: 400, length: 242, powerDraw: 200 },
            { id: 'gpu2', name: 'AMD Radeon RX 6700 XT', price: 380, length: 267, powerDraw: 230 },
        ],
        storage: [
            { id: 'ssd1', name: 'Samsung 970 EVO Plus 1TB NVMe', price: 90, type: 'M.2 NVMe' },
            { id: 'ssd2', name: 'Crucial MX500 1TB SATA', price: 60, type: 'SATA' },
        ],
        psu: [
            { id: 'psu1', name: 'Corsair RM750x 750W 80+ Gold', price: 120, wattage: 750 },
            { id: 'psu2', name: 'EVGA 600 BR 600W 80+ Bronze', price: 70, wattage: 600 },
        ],
        case: [
            { id: 'case1', name: 'NZXT H510 Mid Tower', price: 80, maxGpuLength: 381 },
            { id: 'case2', name: 'Cooler Master NR200 Mini-ITX', price: 90, maxGpuLength: 330 },
        ]
    };

    // Selected parts by type
    selected: Record<string, any> = {};

    // Sorting option
    sortOption: string = 'priceAsc';

    // Compatibility warning message
    compatibilityWarning: string = '';

    // Get sorted part list
    getFilteredAndSortedParts(type: string): any[] {
        let parts = [...(this.partsByType[type] || [])];

        switch (this.sortOption) {
            case 'priceAsc':
                parts.sort((a, b) => a.price - b.price);
                break;
            case 'priceDesc':
                parts.sort((a, b) => b.price - a.price);
                break;
            case 'nameAsc':
                parts.sort((a, b) => a.name.localeCompare(b.name));
                break;
            case 'nameDesc':
                parts.sort((a, b) => b.name.localeCompare(a.name));
                break;
        }

        return parts;
    }

    // When a part is selected
    selectPart(type: string, partId: string) {
        const part = this.partsByType[type]?.find(p => p.id === partId);
        if (part) {
            this.selected[type] = part;
        } else {
            delete this.selected[type];
        }

        this.checkCompatibility();
    }

    // Check compatibility between selected parts
    checkCompatibility() {
        this.compatibilityWarning = '';

        const cpu = this.selected['cpu'];
        const motherboard = this.selected['motherboard'];
        const ram = this.selected['ram'];
        const psu = this.selected['psu'];
        const gpu = this.selected['gpu'];
        const pcCase = this.selected['case'];

        // CPU ↔ Motherboard socket
        if (cpu && motherboard && cpu.socket !== motherboard.socket) {
            this.compatibilityWarning = `CPU socket (${cpu.socket}) is not compatible with motherboard socket (${motherboard.socket}).`;
            return;
        }

        // Motherboard ↔ RAM type
        if (motherboard && ram && motherboard.ramType !== ram.type) {
            this.compatibilityWarning = `Motherboard supports ${motherboard.ramType}, but selected RAM is ${ram.type}.`;
            return;
        }

        // GPU length ↔ Case max length
        if (gpu && pcCase && gpu.length > pcCase.maxGpuLength) {
            this.compatibilityWarning = `GPU is too long (${gpu.length}mm) for the selected case (max ${pcCase.maxGpuLength}mm).`;
            return;
        }

        // PSU wattage ↔ GPU + base system
        if (psu && gpu) {
            const estimatedPower = 150 + gpu.powerDraw; // 150W for CPU & base system
            if (psu.wattage < estimatedPower) {
                this.compatibilityWarning = `PSU wattage (${psu.wattage}W) may be insufficient. Estimated required: ${estimatedPower}W.`;
                return;
            }
        }
    }

    // Return selected parts as array
    selectedParts(): any[] {
        return Object.values(this.selected);
    }

    // Calculate total price
    getTotalPrice(): number {
        return this.selectedParts().reduce((sum, part) => sum + part.price, 0);
    }

    onPartChange(type: string, event: Event) {
        const select = event.target as HTMLSelectElement;
        this.selectPart(type, select.value);
    }
}