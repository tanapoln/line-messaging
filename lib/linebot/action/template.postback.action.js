var Action = require('../action');

TemplatePostbackAction.prototype = new Action();
TemplatePostbackAction.prototype.constructor = TemplatePostbackAction;

function TemplatePostbackAction(label, data, text) {
  var that = this;

  this.buildTemplateAction = function() {
    var result = {
      type: Action.TYPE.POSTBACK,
      label: label,
      data: data
    };

    if (text) {
      result.text = text
    }

    return result;
  }
}

module.exports = TemplatePostbackAction;
