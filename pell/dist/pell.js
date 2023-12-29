(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.pell = {})));
}(this, (function (exports) { 'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var defaultParagraphSeparatorString = 'defaultParagraphSeparator';
var formatBlock = 'formatBlock';
var addEventListener = function addEventListener(parent, type, listener) {
  return parent.addEventListener(type, listener);
};
var appendChild = function appendChild(parent, child) {
  return parent.appendChild(child);
};
var createElement = function createElement(tag) {
  return document.createElement(tag);
};
var queryCommandState = function queryCommandState(command) {
  return document.queryCommandState(command);
};
var queryCommandValue = function queryCommandValue(command) {
  return document.queryCommandValue(command);
};

var exec = function exec(command) {
  var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  return document.execCommand(command, false, value);
};

var defaultActions = {
  bold: {
    icon: `<span class="material-symbols-outlined">
    format_bold
    </span>`,
    title: 'Bold',
    state: function state() {
      return queryCommandState('bold');
    },
    result: function result() {
      return exec('bold');
    }
  },
  italic: {
    icon: `<span class="material-symbols-outlined">
    format_italic
    </span>`,
    title: 'Italic',
    state: function state() {
      return queryCommandState('italic');
    },
    result: function result() {
      return exec('italic');
    }
  },
  underline: {
    icon: `<span class="material-symbols-outlined">
    format_underlined
    </span>`,
    title: 'Underline',
    state: function state() {
      return queryCommandState('underline');
    },
    result: function result() {
      return exec('underline');
    }
  },
  strikethrough: {
    icon: `<span class="material-symbols-outlined">
    format_strikethrough
    </span>`,
    title: 'Strike-through',
    state: function state() {
      return queryCommandState('strikeThrough');
    },
    result: function result() {
      return exec('strikeThrough');
    }
  },
  olist: {
    icon: `<span class="material-symbols-outlined always-selected">
    format_list_numbered
    </span>`,
    title: 'Ordered List',
    result: function result() {
      return exec('insertOrderedList');
    }
  },
  ulist: {
    icon: `<span class="material-symbols-outlined always-selected">
    format_list_bulleted
    </span>`,
    title: 'Unordered List',
    result: function result() {
      return exec('insertUnorderedList');
    }
  },
  line: {
    icon: `<span class="material-symbols-outlined always-selected">
    horizontal_rule
    </span>`,
    title: 'Horizontal Line',
    result: function result() {
      return exec('insertHorizontalRule');
    }
  },
  link: {
    icon: `<span class="material-symbols-outlined always-selected">
    link
    </span>`,
    title: 'Link',
    result: function result() {
      link_dialog.open = true;
      link_dialog.querySelector("input").focus();
    }
  },
  image: {
    icon: `<span class="material-symbols-outlined always-selected">
    image
    </span>`,
    title: 'Image',
    result: function result() {
      return hidden_image_input.click()
      var url = window.prompt('Enter the image URL');
      if (url) exec('insertImage', url);
    }
  },
};

var defaultClasses = {
  actionbar: 'pell-actionbar',
  button: 'pell-button',
  content: 'pell-content',
  selected: 'pell-button-selected'
};

var init = function init(settings) {
  var actions = settings.actions ? settings.actions.map(function (action) {
    if (typeof action === 'string') return defaultActions[action];else if (defaultActions[action.name]) return _extends({}, defaultActions[action.name], action);
    return action;
  }) : Object.keys(defaultActions).map(function (action) {
    return defaultActions[action];
  });

  var classes = _extends({}, defaultClasses, settings.classes);

  var defaultParagraphSeparator = settings[defaultParagraphSeparatorString] || 'div';

  var actionbar = createElement('div');
  actionbar.className = classes.actionbar;
  appendChild(settings.element, actionbar);

  var content = settings.element.content = createElement('div');
  content.contentEditable = true;
  content.className = classes.content;
  content.oninput = function (_ref) {
    var firstChild = _ref.target.firstChild;

    if (firstChild && firstChild.nodeType === 3) exec(formatBlock, '<' + defaultParagraphSeparator + '>');else if (content.innerHTML === '<br>') content.innerHTML = '';
    settings.onChange(content.innerHTML);
  };
  content.onkeydown = function (event) {
    if (event.key === 'Enter' && queryCommandValue(formatBlock) === 'blockquote') {
      setTimeout(function () {
        return exec(formatBlock, '<' + defaultParagraphSeparator + '>');
      }, 0);
    }
  };
  appendChild(settings.element, content);

  actions.forEach(function (action) {
    var button = createElement('button');
    button.className = classes.button;
    button.innerHTML = action.icon;
    button.title = action.title;
    button.setAttribute('type', 'button');
    button.onclick = function () {
      pell_editor.focus();
      return action.result() && content.focus();
    };

    if (action.state) {
      var handler = function handler() {
        return button.classList[action.state() ? 'add' : 'remove'](classes.selected);
      };
      addEventListener(content, 'keyup', handler);
      addEventListener(content, 'mouseup', handler);
      addEventListener(button, 'click', handler);
    }

    appendChild(actionbar, button);
  });

  if (settings.styleWithCSS) exec('styleWithCSS');
  exec(defaultParagraphSeparatorString, defaultParagraphSeparator);

  return settings.element;
};

var pell = { exec: exec, init: init };

exports.exec = exec;
exports.init = init;
exports['default'] = pell;

Object.defineProperty(exports, '__esModule', { value: true });
var editor = init({
  element: document.getElementById('pell-editor'),
  defaultParagraphSeparator: 'div',
  onChange: function (html) {
  }
})
var pell_div = document.querySelector("#pell-editor")
var pell_toolbar = pell_div.querySelector(".pell-actionbar")
var pell_editor = pell_div.querySelector(".pell-content")
var link_dialog = pell_div.querySelector("dialog.link-dialog")
link_dialog.onclick = ()=>{
  pell_editor.focus();
  let url = link_dialog.querySelector("input").value;
  if(url){
    exec('createLink', url);
  }
  link_dialog.open = false;
  pell_editor.focus();
}

var hidden_image_input = pell_div.querySelector("input.hidden_image_input")
hidden_image_input.addEventListener("change", (event)=>{
  let reader = new FileReader();
  reader.onload = (e)=>{
    let src = e.target.result;
    pell_editor.focus();
    exec("insertImage", src);
  }
  reader.onerror = (error)=>{
    window.alert("File Error: "+error);
  }
  if(event.target.files[0]) reader.readAsDataURL(event.target.files[0])
})

pell_toolbar.remove();
document.querySelector("#mod-top-overlay-2").appendChild(pell_toolbar);

})));
