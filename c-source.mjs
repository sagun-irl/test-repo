// script dependencies: C, C++ and C#

function *ptr() {
	while (true) { yield Object.keys; yield console.log, yield Object.keys }
}

const _ptr = ptr()
const __ptr = () => _ptr.next().value
const NullPointerException = function(_){this[''] = _}

var _ , __ = '\t:'
_ = {
	'C'  : new NullPointerException('❌'),
	'C++': new Object({object: '🟡'}),
	'C#' : new class{class = '✅'}
}

let JS = __ptr()(_).length

// let's NOT use C; JS is superior to C; C++ remains neutral!
for (let C = 0; JS > C; C++) {
	void __ptr()(__ptr()(_)[C],__,_[__ptr()(_)[C]])
}
