import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import Grid from '../Grid';
import {getPlanet} from "../../redux/actions/planetsActions";
import Spinner from "../Spinner/Spinner";
import {currentPlanetSelector} from "../../redux/selectors/planets";

function PlanetDetails() {
  const { id } = useParams();
  const planet = useSelector(currentPlanetSelector);
  const dispatch = useDispatch();
  const { isFetching } = useSelector((state) => state.planets);
  const header = [
    { colName: 'name' },
    { colName: 'rotation_period', type: 'number' },
    { colName: 'orbital_period', type: 'number' },
    { colName: 'diameter', type: 'number' },
    { colName: 'climate' },
    { colName: 'gravity' },
    { colName: 'terrain' },
    { colName: 'surface_water', type: 'number' },
    { colName: 'population' },
  ];

  useEffect(() => {
    if(!planet.name) {
      dispatch(getPlanet(id))
    }
  }, [dispatch, planet, id]);

  return (
    <div className="App">
      <Spinner loading={isFetching}/>
      <Grid data={{ header, values: [planet] }}/>
    </div>
  );
}

export default PlanetDetails;
