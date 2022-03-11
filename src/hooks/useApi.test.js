import { renderHook } from '@testing-library/react-hooks';
import { act } from 'react-dom/test-utils';
import { useApi } from './useApi';

describe('useApi hook', () => {
  

  it('perform correctly', async () => {
    const mockApiService = jest.fn().mockImplementation(() => {
      return Promise.resolve('test');
    });
    const { result } = renderHook(() => useApi(mockApiService));
    /*await act(async () => {
      //result.current.retry();
      console.log(JSON.stringify(result.current));
    })*/
    //await waitForNextUpdate();
    console.log(JSON.stringify(result.current));
  })
})