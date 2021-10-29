import NavBar from '@/components/navigation/NavBar';
import { render } from '@/test/test-utils';
import '@testing-library/jest-dom';
import { fireEvent, screen, waitFor } from '@testing-library/react';

const useRouter = jest.spyOn(require('next/router'), 'useRouter');

jest.mock('../../hooks/useOnTop', () => ({
  __esModule: true,
  default: () => true,
}));

describe('NavBar', () => {
  const push = jest.fn();
  useRouter.mockImplementation(() => ({
    push,
    pathname: '/',
  }));

  it('should navigate properly', () => {
    render(
      <NavBar handleClick={() => undefined} showMobileNavigation={false} />,
    );

    fireEvent.click(screen.getByText('Home'));
    expect(push).toHaveBeenCalledWith('/', '/', expect.anything());
    fireEvent.click(screen.getByText('Projects'));
    expect(push).toHaveBeenCalledWith(
      '/projects',
      '/projects',
      expect.anything(),
    );
    fireEvent.click(screen.getByText('Blog'));
    expect(push).toHaveBeenCalledWith('/blog', '/blog', expect.anything());
    fireEvent.click(screen.getByText('Contact'));
    expect(push).toHaveBeenCalledWith(
      '/contact',
      '/contact',
      expect.anything(),
    );
  });

  it('should render shadow on scroll', async () => {
    render(
      <NavBar handleClick={() => undefined} showMobileNavigation={false} />,
    );

    const nav = screen.getByRole('navigation');
    expect(nav).not.toHaveClass('shadow');
    fireEvent.scroll(window, { target: { pageYOffset: 300 } });
    Promise.all([
      waitFor(() => {
        expect(nav).toHaveClass('shadow');
      }),
    ]);
  });
});
