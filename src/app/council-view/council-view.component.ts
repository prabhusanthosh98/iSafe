import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { } from 'googlemaps';
import { MapsService } from '../maps.service';

@Component({
  selector: 'app-council-view',
  templateUrl: './council-view.component.html',
  styleUrls: ['./council-view.component.scss']
})
export class CouncilViewComponent implements OnInit {

  @ViewChild('mapCouncil', { static: true }) mapElement: ElementRef;
  map: google.maps.Map;
  ic: any;
  selected_incident: any;
  constructor(private mapService: MapsService) {
    this.ic = mapService.getuserdata()
  }

  globalView() {
    this.map.setCenter(new google.maps.LatLng({
      lat: -33.919194,
      lng: 151.221197,
    }))
    this.map.setZoom(14);
  }
  getfaClass(i_type: string) {
    if (i_type === 'traffic') {
      return 'fa-car-crash'
    } else if (i_type === 'fire') {
      return 'fa-fire'
    } else if (i_type === 'terror') {
      return 'fa-exclamation-triangle'
    }
  }
 

  getMarkerIcon(i_type: string) {
    if (i_type === 'traffic') {
      return 'assets/accident.png'
    } else if (i_type === 'fire') {
      return 'assets/fire.png'
    } else if (i_type === 'police') {
      return 'assets/police-car.png'
    } else if (i_type === 'firefighter') {
      return 'assets/firefighter-car.png'
    } else if (i_type === 'terror') {
      return 'assets/terrorist.png'
    }
  }

  ngOnInit() {
    // var latlng = new google.maps.LatLng(39.305, -76.617);
    const mapProperties: object = {
      // center: new google.maps.LatLng(35.2271, -80.8431),
      zoom: 17,
      styles: this.mapService.getMapsConfig(),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapProperties);
    this.ic.forEach(element => {
      this.initiateMap(element)
    });
  }

  makeCenter(i: any) {
    this.map.setCenter(new google.maps.LatLng(i.location))
    this.map.setZoom(i.zoom);
    this.selected_incident = i;
  }

  initiateMap(i: any) {
    this.selected_incident = i;
    this.map.setCenter(new google.maps.LatLng(i.location))
    this.map.setZoom(i.zoom);
    new google.maps.Marker({
      position: i.location,
      map: this.map,
      icon: this.getMarkerIcon(i.type),
      title: i.name,
      
    });

    new google.maps.Circle({
      strokeColor: '#FF0000',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#FF0000',
      fillOpacity: 0.35,
      map: this.map,
      center: i.location,
      radius: i.radius
    });

    i.safe_zones.forEach(element => {
      new google.maps.Circle({
        strokeColor: '#009900',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#00cc00',
        fillOpacity: 0.35,
        map: this.map,
        center: element.location,
        radius: element.radius
      });

      new google.maps.Marker({
        position: element.location,
        map: this.map,
        icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png',
        title: element.name
      });
    });

    i.assets.forEach(element => {
      new google.maps.Marker({
        position: element.location,
        map: this.map,
        icon: this.getMarkerIcon(element.type)
      });
    });


  }

}


