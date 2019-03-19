/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/js";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("class Internship {\n    constructor(name) {\n        this.name = name;\n        this.intershipStudents = new Array() \n    }\n\n    setStudents(students) {\n        const universityAveredge = students.reduce((a, c) => a + c.knowledge, 0) / students.length;\n        this.intershipStudents = students.filter(student => student.knowledge > universityAveredge);\n    }\n\n    getStudents() {\n        return this.intershipStudents;\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (Internship);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9pbnN0aXR1dGlvbi9pbnRlcmxpbmsvaW50ZXJuc2hpcC5qcz8xMWFlIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEludGVybnNoaXAge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5pbnRlcnNoaXBTdHVkZW50cyA9IG5ldyBBcnJheSgpIFxuICAgIH1cblxuICAgIHNldFN0dWRlbnRzKHN0dWRlbnRzKSB7XG4gICAgICAgIGNvbnN0IHVuaXZlcnNpdHlBdmVyZWRnZSA9IHN0dWRlbnRzLnJlZHVjZSgoYSwgYykgPT4gYSArIGMua25vd2xlZGdlLCAwKSAvIHN0dWRlbnRzLmxlbmd0aDtcbiAgICAgICAgdGhpcy5pbnRlcnNoaXBTdHVkZW50cyA9IHN0dWRlbnRzLmZpbHRlcihzdHVkZW50ID0+IHN0dWRlbnQua25vd2xlZGdlID4gdW5pdmVyc2l0eUF2ZXJlZGdlKTtcbiAgICB9XG5cbiAgICBnZXRTdHVkZW50cygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW50ZXJzaGlwU3R1ZGVudHM7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbnRlcm5zaGlwO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2luc3RpdHV0aW9uL2ludGVybGluay9pbnRlcm5zaGlwLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("class University {\n    constructor(name) {\n        this.name = name;\n        this.students = new Array() \n    }\n\n    getStudents() {\n        return this.students;\n    }\n\n    addStudent(student) {\n        this.students.push(student);\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (University);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9pbnN0aXR1dGlvbi91bml2ZXJzaXR5LmpzP2MwMzkiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgVW5pdmVyc2l0eSB7XG4gICAgY29uc3RydWN0b3IobmFtZSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLnN0dWRlbnRzID0gbmV3IEFycmF5KCkgXG4gICAgfVxuXG4gICAgZ2V0U3R1ZGVudHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0dWRlbnRzO1xuICAgIH1cblxuICAgIGFkZFN0dWRlbnQoc3R1ZGVudCkge1xuICAgICAgICB0aGlzLnN0dWRlbnRzLnB1c2goc3R1ZGVudCk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBVbml2ZXJzaXR5O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2luc3RpdHV0aW9uL3VuaXZlcnNpdHkuanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__consciousness_knowledge__ = __webpack_require__(4);\n\n\nclass Student {\n    constructor(name, knowledge) {\n        this.name = name;\n        this.knowledge = knowledge;\n     }\n  \n     setKnowledge(knowledge) {\n        this.knowledge = new __WEBPACK_IMPORTED_MODULE_0__consciousness_knowledge__[\"a\" /* default */](knowledge);\n     }\n}\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (Student);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9wZXJzb24vc3R1ZGVudC5qcz9jYWZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBLbm93bGVkZ2UgZnJvbSAnLi9jb25zY2lvdXNuZXNzL2tub3dsZWRnZSc7XG5cbmNsYXNzIFN0dWRlbnQge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGtub3dsZWRnZSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmtub3dsZWRnZSA9IGtub3dsZWRnZTtcbiAgICAgfVxuICBcbiAgICAgc2V0S25vd2xlZGdlKGtub3dsZWRnZSkge1xuICAgICAgICB0aGlzLmtub3dsZWRnZSA9IG5ldyBLbm93bGVkZ2Uoa25vd2xlZGdlKTtcbiAgICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdHVkZW50O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3BlcnNvbi9zdHVkZW50LmpzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__institution_university__ = __webpack_require__(1);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__institution_interlink_internship__ = __webpack_require__(0);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__person_student__ = __webpack_require__(2);\n\n\n\n\nclass Application {\n    static  main() {\n        const university = new __WEBPACK_IMPORTED_MODULE_0__institution_university__[\"a\" /* default */](\"CH.U.I.\");\n        university.addStudent(new __WEBPACK_IMPORTED_MODULE_2__person_student__[\"a\" /* default */](\"Andrew Kostenko\", 34));\n        university.addStudent(new __WEBPACK_IMPORTED_MODULE_2__person_student__[\"a\" /* default */](\"Julia Veselkina\", 78));\n        university.addStudent(new __WEBPACK_IMPORTED_MODULE_2__person_student__[\"a\" /* default */](\"Maria Perechrest\", 56));\n        university.addStudent(new __WEBPACK_IMPORTED_MODULE_2__person_student__[\"a\" /* default */](\"Volodymyr Romanytsia\", 89));\n        console.log(\"List of university's students:\");\n        console.table(university.getStudents());\n\n        const internship = new __WEBPACK_IMPORTED_MODULE_1__institution_interlink_internship__[\"a\" /* default */](\"Interlink\");\n        internship.setStudents(university.getStudents());\n        console.log(\"List of internship's students:\");\n        console.table(internship.getStudents());\n    }\n}\n\nApplication.main()//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9pbmRleC5qcz85NTUyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBVbml2ZXJzaXR5IGZyb20gJy4vaW5zdGl0dXRpb24vdW5pdmVyc2l0eSc7XG5pbXBvcnQgSW50ZXJuc2hpcCBmcm9tICcuL2luc3RpdHV0aW9uL2ludGVybGluay9pbnRlcm5zaGlwJztcbmltcG9ydCBTdHVkZW50IGZyb20gJy4vcGVyc29uL3N0dWRlbnQnO1xuXG5jbGFzcyBBcHBsaWNhdGlvbiB7XG4gICAgc3RhdGljICBtYWluKCkge1xuICAgICAgICBjb25zdCB1bml2ZXJzaXR5ID0gbmV3IFVuaXZlcnNpdHkoXCJDSC5VLkkuXCIpO1xuICAgICAgICB1bml2ZXJzaXR5LmFkZFN0dWRlbnQobmV3IFN0dWRlbnQoXCJBbmRyZXcgS29zdGVua29cIiwgMzQpKTtcbiAgICAgICAgdW5pdmVyc2l0eS5hZGRTdHVkZW50KG5ldyBTdHVkZW50KFwiSnVsaWEgVmVzZWxraW5hXCIsIDc4KSk7XG4gICAgICAgIHVuaXZlcnNpdHkuYWRkU3R1ZGVudChuZXcgU3R1ZGVudChcIk1hcmlhIFBlcmVjaHJlc3RcIiwgNTYpKTtcbiAgICAgICAgdW5pdmVyc2l0eS5hZGRTdHVkZW50KG5ldyBTdHVkZW50KFwiVm9sb2R5bXlyIFJvbWFueXRzaWFcIiwgODkpKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJMaXN0IG9mIHVuaXZlcnNpdHkncyBzdHVkZW50czpcIik7XG4gICAgICAgIGNvbnNvbGUudGFibGUodW5pdmVyc2l0eS5nZXRTdHVkZW50cygpKTtcblxuICAgICAgICBjb25zdCBpbnRlcm5zaGlwID0gbmV3IEludGVybnNoaXAoXCJJbnRlcmxpbmtcIik7XG4gICAgICAgIGludGVybnNoaXAuc2V0U3R1ZGVudHModW5pdmVyc2l0eS5nZXRTdHVkZW50cygpKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJMaXN0IG9mIGludGVybnNoaXAncyBzdHVkZW50czpcIik7XG4gICAgICAgIGNvbnNvbGUudGFibGUoaW50ZXJuc2hpcC5nZXRTdHVkZW50cygpKTtcbiAgICB9XG59XG5cbkFwcGxpY2F0aW9uLm1haW4oKVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///3\n");

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("class Knowledge {\r\n    constructor(level) {\r\n        this.level = level\r\n    }      \r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"a\"] = (Knowledge);\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9wZXJzb24vY29uc2Npb3VzbmVzcy9rbm93bGVkZ2UuanM/NjVlOSJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBLbm93bGVkZ2Uge1xyXG4gICAgY29uc3RydWN0b3IobGV2ZWwpIHtcclxuICAgICAgICB0aGlzLmxldmVsID0gbGV2ZWxcclxuICAgIH0gICAgICBcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgS25vd2xlZGdlO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9wZXJzb24vY29uc2Npb3VzbmVzcy9rbm93bGVkZ2UuanNcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///4\n");

/***/ })
/******/ ]);