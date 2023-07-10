import { ActionType } from '../action-types';
import {
  Action,
  SearchRepositoriesSuccessAction,
  SearchRepositoriesErrorAction,
} from '../actions';

interface RepositoriesState {
  loading: boolean;
  error: string | null;
  data: string[];
}

const reducer = (
  state: RepositoriesState,
  action: Action
): RepositoriesState => {
  switch (action.type) {
    case ActionType.SEARCH_REPOSITORIES:
      return { loading: true, error: null, data: [] };
    case ActionType.SEARCH_REPOSITORIES_SUCCESS:
      return {
        loading: false,
        error: null,
        data: (action as SearchRepositoriesSuccessAction).payload,
      };
    case ActionType.SEARCH_REPOSITORIES_ERROR:
      return {
        loading: false,
        error: (action as SearchRepositoriesErrorAction).payload,
        data: [],
      };
    default:
      return state;
  }
};

export default reducer;
