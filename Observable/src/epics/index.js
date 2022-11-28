import { ofType } from "redux-observable";
import { of } from "rxjs";
import { ajax } from "rxjs/ajax";
import {
  catchError,
  debounceTime,
  filter,
  map,
  tap,
  retry,
  switchMap,
} from "rxjs/operators";
import {
  CHANGE_SEARCH_FIELD,
  SEARCH_SKILLS_REQUEST,
} from "../actions/actionTypes";
import {
  searchSkillsRequest,
  searchSkillsSuccess,
  searchSkillsFailure,
} from "../actions/actionCreators";

export const changeSearchEpic = (action$) =>
  action$.pipe(
    ofType(CHANGE_SEARCH_FIELD),
    map((o) => o.payload.search.trim()),
    filter((o) => o !== ""),
    debounceTime(100),
    map((o) => searchSkillsRequest(o))
  );

const SEARCH_URL = "http://localhost:3000/api/search";

export const searchSkillsEpic = (action$) =>
  action$.pipe(
    ofType(SEARCH_SKILLS_REQUEST),
    map((o) => o.payload.value),
    map((o) => new URLSearchParams({ q: o })),
    tap(o => console.log(o)),
    switchMap((o) =>
      ajax.getJSON(`${SEARCH_URL}?${o}`).pipe(
        retry(3),
        map((o) => searchSkillsSuccess(o)),
        catchError((e) => of(searchSkillsFailure(e)))
      )
    )
  );
