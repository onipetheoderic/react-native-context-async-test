import reducer from "../../../store/reducer";

it("sets the incoming member to the Member list", () => {
  const state = { members: [] };
  const newState = reducer(state, { type: "SET_MEMBERS", payload: ["b"] });

  expect(newState.members).toEqual(["b"]);
});

it("sets the incoming member to the Member list", () => {
  const state = { members: [] };
  const newState = reducer(state, { type: "SET_MEMBERS", payload: [] });

  expect(newState.members).toEqual([]);
});

it("returns the state if there is no payload", () => {
  const state = { members: [] };
  const newState = reducer(state, { type: "SET_MEMBERS" });

  expect(newState).toEqual({ members: [] });
});

it("returns the state if no action the type of action is non-existent", () => {
  const state = { members: [] };
  const newState = reducer(state, { type: "SET_NOT_ANY_MEMBER" });

  expect(newState).toEqual({ members: [] });
});

it("returns the state if the type and payload is empty", () => {
  const state = { members: [] };
  const newState = reducer(state, {});

  expect(newState).toEqual({ members: [] });
});
