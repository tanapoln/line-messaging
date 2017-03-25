var Action = require('../action');
var MessageTemplateAction = require('../action/template.message.action');
var PostbackTemplateAction = require('../action/template.postback.action');
var UriTemplateAction = require('../action/template.uri.action');

Template.TYPE = {
  CONFIRM: 'confirm',
  BUTTONS: 'buttons',
  CAROUSEL: 'carousel'
};

function Template() {}

Template.prototype.buildTemplate = function() {}

Template.prototype.createAction = function() {
  let args = Array.prototype.slice.call(arguments, 0)
  switch (args[args.length - 1]) {
    case Action.TYPE.POSTBACK:
      if (args.length == 3) {
        return new PostbackTemplateAction(args[0], args[1]).buildTemplateAction();
      } else {
        return new PostbackTemplateAction(args[0], args[1], args[2]).buildTemplateAction();
      }
    case Action.TYPE.URI:
      return new UriTemplateAction(args[0], args[1]).buildTemplateAction();
    default:
      return new MessageTemplateAction(args[0], args[1]).buildTemplateAction();
  }
}

module.exports = Template;
