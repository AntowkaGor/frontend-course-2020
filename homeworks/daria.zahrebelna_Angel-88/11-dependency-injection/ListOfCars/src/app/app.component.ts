import {Component, OnInit} from '@angular/core';
import {finalize} from "rxjs/operators";

import {Vehicle} from "./models";
import {VehicleService} from "./services";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    areVehiclesLoading = false;
    vehicles: Vehicle[] = [];

    constructor(
        private vehicleService: VehicleService
    ) {
    }

    ngOnInit(): void {
        this.getVehicles();
    }

    private getVehicles(): void {
        this.areVehiclesLoading = true;
        this.vehicleService.getVehicles()
            .pipe(finalize(() => this.areVehiclesLoading = false))
            .subscribe((vehicles) => this.vehicles = vehicles);
    }
}
