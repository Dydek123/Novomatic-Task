import React, {FC} from 'react';
import './App.css';
import { useDispatch, useSelector } from "react-redux";

import {RootState } from "./store";
import Search from "./components/Search";
import Alert from "./components/Alert";
import Tunes from "./components/Tunes";
import { setAlert } from "./store/actions/alertActions";
import { setError } from "./store/actions/tunesActions";

const App: FC = () => {
  const dispatch = useDispatch();
  const tunesData = useSelector((state:RootState) => state.tunes.data);
  const loading = useSelector((state:RootState) => state.tunes.loading);
  const error = useSelector((state:RootState) => state.tunes.error);
  const alert = useSelector((state:RootState) => state.alert.message);

  return (
    <div className="has-text-centered">
      <Search title="Enter artist" />
      {loading ? <h2 className='is-size-3 py-2'>Loading</h2> : tunesData && <Tunes data={tunesData} />}
      {alert && <Alert message={alert} onClose={() => dispatch(setAlert(''))} /> }
      {error && <Alert message={error} onClose={() => dispatch(setError())} />}
    </div>
  );
}

export default App;
