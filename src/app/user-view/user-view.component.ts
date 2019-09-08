import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MapsService } from '../maps.service';
import { } from 'googlemaps';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.scss']
})
export class UserViewComponent implements OnInit {
  @ViewChild('map', { static: true }) mapElement: ElementRef;
  map: google.maps.Map;
  constructor(private mapService: MapsService) { }


  ngOnInit() {
    var latlng = new google.maps.LatLng(39.305, -76.617);
    const mapProperties: object = {
      center: new google.maps.LatLng(35.2271, -80.8431),
        zoom: 15,
        styles: this.mapService.getMapsConfig(),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapProperties);
    }
}
