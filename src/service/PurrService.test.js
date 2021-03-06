import React from 'react';
import { render } from '@testing-library/react';
import PurrService from './PurrService';

describe('PurrService', () => {
  const base_url = "http://test.com"
  const url = base_url + "/purrs/"
  const service = new PurrService(base_url)

  describe('list', () => {
    const purrs = "JSON WITH PURRS"

    beforeEach(() => {
      jest.spyOn(window, "fetch").mockImplementation(() => {
        const fetchResponse = {
          json: () => Promise.resolve(purrs)
        };
        return Promise.resolve(fetchResponse);
      })
    })

    afterEach(() => {
      window.fetch.mockRestore();
    })

    it('calls the callback with response', async () => {
      const actual = await service.list()

      expect(window.fetch).toHaveBeenCalledWith(url)
      expect(actual).toEqual(purrs)
    })
  })

  describe('create', () => {
    const purr = { author: 'AuthorA', content: 'Content of the purr 1' }

    beforeEach(() => {
      jest.spyOn(window, "fetch").mockImplementation(() => {
        const fetchResponse = {
          json: () => Promise.resolve()
        };
        return Promise.resolve(fetchResponse);
      })
    })

    afterEach(() => {
      window.fetch.mockRestore();
    })

    it('posts the data to the server', async () => {
      await service.create(purr)
      expect(window.fetch).toHaveBeenCalledWith(url, {
        method: 'POST',
        body: JSON.stringify(purr),
        headers: {
          'Content-Type': 'application/json'
        }
      })
    })
  })

  describe('destroy', () => {
    const id = 42

    beforeEach(() => {
      jest.spyOn(window, "fetch").mockImplementation(() => {
        const fetchResponse = {
          json: () => Promise.resolve()
        };
        return Promise.resolve(fetchResponse);
      })
    })

    afterEach(() => {
      window.fetch.mockRestore();
    })

    it('posts the data to the server', async () => {
      await service.destroy(id)

      const deleteUrl = url + id + '/'
      expect(window.fetch).toHaveBeenCalledWith(deleteUrl, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      })
    })
  })
})
