var chai = require('chai');
var should = chai.should();

var ButtonTemplate = require('../lib/linebot/message/template/button.template');
var CarouselColumnTemplate = require('../lib/linebot/message/template/carousel.column.template');
var Action = require('../lib/linebot/action')

describe('Template', function() {
    describe('Button', function() {
        let btnBuilder
        beforeEach(function() {
            btnBuilder = new ButtonTemplate();
        })
        it('add button support default text and custom text', function() {
            btnBuilder.setTitle('title')
            btnBuilder.setMessage('message')
            btnBuilder.setThumbnail('https://google.com')
            btnBuilder.addAction('Buy', 'action=buy', Action.TYPE.POSTBACK)
            btnBuilder.addAction('Sell', 'action=sell', 'text', Action.TYPE.POSTBACK)

            let result = btnBuilder.buildTemplate()
            result.should.be.eql({
                type: 'buttons',
                thumbnailImageUrl: 'https://google.com',
                title: 'title',
                text: 'message',
                actions: [
                    {type: 'postback', label: 'Buy', data: 'action=buy'},
                    {type: 'postback', label: 'Sell', data: 'action=sell', text: 'text'}
                ]
            })
        })

        it('can build 2 times without duplicating', function() {
            btnBuilder.setTitle('title')
            btnBuilder.setMessage('message')
            btnBuilder.setThumbnail('https://google.com')
            btnBuilder.addAction('Buy', 'action=buy', Action.TYPE.POSTBACK)
            btnBuilder.addAction('Sell', 'action=sell', 'text', Action.TYPE.POSTBACK)

            let expecting = {
                type: 'buttons',
                thumbnailImageUrl: 'https://google.com',
                title: 'title',
                text: 'message',
                actions: [
                    {type: 'postback', label: 'Buy', data: 'action=buy'},
                    {type: 'postback', label: 'Sell', data: 'action=sell', text: 'text'}
                ]
            }

            btnBuilder.buildTemplate().should.be.eql(expecting)
            btnBuilder.buildTemplate().should.be.eql(expecting)
        })
    })

    describe('CarouselColumnTemplate', function() {
        let builder
        beforeEach(function() {
            builder = new CarouselColumnTemplate();
        })
        it('add button support default text and custom text', function() {
            builder.setTitle('title')
            builder.setMessage('message')
            builder.setThumbnail('https://google.com')
            builder.addAction('Buy', 'action=buy', Action.TYPE.POSTBACK)
            builder.addAction('Sell', 'action=sell', 'text', Action.TYPE.POSTBACK)

            let result = builder.buildTemplate()
            result.should.be.eql({
                thumbnailImageUrl: 'https://google.com',
                title: 'title',
                text: 'message',
                actions: [
                    {type: 'postback', label: 'Buy', data: 'action=buy'},
                    {type: 'postback', label: 'Sell', data: 'action=sell', text: 'text'}
                ]
            })
        })
    })
})