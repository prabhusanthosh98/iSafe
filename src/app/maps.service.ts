import { Injectable } from '@angular/core';
import { MapTypeStyle } from 'googlemaps';

const maps_config: any[] = [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "hue": "#ff4400"
      },
      {
        "saturation": -68
      },
      {
        "lightness": -4
      },
      {
        "gamma": 0.72
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.icon"
  },
  {
    "featureType": "landscape.man_made",
    "elementType": "geometry",
    "stylers": [
      {
        "hue": "#0077ff"
      },
      {
        "gamma": 3.1
      }
    ]
  },
  {
    "featureType": "water",
    "stylers": [
      {
        "hue": "#00ccff"
      },
      {
        "gamma": 0.44
      },
      {
        "saturation": -33
      }
    ]
  },
  {
    "featureType": "poi.park",
    "stylers": [
      {
        "hue": "#44ff00"
      },
      {
        "saturation": -23
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "hue": "#007fff"
      },
      {
        "gamma": 0.77
      },
      {
        "saturation": 65
      },
      {
        "lightness": 99
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "gamma": 0.11
      },
      {
        "weight": 5.6
      },
      {
        "saturation": 99
      },
      {
        "hue": "#0091ff"
      },
      {
        "lightness": -86
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry",
    "stylers": [
      {
        "lightness": -48
      },
      {
        "hue": "#ff5e00"
      },
      {
        "gamma": 1.2
      },
      {
        "saturation": -23
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "saturation": -64
      },
      {
        "hue": "#ff9100"
      },
      {
        "lightness": 16
      },
      {
        "gamma": 0.47
      },
      {
        "weight": 2.7
      }
    ]
  }
]

const data_config = [
  {
    name: 'Accident near News Xpress, Avoca Street, Randwick',
    type: 'traffic',
    civilians: '30',
    officials: '4',
    zoom: 17,
    location: {
      lat: -33.91523,
      lng: 151.241606,
    },
    radius: 40,
    safe_zones: [
      {
        location: {
          lat: -33.915996,
          lng: 151.241422,
        },
        radius: 30,
        name: 'Catholic Church, 193 Avoca Street',
        civilians: '12',
        officials: '1',
        distance: 300
      },
      {
        location: {
          lat: -33.914269,
          lng: 151.241823,
        },
        radius: 25,
        civilians: '23',
        officials: '2',
        name: '165 Avoca Street, Randwick',
        distance: 320
      },
      {
        location: {
          lat: -33.915473,
          lng: 151.243146,
        },
        radius: 30,
        civilians: '10',
        officials: '2',
        name: 'Milford Street, Randwick',
        distance: 500
      }
    ],
    assets: [{
      location: {
        lat: -33.915013,
        lng: 151.241685,
      },
      type: 'firefighter'
    },
    {
      location: {
        lat: -33.915466,
        lng: 151.241557,
      },
      type: 'police'
    },
    {
      location: {
        lat: -33.915304,
        lng: 151.24208,
      },
      type: 'police'
    }],
  },

  {
    name: 'Fire in Gelato Messina HQ',
    type: 'fire',
    location: {
      lat: -33.918208,
      lng: 151.203096,
    },
    radius: 100,
    civilians: '43',
    officials: '10',
    zoom: 16,
    assets: [{
      location: {
        lat: -33.918351,
        lng: 151.202728,
      },
      type: 'firefighter'
    },
    {
      location: {
        lat: -33.91806,
        lng: 151.203492,
      },
      type: 'firefighter'
    },
    {
      location: {
        lat: -33.918949,
        lng: 151.207694,
      },
      type: 'firefighter'
    },
    {
      location: {
        lat: -33.917604,
        lng: 151.203011,
      },
      type: 'police'
    }],
    safe_zones: [
      {
        location: {
          lat: -33.919868,
          lng: 151.204321,
        },
        name: 'Primrose Avenue',
        radius: 60,
        civilians: '20',
        officials: '2',
        distance: 400
      },
      {
        location: {
          lat: -33.919517,
          lng: 151.201829,
        },
        name: '135-151 Dunning Avenue',
        radius: 50,
        civilians: '56',
        officials: '3',
        distance: 220
      },
      {
        location: {
          lat: -33.916822,
          lng: 151.20139,
        },
        name: 'SANDLER, Dunning Avenue',
        radius: 50,
        civilians: '30',
        officials: '2',
        distance: 400
      },
      {
        location: {
          lat: -33.916883,
          lng: 151.204317,
        },
        name: '90 Rothschild Avenue',
        radius: 70,
        civilians: '6',
        officials: '1',
        distance: 300
      }
    ]
  },
  {
    name: 'Unknown gunman at Kensington Peking Restaurant, Anzac Parade',
    type: 'terror',
    civilians: '102',
    officials: '23',
    zoom: 16,
    location: {
      lat: -33.909724,
      lng: 151.223476,
    },
    radius: 70,
    safe_zones: [
      {
        location: {
          lat: -33.911821,
          lng: 151.22433,
        },
        radius: 30,
        name: '240-268 Anzac Parade, Kensington',
        civilians: '12',
        officials: '1',
        distance: 300
      },
      {
        location: {
          lat: -33.910831,
          lng: 151.221571,
        },
        radius: 25,
        civilians: '23',
        officials: '2',
        name: 'Villiers Street, Kensington',
        distance: 320
      },
      {
        location: {
          lat: -33.907615,
          lng: 151.224326,
        },
        radius: 30,
        civilians: '10',
        officials: '2',
        name: '5-7 Ascot Street, Kensington',
        distance: 500
      }
    ],
    assets: [{
      location: {
        lat: -33.912391,
        lng: 151.223773,
      },
      type: 'firefighter'
    },
    {
      location: {
        lat: -33.911543,
        lng: 151.220713,
      },
      type: 'firefighter'
    },
    {
      location: {
        lat: -33.910959,
        lng: 151.222991,
      },
      type: 'police'
    },
    {
      location: {
        lat: -33.910952,
        lng: 151.223412,
      },
      type: 'police'
    },
    {
      location: {
        lat: -33.908879,
        lng: 151.223275,
      },
      type: 'police'
    },
    {
      location: {
        lat: -33.908634,
        lng: 151.223644,
      },
      type: 'police'
    }
  ]
  }
]


@Injectable({
  providedIn: 'root'
})
export class MapsService {

  constructor() { }

  getMapsConfig() {
    return maps_config
  }

  getuserdata() {
    return data_config
  }

}
