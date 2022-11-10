import {
  CHANGE_SEARCH_FIELD,
  SEARCH_SKILLS_SUCCESS,
  SEARCH_SKILLS_REQUEST,
  SEARCH_SKILLS_FAILURE,
} from "./actionTypes";

export function changeSearchField(value) {
  return { type: CHANGE_SEARCH_FIELD, payload: { value } };
}

export function searchSkillsSuccess(items) {
  return { type: SEARCH_SKILLS_SUCCESS, payload: { items } };
}

export function searchSkillsRequest(value) {
  return { type: SEARCH_SKILLS_REQUEST, payload: { value } };
}

export function searchSkillsFailure(error) {
  return { type: SEARCH_SKILLS_FAILURE, payload: { error } };
}
