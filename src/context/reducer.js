export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  //token:
  //"BQCrN89OABDGRtgvBZhJFp5X-6-qL4k7jW61OA_zcRR_-GUwfBkmodDgfeRatZ30Mz34yzetUOe-c2I3jgqYt4xYbDe7PYPSIsJHtrCTVBdEDKP399BgOk9AF15ynJb870kUbiz3XCr6GILrg3bNsH-lEWI App.js:41",
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };

    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    default:
      return state;
  }
};

export default reducer;
