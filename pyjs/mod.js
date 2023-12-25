// Transcrypt'ed from Python, 2023-12-25 23:42:29
import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
var __name__ = '__main__';
export var author = 'Sandipan';
export var myglob =  __class__ ('myglob', [object], {
	__module__: __name__,
	more_but: document.getElementById ('mod-top-more'),
	m_op_window: document.getElementById ('mod-top-options'),
	m_close: document.getElementById ('mod-op-close'),
	m_op_save: document.getElementById ('mod-op-save'),
	m_op_import: document.getElementById ('mod-op-import'),
	m_op_publish: document.getElementById ('mod-op-publish')
});
export var close_more_options = function () {
	myglob.m_op_window.style.display = 'none';
};
export var open_more_options = function () {
	myglob.m_op_window.style.display = 'flex';
};
myglob.more_but.addEventListener ('click', open_more_options);
export var prev_doc_onclick = document.onclick;
export var new_doc_onclick = function (event) {
	if (!(myglob.m_op_window.contains (event.target)) && event.target != myglob.more_but) {
		close_more_options ();
	}
	if (prev_doc_onclick) {
		prev_doc_onclick ();
	}
};
document.onclick = new_doc_onclick;
export var SanEdit =  __class__ ('SanEdit', [object], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self) {
		self.editing_style = dict ({'color': 'black', 'font-weight': 'normal', 'font-style': 'normal', 'text-decoration': 'normal'});
		self.btn_list = dict ({'bold': document.getElementById ('san-e1-bold'), 'italic': document.getElementById ('san-e1-italic'), 'underline': document.getElementById ('san-e1-underline'), 'strike': document.getElementById ('san-e1-strike'), 'bold': document.getElementById ('san-e1-bold'), 'link': document.getElementById ('san-e1-link'), 'image': document.getElementById ('san-e1-image')});
		self.add_listeners ();
	});},
	get on_off () {return __get__ (this, function (self, element) {
		if (element.value == 'true') {
			element.value = 'false';
			element.style.backgroundColor = 'white';
		}
		else {
			element.value = 'true';
			element.style.backgroundColor = 'lightblue';
		}
	});},
	get bold_listener () {return __get__ (this, function (self) {
		var element = self.btn_list ['bold'];
		self.on_off (element);
		if (element.value == 'true') {
			self.editing_style ['font-weight'] = 'bold';
			print (';changes to bold');
		}
		else {
			self.editing_style ['font-weight'] = 'normal';
			print ('changed to normal');
		}
	});},
	get add_listeners () {return __get__ (this, function (self) {
		for (var [py_name, btn] of self.btn_list.py_items ()) {
			if (py_name == 'bold') {
				btn.onclick = self.bold_listener;
			}
		}
	});},
	get apply_editing_style () {return __get__ (this, function (self, node) {
		for (var [k, v] of self.editing_style.py_items ()) {
			node.style [k] = v;
		}
	});},
	get style_chunk () {return __get__ (this, function (self, chunk) {
		var span = document.createElement ('span');
		self.apply_editing_style (span);
		span.innerHTML = chunk;
		return span.outerHTML;
	});}
});
export var script = document.createElement ('script');
script.src = './my-mind.js';
document.body.appendChild (script);

//# sourceMappingURL=mod.map