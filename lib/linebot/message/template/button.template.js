var Template = require('../template');

ButtonTemplate.prototype = new Template();
ButtonTemplate.prototype.constructor = ButtonTemplate;

function ButtonTemplate(title, text, thumbnailImageUrl, actionsBuilders) {
  var that = this;
  var template = [];
  var actions = [];

  this.setTitle = function(str) {
    title = str;
    return that;
  }

  this.setMessage = function(message) {
    text = message;
    return that;
  }

  this.setThumbnail = function(url) {
    thumbnailImageUrl = url;
    return that;
  }

  this.addAction = function() {
    actions.push(that.createAction.apply(that, arguments));
    return that;
  }

  this.buildTemplate = function() {
    if ( template.length ) return template;

    var tmpActions = [];
    for ( var i in actionsBuilders ) {
      tmpActions.push(actionsBuilders[i].buildTemplateAction());
    }

    tmpActions = tmpActions.concat(actions)

    template = {
      type: Template.TYPE.BUTTONS,
      thumbnailImageUrl: thumbnailImageUrl,
      title: title,
      text: text,
      actions: tmpActions
    };

    return template;
  }
}

module.exports = ButtonTemplate;
