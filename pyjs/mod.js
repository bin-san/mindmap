// Transcrypt'ed from Python, 2023-12-22 12:17:00
import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
var __name__ = '__main__';
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

//# sourceMappingURL=mod.map