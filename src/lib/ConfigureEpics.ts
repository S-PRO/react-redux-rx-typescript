import { combineEpics } from 'redux-observable';

import { MainEpics } from './../containers/main';

const epics = Object.values({
  ...MainEpics,
});

const RootEpics = combineEpics(...epics);

export default RootEpics;