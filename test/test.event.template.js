var chai = require('chai');
var should = chai.should();

var Template = require('../lib/linebot/message/template');
var Action = require('../lib/linebot/action')

describe('TemplateRequest', function() {
    let template
    beforeEach(function(){
        template = new Template()
    });
    describe('#createAction', function() {
        describe('postback', function() {
            it('create correct template', function() {
                let result = template.createAction('label', 'data=1', Action.TYPE.POSTBACK)
                result.should.be.eql({
                    type: Action.TYPE.POSTBACK,
                    label: 'label',
                    data: 'data=1'
                })
            })

            it('also support custom text', function() {
                let result = template.createAction('label', 'data=1', 'text', Action.TYPE.POSTBACK)
                result.should.be.eql({
                    type: Action.TYPE.POSTBACK,
                    label: 'label',
                    data: 'data=1',
                    text: 'text'
                })
            })
        })

        describe('URI', function() {
            it('create correct template', function() {
                let result = template.createAction('label', 'http://google.com', Action.TYPE.URI)
                result.should.be.eql({
                    type: Action.TYPE.URI,
                    label: 'label',
                    uri: 'http://google.com'
                })
            })
        })

        describe('message', function() {
            it('create correct template', function() {
                let result = template.createAction('label', 'text', Action.TYPE.MESSAGE)
                result.should.be.eql({
                    type: Action.TYPE.MESSAGE,
                    label: 'label',
                    text: 'text'
                })
            })
        })
    })
})