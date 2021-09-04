import { render, screen } from '@testing-library/react';
import AvatarField from './AvatarField';

test('renders AvatarField', () => {
  render(<AvatarField imgUrl={""} enable={true} content={"Bruce"} />);
});
