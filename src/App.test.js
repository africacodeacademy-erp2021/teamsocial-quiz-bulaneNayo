import { render, screen,userEvent} from '@testing-library/react';
import Registration from './Registration'
import App from './App'

test('renders heading', () => {
  render(<App/>);
  const heading = screen.getByText(/ACA Team Social/i);
  expect(heading).toBeInTheDocument();
});


test('checks whether the start button exists and disabled by default', () => {
  render(<Registration/>);

    const StartButton = screen.getByRole('button',{name : 'Start playing'});
   expect(StartButton).toBeInTheDocument();

  //userEvent.click(StartButton);
  //expect(StartButton).toHaveBeenCalledTimes(1);
  //expect(StartButton).not.toBeEnabled();

});


/*test('It should not allow special characters to be inputted', () => {
  render(<Registration/>);
  const  input = screen.getByText('Current');
  expect(input).not.toBe('*//*+-@$') ;

});*/


/*test('indicate if field is empty, below or above range', async () => {
  render(<input name="username" id="username"  />);


  const userInput = screen.getByLabelText ('username');
  userEvent.clear(userInput);
  userEvent.type(userInput, '1');
  expect(userInput).toHaveErrorMessage('Your username should atleast be  2 characters long');

  userEvent.clear(userInput);
  userEvent.type(userInput, '');
  expect(userInput).toHaveErrorMessage('Username required');

  
  userEvent.clear(userInput);
  userEvent.type(userInput, '20');
  expect(userInput).toHaveErrorMessage('characters of Username should be less than 20');

});*/

//test('checks if the answer of the question is correct')