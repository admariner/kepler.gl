// SPDX-License-Identifier: MIT
// Copyright contributors to the kepler.gl project

const data = [
  {
    venue_id: '7c69e9',
    count: 10,
    latitude: 41.852015,
    longitude: -87.616047,
    neighbors: [1, 2],
    'source hex_id': '8a2664c1b74ffff',
    'target latitude': 41.946969,
    'target longitude': -87.693607,
    'target hex_id': '8a2664ca51b7fff'
  },
  {
    venue_id: 'fe26e3',
    count: 22,
    latitude: 41.946969,
    longitude: -87.693607,
    neighbors: [2, 3],
    'source hex_id': '8a2664ca51b7fff',
    'target latitude': 41.7552452681605,
    'target longitude': -87.6322426600563,
    'target hex_id': '8a2664cc3757fff'
  },
  {
    venue_id: '5f3ec9',
    count: 5,
    latitude: 41.9228189446294,
    longitude: -87.7459144592286,
    neighbors: [3, 4],
    'source hex_id': '8a2664ca22dffff',
    'target latitude': 41.7552452681605,
    'target longitude': -87.6322426600563,
    'target hex_id': '8a2664cc3757fff'
  },
  {
    venue_id: 'fe625f',
    count: 11,
    latitude: 41.9458364,
    longitude: -87.7474061,
    neighbors: [4, 5, 6],
    'source hex_id': '8a2664ca66c7fff',
    'target latitude': 41.990071,
    'target longitude': -87.710537,
    'target hex_id': '8a2664d8ad97fff'
  },
  {
    venue_id: '7b1fe3',
    count: 14,
    latitude: 41.879519,
    longitude: -87.6335512,
    neighbors: [5, 6],
    'source hex_id': '8a2664c1a89ffff',
    'target latitude': 41.8801791917474,
    'target longitude': -87.7507109194994,
    'target hex_id': '8a2664c81567fff'
  },
  {
    venue_id: 'd16c1b',
    count: 8,
    latitude: 41.7552452681605,
    longitude: -87.6322426600563,
    neighbors: [6, 7],
    'source hex_id': '8a2664cc3757fff',
    'target latitude': 41.9760432,
    'target longitude': -87.7082406,
    'target hex_id': '8a2664d8a71ffff'
  },
  {
    venue_id: '5f3be3',
    count: 6,
    latitude: 41.990071,
    longitude: -87.710537,
    neighbors: [7, 8],
    'source hex_id': '8a2664d8ad97fff',
    'target latitude': 41.7552452681605,
    'target longitude': -87.6322426600563,
    'target hex_id': '8a2664cc3757fff'
  },
  {
    venue_id: 'eeea20',
    count: 5,
    latitude: 41.8801791917474,
    longitude: -87.7507109194994,
    neighbors: [8, 9],
    'source hex_id': '8a2664c81567fff',
    'target latitude': 41.7753234651629,
    'target longitude': -87.6832077690278,
    'target hex_id': '8a2664cd1197fff'
  }
];

export const config = {
  version: 'v1',
  config: {
    visState: {
      filters: [],
      layers: [
        {
          id: 'iulge5',
          type: 'point',
          config: {
            dataId: 'sample_visit_data',
            label: 'point',
            columns: {
              lat: 'latitude',
              lng: 'longitude',
              neighbors: 'neighbors'
            },
            isVisible: true,
            visConfig: {
              radius: 20,
              opacity: 1,
              allowHover: true,
              showNeighborOnHover: true,
              showHighlightColor: false
            }
          },
          visualChannels: {
            colorField: {
              name: 'count',
              type: 'integer'
            },
            colorScale: 'quantile'
          }
        }
      ]
    }
  }
};
export default data;