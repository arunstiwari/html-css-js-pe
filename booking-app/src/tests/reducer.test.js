import reducer from "../components/Bookables/reducer";

it('should return state with bookable index as 0', function () {

    const state = {
        group: 'Rooms',
        bookableIndex: 0,
        bookables : [],
        hasDetails: true,
        isLoading: true,
        error: false
    }

    const action = {
        type: 'SET_GROUP',
        payload: 'Rooms123'
    }

    let result = reducer(state, action);
    expect(result.group).toBe('Rooms123');
    expect(result.bookableIndex).toBe(0);
});