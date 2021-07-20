import {render} from "react-dom";
import UserApp from "../example/UserApp";
import {screen, fireEvent, waitFor} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {rest} from "msw";
import {setupServer} from "msw/node";

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

beforeEach(() => mockServer.resetHandlers());


it('users list should be rendered ',  async () =>  {
     div = document.createElement('div');
    document.body.appendChild(div);
    render(<UserApp />,div);
    let user1 = await waitFor(()=> screen.getByText('User1'));
    let user2 = await waitFor(()=> screen.getByText('User2'));
    let user3 = await waitFor(()=> screen.getByText('User3'));
    let user4 = await waitFor(()=> screen.getByText('User4'));
    expect(user1).toBeInTheDocument();
    expect(user2).toBeInTheDocument();
    expect(user3).toBeInTheDocument();
    expect(user4).toBeInTheDocument();

});

it('users should be added once i fill in the input element and press submit button ',  async() =>  {
     let inputelement = screen.getByPlaceholderText(/Enter name/i);
    userEvent.type(inputelement, 'Mohan');
    fireEvent.submit(screen.getByRole('button'));
    let mohan = await waitFor(()=> screen.getByText('Mohan'));
    expect(mohan).toBeInTheDocument();
});

afterAll(()=> {
        mockServer.close();
    }
);

