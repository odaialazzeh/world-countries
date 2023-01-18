import React from 'react';
import { VectorMap } from 'react-jvectormap';
import MapList from './map-list';

const { getName } = require('country-list');

class Map extends React.Component {
  constructor() {
    super();

    this.state = {
      countriesCodesArray: [],
      countriesNamesArray: [],
      data: {},
      color: '#48aeef',
    };
  }

  handleColorChange = (color) => {
    this.setState({ color: color.hex });
  };

  handleClick = (e, countryCode) => {
    const { countriesCodesArray } = this.state;
    // console.log(countryCode);
    if (countriesCodesArray.indexOf(countryCode) === -1) {
      this.setState(
        {
          countriesCodesArray: [...countriesCodesArray, countryCode],
        },
        () => this.getCountriesNamesList(),
      );
    }
  };

  getCountriesNamesList = () => {
    const { countriesCodesArray } = this.state;
    const list = countriesCodesArray.map((code) => getName(code));
    this.setState(
      {
        countriesNamesArray: list,
      },
      () => this.makeMapDataStructure(),
    );
  };

  makeMapDataStructure = () => {
    const { countriesCodesArray } = this.state;
    const obj = {};
    countriesCodesArray.forEach((countryCode) => { (obj[countryCode] = 5); });
    this.setState({
      data: obj,
    });
  };

  render() {
    const {
      countriesNamesArray, data, color,
    } = this.state;
    // console.log(data)
    return (
      <div className="map">
        <VectorMap
          map="world_mill"
          backgroundColor="transparent" // change it to ocean blue: #0077be
          zoomOnScroll={false}
          containerStyle={{
            width: '100%',
            height: '520px',
          }}
          onRegionClick={this.handleClick} // gets the country code
          regionStyle={{
            initial: {
              fill: '#e4e4e4',
              'fill-opacity': 0.9,
              stroke: 'none',
              'stroke-width': 0,
              'stroke-opacity': 0,
              cursor: 'pointer',
            },
            hover: {
              'fill-opacity': 0.8,
              cursor: 'pointer',
            },
            selected: {
              fill: '#2938bc', // color for the clicked country
            },
            selectedHover: {},
          }}
          regionsSelectable
          series={{
            regions: [
              {
                values: data, // this is the map data
                scale: ['#146804', color], // your color game's here
                normalizeFunction: 'polynomial',
              },
            ],
          }}
        />
        <div className="container">
          {countriesNamesArray.map((country) => (
            <div className="sub-container" key={country}>
              <MapList
                key={country}
                name={country}
              />
            </div>
          ))}
        </div>

      </div>
    );
  }
}

export default Map;
