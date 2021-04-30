import React from 'react';
import * as actions from './store/actions/tunesActions';
import * as types from './store/types';
import fetchMock from 'fetch-mock'

describe('actions', () => {
    afterEach(() => {
        fetchMock.restore();
    })

    //Testing fetch API doesn't work

    // it('should set error when empty data', function () {
    //     fetchMock.getOnce('/search', {
    //         body: {term:'coldplay', entity:'album'},
    //         headers: {'content-type': 'application/json'}
    //     })
    //     expect(actions.setLoading()).toEqual(expectedAction)
    // });

    it('should set loading', function () {
        const expectedAction = {
            type: types.SET_LOADING,

        }
        expect(actions.setLoading()).toEqual(expectedAction)
    });

    it('should set error', function () {
        const expectedAction = {
            type: types.SET_ERROR,
            payload: ''

        }
        expect(actions.setError()).toEqual(expectedAction)
    });
})
