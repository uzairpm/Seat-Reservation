import { Component } from '@angular/core';

//Component decorator
@Component({
    selector: 'seat-list',
    templateUrl: './seat.component.html',
    styleUrls: ['./seat.component.css']
})
export class SeatComponent {
    //variable declarations
    movieTitle:string = "Captain America: The Winter Soldier";
    screen: string = "LUXE CINEMAS";
    time: string = "FRI, 6:45PM"

    rows: string[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    cols: number[]  = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    reserved: string[] = ['A2', 'A3', 'F5', 'F1', 'F2','F6', 'F7', 'F8', 'H1', 'H2', 'H3', 'H4'];
    selected: string[] = [];

    ticketPrice: number = 120;
    convFee: number = 30;
    totalPrice: number = 0;
    currency: string = "Rs";

    //return status of each seat
    getStatus = function(seatPos: string) {
        if(this.reserved.indexOf(seatPos) !== -1) {
            return 'reserved';
        } else if(this.selected.indexOf(seatPos) !== -1) {
            return 'selected';
        }
    }
    //clear handler
    clearSelected = function() {
        this.selected = [];
    }
    //click handler
    seatClicked = function(seatPos: string) {
        var index = this.selected.indexOf(seatPos);
        
        if(index !== -1) {
            // seat already selected, remove
            this.selected.splice(index, 1)
        } else {
            //push to selected array only if it is not reserved
            if(this.reserved.indexOf(seatPos) === -1)
                this.selected.push(seatPos);
        }
    }
    //Buy button handler
    showSelected = function() {
        if(this.selected.length > 0) {
            alert("Selected Seats: " + this.selected + "\nTotal: "+(this.ticketPrice * this.selected.length + this.convFee));
        } else {
            alert("No seats selected!");
        }
    }
}