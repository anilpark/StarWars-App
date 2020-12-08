import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import "./Planets.css";
import Grid from "../Grid";
import Spinner from "../Spinner/Spinner";
import Modal from "../Modal/Modal";
import PlanetForm from "../PlanetForm/PlanetForm";
import { getPlanet, getPlanets } from "../../redux/actions/planetsActions";
import {
  isPlanetsFetchingSelector,
  planetsSelector,
} from "../../redux/selectors/planets";

function Planets({ children }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const planets = useSelector(planetsSelector);
  const isFetching = useSelector(isPlanetsFetchingSelector);
  const { nextQuery } = useSelector((state) => state.planets);

  const [selectedPlanet, setSelectedPlanet] = useState(null);

  const defaultHeader = [
    { colName: "name" },
    { colName: "rotation_period", type: "number" },
    { colName: "orbital_period", type: "number" },
    { colName: "diameter", type: "number" },
    { colName: "climate" },
    { colName: "gravity" },
    { colName: "terrain" },
    { colName: "surface_water", type: "number" },
    { colName: "population" },
  ];

  const header =
    typeof children === "function" ? children(defaultHeader) : defaultHeader;

  const actions = [
    {
      label: "Go to Films",
      action: (row) => {
        dispatch(getPlanet(row.id));
        history.push(`/planets/${row.id}/films`);
      },
      isShown: (row) => row.films.length,
    },
    {
      label: "Go to Residents",
      action: (row) => {
        dispatch(getPlanet(row.id));
        history.push(`/planets/${row.id}/residents`);
      },
      isShown: (row) => row.residents.length,
    },
    {
      label: "Go to Details",
      action: (row) => {
        dispatch(getPlanet(row.id));
        history.push(`/planets/${row.id}`);
      },
    },
    {
      label: "Edit planet",
      action: (row) => {
        setSelectedPlanet(row);
      },
    },
  ];

  useEffect(() => {
    dispatch(getPlanets(nextQuery));
  }, []);

  const isFirstLoad = isFetching && !planets.length;
  const isLoadingMore = isFetching && !!planets.length;
  const canLoadMore = !isFetching && nextQuery;

  return (
    <div className="App">
      {isFirstLoad ? (
        <Spinner loading={isFetching} />
      ) : (
        <Grid data={{ header, actions, values: planets }} />
      )}
      {isLoadingMore && <Spinner loading={isFetching} />}
      {canLoadMore && (
        <button onClick={() => dispatch(getPlanets(nextQuery))}>
          Load more
        </button>
      )}
      <Modal
        isOpen={!!selectedPlanet}
        onRequestClose={() => setSelectedPlanet(null)}
      >
        <PlanetForm planet={selectedPlanet} />
      </Modal>
    </div>
  );
}

Planets.propTypes = {
  children: PropTypes.func,
};

export default Planets;
