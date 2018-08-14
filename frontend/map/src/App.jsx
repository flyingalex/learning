import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import { Chart, Geom, Tooltip, Label } from 'bizcharts';
import { DataSet } from '@antv/data-set/src';
import ChinaGeoJson from './china.json';
import { Provinces } from './constants';

class App extends Component {
  state = {
    dv: '',
  };

  componentWillMount() {
    const ds = new DataSet();
    const chinaMap = ds.createView('map').source(ChinaGeoJson, {
      type: 'GeoJSON',
    });

    const dvData = ds.createView('data').source(Provinces);
    dvData.transform({
      type: 'geo.region',
      field: 'name',
      geoDataView: chinaMap,
      as: ['longitude', 'latitude'],
    });
    console.log('dvdata', dvData);
    this.setState({ dv: dvData });
  }
  render() {
    const { dv } = this.state;
    return (
      <Chart width={800} height={600} data={dv}>
        <Tooltip showTitle={false} />
        <Geom
          tooltip={[
            'name',
            name => {
              return { name };
            },
          ]}
          type="polygon"
          position="longitude*latitude"
          color="genre"
        />
      </Chart>
    );
  }
}

export default App;
