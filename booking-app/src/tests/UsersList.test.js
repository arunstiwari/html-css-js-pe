import React from 'react';
import {render} from 'react-dom';
import {rest} from 'msw';
import {fireEvent, screen,  waitFor} from "@testing-library/react";
import {setupServer} from "msw/node";
import UsersList from "../components/Users/UsersList";

const handlers = [
    rest.get(
        "http://localhost:3002/users",
        (req,res,context)=> {
            return res(
                context.status(200),
                context.json(
                    [
                        {id:1, name: 'User1'},
                        {id:2, name: 'User2'},
                        {id:3, name: 'User3'},
                        {id:4, name: 'User4'}
                    ]
                )
            )
        }
    )
]
let div;
const mockServer = setupServer(...handlers);

beforeAll(()=> mockServer.listen());

beforeEach(() => {
    mockServer.resetHandlers();
});

afterAll(()=> mockServer.close());


it('should list users info', async () => {
     div = document.createElement('div');
    document.body.appendChild(div);
    render(<UsersList />, div);
    await waitFor(()=> screen.debug());
    let user4 = await waitFor(()=> screen.getByText('User4'));
    expect(user4).toBeInTheDocument();
    let user1 = await waitFor(()=> screen.getAllByText('User1'));
    expect(user1).toHaveLength(2);
})
