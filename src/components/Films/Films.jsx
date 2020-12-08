import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useParams} from 'react-router-dom';
import {getFilms, getPlanet} from "../../redux/actions/planetsActions";
import {currentFilmsSelector, currentPlanetSelector, isPlanetsFetchingSelector} from "../../redux/selectors/planets";
import Spinner from "../Spinner/Spinner";
import Grid from "../Grid";


function Films() {
  const {id} = useParams();
  const dispatch = useDispatch();
  const planet = useSelector(currentPlanetSelector);
  const isFetching = useSelector(isPlanetsFetchingSelector);
  const films = useSelector(currentFilmsSelector)

  const header = [
    {colName: 'title'},
    {colName: 'episode_id', type: 'number'},
    {colName: 'opening_crawl'},
    {colName: 'director'},
    {colName: 'producer'},
    {colName: 'release_date'},
  ];

  useEffect(() => {
    if (!planet.name) {
      dispatch(getPlanet(id))
    }
    dispatch(getFilms(planet.films))
  }, [dispatch, planet, id])


  return (
    <div className="App">
      <Spinner loading={isFetching}/>
      <Grid data={{header, values: films}}/>
    </div>
  );
}

export default Films;
