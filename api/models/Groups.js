/**
 * Groups.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {

    attributes: {
        groupName: {
            type: 'string',
            required: true
        },

        members: {
            type: 'string',
            required: true
        },

        type: {
            type: 'string',
            required: true
        },

        role: {
            type: 'string',
            required: true
        }
    }
};