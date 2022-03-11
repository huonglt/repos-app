import { renderHook } from '@testing-library/react-hooks';
import { act } from 'react-dom/test-utils';
import { useApi } from './useApi';

describe('useApi hook', () => {
  it('isLoading, isError, data, loadData correct', async () => {
    const mockApiService = jest.fn();
    const { result } = renderHook(() => useApi(mockApiService));
    
    const [isLoading, isError, data, loadData] = result.current;

    /**
     * isLoading = fales
     * isError = false
     * data = null
     * loadData is a function
     */
    expect(isLoading).toEqual(false);
    expect(isError).toEqual(false);
    expect(data).toEqual(null);
    expect(loadData instanceof Function).toEqual(true);
  })
})