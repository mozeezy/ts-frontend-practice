/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Router.ts":
/*!***********************!*\
  !*** ./src/Router.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Router = void 0;
const Home_1 = __webpack_require__(/*! ./components/Home */ "./src/components/Home.ts");
const Login_1 = __webpack_require__(/*! ./components/Login */ "./src/components/Login.ts");
class Router {
    constructor() {
        this.mainElement = document.getElementById("main-container");
    }
    handleRequest() {
        var _a, _b;
        const location = this.getRoute();
        console.log(`Handling request for: ${location}`);
        if (location === "/login") {
            (_a = this.mainElement) === null || _a === void 0 ? void 0 : _a.append(new Login_1.Login().render());
        }
        else {
            (_b = this.mainElement) === null || _b === void 0 ? void 0 : _b.append(new Home_1.Home().render());
        }
    }
    getRoute() {
        return window.location.pathname;
    }
}
exports.Router = Router;


/***/ }),

/***/ "./src/components/Home.ts":
/*!********************************!*\
  !*** ./src/components/Home.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Home = void 0;
class Home {
    constructor() {
        this.container = document.createElement("div");
    }
    render() {
        const pageLabel = document.createElement("label");
        pageLabel.innerText = "Welcome to the Homepage!";
        this.container.append(pageLabel);
        return this.container;
    }
}
exports.Home = Home;


/***/ }),

/***/ "./src/components/Login.ts":
/*!*********************************!*\
  !*** ./src/components/Login.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Login = void 0;
class Login {
    constructor() {
        this.container = document.createElement("div");
    }
    render() {
        const pageLabel = document.createElement("label");
        pageLabel.innerText = "Login!";
        this.container.append(pageLabel);
        return this.container;
    }
}
exports.Login = Login;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!*************************!*\
  !*** ./src/Launcher.ts ***!
  \*************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const Router_1 = __webpack_require__(/*! ./Router */ "./src/Router.ts");
class Launcher {
    constructor() {
        this.router = new Router_1.Router();
    }
    launchApp() {
        console.log("App launched");
        this.router.handleRequest();
    }
}
new Launcher().launchApp();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSx3RkFBeUM7QUFDekMsMkZBQTJDO0FBRTNDLE1BQWEsTUFBTTtJQUFuQjtRQUNVLGdCQUFXLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBZWxFLENBQUM7SUFiUSxhQUFhOztRQUNsQixNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDakMsT0FBTyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUNqRCxJQUFJLFFBQVEsS0FBSyxRQUFRLEVBQUU7WUFDekIsVUFBSSxDQUFDLFdBQVcsMENBQUUsTUFBTSxDQUFDLElBQUksYUFBSyxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztTQUNoRDthQUFNO1lBQ0wsVUFBSSxDQUFDLFdBQVcsMENBQUUsTUFBTSxDQUFDLElBQUksV0FBSSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztTQUMvQztJQUNILENBQUM7SUFFTyxRQUFRO1FBQ2QsT0FBTyxNQUFNLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQztJQUNsQyxDQUFDO0NBQ0Y7QUFoQkQsd0JBZ0JDOzs7Ozs7Ozs7Ozs7OztBQ25CRCxNQUFhLElBQUk7SUFBakI7UUFDVSxjQUFTLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQVFwRCxDQUFDO0lBTkMsTUFBTTtRQUNKLE1BQU0sU0FBUyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbEQsU0FBUyxDQUFDLFNBQVMsR0FBRywwQkFBMEIsQ0FBQztRQUNqRCxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNqQyxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDeEIsQ0FBQztDQUNGO0FBVEQsb0JBU0M7Ozs7Ozs7Ozs7Ozs7O0FDVEQsTUFBYSxLQUFLO0lBQWxCO1FBQ1UsY0FBUyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7SUFRcEQsQ0FBQztJQU5DLE1BQU07UUFDSixNQUFNLFNBQVMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2xELFNBQVMsQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO1FBQy9CLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2pDLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN4QixDQUFDO0NBQ0Y7QUFURCxzQkFTQzs7Ozs7OztVQ1REO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7Ozs7Ozs7OztBQ3RCQSx3RUFBa0M7QUFFbEMsTUFBTSxRQUFRO0lBQWQ7UUFDVSxXQUFNLEdBQVcsSUFBSSxlQUFNLEVBQUUsQ0FBQztJQU14QyxDQUFDO0lBSlEsU0FBUztRQUNkLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUM5QixDQUFDO0NBQ0Y7QUFFRCxJQUFJLFFBQVEsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHMtZnJvbnRlbmQtcHJhY3RpY2UvLi9zcmMvUm91dGVyLnRzIiwid2VicGFjazovL3RzLWZyb250ZW5kLXByYWN0aWNlLy4vc3JjL2NvbXBvbmVudHMvSG9tZS50cyIsIndlYnBhY2s6Ly90cy1mcm9udGVuZC1wcmFjdGljZS8uL3NyYy9jb21wb25lbnRzL0xvZ2luLnRzIiwid2VicGFjazovL3RzLWZyb250ZW5kLXByYWN0aWNlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RzLWZyb250ZW5kLXByYWN0aWNlLy4vc3JjL0xhdW5jaGVyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEhvbWUgfSBmcm9tIFwiLi9jb21wb25lbnRzL0hvbWVcIjtcbmltcG9ydCB7IExvZ2luIH0gZnJvbSBcIi4vY29tcG9uZW50cy9Mb2dpblwiO1xuXG5leHBvcnQgY2xhc3MgUm91dGVyIHtcbiAgcHJpdmF0ZSBtYWluRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpbi1jb250YWluZXJcIik7XG5cbiAgcHVibGljIGhhbmRsZVJlcXVlc3QoKSB7XG4gICAgY29uc3QgbG9jYXRpb24gPSB0aGlzLmdldFJvdXRlKCk7XG4gICAgY29uc29sZS5sb2coYEhhbmRsaW5nIHJlcXVlc3QgZm9yOiAke2xvY2F0aW9ufWApO1xuICAgIGlmIChsb2NhdGlvbiA9PT0gXCIvbG9naW5cIikge1xuICAgICAgdGhpcy5tYWluRWxlbWVudD8uYXBwZW5kKG5ldyBMb2dpbigpLnJlbmRlcigpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5tYWluRWxlbWVudD8uYXBwZW5kKG5ldyBIb21lKCkucmVuZGVyKCkpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2V0Um91dGUoKSB7XG4gICAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZTtcbiAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIEhvbWUge1xuICBwcml2YXRlIGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHBhZ2VMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBwYWdlTGFiZWwuaW5uZXJUZXh0ID0gXCJXZWxjb21lIHRvIHRoZSBIb21lcGFnZSFcIjtcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmQocGFnZUxhYmVsKTtcbiAgICByZXR1cm4gdGhpcy5jb250YWluZXI7XG4gIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBMb2dpbiB7XG4gIHByaXZhdGUgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgcGFnZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIHBhZ2VMYWJlbC5pbm5lclRleHQgPSBcIkxvZ2luIVwiO1xuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZChwYWdlTGFiZWwpO1xuICAgIHJldHVybiB0aGlzLmNvbnRhaW5lcjtcbiAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsImltcG9ydCB7IFJvdXRlciB9IGZyb20gXCIuL1JvdXRlclwiO1xuXG5jbGFzcyBMYXVuY2hlciB7XG4gIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIgPSBuZXcgUm91dGVyKCk7XG5cbiAgcHVibGljIGxhdW5jaEFwcCgpIHtcbiAgICBjb25zb2xlLmxvZyhcIkFwcCBsYXVuY2hlZFwiKTtcbiAgICB0aGlzLnJvdXRlci5oYW5kbGVSZXF1ZXN0KCk7XG4gIH1cbn1cblxubmV3IExhdW5jaGVyKCkubGF1bmNoQXBwKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=