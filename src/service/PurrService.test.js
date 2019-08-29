import React from 'react';
import { render } from '@testing-library/react';
import { wait } from '@testing-library/dom'
import PurrService from './PurrService';

describe('PurrService', () => {
  describe('list', () => {
    const fakePurrs = [
      { id: 1, author: 'AuthorA', content: 'Content of the purr 1' },
      { id: 2, author: 'AuthorB', content: 'Content of the purr 2' },
      { id: 3, author: 'AuthorC', content: 'Content of the purr 3' }
    ]

    beforeEach(() => {
      jest.spyOn(window, "fetch").mockImplementation(() => {
        const fetchResponse = {
          json: () => Promise.resolve(fakePurrs)
        };
        return Promise.resolve(fetchResponse);
      })
    })

    afterEach(() => {
      window.fetch.mockRestore();
    })

    it('calls the callback with response', async () => {
      const callback = jest.fn()

      const service = new PurrService()
      service.list(callback)

      wait(() => {
        expect(callback).toHaveBeenCalled()
      })
    })
  })
})
