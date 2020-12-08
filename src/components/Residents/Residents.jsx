import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import Grid from "../Grid";
import { getPlanet, getResidents } from "../../redux/actions/planetsActions";
import Spinner from "../Spinner/Spinner";
import {
  currentPlanetSelector,
  currentResidentsSelector,
  isPlanetsFetchingSelector,
} from "../../redux/selectors/planets";

function Residents() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const planet = useSelector(currentPlanetSelector);
  const isFetching = useSelector(isPlanetsFetchingSelector);
  const residents = useSelector(currentResidentsSelector);

  const header = [
    { colName: "name" },
    { colName: "height", type: "number" },
    { colName: "mass", type: "number" },
    { colName: "hair_color" },
    { colName: "skin_color" },
    { colName: "eye_color" },
    { colName: "birth_year" },
    { colName: "gender" },
  ];

  useEffect(() => {
    if (!planet.name) {
      dispatch(getPlanet(id));
    }
    dispatch(getResidents(planet.residents));
  }, [dispatch, planet, id]);

  return (
    <div className="App">
      {isFetching ? <Spinner /> : <Grid data={{ header, values: residents }} />}
    </div>
  );
}

export default Residents;
