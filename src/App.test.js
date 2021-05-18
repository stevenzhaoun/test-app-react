import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { setupServer } from 'msw/node';
import { rest } from 'msw';
import App from './App';

const server = setupServer(
  rest.get('https://jsonplaceholder.typicode.com/posts', (req, res, context) => {
    return res(
      ctx.json([
        { id: '1', title: 'mock post 1' },
        { id: '2', title: 'mock post 2' },
      ])
    )
  }),
);

beforeAll(() => {
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
})

afterAll(() => {
  server.close();
})

test('renders Todo App title', () => {
  const component = render(<App />);

  const title = component.getByText('Todo list App');

  expect(title).toBeInTheDocument();
});

test('button should have correct text', () => {
  const component = render(<App />);

  const button = component.getByRole('button');

  expect(button).toHaveTextContent('Add todo');
});

// test('click button should add text to list', () => {
//   const component = render(<App />);
//   const button = component.getByRole('button');
//   const inputBox = component.getByRole('textbox');

//   userEvent.type(inputBox, 'new post');
//   userEvent.click(button);

//   const listItems = component.getAllByRole('listitem');
//   expect(listItems).toHaveLength(1);
//   expect(listItems[0].textContent).toBe('0 - new post');


// })

test('click button should add text to list', async () => {
  const component = render(<App />);
  const button = component.getByRole('button');
  const inputBox = component.getByRole('textbox');

  component.debug();

  await waitFor(() => {
    return expect(component.queryAllByRole('listitem')).not.toBeNull();
  });
  component.debug();
  userEvent.type(inputBox, 'new post');
  userEvent.click(button);
  const listItems = component.getAllByRole('listitem');
  // expect(listItems).toHaveLength(10);
  expect(listItems[0].textContent).toBe('0 - new post');
})


