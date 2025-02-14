(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('angular-gridster2', ['exports', '@angular/core', '@angular/common'], factory) :
    (global = global || self, factory(global['angular-gridster2'] = {}, global.ng.core, global.ng.common));
}(this, function (exports, core, common) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @enum {string} */
    var GridType = {
        Fit: 'fit',
        ScrollVertical: 'scrollVertical',
        ScrollHorizontal: 'scrollHorizontal',
        Fixed: 'fixed',
        VerticalFixed: 'verticalFixed',
        HorizontalFixed: 'horizontalFixed',
    };
    /** @enum {string} */
    var DisplayGrid = {
        Always: 'always',
        OnDragAndResize: 'onDrag&Resize',
        None: 'none',
    };
    /** @enum {string} */
    var CompactType = {
        None: 'none',
        CompactUp: 'compactUp',
        CompactLeft: 'compactLeft',
        CompactUpAndLeft: 'compactUp&Left',
        CompactLeftAndUp: 'compactLeft&Up',
        CompactRight: 'compactRight',
        CompactUpAndRight: 'compactUp&Right',
        CompactRightAndUp: 'compactRight&Up',
    };
    /**
     * @record
     */
    function GridsterConfig() { }
    if (false) {
        /** @type {?|undefined} */
        GridsterConfig.prototype.gridType;
        /** @type {?|undefined} */
        GridsterConfig.prototype.fixedColWidth;
        /** @type {?|undefined} */
        GridsterConfig.prototype.fixedRowHeight;
        /** @type {?|undefined} */
        GridsterConfig.prototype.keepFixedHeightInMobile;
        /** @type {?|undefined} */
        GridsterConfig.prototype.keepFixedWidthInMobile;
        /** @type {?|undefined} */
        GridsterConfig.prototype.setGridSize;
        /** @type {?|undefined} */
        GridsterConfig.prototype.compactType;
        /** @type {?|undefined} */
        GridsterConfig.prototype.mobileBreakpoint;
        /** @type {?|undefined} */
        GridsterConfig.prototype.minCols;
        /** @type {?|undefined} */
        GridsterConfig.prototype.maxCols;
        /** @type {?|undefined} */
        GridsterConfig.prototype.minRows;
        /** @type {?|undefined} */
        GridsterConfig.prototype.maxRows;
        /** @type {?|undefined} */
        GridsterConfig.prototype.defaultItemCols;
        /** @type {?|undefined} */
        GridsterConfig.prototype.defaultItemRows;
        /** @type {?|undefined} */
        GridsterConfig.prototype.maxItemCols;
        /** @type {?|undefined} */
        GridsterConfig.prototype.maxItemRows;
        /** @type {?|undefined} */
        GridsterConfig.prototype.minItemCols;
        /** @type {?|undefined} */
        GridsterConfig.prototype.minItemRows;
        /** @type {?|undefined} */
        GridsterConfig.prototype.minItemArea;
        /** @type {?|undefined} */
        GridsterConfig.prototype.maxItemArea;
        /** @type {?|undefined} */
        GridsterConfig.prototype.margin;
        /** @type {?|undefined} */
        GridsterConfig.prototype.outerMargin;
        /** @type {?|undefined} */
        GridsterConfig.prototype.outerMarginTop;
        /** @type {?|undefined} */
        GridsterConfig.prototype.outerMarginRight;
        /** @type {?|undefined} */
        GridsterConfig.prototype.outerMarginBottom;
        /** @type {?|undefined} */
        GridsterConfig.prototype.outerMarginLeft;
        /** @type {?|undefined} */
        GridsterConfig.prototype.useTransformPositioning;
        /** @type {?|undefined} */
        GridsterConfig.prototype.scrollSensitivity;
        /** @type {?|undefined} */
        GridsterConfig.prototype.scrollSpeed;
        /** @type {?|undefined} */
        GridsterConfig.prototype.initCallback;
        /** @type {?|undefined} */
        GridsterConfig.prototype.destroyCallback;
        /** @type {?|undefined} */
        GridsterConfig.prototype.gridSizeChangedCallback;
        /** @type {?|undefined} */
        GridsterConfig.prototype.itemChangeCallback;
        /** @type {?|undefined} */
        GridsterConfig.prototype.itemResizeCallback;
        /** @type {?|undefined} */
        GridsterConfig.prototype.itemInitCallback;
        /** @type {?|undefined} */
        GridsterConfig.prototype.itemRemovedCallback;
        /** @type {?|undefined} */
        GridsterConfig.prototype.itemValidateCallback;
        /** @type {?|undefined} */
        GridsterConfig.prototype.draggable;
        /** @type {?|undefined} */
        GridsterConfig.prototype.resizable;
        /** @type {?|undefined} */
        GridsterConfig.prototype.swap;
        /** @type {?|undefined} */
        GridsterConfig.prototype.swapWhileDragging;
        /** @type {?|undefined} */
        GridsterConfig.prototype.pushItems;
        /** @type {?|undefined} */
        GridsterConfig.prototype.disablePushOnDrag;
        /** @type {?|undefined} */
        GridsterConfig.prototype.disablePushOnResize;
        /** @type {?|undefined} */
        GridsterConfig.prototype.disableAutoPositionOnConflict;
        /** @type {?|undefined} */
        GridsterConfig.prototype.pushDirections;
        /** @type {?|undefined} */
        GridsterConfig.prototype.pushResizeItems;
        /** @type {?|undefined} */
        GridsterConfig.prototype.displayGrid;
        /** @type {?|undefined} */
        GridsterConfig.prototype.disableWindowResize;
        /** @type {?|undefined} */
        GridsterConfig.prototype.disableWarnings;
        /** @type {?|undefined} */
        GridsterConfig.prototype.scrollToNewItems;
        /** @type {?|undefined} */
        GridsterConfig.prototype.disableScrollHorizontal;
        /** @type {?|undefined} */
        GridsterConfig.prototype.disableScrollVertical;
        /** @type {?|undefined} */
        GridsterConfig.prototype.enableEmptyCellClick;
        /** @type {?|undefined} */
        GridsterConfig.prototype.enableEmptyCellContextMenu;
        /** @type {?|undefined} */
        GridsterConfig.prototype.enableEmptyCellDrop;
        /** @type {?|undefined} */
        GridsterConfig.prototype.enableEmptyCellDrag;
        /** @type {?|undefined} */
        GridsterConfig.prototype.enableOccupiedCellDrop;
        /** @type {?|undefined} */
        GridsterConfig.prototype.emptyCellClickCallback;
        /** @type {?|undefined} */
        GridsterConfig.prototype.emptyCellContextMenuCallback;
        /** @type {?|undefined} */
        GridsterConfig.prototype.emptyCellDropCallback;
        /** @type {?|undefined} */
        GridsterConfig.prototype.emptyCellDragCallback;
        /** @type {?|undefined} */
        GridsterConfig.prototype.emptyCellDragMaxCols;
        /** @type {?|undefined} */
        GridsterConfig.prototype.emptyCellDragMaxRows;
        /** @type {?|undefined} */
        GridsterConfig.prototype.ignoreMarginInRow;
        /** @type {?|undefined} */
        GridsterConfig.prototype.api;
        /* Skipping unhandled member: [propName: string]: any;*/
    }
    /**
     * @record
     */
    function DragBase() { }
    if (false) {
        /** @type {?|undefined} */
        DragBase.prototype.enabled;
        /** @type {?|undefined} */
        DragBase.prototype.stop;
        /** @type {?|undefined} */
        DragBase.prototype.start;
        /** @type {?|undefined} */
        DragBase.prototype.delayStart;
    }
    /**
     * @record
     */
    function Draggable() { }
    if (false) {
        /** @type {?|undefined} */
        Draggable.prototype.ignoreContentClass;
        /** @type {?|undefined} */
        Draggable.prototype.ignoreContent;
        /** @type {?|undefined} */
        Draggable.prototype.dragHandleClass;
        /** @type {?|undefined} */
        Draggable.prototype.dropOverItems;
        /** @type {?|undefined} */
        Draggable.prototype.dropOverItemsCallback;
    }
    /**
     * @record
     */
    function Resizable() { }
    if (false) {
        /** @type {?|undefined} */
        Resizable.prototype.handles;
    }
    /**
     * @record
     */
    function PushDirections() { }
    if (false) {
        /** @type {?} */
        PushDirections.prototype.north;
        /** @type {?} */
        PushDirections.prototype.east;
        /** @type {?} */
        PushDirections.prototype.south;
        /** @type {?} */
        PushDirections.prototype.west;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var GridsterConfigService = {
        gridType: GridType.Fit,
        // 'fit' will fit the items in the container without scroll;
        // 'scrollVertical' will fit on width and height of the items will be the same as the width
        // 'scrollHorizontal' will fit on height and width of the items will be the same as the height
        // 'fixed' will set the rows and columns dimensions based on fixedColWidth and fixedRowHeight options
        // 'verticalFixed' will set the rows to fixedRowHeight and columns width will fit the space available
        // 'horizontalFixed' will set the columns to fixedColWidth and rows height will fit the space available
        fixedColWidth: 250,
        // fixed col width for gridType: 'fixed'
        fixedRowHeight: 250,
        // fixed row height for gridType: 'fixed'
        keepFixedHeightInMobile: false,
        // keep the height from fixed gridType in mobile layout
        keepFixedWidthInMobile: false,
        // keep the width from fixed gridType in mobile layout
        setGridSize: false,
        // sets grid size depending on content
        compactType: CompactType.None,
        // compact items: 'none' | 'compactUp' | 'compactLeft' | 'compactUp&Left' | 'compactLeft&Up'
        mobileBreakpoint: 640,
        // if the screen is not wider that this, remove the grid layout and stack the items
        minCols: 1,
        // minimum amount of columns in the grid
        maxCols: 100,
        // maximum amount of columns in the grid
        minRows: 1,
        // minimum amount of rows in the grid
        maxRows: 100,
        // maximum amount of rows in the grid
        defaultItemCols: 1,
        // default width of an item in columns
        defaultItemRows: 1,
        // default height of an item in rows
        maxItemCols: 50,
        // max item number of cols
        maxItemRows: 50,
        // max item number of rows
        minItemCols: 1,
        // min item number of columns
        minItemRows: 1,
        // min item number of rows
        minItemArea: 1,
        // min item area: cols * rows
        maxItemArea: 2500,
        // max item area: cols * rows
        margin: 10,
        // margin between grid items
        outerMargin: true,
        // if margins will apply to the sides of the container
        outerMarginTop: null,
        // override outer margin for grid
        outerMarginRight: null,
        // override outer margin for grid
        outerMarginBottom: null,
        // override outer margin for grid
        outerMarginLeft: null,
        // override outer margin for grid
        useTransformPositioning: true,
        // toggle between transform or top/left positioning of items
        scrollSensitivity: 10,
        // margin of the dashboard where to start scrolling
        scrollSpeed: 20,
        // how much to scroll each mouse move when in the scrollSensitivity zone
        initCallback: undefined,
        // callback to call after grid has initialized. Arguments: gridsterComponent
        destroyCallback: undefined,
        // callback to call after grid has destroyed. Arguments: gridsterComponent
        gridSizeChangedCallback: undefined,
        // callback to call after grid has changed size. Arguments: gridsterComponent
        itemChangeCallback: undefined,
        // callback to call for each item when is changes x, y, rows, cols.
        // Arguments: gridsterItem, gridsterItemComponent
        itemResizeCallback: undefined,
        // callback to call for each item when width/height changes.
        // Arguments: gridsterItem, gridsterItemComponent
        itemInitCallback: undefined,
        // callback to call for each item when is initialized.
        // Arguments: gridsterItem, gridsterItemComponent
        itemRemovedCallback: undefined,
        // callback to call for each item when is initialized.
        // Arguments: gridsterItem, gridsterItemComponent
        itemValidateCallback: undefined,
        // callback to call to validate item position/size. Return true if valid.
        // Arguments: gridsterItem
        enableEmptyCellClick: false,
        // enable empty cell click events
        enableEmptyCellContextMenu: false,
        // enable empty cell context menu (right click) events
        enableEmptyCellDrop: false,
        // enable empty cell drop events
        enableEmptyCellDrag: false,
        // enable empty cell drag events
        enableOccupiedCellDrop: false,
        // enable occupied cell drop events
        emptyCellClickCallback: undefined,
        // empty cell click callback
        emptyCellContextMenuCallback: undefined,
        // empty cell context menu (right click) callback
        emptyCellDropCallback: undefined,
        // empty cell drag drop callback. HTML5 Drag & Drop
        emptyCellDragCallback: undefined,
        // empty cell drag and create item like excel cell selection
        emptyCellDragMaxCols: 50,
        // limit empty cell drag max cols
        emptyCellDragMaxRows: 50,
        // limit empty cell drag max rows
        // Arguments: event, gridsterItem{x, y, rows: defaultItemRows, cols: defaultItemCols}
        ignoreMarginInRow: false,
        // ignore the gap between rows for items which span multiple rows (see #162, #224)
        draggable: {
            delayStart: 0,
            // milliseconds to delay the start of drag, useful for touch interaction
            enabled: false,
            // enable/disable draggable items
            ignoreContentClass: 'gridster-item-content',
            // default content class to ignore the drag event from
            ignoreContent: false,
            // if true drag will start only from elements from `dragHandleClass`
            dragHandleClass: 'drag-handler',
            // drag event only from this class. If `ignoreContent` is true.
            stop: undefined,
            // callback when dragging an item stops.  Accepts Promise return to cancel/approve drag.
            start: undefined,
            // callback when dragging an item starts.
            // Arguments: item, gridsterItem, event
            dropOverItems: false,
            // enable drop items on top other item
            dropOverItemsCallback: undefined // callback on drop over another item
            // Arguments: source, target, gridComponent
        },
        resizable: {
            delayStart: 0,
            // milliseconds to delay the start of resize, useful for touch interaction
            enabled: false,
            // enable/disable resizable items
            handles: {
                s: true,
                e: true,
                n: true,
                w: true,
                se: true,
                ne: true,
                sw: true,
                nw: true
            },
            // resizable edges of an item
            stop: undefined,
            // callback when resizing an item stops. Accepts Promise return to cancel/approve resize.
            start: undefined // callback when resizing an item starts.
            // Arguments: item, gridsterItem, event
        },
        swap: true,
        // allow items to switch position if drop on top of another
        swapWhileDragging: false,
        // allow items to switch position while dragging
        pushItems: false,
        // push items when resizing and dragging
        disablePushOnDrag: false,
        // disable push on drag
        disablePushOnResize: false,
        // disable push on resize
        pushDirections: { north: true, east: true, south: true, west: true },
        // control the directions items are pushed
        pushResizeItems: false,
        // on resize of item will shrink adjacent items
        displayGrid: DisplayGrid.OnDragAndResize,
        // display background grid of rows and columns
        disableWindowResize: false,
        // disable the window on resize listener. This will stop grid to recalculate on window resize.
        disableWarnings: false,
        // disable console log warnings about misplacement of grid items
        scrollToNewItems: false,
        // scroll to new items placed in a scrollable view
        disableScrollHorizontal: false,
        // disable horizontal scrolling
        disableScrollVertical: false,
        // disable vertical scrolling
        disableAutoPositionOnConflict: false // disable auto-position of items on conflict state
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GridsterUtils = /** @class */ (function () {
        function GridsterUtils() {
        }
        /**
         * @param {?} obj1
         * @param {?} obj2
         * @param {?} properties
         * @return {?}
         */
        GridsterUtils.merge = /**
         * @param {?} obj1
         * @param {?} obj2
         * @param {?} properties
         * @return {?}
         */
        function (obj1, obj2, properties) {
            for (var p in obj2) {
                if (obj2[p] !== void 0 && properties.hasOwnProperty(p)) {
                    if (typeof obj2[p] === 'object') {
                        obj1[p] = GridsterUtils.merge(obj1[p], obj2[p], properties[p]);
                    }
                    else {
                        obj1[p] = obj2[p];
                    }
                }
            }
            return obj1;
        };
        /**
         * @param {?} func
         * @param {?} wait
         * @return {?}
         */
        GridsterUtils.debounce = /**
         * @param {?} func
         * @param {?} wait
         * @return {?}
         */
        function (func, wait) {
            /** @type {?} */
            var timeout;
            return (/**
             * @return {?}
             */
            function () {
                /** @type {?} */
                var context = this;
                /** @type {?} */
                var args = arguments;
                /** @type {?} */
                var later = (/**
                 * @return {?}
                 */
                function () {
                    timeout = null;
                    func.apply(context, args);
                });
                clearTimeout(timeout);
                timeout = setTimeout(later, wait);
            });
        };
        /**
         * @param {?} e
         * @return {?}
         */
        GridsterUtils.checkTouchEvent = /**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            if (e.clientX === undefined && e.touches) {
                if (e.touches && e.touches.length) {
                    e.clientX = e.touches[0].clientX;
                    e.clientY = e.touches[0].clientY;
                }
                else if (e.changedTouches && e.changedTouches.length) {
                    e.clientX = e.changedTouches[0].clientX;
                    e.clientY = e.changedTouches[0].clientY;
                }
            }
        };
        /**
         * @param {?} gridster
         * @param {?} e
         * @return {?}
         */
        GridsterUtils.checkContentClassForEvent = /**
         * @param {?} gridster
         * @param {?} e
         * @return {?}
         */
        function (gridster, e) {
            if (gridster.$options.draggable.ignoreContent) {
                if (!GridsterUtils.checkContentClass(e.target, e.currentTarget, gridster.$options.draggable.dragHandleClass)) {
                    return true;
                }
            }
            else {
                if (GridsterUtils.checkContentClass(e.target, e.currentTarget, gridster.$options.draggable.ignoreContentClass)) {
                    return true;
                }
            }
            return false;
        };
        /**
         * @param {?} gridster
         * @param {?} e
         * @return {?}
         */
        GridsterUtils.checkContentClassForEmptyCellClickEvent = /**
         * @param {?} gridster
         * @param {?} e
         * @return {?}
         */
        function (gridster, e) {
            return GridsterUtils.checkContentClass(e.target, e.currentTarget, gridster.$options.draggable.ignoreContentClass)
                || GridsterUtils.checkContentClass(e.target, e.currentTarget, gridster.$options.draggable.dragHandleClass);
        };
        /**
         * @param {?} target
         * @param {?} current
         * @param {?} contentClass
         * @return {?}
         */
        GridsterUtils.checkContentClass = /**
         * @param {?} target
         * @param {?} current
         * @param {?} contentClass
         * @return {?}
         */
        function (target, current, contentClass) {
            if (!target || target === current) {
                return false;
            }
            if (target.hasAttribute('class') && target.getAttribute('class').split(' ').indexOf(contentClass) > -1) {
                return true;
            }
            else {
                return GridsterUtils.checkContentClass(target.parentNode, current, contentClass);
            }
        };
        /**
         * @param {?} a
         * @param {?} b
         * @return {?}
         */
        GridsterUtils.compareItems = /**
         * @param {?} a
         * @param {?} b
         * @return {?}
         */
        function (a, b) {
            if (a.y > b.y) {
                return -1;
            }
            else if (a.y < b.y) {
                return 1;
            }
            else if (a.x > b.x) {
                return -1;
            }
            else {
                return 1;
            }
        };
        GridsterUtils.decorators = [
            { type: core.Injectable }
        ];
        return GridsterUtils;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @abstract
     */
    var   /**
     * @abstract
     */
    GridsterComponentInterface = /** @class */ (function () {
        function GridsterComponentInterface() {
        }
        return GridsterComponentInterface;
    }());
    if (false) {
        /** @type {?} */
        GridsterComponentInterface.prototype.$options;
        /** @type {?} */
        GridsterComponentInterface.prototype.grid;
        /** @type {?} */
        GridsterComponentInterface.prototype.checkCollision;
        /** @type {?} */
        GridsterComponentInterface.prototype.checkCollisionForSwaping;
        /** @type {?} */
        GridsterComponentInterface.prototype.positionXToPixels;
        /** @type {?} */
        GridsterComponentInterface.prototype.pixelsToPositionX;
        /** @type {?} */
        GridsterComponentInterface.prototype.positionYToPixels;
        /** @type {?} */
        GridsterComponentInterface.prototype.pixelsToPositionY;
        /** @type {?} */
        GridsterComponentInterface.prototype.findItemWithItem;
        /** @type {?} */
        GridsterComponentInterface.prototype.findItemsWithItem;
        /** @type {?} */
        GridsterComponentInterface.prototype.checkGridCollision;
        /** @type {?} */
        GridsterComponentInterface.prototype.el;
        /** @type {?} */
        GridsterComponentInterface.prototype.renderer;
        /** @type {?} */
        GridsterComponentInterface.prototype.gridRenderer;
        /** @type {?} */
        GridsterComponentInterface.prototype.cdRef;
        /** @type {?} */
        GridsterComponentInterface.prototype.options;
        /** @type {?} */
        GridsterComponentInterface.prototype.calculateLayoutDebounce;
        /** @type {?} */
        GridsterComponentInterface.prototype.updateGrid;
        /** @type {?} */
        GridsterComponentInterface.prototype.movingItem;
        /** @type {?} */
        GridsterComponentInterface.prototype.addItem;
        /** @type {?} */
        GridsterComponentInterface.prototype.removeItem;
        /** @type {?} */
        GridsterComponentInterface.prototype.previewStyle;
        /** @type {?} */
        GridsterComponentInterface.prototype.mobile;
        /** @type {?} */
        GridsterComponentInterface.prototype.curWidth;
        /** @type {?} */
        GridsterComponentInterface.prototype.curHeight;
        /** @type {?} */
        GridsterComponentInterface.prototype.columns;
        /** @type {?} */
        GridsterComponentInterface.prototype.rows;
        /** @type {?} */
        GridsterComponentInterface.prototype.curColWidth;
        /** @type {?} */
        GridsterComponentInterface.prototype.curRowHeight;
        /** @type {?} */
        GridsterComponentInterface.prototype.windowResize;
        /** @type {?} */
        GridsterComponentInterface.prototype.setGridDimensions;
        /** @type {?} */
        GridsterComponentInterface.prototype.dragInProgress;
        /** @type {?} */
        GridsterComponentInterface.prototype.emptyCell;
        /** @type {?} */
        GridsterComponentInterface.prototype.compact;
        /** @type {?} */
        GridsterComponentInterface.prototype.zone;
        /** @type {?} */
        GridsterComponentInterface.prototype.gridRows;
        /** @type {?} */
        GridsterComponentInterface.prototype.gridColumns;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GridsterEmptyCell = /** @class */ (function () {
        function GridsterEmptyCell(gridster) {
            this.gridster = gridster;
        }
        /**
         * @return {?}
         */
        GridsterEmptyCell.prototype.destroy = /**
         * @return {?}
         */
        function () {
            delete this.initialItem;
            delete this.gridster.movingItem;
            if (this.gridster.previewStyle) {
                this.gridster.previewStyle();
            }
            delete this.gridster;
            if (this.emptyCellExit) {
                this.emptyCellExit();
                this.emptyCellExit = null;
            }
        };
        /**
         * @return {?}
         */
        GridsterEmptyCell.prototype.updateOptions = /**
         * @return {?}
         */
        function () {
            var _this = this;
            if (this.gridster.$options.enableEmptyCellClick && !this.emptyCellClick && this.gridster.options.emptyCellClickCallback) {
                this.emptyCellClick = this.gridster.renderer.listen(this.gridster.el, 'click', this.emptyCellClickCb.bind(this));
                this.emptyCellClickTouch = this.gridster.renderer.listen(this.gridster.el, 'touchend', this.emptyCellClickCb.bind(this));
            }
            else if (!this.gridster.$options.enableEmptyCellClick && this.emptyCellClick && this.emptyCellClickTouch) {
                this.emptyCellClick();
                this.emptyCellClickTouch();
                this.emptyCellClick = null;
                this.emptyCellClickTouch = null;
            }
            if (this.gridster.$options.enableEmptyCellContextMenu && !this.emptyCellContextMenu &&
                this.gridster.options.emptyCellContextMenuCallback) {
                this.emptyCellContextMenu = this.gridster.renderer.listen(this.gridster.el, 'contextmenu', this.emptyCellContextMenuCb.bind(this));
            }
            else if (!this.gridster.$options.enableEmptyCellContextMenu && this.emptyCellContextMenu) {
                this.emptyCellContextMenu();
                this.emptyCellContextMenu = null;
            }
            if (this.gridster.$options.enableEmptyCellDrop && !this.emptyCellDrop && this.gridster.options.emptyCellDropCallback) {
                this.emptyCellDrop = this.gridster.renderer.listen(this.gridster.el, 'drop', this.emptyCellDragDrop.bind(this));
                this.gridster.zone.runOutsideAngular((/**
                 * @return {?}
                 */
                function () {
                    _this.emptyCellMove = _this.gridster.renderer.listen(_this.gridster.el, 'dragover', _this.emptyCellDragOver.bind(_this));
                }));
                this.emptyCellExit = this.gridster.renderer.listen('document', 'dragend', (/**
                 * @return {?}
                 */
                function () {
                    _this.gridster.movingItem = null;
                    _this.gridster.previewStyle();
                }));
            }
            else if (!this.gridster.$options.enableEmptyCellDrop && this.emptyCellDrop && this.emptyCellMove && this.emptyCellExit) {
                this.emptyCellDrop();
                this.emptyCellMove();
                this.emptyCellExit();
                this.emptyCellMove = null;
                this.emptyCellDrop = null;
                this.emptyCellExit = null;
            }
            if (this.gridster.$options.enableEmptyCellDrag && !this.emptyCellDrag && this.gridster.options.emptyCellDragCallback) {
                this.emptyCellDrag = this.gridster.renderer.listen(this.gridster.el, 'mousedown', this.emptyCellMouseDown.bind(this));
                this.emptyCellDragTouch = this.gridster.renderer.listen(this.gridster.el, 'touchstart', this.emptyCellMouseDown.bind(this));
            }
            else if (!this.gridster.$options.enableEmptyCellDrag && this.emptyCellDrag && this.emptyCellDragTouch) {
                this.emptyCellDrag();
                this.emptyCellDragTouch();
                this.emptyCellDrag = null;
                this.emptyCellDragTouch = null;
            }
        };
        /**
         * @param {?} e
         * @return {?}
         */
        GridsterEmptyCell.prototype.emptyCellClickCb = /**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            if (this.gridster.movingItem || GridsterUtils.checkContentClassForEmptyCellClickEvent(this.gridster, e)) {
                return;
            }
            /** @type {?} */
            var item = this.getValidItemFromEvent(e);
            if (!item) {
                return;
            }
            if (this.gridster.options.emptyCellClickCallback) {
                this.gridster.options.emptyCellClickCallback(e, item);
            }
            this.gridster.cdRef.markForCheck();
        };
        /**
         * @param {?} e
         * @return {?}
         */
        GridsterEmptyCell.prototype.emptyCellContextMenuCb = /**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            if (this.gridster.movingItem || GridsterUtils.checkContentClassForEmptyCellClickEvent(this.gridster, e)) {
                return;
            }
            /** @type {?} */
            var item = this.getValidItemFromEvent(e);
            if (!item) {
                return;
            }
            if (this.gridster.options.emptyCellContextMenuCallback) {
                this.gridster.options.emptyCellContextMenuCallback(e, item);
            }
            this.gridster.cdRef.markForCheck();
        };
        /**
         * @param {?} e
         * @return {?}
         */
        GridsterEmptyCell.prototype.emptyCellDragDrop = /**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            /** @type {?} */
            var item = this.getValidItemFromEvent(e);
            if (!item) {
                return;
            }
            if (this.gridster.options.emptyCellDropCallback) {
                this.gridster.options.emptyCellDropCallback(e, item);
            }
            this.gridster.cdRef.markForCheck();
        };
        /**
         * @param {?} e
         * @return {?}
         */
        GridsterEmptyCell.prototype.emptyCellDragOver = /**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            /** @type {?} */
            var item = this.getValidItemFromEvent(e);
            if (item) {
                e.dataTransfer.dropEffect = 'move';
                this.gridster.movingItem = item;
            }
            else {
                e.dataTransfer.dropEffect = 'none';
                this.gridster.movingItem = null;
            }
            this.gridster.previewStyle();
        };
        /**
         * @param {?} e
         * @return {?}
         */
        GridsterEmptyCell.prototype.emptyCellMouseDown = /**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            var _this = this;
            if (GridsterUtils.checkContentClassForEmptyCellClickEvent(this.gridster, e)) {
                return;
            }
            /** @type {?} */
            var item = this.getValidItemFromEvent(e);
            /** @type {?} */
            var leftMouseButtonCode = 1;
            if (!item || e.buttons !== leftMouseButtonCode) {
                return;
            }
            this.initialItem = item;
            this.gridster.movingItem = item;
            this.gridster.previewStyle();
            this.gridster.zone.runOutsideAngular((/**
             * @return {?}
             */
            function () {
                _this.emptyCellMMove = _this.gridster.renderer.listen('window', 'mousemove', _this.emptyCellMouseMove.bind(_this));
                _this.emptyCellMMoveTouch = _this.gridster.renderer.listen('window', 'touchmove', _this.emptyCellMouseMove.bind(_this));
            }));
            this.emptyCellUp = this.gridster.renderer.listen('window', 'mouseup', this.emptyCellMouseUp.bind(this));
            this.emptyCellUpTouch = this.gridster.renderer.listen('window', 'touchend', this.emptyCellMouseUp.bind(this));
        };
        /**
         * @param {?} e
         * @return {?}
         */
        GridsterEmptyCell.prototype.emptyCellMouseMove = /**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            /** @type {?} */
            var item = this.getValidItemFromEvent(e, this.initialItem);
            if (!item) {
                return;
            }
            this.gridster.movingItem = item;
            this.gridster.previewStyle();
        };
        /**
         * @param {?} e
         * @return {?}
         */
        GridsterEmptyCell.prototype.emptyCellMouseUp = /**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            var _this = this;
            this.emptyCellMMove();
            this.emptyCellMMoveTouch();
            this.emptyCellUp();
            this.emptyCellUpTouch();
            /** @type {?} */
            var item = this.getValidItemFromEvent(e, this.initialItem);
            if (item) {
                this.gridster.movingItem = item;
            }
            if (this.gridster.options.emptyCellDragCallback && this.gridster.movingItem) {
                this.gridster.options.emptyCellDragCallback(e, this.gridster.movingItem);
            }
            setTimeout((/**
             * @return {?}
             */
            function () {
                _this.initialItem = null;
                if (_this.gridster) {
                    _this.gridster.movingItem = null;
                    _this.gridster.previewStyle();
                }
            }));
            this.gridster.cdRef.markForCheck();
        };
        /**
         * @param {?} e
         * @param {?=} oldItem
         * @return {?}
         */
        GridsterEmptyCell.prototype.getValidItemFromEvent = /**
         * @param {?} e
         * @param {?=} oldItem
         * @return {?}
         */
        function (e, oldItem) {
            GridsterUtils.checkTouchEvent(e);
            /** @type {?} */
            var rect = this.gridster.el.getBoundingClientRect();
            /** @type {?} */
            var x = e.clientX + this.gridster.el.scrollLeft - rect.left - this.gridster.$options.margin;
            /** @type {?} */
            var y = e.clientY + this.gridster.el.scrollTop - rect.top - this.gridster.$options.margin;
            /** @type {?} */
            var item = {
                x: this.gridster.pixelsToPositionX(x, Math.floor, true),
                y: this.gridster.pixelsToPositionY(y, Math.floor, true),
                cols: this.gridster.$options.defaultItemCols,
                rows: this.gridster.$options.defaultItemRows
            };
            if (oldItem) {
                item.cols = Math.min(Math.abs(oldItem.x - item.x) + 1, this.gridster.$options.emptyCellDragMaxCols);
                item.rows = Math.min(Math.abs(oldItem.y - item.y) + 1, this.gridster.$options.emptyCellDragMaxRows);
                if (oldItem.x < item.x) {
                    item.x = oldItem.x;
                }
                else if (oldItem.x - item.x > this.gridster.$options.emptyCellDragMaxCols - 1) {
                    item.x = this.gridster.movingItem ? this.gridster.movingItem.x : 0;
                }
                if (oldItem.y < item.y) {
                    item.y = oldItem.y;
                }
                else if (oldItem.y - item.y > this.gridster.$options.emptyCellDragMaxRows - 1) {
                    item.y = this.gridster.movingItem ? this.gridster.movingItem.y : 0;
                }
            }
            if (!this.gridster.$options.enableOccupiedCellDrop && this.gridster.checkCollision(item)) {
                return;
            }
            return item;
        };
        GridsterEmptyCell.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        GridsterEmptyCell.ctorParameters = function () { return [
            { type: GridsterComponentInterface }
        ]; };
        return GridsterEmptyCell;
    }());
    if (false) {
        /** @type {?} */
        GridsterEmptyCell.prototype.initialItem;
        /** @type {?} */
        GridsterEmptyCell.prototype.emptyCellClick;
        /** @type {?} */
        GridsterEmptyCell.prototype.emptyCellClickTouch;
        /** @type {?} */
        GridsterEmptyCell.prototype.emptyCellContextMenu;
        /** @type {?} */
        GridsterEmptyCell.prototype.emptyCellDrop;
        /** @type {?} */
        GridsterEmptyCell.prototype.emptyCellDrag;
        /** @type {?} */
        GridsterEmptyCell.prototype.emptyCellDragTouch;
        /** @type {?} */
        GridsterEmptyCell.prototype.emptyCellMMove;
        /** @type {?} */
        GridsterEmptyCell.prototype.emptyCellMMoveTouch;
        /** @type {?} */
        GridsterEmptyCell.prototype.emptyCellUp;
        /** @type {?} */
        GridsterEmptyCell.prototype.emptyCellUpTouch;
        /** @type {?} */
        GridsterEmptyCell.prototype.emptyCellMove;
        /** @type {?} */
        GridsterEmptyCell.prototype.emptyCellExit;
        /**
         * @type {?}
         * @private
         */
        GridsterEmptyCell.prototype.gridster;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GridsterCompact = /** @class */ (function () {
        function GridsterCompact(gridster) {
            this.gridster = gridster;
        }
        /**
         * @return {?}
         */
        GridsterCompact.prototype.destroy = /**
         * @return {?}
         */
        function () {
            delete this.gridster;
        };
        /**
         * @return {?}
         */
        GridsterCompact.prototype.checkCompact = /**
         * @return {?}
         */
        function () {
            if (this.gridster.$options.compactType !== CompactType.None) {
                if (this.gridster.$options.compactType === CompactType.CompactUp) {
                    this.checkCompactUp();
                }
                else if (this.gridster.$options.compactType === CompactType.CompactLeft) {
                    this.checkCompactLeft();
                }
                else if (this.gridster.$options.compactType === CompactType.CompactUpAndLeft) {
                    this.checkCompactUp();
                    this.checkCompactLeft();
                }
                else if (this.gridster.$options.compactType === CompactType.CompactLeftAndUp) {
                    this.checkCompactLeft();
                    this.checkCompactUp();
                }
                else if (this.gridster.$options.compactType === CompactType.CompactRight) {
                    this.checkCompactRight();
                }
                else if (this.gridster.$options.compactType === CompactType.CompactUpAndRight) {
                    this.checkCompactUp();
                    this.checkCompactRight();
                }
                else if (this.gridster.$options.compactType === CompactType.CompactRightAndUp) {
                    this.checkCompactRight();
                    this.checkCompactUp();
                }
            }
        };
        /**
         * @param {?} item
         * @return {?}
         */
        GridsterCompact.prototype.checkCompactItem = /**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            if (this.gridster.$options.compactType !== CompactType.None) {
                if (this.gridster.$options.compactType === CompactType.CompactUp) {
                    this.moveUpTillCollision(item);
                }
                else if (this.gridster.$options.compactType === CompactType.CompactLeft) {
                    this.moveLeftTillCollision(item);
                }
                else if (this.gridster.$options.compactType === CompactType.CompactUpAndLeft) {
                    this.moveUpTillCollision(item);
                    this.moveLeftTillCollision(item);
                }
                else if (this.gridster.$options.compactType === CompactType.CompactLeftAndUp) {
                    this.moveLeftTillCollision(item);
                    this.moveUpTillCollision(item);
                }
                else if (this.gridster.$options.compactType === CompactType.CompactUpAndRight) {
                    this.moveUpTillCollision(item);
                    this.moveRightTillCollision(item);
                }
            }
        };
        /**
         * @return {?}
         */
        GridsterCompact.prototype.checkCompactUp = /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var widgetMovedUp = false;
            /** @type {?} */
            var widget;
            /** @type {?} */
            var moved;
            /** @type {?} */
            var l = this.gridster.grid.length;
            for (var i = 0; i < l; i++) {
                widget = this.gridster.grid[i];
                if (widget.$item.compactEnabled === false) {
                    continue;
                }
                moved = this.moveUpTillCollision(widget.$item);
                if (moved) {
                    widgetMovedUp = true;
                    widget.item.y = widget.$item.y;
                    widget.itemChanged();
                }
            }
            if (widgetMovedUp) {
                this.checkCompact();
            }
        };
        /**
         * @param {?} item
         * @return {?}
         */
        GridsterCompact.prototype.moveUpTillCollision = /**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            item.y -= 1;
            if (this.gridster.checkCollision(item)) {
                item.y += 1;
                return false;
            }
            else {
                this.moveUpTillCollision(item);
                return true;
            }
        };
        /**
         * @return {?}
         */
        GridsterCompact.prototype.checkCompactLeft = /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var widgetMovedUp = false;
            /** @type {?} */
            var widget;
            /** @type {?} */
            var moved;
            /** @type {?} */
            var l = this.gridster.grid.length;
            for (var i = 0; i < l; i++) {
                widget = this.gridster.grid[i];
                if (widget.$item.compactEnabled === false) {
                    continue;
                }
                moved = this.moveLeftTillCollision(widget.$item);
                if (moved) {
                    widgetMovedUp = true;
                    widget.item.x = widget.$item.x;
                    widget.itemChanged();
                }
            }
            if (widgetMovedUp) {
                this.checkCompact();
            }
        };
        /**
         * @return {?}
         */
        GridsterCompact.prototype.checkCompactRight = /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var widgetMovedUp = false;
            /** @type {?} */
            var widget;
            /** @type {?} */
            var moved;
            /** @type {?} */
            var l = this.gridster.grid.length;
            for (var i = 0; i < l; i++) {
                widget = this.gridster.grid[i];
                if (widget.$item.compactEnabled === false) {
                    continue;
                }
                moved = this.moveRightTillCollision(widget.$item);
                if (moved) {
                    widgetMovedUp = true;
                    widget.item.x = widget.$item.x;
                    widget.itemChanged();
                }
            }
            if (widgetMovedUp) {
                this.checkCompact();
            }
        };
        /**
         * @param {?} item
         * @return {?}
         */
        GridsterCompact.prototype.moveLeftTillCollision = /**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            item.x -= 1;
            if (this.gridster.checkCollision(item)) {
                item.x += 1;
                return false;
            }
            else {
                this.moveLeftTillCollision(item);
                return true;
            }
        };
        /**
         * @param {?} item
         * @return {?}
         */
        GridsterCompact.prototype.moveRightTillCollision = /**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            item.x += 1;
            if (this.gridster.checkCollision(item)) {
                item.x -= 1;
                return false;
            }
            else {
                this.moveRightTillCollision(item);
                return true;
            }
        };
        GridsterCompact.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        GridsterCompact.ctorParameters = function () { return [
            { type: GridsterComponentInterface }
        ]; };
        return GridsterCompact;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        GridsterCompact.prototype.gridster;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GridsterRenderer = /** @class */ (function () {
        function GridsterRenderer(gridster) {
            this.gridster = gridster;
        }
        /**
         * @return {?}
         */
        GridsterRenderer.prototype.destroy = /**
         * @return {?}
         */
        function () {
            delete this.gridster;
        };
        /**
         * @param {?} el
         * @param {?} item
         * @param {?} renderer
         * @return {?}
         */
        GridsterRenderer.prototype.updateItem = /**
         * @param {?} el
         * @param {?} item
         * @param {?} renderer
         * @return {?}
         */
        function (el, item, renderer) {
            if (this.gridster.mobile) {
                this.clearCellPosition(renderer, el);
                if (this.gridster.$options.keepFixedHeightInMobile) {
                    renderer.setStyle(el, 'height', (item.rows * this.gridster.$options.fixedRowHeight) + 'px');
                }
                else {
                    renderer.setStyle(el, 'height', (item.rows * this.gridster.curWidth / item.cols) + 'px');
                }
                if (this.gridster.$options.keepFixedWidthInMobile) {
                    renderer.setStyle(el, 'width', this.gridster.$options.fixedColWidth + 'px');
                }
                else {
                    renderer.setStyle(el, 'width', '');
                }
                renderer.setStyle(el, 'margin-bottom', this.gridster.$options.margin + 'px');
                renderer.setStyle(el, 'margin-right', '');
            }
            else {
                /** @type {?} */
                var x = Math.round(this.gridster.curColWidth * item.x);
                /** @type {?} */
                var y = Math.round(this.gridster.curRowHeight * item.y);
                /** @type {?} */
                var width = this.gridster.curColWidth * item.cols - this.gridster.$options.margin;
                /** @type {?} */
                var height = (this.gridster.curRowHeight * item.rows - this.gridster.$options.margin);
                // set the cell style
                this.setCellPosition(renderer, el, x, y);
                renderer.setStyle(el, 'width', width + 'px');
                renderer.setStyle(el, 'height', height + 'px');
                /** @type {?} */
                var marginBottom = null;
                /** @type {?} */
                var marginRight = null;
                if (this.gridster.$options.outerMargin) {
                    if (this.gridster.rows === item.rows + item.y) {
                        if (this.gridster.$options.outerMarginBottom !== null) {
                            marginBottom = this.gridster.$options.outerMarginBottom + 'px';
                        }
                        else {
                            marginBottom = this.gridster.$options.margin + 'px';
                        }
                    }
                    if (this.gridster.columns === item.cols + item.x) {
                        if (this.gridster.$options.outerMarginBottom !== null) {
                            marginRight = this.gridster.$options.outerMarginRight + 'px';
                        }
                        else {
                            marginRight = this.gridster.$options.margin + 'px';
                        }
                    }
                }
                renderer.setStyle(el, 'margin-bottom', marginBottom);
                renderer.setStyle(el, 'margin-right', marginRight);
            }
        };
        /**
         * @return {?}
         */
        GridsterRenderer.prototype.updateGridster = /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var addClass = '';
            /** @type {?} */
            var removeClass1 = '';
            /** @type {?} */
            var removeClass2 = '';
            /** @type {?} */
            var removeClass3 = '';
            if (this.gridster.$options.gridType === GridType.Fit) {
                addClass = GridType.Fit;
                removeClass1 = GridType.ScrollVertical;
                removeClass2 = GridType.ScrollHorizontal;
                removeClass3 = GridType.Fixed;
            }
            else if (this.gridster.$options.gridType === GridType.ScrollVertical) {
                this.gridster.curRowHeight = this.gridster.curColWidth;
                addClass = GridType.ScrollVertical;
                removeClass1 = GridType.Fit;
                removeClass2 = GridType.ScrollHorizontal;
                removeClass3 = GridType.Fixed;
            }
            else if (this.gridster.$options.gridType === GridType.ScrollHorizontal) {
                this.gridster.curColWidth = this.gridster.curRowHeight;
                addClass = GridType.ScrollHorizontal;
                removeClass1 = GridType.Fit;
                removeClass2 = GridType.ScrollVertical;
                removeClass3 = GridType.Fixed;
            }
            else if (this.gridster.$options.gridType === GridType.Fixed) {
                this.gridster.curColWidth = this.gridster.$options.fixedColWidth +
                    (this.gridster.$options.ignoreMarginInRow ? 0 : this.gridster.$options.margin);
                this.gridster.curRowHeight = this.gridster.$options.fixedRowHeight +
                    (this.gridster.$options.ignoreMarginInRow ? 0 : this.gridster.$options.margin);
                addClass = GridType.Fixed;
                removeClass1 = GridType.Fit;
                removeClass2 = GridType.ScrollVertical;
                removeClass3 = GridType.ScrollHorizontal;
            }
            else if (this.gridster.$options.gridType === GridType.VerticalFixed) {
                this.gridster.curRowHeight = this.gridster.$options.fixedRowHeight +
                    (this.gridster.$options.ignoreMarginInRow ? 0 : this.gridster.$options.margin);
                addClass = GridType.ScrollVertical;
                removeClass1 = GridType.Fit;
                removeClass2 = GridType.ScrollHorizontal;
                removeClass3 = GridType.Fixed;
            }
            else if (this.gridster.$options.gridType === GridType.HorizontalFixed) {
                this.gridster.curColWidth = this.gridster.$options.fixedColWidth +
                    (this.gridster.$options.ignoreMarginInRow ? 0 : this.gridster.$options.margin);
                addClass = GridType.ScrollHorizontal;
                removeClass1 = GridType.Fit;
                removeClass2 = GridType.ScrollVertical;
                removeClass3 = GridType.Fixed;
            }
            if (this.gridster.mobile) {
                this.gridster.renderer.removeClass(this.gridster.el, addClass);
            }
            else {
                this.gridster.renderer.addClass(this.gridster.el, addClass);
            }
            this.gridster.renderer.removeClass(this.gridster.el, removeClass1);
            this.gridster.renderer.removeClass(this.gridster.el, removeClass2);
            this.gridster.renderer.removeClass(this.gridster.el, removeClass3);
        };
        /**
         * @param {?} i
         * @return {?}
         */
        GridsterRenderer.prototype.getGridColumnStyle = /**
         * @param {?} i
         * @return {?}
         */
        function (i) {
            return __assign({}, this.getLeftPosition(this.gridster.curColWidth * i), { width: this.gridster.curColWidth - this.gridster.$options.margin + 'px', height: this.gridster.gridRows.length * this.gridster.curRowHeight - this.gridster.$options.margin + 'px' });
        };
        /**
         * @param {?} i
         * @return {?}
         */
        GridsterRenderer.prototype.getGridRowStyle = /**
         * @param {?} i
         * @return {?}
         */
        function (i) {
            return __assign({}, this.getTopPosition(this.gridster.curRowHeight * i), { width: this.gridster.gridColumns.length * this.gridster.curColWidth - this.gridster.$options.margin + 'px', height: this.gridster.curRowHeight - this.gridster.$options.margin + 'px' });
        };
        /**
         * @param {?} d
         * @return {?}
         */
        GridsterRenderer.prototype.getLeftPosition = /**
         * @param {?} d
         * @return {?}
         */
        function (d) {
            if (this.gridster.$options.useTransformPositioning) {
                return {
                    transform: 'translateX(' + d + 'px)',
                };
            }
            else {
                return {
                    left: (this.getLeftMargin() + d) + 'px'
                };
            }
        };
        /**
         * @param {?} d
         * @return {?}
         */
        GridsterRenderer.prototype.getTopPosition = /**
         * @param {?} d
         * @return {?}
         */
        function (d) {
            if (this.gridster.$options.useTransformPositioning) {
                return {
                    transform: 'translateY(' + d + 'px)',
                };
            }
            else {
                return {
                    top: this.getTopMargin() + d + 'px'
                };
            }
        };
        /**
         * @param {?} renderer
         * @param {?} el
         * @return {?}
         */
        GridsterRenderer.prototype.clearCellPosition = /**
         * @param {?} renderer
         * @param {?} el
         * @return {?}
         */
        function (renderer, el) {
            if (this.gridster.$options.useTransformPositioning) {
                renderer.setStyle(el, 'transform', '');
            }
            else {
                renderer.setStyle(el, 'top', '');
                renderer.setStyle(el, 'left', '');
            }
        };
        /**
         * @param {?} renderer
         * @param {?} el
         * @param {?} x
         * @param {?} y
         * @return {?}
         */
        GridsterRenderer.prototype.setCellPosition = /**
         * @param {?} renderer
         * @param {?} el
         * @param {?} x
         * @param {?} y
         * @return {?}
         */
        function (renderer, el, x, y) {
            if (this.gridster.$options.useTransformPositioning) {
                /** @type {?} */
                var transform = 'translate3d(' + x + 'px, ' + y + 'px, 0)';
                renderer.setStyle(el, 'transform', transform);
            }
            else {
                renderer.setStyle(el, 'left', this.getLeftMargin() + x + 'px');
                renderer.setStyle(el, 'top', this.getTopMargin() + y + 'px');
            }
        };
        /**
         * @return {?}
         */
        GridsterRenderer.prototype.getLeftMargin = /**
         * @return {?}
         */
        function () {
            if (this.gridster.$options.outerMargin) {
                if (this.gridster.$options.outerMarginLeft !== null) {
                    return this.gridster.$options.outerMarginLeft;
                }
                else {
                    return this.gridster.$options.margin;
                }
            }
            else {
                return 0;
            }
        };
        /**
         * @return {?}
         */
        GridsterRenderer.prototype.getTopMargin = /**
         * @return {?}
         */
        function () {
            if (this.gridster.$options.outerMargin) {
                if (this.gridster.$options.outerMarginTop !== null) {
                    return this.gridster.$options.outerMarginTop;
                }
                else {
                    return this.gridster.$options.margin;
                }
            }
            else {
                return 0;
            }
        };
        GridsterRenderer.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        GridsterRenderer.ctorParameters = function () { return [
            { type: GridsterComponentInterface }
        ]; };
        return GridsterRenderer;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        GridsterRenderer.prototype.gridster;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GridsterComponent = /** @class */ (function () {
        function GridsterComponent(el, renderer, cdRef, zone) {
            this.renderer = renderer;
            this.cdRef = cdRef;
            this.zone = zone;
            this.columns = 0;
            this.rows = 0;
            this.gridColumns = [];
            this.gridRows = [];
            this.el = el.nativeElement;
            this.$options = JSON.parse(JSON.stringify(GridsterConfigService));
            this.calculateLayoutDebounce = GridsterUtils.debounce(this.calculateLayout.bind(this), 0);
            this.mobile = false;
            this.curWidth = 0;
            this.curHeight = 0;
            this.grid = [];
            this.curColWidth = 0;
            this.curRowHeight = 0;
            this.dragInProgress = false;
            this.emptyCell = new GridsterEmptyCell(this);
            this.compact = new GridsterCompact(this);
            this.gridRenderer = new GridsterRenderer(this);
        }
        /**
         * @param {?} item
         * @param {?} item2
         * @return {?}
         */
        GridsterComponent.checkCollisionTwoItems = /**
         * @param {?} item
         * @param {?} item2
         * @return {?}
         */
        function (item, item2) {
            return item.x < item2.x + item2.cols
                && item.x + item.cols > item2.x
                && item.y < item2.y + item2.rows
                && item.y + item.rows > item2.y;
        };
        /**
         * @return {?}
         */
        GridsterComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            if (this.options.initCallback) {
                this.options.initCallback(this);
            }
        };
        /**
         * @param {?} changes
         * @return {?}
         */
        GridsterComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
        function (changes) {
            if (changes.options) {
                this.setOptions();
                this.options.api = {
                    optionsChanged: this.optionsChanged.bind(this),
                    resize: this.onResize.bind(this),
                    getNextPossiblePosition: this.getNextPossiblePosition.bind(this),
                    getFirstPossiblePosition: this.getFirstPossiblePosition.bind(this),
                    getLastPossiblePosition: this.getLastPossiblePosition.bind(this),
                };
                this.columns = this.$options.minCols;
                this.rows = this.$options.minRows;
                this.setGridSize();
                this.calculateLayout();
            }
        };
        /**
         * @return {?}
         */
        GridsterComponent.prototype.resize = /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var height;
            /** @type {?} */
            var width;
            if (this.$options.gridType === 'fit' && !this.mobile) {
                width = this.el.offsetWidth;
                height = this.el.offsetHeight;
            }
            else {
                width = this.el.clientWidth;
                height = this.el.clientHeight;
            }
            if ((width !== this.curWidth || height !== this.curHeight) && this.checkIfToResize()) {
                this.onResize();
            }
        };
        /**
         * @return {?}
         */
        GridsterComponent.prototype.setOptions = /**
         * @return {?}
         */
        function () {
            this.$options = GridsterUtils.merge(this.$options, this.options, this.$options);
            if (!this.$options.disableWindowResize && !this.windowResize) {
                this.windowResize = this.renderer.listen('window', 'resize', this.onResize.bind(this));
            }
            else if (this.$options.disableWindowResize && this.windowResize) {
                this.windowResize();
                this.windowResize = null;
            }
            this.emptyCell.updateOptions();
        };
        /**
         * @return {?}
         */
        GridsterComponent.prototype.optionsChanged = /**
         * @return {?}
         */
        function () {
            this.setOptions();
            /** @type {?} */
            var widgetsIndex = this.grid.length - 1;
            /** @type {?} */
            var widget;
            for (; widgetsIndex >= 0; widgetsIndex--) {
                widget = this.grid[widgetsIndex];
                widget.updateOptions();
            }
            this.calculateLayout();
        };
        /**
         * @return {?}
         */
        GridsterComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            if (this.windowResize) {
                this.windowResize();
            }
            if (this.options && this.options.destroyCallback) {
                this.options.destroyCallback(this);
            }
            if (this.options && this.options.api) {
                this.options.api.resize = undefined;
                this.options.api.optionsChanged = undefined;
                this.options.api.getNextPossiblePosition = undefined;
                this.options.api = undefined;
            }
            this.emptyCell.destroy();
            delete this.emptyCell;
            this.compact.destroy();
            delete this.compact;
        };
        /**
         * @return {?}
         */
        GridsterComponent.prototype.onResize = /**
         * @return {?}
         */
        function () {
            this.setGridSize();
            this.calculateLayout();
        };
        /**
         * @return {?}
         */
        GridsterComponent.prototype.checkIfToResize = /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var clientWidth = this.el.clientWidth;
            /** @type {?} */
            var offsetWidth = this.el.offsetWidth;
            /** @type {?} */
            var scrollWidth = this.el.scrollWidth;
            /** @type {?} */
            var clientHeight = this.el.clientHeight;
            /** @type {?} */
            var offsetHeight = this.el.offsetHeight;
            /** @type {?} */
            var scrollHeight = this.el.scrollHeight;
            /** @type {?} */
            var verticalScrollPresent = clientWidth < offsetWidth && scrollHeight > offsetHeight
                && scrollHeight - offsetHeight < offsetWidth - clientWidth;
            /** @type {?} */
            var horizontalScrollPresent = clientHeight < offsetHeight
                && scrollWidth > offsetWidth && scrollWidth - offsetWidth < offsetHeight - clientHeight;
            if (verticalScrollPresent) {
                return false;
            }
            return !horizontalScrollPresent;
        };
        /**
         * @return {?}
         */
        GridsterComponent.prototype.setGridSize = /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var el = this.el;
            /** @type {?} */
            var width = el.clientWidth;
            /** @type {?} */
            var height = el.clientHeight;
            if (this.$options.setGridSize || this.$options.gridType === 'fit' && !this.mobile) {
                width = el.offsetWidth;
                height = el.offsetHeight;
            }
            else {
                width = el.clientWidth;
                height = el.clientHeight;
            }
            this.curWidth = width;
            this.curHeight = height;
        };
        /**
         * @return {?}
         */
        GridsterComponent.prototype.setGridDimensions = /**
         * @return {?}
         */
        function () {
            this.setGridSize();
            if (!this.mobile && this.$options.mobileBreakpoint > this.curWidth) {
                this.mobile = !this.mobile;
                this.renderer.addClass(this.el, 'mobile');
            }
            else if (this.mobile && this.$options.mobileBreakpoint < this.curWidth) {
                this.mobile = !this.mobile;
                this.renderer.removeClass(this.el, 'mobile');
            }
            /** @type {?} */
            var rows = this.$options.minRows;
            /** @type {?} */
            var columns = this.$options.minCols;
            /** @type {?} */
            var widgetsIndex = this.grid.length - 1;
            /** @type {?} */
            var widget;
            for (; widgetsIndex >= 0; widgetsIndex--) {
                widget = this.grid[widgetsIndex];
                if (!widget.notPlaced) {
                    rows = Math.max(rows, widget.$item.y + widget.$item.rows);
                    columns = Math.max(columns, widget.$item.x + widget.$item.cols);
                }
            }
            if (this.columns !== columns || this.rows !== rows) {
                this.columns = columns;
                this.rows = rows;
                if (this.options.gridSizeChangedCallback) {
                    this.options.gridSizeChangedCallback(this);
                }
            }
        };
        /**
         * @return {?}
         */
        GridsterComponent.prototype.calculateLayout = /**
         * @return {?}
         */
        function () {
            if (this.compact) {
                this.compact.checkCompact();
            }
            this.setGridDimensions();
            if (this.$options.outerMargin) {
                /** @type {?} */
                var marginWidth = -this.$options.margin;
                if (this.$options.outerMarginLeft !== null) {
                    marginWidth += this.$options.outerMarginLeft;
                    this.renderer.setStyle(this.el, 'padding-left', this.$options.outerMarginLeft + 'px');
                }
                else {
                    marginWidth += this.$options.margin;
                    this.renderer.setStyle(this.el, 'padding-left', this.$options.margin + 'px');
                }
                if (this.$options.outerMarginRight !== null) {
                    marginWidth += this.$options.outerMarginRight;
                    this.renderer.setStyle(this.el, 'padding-right', this.$options.outerMarginRight + 'px');
                }
                else {
                    marginWidth += this.$options.margin;
                    this.renderer.setStyle(this.el, 'padding-right', this.$options.margin + 'px');
                }
                this.curColWidth = (this.curWidth - marginWidth) / this.columns;
                /** @type {?} */
                var marginHeight = -this.$options.margin;
                if (this.$options.outerMarginTop !== null) {
                    marginHeight += this.$options.outerMarginTop;
                    this.renderer.setStyle(this.el, 'padding-top', this.$options.outerMarginTop + 'px');
                }
                else {
                    marginHeight += this.$options.margin;
                    this.renderer.setStyle(this.el, 'padding-top', this.$options.margin + 'px');
                }
                if (this.$options.outerMarginBottom !== null) {
                    marginHeight += this.$options.outerMarginBottom;
                    this.renderer.setStyle(this.el, 'padding-bottom', this.$options.outerMarginBottom + 'px');
                }
                else {
                    marginHeight += this.$options.margin;
                    this.renderer.setStyle(this.el, 'padding-bottom', this.$options.margin + 'px');
                }
                this.curRowHeight = (this.curHeight - marginHeight) / this.rows;
            }
            else {
                this.curColWidth = (this.curWidth + this.$options.margin) / this.columns;
                this.curRowHeight = (this.curHeight + this.$options.margin) / this.rows;
                this.renderer.setStyle(this.el, 'padding-left', 0 + 'px');
                this.renderer.setStyle(this.el, 'padding-right', 0 + 'px');
                this.renderer.setStyle(this.el, 'padding-top', 0 + 'px');
                this.renderer.setStyle(this.el, 'padding-bottom', 0 + 'px');
            }
            this.gridRenderer.updateGridster();
            this.updateGrid();
            if (this.$options.setGridSize) {
                this.renderer.setStyle(this.el, 'width', (this.columns * this.curColWidth + this.$options.margin) + 'px');
                this.renderer.setStyle(this.el, 'height', (this.rows * this.curRowHeight + this.$options.margin) + 'px');
            }
            else {
                this.renderer.setStyle(this.el, 'width', '');
                this.renderer.setStyle(this.el, 'height', '');
            }
            /** @type {?} */
            var widgetsIndex = this.grid.length - 1;
            /** @type {?} */
            var widget;
            for (; widgetsIndex >= 0; widgetsIndex--) {
                widget = this.grid[widgetsIndex];
                widget.setSize();
                widget.drag.toggle();
                widget.resize.toggle();
            }
            setTimeout(this.resize.bind(this), 100);
        };
        /**
         * @return {?}
         */
        GridsterComponent.prototype.updateGrid = /**
         * @return {?}
         */
        function () {
            if (this.$options.displayGrid === 'always' && !this.mobile) {
                this.renderer.addClass(this.el, 'display-grid');
            }
            else if (this.$options.displayGrid === 'onDrag&Resize' && this.dragInProgress) {
                this.renderer.addClass(this.el, 'display-grid');
            }
            else if (this.$options.displayGrid === 'none' || !this.dragInProgress || this.mobile) {
                this.renderer.removeClass(this.el, 'display-grid');
            }
            this.setGridDimensions();
            this.gridColumns.length = Math.max(this.columns, Math.floor(this.curWidth / this.curColWidth)) || 0;
            this.gridRows.length = Math.max(this.rows, Math.floor(this.curHeight / this.curRowHeight)) || 0;
            this.cdRef.markForCheck();
        };
        /**
         * @param {?} itemComponent
         * @return {?}
         */
        GridsterComponent.prototype.addItem = /**
         * @param {?} itemComponent
         * @return {?}
         */
        function (itemComponent) {
            if (itemComponent.$item.cols === undefined) {
                itemComponent.$item.cols = this.$options.defaultItemCols;
                itemComponent.item.cols = itemComponent.$item.cols;
                itemComponent.itemChanged();
            }
            if (itemComponent.$item.rows === undefined) {
                itemComponent.$item.rows = this.$options.defaultItemRows;
                itemComponent.item.rows = itemComponent.$item.rows;
                itemComponent.itemChanged();
            }
            if (itemComponent.$item.x === -1 || itemComponent.$item.y === -1) {
                this.autoPositionItem(itemComponent);
            }
            else if (this.checkCollision(itemComponent.$item)) {
                if (!this.$options.disableWarnings) {
                    itemComponent.notPlaced = true;
                    console.warn('Can\'t be placed in the bounds of the dashboard, trying to auto position!/n' +
                        JSON.stringify(itemComponent.item, ['cols', 'rows', 'x', 'y']));
                }
                if (!this.$options.disableAutoPositionOnConflict) {
                    this.autoPositionItem(itemComponent);
                }
                else {
                    itemComponent.notPlaced = true;
                }
            }
            this.grid.push(itemComponent);
            this.calculateLayoutDebounce();
        };
        /**
         * @param {?} itemComponent
         * @return {?}
         */
        GridsterComponent.prototype.removeItem = /**
         * @param {?} itemComponent
         * @return {?}
         */
        function (itemComponent) {
            this.grid.splice(this.grid.indexOf(itemComponent), 1);
            this.calculateLayoutDebounce();
            if (this.options.itemRemovedCallback) {
                this.options.itemRemovedCallback(itemComponent.item, itemComponent);
            }
        };
        /**
         * @param {?} item
         * @return {?}
         */
        GridsterComponent.prototype.checkCollision = /**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            /** @type {?} */
            var collision = false;
            if (this.options.itemValidateCallback) {
                collision = !this.options.itemValidateCallback(item);
            }
            if (!collision && this.checkGridCollision(item)) {
                collision = true;
            }
            if (!collision) {
                /** @type {?} */
                var c = this.findItemWithItem(item);
                if (c) {
                    collision = c;
                }
            }
            return collision;
        };
        /**
         * @param {?} item
         * @return {?}
         */
        GridsterComponent.prototype.checkGridCollision = /**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            /** @type {?} */
            var noNegativePosition = item.y > -1 && item.x > -1;
            /** @type {?} */
            var maxGridCols = item.cols + item.x <= this.$options.maxCols;
            /** @type {?} */
            var maxGridRows = item.rows + item.y <= this.$options.maxRows;
            /** @type {?} */
            var maxItemCols = item.maxItemCols === undefined ? this.$options.maxItemCols : item.maxItemCols;
            /** @type {?} */
            var minItemCols = item.minItemCols === undefined ? this.$options.minItemCols : item.minItemCols;
            /** @type {?} */
            var maxItemRows = item.maxItemRows === undefined ? this.$options.maxItemRows : item.maxItemRows;
            /** @type {?} */
            var minItemRows = item.minItemRows === undefined ? this.$options.minItemRows : item.minItemRows;
            /** @type {?} */
            var inColsLimits = item.cols <= maxItemCols && item.cols >= minItemCols;
            /** @type {?} */
            var inRowsLimits = item.rows <= maxItemRows && item.rows >= minItemRows;
            /** @type {?} */
            var minAreaLimit = item.minItemArea === undefined ? this.$options.minItemArea : item.minItemArea;
            /** @type {?} */
            var maxAreaLimit = item.maxItemArea === undefined ? this.$options.maxItemArea : item.maxItemArea;
            /** @type {?} */
            var area = item.cols * item.rows;
            /** @type {?} */
            var inMinArea = minAreaLimit <= area;
            /** @type {?} */
            var inMaxArea = maxAreaLimit >= area;
            return !(noNegativePosition && maxGridCols && maxGridRows && inColsLimits && inRowsLimits && inMinArea && inMaxArea);
        };
        /**
         * @param {?} item
         * @return {?}
         */
        GridsterComponent.prototype.findItemWithItem = /**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            /** @type {?} */
            var widgetsIndex = this.grid.length - 1;
            /** @type {?} */
            var widget;
            for (; widgetsIndex > -1; widgetsIndex--) {
                widget = this.grid[widgetsIndex];
                if (widget.$item !== item && GridsterComponent.checkCollisionTwoItems(widget.$item, item)) {
                    return widget;
                }
            }
            return false;
        };
        /**
         * @param {?} item
         * @return {?}
         */
        GridsterComponent.prototype.findItemsWithItem = /**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            /** @type {?} */
            var a = [];
            /** @type {?} */
            var widgetsIndex = this.grid.length - 1;
            /** @type {?} */
            var widget;
            for (; widgetsIndex > -1; widgetsIndex--) {
                widget = this.grid[widgetsIndex];
                if (widget.$item !== item && GridsterComponent.checkCollisionTwoItems(widget.$item, item)) {
                    a.push(widget);
                }
            }
            return a;
        };
        /**
         * @param {?} itemComponent
         * @return {?}
         */
        GridsterComponent.prototype.autoPositionItem = /**
         * @param {?} itemComponent
         * @return {?}
         */
        function (itemComponent) {
            if (this.getNextPossiblePosition(itemComponent.$item)) {
                itemComponent.notPlaced = false;
                itemComponent.item.x = itemComponent.$item.x;
                itemComponent.item.y = itemComponent.$item.y;
                itemComponent.itemChanged();
            }
            else {
                itemComponent.notPlaced = true;
                if (!this.$options.disableWarnings) {
                    console.warn('Can\'t be placed in the bounds of the dashboard!/n' +
                        JSON.stringify(itemComponent.item, ['cols', 'rows', 'x', 'y']));
                }
            }
        };
        /**
         * @param {?} newItem
         * @param {?=} startingFrom
         * @return {?}
         */
        GridsterComponent.prototype.getNextPossiblePosition = /**
         * @param {?} newItem
         * @param {?=} startingFrom
         * @return {?}
         */
        function (newItem, startingFrom) {
            if (startingFrom === void 0) { startingFrom = {}; }
            if (newItem.cols === -1) {
                newItem.cols = this.$options.defaultItemCols;
            }
            if (newItem.rows === -1) {
                newItem.rows = this.$options.defaultItemRows;
            }
            this.setGridDimensions();
            /** @type {?} */
            var rowsIndex = startingFrom.y || 0;
            /** @type {?} */
            var colsIndex;
            for (; rowsIndex < this.rows; rowsIndex++) {
                newItem.y = rowsIndex;
                colsIndex = startingFrom.x || 0;
                for (; colsIndex < this.columns; colsIndex++) {
                    newItem.x = colsIndex;
                    if (!this.checkCollision(newItem)) {
                        return true;
                    }
                }
            }
            /** @type {?} */
            var canAddToRows = this.$options.maxRows >= this.rows + newItem.rows;
            /** @type {?} */
            var canAddToColumns = this.$options.maxCols >= this.columns + newItem.cols;
            /** @type {?} */
            var addToRows = this.rows <= this.columns && canAddToRows;
            if (!addToRows && canAddToColumns) {
                newItem.x = this.columns;
                newItem.y = 0;
                return true;
            }
            else if (canAddToRows) {
                newItem.y = this.rows;
                newItem.x = 0;
                return true;
            }
            return false;
        };
        /**
         * @param {?} item
         * @return {?}
         */
        GridsterComponent.prototype.getFirstPossiblePosition = /**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            /** @type {?} */
            var tmpItem = Object.assign({}, item);
            this.getNextPossiblePosition(tmpItem);
            return tmpItem;
        };
        /**
         * @param {?} item
         * @return {?}
         */
        GridsterComponent.prototype.getLastPossiblePosition = /**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            /** @type {?} */
            var farthestItem = { y: 0, x: 0 };
            farthestItem = this.grid.reduce((/**
             * @param {?} prev
             * @param {?} curr
             * @return {?}
             */
            function (prev, curr) {
                /** @type {?} */
                var currCoords = { y: curr.$item.y + curr.$item.rows - 1, x: curr.$item.x + curr.$item.cols - 1 };
                if (GridsterUtils.compareItems(prev, currCoords) === 1) {
                    return currCoords;
                }
                else {
                    return prev;
                }
            }), farthestItem);
            /** @type {?} */
            var tmpItem = Object.assign({}, item);
            this.getNextPossiblePosition(tmpItem, farthestItem);
            return tmpItem;
        };
        /**
         * @param {?} x
         * @param {?} roundingMethod
         * @param {?=} noLimit
         * @return {?}
         */
        GridsterComponent.prototype.pixelsToPositionX = /**
         * @param {?} x
         * @param {?} roundingMethod
         * @param {?=} noLimit
         * @return {?}
         */
        function (x, roundingMethod, noLimit) {
            /** @type {?} */
            var position = roundingMethod(x / this.curColWidth);
            if (noLimit) {
                return position;
            }
            else {
                return Math.max(position, 0);
            }
        };
        /**
         * @param {?} y
         * @param {?} roundingMethod
         * @param {?=} noLimit
         * @return {?}
         */
        GridsterComponent.prototype.pixelsToPositionY = /**
         * @param {?} y
         * @param {?} roundingMethod
         * @param {?=} noLimit
         * @return {?}
         */
        function (y, roundingMethod, noLimit) {
            /** @type {?} */
            var position = roundingMethod(y / this.curRowHeight);
            if (noLimit) {
                return position;
            }
            else {
                return Math.max(position, 0);
            }
        };
        /**
         * @param {?} x
         * @return {?}
         */
        GridsterComponent.prototype.positionXToPixels = /**
         * @param {?} x
         * @return {?}
         */
        function (x) {
            return x * this.curColWidth;
        };
        /**
         * @param {?} y
         * @return {?}
         */
        GridsterComponent.prototype.positionYToPixels = /**
         * @param {?} y
         * @return {?}
         */
        function (y) {
            return y * this.curRowHeight;
        };
        // ------ Functions for swapWhileDragging option
        // identical to checkCollision() except that here we add bondaries. 
        // ------ Functions for swapWhileDragging option
        // identical to checkCollision() except that here we add bondaries. 
        /**
         * @param {?} item
         * @param {?} item2
         * @return {?}
         */
        GridsterComponent.checkCollisionTwoItemsForSwaping = 
        // ------ Functions for swapWhileDragging option
        // identical to checkCollision() except that here we add bondaries. 
        /**
         * @param {?} item
         * @param {?} item2
         * @return {?}
         */
        function (item, item2) {
            // if the cols or rows of the items are 1 , doesnt make any sense to set a boundary. Only if the item is bigger we set a boundary
            /** @type {?} */
            var horizontalBoundaryItem1 = item.cols === 1 ? 0 : 1;
            /** @type {?} */
            var horizontalBoundaryItem2 = item2.cols === 1 ? 0 : 1;
            /** @type {?} */
            var verticalBoundaryItem1 = item.rows === 1 ? 0 : 1;
            /** @type {?} */
            var verticalBoundaryItem2 = item2.rows === 1 ? 0 : 1;
            return item.x + horizontalBoundaryItem1 < item2.x + item2.cols
                && item.x + item.cols > item2.x + horizontalBoundaryItem2
                && item.y + verticalBoundaryItem1 < item2.y + item2.rows
                && item.y + item.rows > item2.y + verticalBoundaryItem2;
        };
        // identical to checkCollision() except that this function calls findItemWithItemForSwaping() instead of findItemWithItem()
        // identical to checkCollision() except that this function calls findItemWithItemForSwaping() instead of findItemWithItem()
        /**
         * @param {?} item
         * @return {?}
         */
        GridsterComponent.prototype.checkCollisionForSwaping = 
        // identical to checkCollision() except that this function calls findItemWithItemForSwaping() instead of findItemWithItem()
        /**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            /** @type {?} */
            var collision = false;
            if (this.options.itemValidateCallback) {
                collision = !this.options.itemValidateCallback(item);
            }
            if (!collision && this.checkGridCollision(item)) {
                collision = true;
            }
            if (!collision) {
                /** @type {?} */
                var c = this.findItemWithItemForSwaping(item);
                if (c) {
                    collision = c;
                }
            }
            return collision;
        };
        // identical to findItemWithItem() except that this function calls checkCollisionTwoItemsForSwaping() instead of checkCollisionTwoItems()
        // identical to findItemWithItem() except that this function calls checkCollisionTwoItemsForSwaping() instead of checkCollisionTwoItems()
        /**
         * @param {?} item
         * @return {?}
         */
        GridsterComponent.prototype.findItemWithItemForSwaping = 
        // identical to findItemWithItem() except that this function calls checkCollisionTwoItemsForSwaping() instead of checkCollisionTwoItems()
        /**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            /** @type {?} */
            var widgetsIndex = this.grid.length - 1;
            /** @type {?} */
            var widget;
            for (; widgetsIndex > -1; widgetsIndex--) {
                widget = this.grid[widgetsIndex];
                if (widget.$item !== item && GridsterComponent.checkCollisionTwoItemsForSwaping(widget.$item, item)) {
                    return widget;
                }
            }
            return false;
        };
        GridsterComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'gridster',
                        template: "<div class=\"gridster-column\" *ngFor=\"let column of gridColumns; let i = index;\"\r\n     [ngStyle]=\"gridRenderer.getGridColumnStyle(i)\"></div>\r\n<div class=\"gridster-row\" *ngFor=\"let row of gridRows; let i = index;\"\r\n     [ngStyle]=\"gridRenderer.getGridRowStyle(i)\"></div>\r\n<ng-content></ng-content>\r\n<gridster-preview class=\"gridster-preview\"></gridster-preview>\r\n",
                        encapsulation: core.ViewEncapsulation.None,
                        styles: ["gridster{position:relative;box-sizing:border-box;background:grey;width:100%;height:100%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:block}gridster.fit{overflow-x:hidden;overflow-y:hidden}gridster.scrollVertical{overflow-x:hidden;overflow-y:auto}gridster.scrollHorizontal{overflow-x:auto;overflow-y:hidden}gridster.fixed{overflow:auto}gridster.mobile{overflow-x:hidden;overflow-y:auto}gridster.mobile gridster-item{position:relative}gridster .gridster-column,gridster .gridster-row{position:absolute;display:none;transition:.3s;box-sizing:border-box}gridster.display-grid .gridster-column,gridster.display-grid .gridster-row{display:block}gridster .gridster-column{border-left:1px solid #fff;border-right:1px solid #fff}gridster .gridster-row{border-top:1px solid #fff;border-bottom:1px solid #fff}"]
                    }] }
        ];
        /** @nocollapse */
        GridsterComponent.ctorParameters = function () { return [
            { type: core.ElementRef, decorators: [{ type: core.Inject, args: [core.ElementRef,] }] },
            { type: core.Renderer2, decorators: [{ type: core.Inject, args: [core.Renderer2,] }] },
            { type: core.ChangeDetectorRef, decorators: [{ type: core.Inject, args: [core.ChangeDetectorRef,] }] },
            { type: core.NgZone, decorators: [{ type: core.Inject, args: [core.NgZone,] }] }
        ]; };
        GridsterComponent.propDecorators = {
            options: [{ type: core.Input }]
        };
        return GridsterComponent;
    }());
    if (false) {
        /** @type {?} */
        GridsterComponent.prototype.options;
        /** @type {?} */
        GridsterComponent.prototype.calculateLayoutDebounce;
        /** @type {?} */
        GridsterComponent.prototype.movingItem;
        /** @type {?} */
        GridsterComponent.prototype.previewStyle;
        /** @type {?} */
        GridsterComponent.prototype.el;
        /** @type {?} */
        GridsterComponent.prototype.$options;
        /** @type {?} */
        GridsterComponent.prototype.mobile;
        /** @type {?} */
        GridsterComponent.prototype.curWidth;
        /** @type {?} */
        GridsterComponent.prototype.curHeight;
        /** @type {?} */
        GridsterComponent.prototype.grid;
        /** @type {?} */
        GridsterComponent.prototype.columns;
        /** @type {?} */
        GridsterComponent.prototype.rows;
        /** @type {?} */
        GridsterComponent.prototype.curColWidth;
        /** @type {?} */
        GridsterComponent.prototype.curRowHeight;
        /** @type {?} */
        GridsterComponent.prototype.gridColumns;
        /** @type {?} */
        GridsterComponent.prototype.gridRows;
        /** @type {?} */
        GridsterComponent.prototype.windowResize;
        /** @type {?} */
        GridsterComponent.prototype.dragInProgress;
        /** @type {?} */
        GridsterComponent.prototype.emptyCell;
        /** @type {?} */
        GridsterComponent.prototype.compact;
        /** @type {?} */
        GridsterComponent.prototype.gridRenderer;
        /** @type {?} */
        GridsterComponent.prototype.renderer;
        /** @type {?} */
        GridsterComponent.prototype.cdRef;
        /** @type {?} */
        GridsterComponent.prototype.zone;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @abstract
     */
    var   /**
     * @abstract
     */
    GridsterItemComponentInterface = /** @class */ (function () {
        function GridsterItemComponentInterface() {
        }
        return GridsterItemComponentInterface;
    }());
    if (false) {
        /** @type {?} */
        GridsterItemComponentInterface.prototype.item;
        /** @type {?} */
        GridsterItemComponentInterface.prototype.$item;
        /** @type {?} */
        GridsterItemComponentInterface.prototype.top;
        /** @type {?} */
        GridsterItemComponentInterface.prototype.left;
        /** @type {?} */
        GridsterItemComponentInterface.prototype.width;
        /** @type {?} */
        GridsterItemComponentInterface.prototype.height;
        /** @type {?} */
        GridsterItemComponentInterface.prototype.drag;
        /** @type {?} */
        GridsterItemComponentInterface.prototype.resize;
        /** @type {?} */
        GridsterItemComponentInterface.prototype.notPlaced;
        /** @type {?} */
        GridsterItemComponentInterface.prototype.updateOptions;
        /** @type {?} */
        GridsterItemComponentInterface.prototype.itemChanged;
        /** @type {?} */
        GridsterItemComponentInterface.prototype.setSize;
        /** @type {?} */
        GridsterItemComponentInterface.prototype.checkItemChanges;
        /** @type {?} */
        GridsterItemComponentInterface.prototype.canBeDragged;
        /** @type {?} */
        GridsterItemComponentInterface.prototype.canBeResized;
        /** @type {?} */
        GridsterItemComponentInterface.prototype.el;
        /** @type {?} */
        GridsterItemComponentInterface.prototype.gridster;
        /** @type {?} */
        GridsterItemComponentInterface.prototype.renderer;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GridsterSwap = /** @class */ (function () {
        function GridsterSwap(gridsterItem) {
            this.gridsterItem = gridsterItem;
            this.gridster = gridsterItem.gridster;
        }
        /**
         * @return {?}
         */
        GridsterSwap.prototype.destroy = /**
         * @return {?}
         */
        function () {
            delete this.gridster;
            delete this.gridsterItem;
            delete this.swapedItem;
        };
        /**
         * @return {?}
         */
        GridsterSwap.prototype.swapItems = /**
         * @return {?}
         */
        function () {
            if (this.gridster.$options.swap) {
                this.checkSwapBack();
                this.checkSwap(this.gridsterItem);
            }
        };
        /**
         * @return {?}
         */
        GridsterSwap.prototype.checkSwapBack = /**
         * @return {?}
         */
        function () {
            if (this.swapedItem) {
                /** @type {?} */
                var x = this.swapedItem.$item.x;
                /** @type {?} */
                var y = this.swapedItem.$item.y;
                this.swapedItem.$item.x = this.swapedItem.item.x || 0;
                this.swapedItem.$item.y = this.swapedItem.item.y || 0;
                if (this.gridster.checkCollision(this.swapedItem.$item)) {
                    this.swapedItem.$item.x = x;
                    this.swapedItem.$item.y = y;
                }
                else {
                    this.swapedItem.setSize();
                    this.gridsterItem.$item.x = this.gridsterItem.item.x || 0;
                    this.gridsterItem.$item.y = this.gridsterItem.item.y || 0;
                    this.swapedItem = undefined;
                }
            }
        };
        /**
         * @return {?}
         */
        GridsterSwap.prototype.restoreSwapItem = /**
         * @return {?}
         */
        function () {
            if (this.swapedItem) {
                this.swapedItem.$item.x = this.swapedItem.item.x || 0;
                this.swapedItem.$item.y = this.swapedItem.item.y || 0;
                this.swapedItem.setSize();
                this.swapedItem = undefined;
            }
        };
        /**
         * @return {?}
         */
        GridsterSwap.prototype.setSwapItem = /**
         * @return {?}
         */
        function () {
            if (this.swapedItem) {
                this.swapedItem.checkItemChanges(this.swapedItem.$item, this.swapedItem.item);
                this.swapedItem = undefined;
            }
        };
        /**
         * @param {?} pushedBy
         * @return {?}
         */
        GridsterSwap.prototype.checkSwap = /**
         * @param {?} pushedBy
         * @return {?}
         */
        function (pushedBy) {
            /** @type {?} */
            var gridsterItemCollision;
            if (this.gridster.$options.swapWhileDragging) {
                gridsterItemCollision = this.gridster.checkCollisionForSwaping(pushedBy.$item);
            }
            else {
                gridsterItemCollision = this.gridster.checkCollision(pushedBy.$item);
            }
            if (gridsterItemCollision && gridsterItemCollision !== true && gridsterItemCollision.canBeDragged()) {
                /** @type {?} */
                var gridsterItemCollide = gridsterItemCollision;
                /** @type {?} */
                var copyCollisionX = gridsterItemCollide.$item.x;
                /** @type {?} */
                var copyCollisionY = gridsterItemCollide.$item.y;
                /** @type {?} */
                var copyX = pushedBy.$item.x;
                /** @type {?} */
                var copyY = pushedBy.$item.y;
                gridsterItemCollide.$item.x = pushedBy.item.x || 0;
                gridsterItemCollide.$item.y = pushedBy.item.y || 0;
                pushedBy.$item.x = gridsterItemCollide.item.x || 0;
                pushedBy.$item.y = gridsterItemCollide.item.y || 0;
                if (this.gridster.checkCollision(gridsterItemCollide.$item) || this.gridster.checkCollision(pushedBy.$item)) {
                    pushedBy.$item.x = copyX;
                    pushedBy.$item.y = copyY;
                    gridsterItemCollide.$item.x = copyCollisionX;
                    gridsterItemCollide.$item.y = copyCollisionY;
                }
                else {
                    gridsterItemCollide.setSize();
                    this.swapedItem = gridsterItemCollide;
                    if (this.gridster.$options.swapWhileDragging) {
                        this.gridsterItem.checkItemChanges(this.gridsterItem.$item, this.gridsterItem.item);
                        this.setSwapItem();
                    }
                }
            }
        };
        GridsterSwap.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        GridsterSwap.ctorParameters = function () { return [
            { type: GridsterItemComponentInterface }
        ]; };
        return GridsterSwap;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        GridsterSwap.prototype.swapedItem;
        /**
         * @type {?}
         * @private
         */
        GridsterSwap.prototype.gridsterItem;
        /**
         * @type {?}
         * @private
         */
        GridsterSwap.prototype.gridster;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var scrollSensitivity;
    /** @type {?} */
    var scrollSpeed;
    /** @type {?} */
    var intervalDuration = 50;
    /** @type {?} */
    var gridsterElement;
    /** @type {?} */
    var resizeEvent;
    /** @type {?} */
    var resizeEventType;
    /** @type {?} */
    var intervalE;
    /** @type {?} */
    var intervalW;
    /** @type {?} */
    var intervalN;
    /** @type {?} */
    var intervalS;
    /**
     * @param {?} gridster
     * @param {?} left
     * @param {?} top
     * @param {?} width
     * @param {?} height
     * @param {?} e
     * @param {?} lastMouse
     * @param {?} calculateItemPosition
     * @param {?=} resize
     * @param {?=} resizeEventScrollType
     * @return {?}
     */
    function scroll(gridster, left, top, width, height, e, lastMouse, calculateItemPosition, resize, resizeEventScrollType) {
        scrollSensitivity = gridster.$options.scrollSensitivity;
        scrollSpeed = gridster.$options.scrollSpeed;
        gridsterElement = gridster.el;
        resizeEvent = resize;
        resizeEventType = resizeEventScrollType;
        /** @type {?} */
        var offsetWidth = gridsterElement.offsetWidth;
        /** @type {?} */
        var offsetHeight = gridsterElement.offsetHeight;
        /** @type {?} */
        var offsetLeft = gridsterElement.scrollLeft;
        /** @type {?} */
        var offsetTop = gridsterElement.scrollTop;
        /** @type {?} */
        var elemTopOffset = top - offsetTop;
        /** @type {?} */
        var elemBottomOffset = offsetHeight + offsetTop - top - height;
        if (!gridster.$options.disableScrollVertical) {
            if (lastMouse.clientY < e.clientY && elemBottomOffset < scrollSensitivity) {
                cancelN();
                if ((resizeEvent && resizeEventType && !resizeEventType.s) || intervalS) {
                    return;
                }
                intervalS = startVertical(1, calculateItemPosition, lastMouse);
            }
            else if (lastMouse.clientY > e.clientY && offsetTop > 0 && elemTopOffset < scrollSensitivity) {
                cancelS();
                if ((resizeEvent && resizeEventType && !resizeEventType.n) || intervalN) {
                    return;
                }
                intervalN = startVertical(-1, calculateItemPosition, lastMouse);
            }
            else if (lastMouse.clientY !== e.clientY) {
                cancelVertical();
            }
        }
        /** @type {?} */
        var elemRightOffset = offsetLeft + offsetWidth - left - width;
        /** @type {?} */
        var elemLeftOffset = left - offsetLeft;
        if (!gridster.$options.disableScrollHorizontal) {
            if (lastMouse.clientX < e.clientX && elemRightOffset <= scrollSensitivity) {
                cancelW();
                if ((resizeEvent && resizeEventType && !resizeEventType.e) || intervalE) {
                    return;
                }
                intervalE = startHorizontal(1, calculateItemPosition, lastMouse);
            }
            else if (lastMouse.clientX > e.clientX && offsetLeft > 0 && elemLeftOffset < scrollSensitivity) {
                cancelE();
                if ((resizeEvent && resizeEventType && !resizeEventType.w) || intervalW) {
                    return;
                }
                intervalW = startHorizontal(-1, calculateItemPosition, lastMouse);
            }
            else if (lastMouse.clientX !== e.clientX) {
                cancelHorizontal();
            }
        }
    }
    /**
     * @param {?} sign
     * @param {?} calculateItemPosition
     * @param {?} lastMouse
     * @return {?}
     */
    function startVertical(sign, calculateItemPosition, lastMouse) {
        /** @type {?} */
        var clientY = lastMouse.clientY;
        return setInterval((/**
         * @return {?}
         */
        function () {
            if (!gridsterElement || sign === -1 && gridsterElement.scrollTop - scrollSpeed < 0) {
                cancelVertical();
            }
            gridsterElement.scrollTop += sign * scrollSpeed;
            clientY += sign * scrollSpeed;
            calculateItemPosition({ clientX: lastMouse.clientX, clientY: clientY });
        }), intervalDuration);
    }
    /**
     * @param {?} sign
     * @param {?} calculateItemPosition
     * @param {?} lastMouse
     * @return {?}
     */
    function startHorizontal(sign, calculateItemPosition, lastMouse) {
        /** @type {?} */
        var clientX = lastMouse.clientX;
        return setInterval((/**
         * @return {?}
         */
        function () {
            if (!gridsterElement || sign === -1 && gridsterElement.scrollLeft - scrollSpeed < 0) {
                cancelHorizontal();
            }
            gridsterElement.scrollLeft += sign * scrollSpeed;
            clientX += sign * scrollSpeed;
            calculateItemPosition({ clientX: clientX, clientY: lastMouse.clientY });
        }), intervalDuration);
    }
    /**
     * @return {?}
     */
    function cancelScroll() {
        cancelHorizontal();
        cancelVertical();
        gridsterElement = undefined;
    }
    /**
     * @return {?}
     */
    function cancelHorizontal() {
        cancelE();
        cancelW();
    }
    /**
     * @return {?}
     */
    function cancelVertical() {
        cancelN();
        cancelS();
    }
    /**
     * @return {?}
     */
    function cancelE() {
        if (intervalE) {
            clearInterval(intervalE);
            intervalE = 0;
        }
    }
    /**
     * @return {?}
     */
    function cancelW() {
        if (intervalW) {
            clearInterval(intervalW);
            intervalW = 0;
        }
    }
    /**
     * @return {?}
     */
    function cancelS() {
        if (intervalS) {
            clearInterval(intervalS);
            intervalS = 0;
        }
    }
    /**
     * @return {?}
     */
    function cancelN() {
        if (intervalN) {
            clearInterval(intervalN);
            intervalN = 0;
        }
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GridsterPush = /** @class */ (function () {
        function GridsterPush(gridsterItem) {
            this.pushedItems = [];
            this.pushedItemsTemp = [];
            this.pushedItemsTempPath = [];
            this.pushedItemsPath = [];
            gridsterItem['id'] = this.generateTempRandomId();
            this.gridsterItem = gridsterItem;
            this.gridster = gridsterItem.gridster;
            this.tryPattern = {
                fromEast: [this.tryWest, this.trySouth, this.tryNorth, this.tryEast],
                fromWest: [this.tryEast, this.trySouth, this.tryNorth, this.tryWest],
                fromNorth: [this.trySouth, this.tryEast, this.tryWest, this.tryNorth],
                fromSouth: [this.tryNorth, this.tryEast, this.tryWest, this.trySouth]
            };
            this.fromSouth = 'fromSouth';
            this.fromNorth = 'fromNorth';
            this.fromEast = 'fromEast';
            this.fromWest = 'fromWest';
        }
        /**
         * @return {?}
         */
        GridsterPush.prototype.destroy = /**
         * @return {?}
         */
        function () {
            delete this.gridster;
            delete this.gridsterItem;
        };
        /**
         * @param {?} direction
         * @param {?=} disable
         * @return {?}
         */
        GridsterPush.prototype.pushItems = /**
         * @param {?} direction
         * @param {?=} disable
         * @return {?}
         */
        function (direction, disable) {
            if (this.gridster.$options.pushItems && !disable) {
                this.pushedItemsOrder = [];
                /** @type {?} */
                var pushed = this.push(this.gridsterItem, direction);
                if (!pushed) {
                    this.restoreTempItems();
                }
                this.pushedItemsOrder = [];
                this.pushedItemsTemp = [];
                this.pushedItemsTempPath = [];
                this.cleanTempIds();
                return pushed;
            }
            else {
                return false;
            }
        };
        /**
         * @return {?}
         */
        GridsterPush.prototype.restoreTempItems = /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var i = this.pushedItemsTemp.length - 1;
            for (; i > -1; i--) {
                this.removeFromTempPushed(this.pushedItemsTemp[i]);
            }
        };
        /**
         * @return {?}
         */
        GridsterPush.prototype.restoreItems = /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var i = 0;
            /** @type {?} */
            var l = this.pushedItems.length;
            /** @type {?} */
            var pushedItem;
            for (; i < l; i++) {
                pushedItem = this.pushedItems[i];
                pushedItem.$item.x = pushedItem.item.x || 0;
                pushedItem.$item.y = pushedItem.item.y || 0;
                pushedItem.setSize();
            }
            this.pushedItems = [];
            this.pushedItemsPath = [];
        };
        /**
         * @return {?}
         */
        GridsterPush.prototype.setPushedItems = /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var i = 0;
            /** @type {?} */
            var l = this.pushedItems.length;
            /** @type {?} */
            var pushedItem;
            for (; i < l; i++) {
                pushedItem = this.pushedItems[i];
                pushedItem.checkItemChanges(pushedItem.$item, pushedItem.item);
            }
            this.pushedItems = [];
            this.pushedItemsPath = [];
        };
        /**
         * @return {?}
         */
        GridsterPush.prototype.checkPushBack = /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var i = this.pushedItems.length - 1;
            /** @type {?} */
            var change = false;
            for (; i > -1; i--) {
                if (this.checkPushedItem(this.pushedItems[i], i)) {
                    change = true;
                }
            }
            if (change) {
                this.checkPushBack();
            }
        };
        /**
         * @private
         * @return {?}
         */
        GridsterPush.prototype.generateTempRandomId = /**
         * @private
         * @return {?}
         */
        function () {
            return Math.random().toString(36).replace(/[^a-z]+/g, '').substr(2, 10);
        };
        /**
         * @private
         * @return {?}
         */
        GridsterPush.prototype.cleanTempIds = /**
         * @private
         * @return {?}
         */
        function () {
            /** @type {?} */
            var allItemsWithIds = this.gridster.grid.filter((/**
             * @param {?} el
             * @return {?}
             */
            function (el) { return el['id']; }));
            allItemsWithIds.forEach((/**
             * @param {?} el
             * @return {?}
             */
            function (el) { return delete el['id']; }));
        };
        /**
         * @private
         * @param {?} gridsterItem
         * @param {?} direction
         * @return {?}
         */
        GridsterPush.prototype.push = /**
         * @private
         * @param {?} gridsterItem
         * @param {?} direction
         * @return {?}
         */
        function (gridsterItem, direction) {
            if (this.gridster.checkGridCollision(gridsterItem.$item)) {
                return false;
            }
            if (direction === '') {
                return false;
            }
            /** @type {?} */
            var a = this.gridster.findItemsWithItem(gridsterItem.$item);
            /** @type {?} */
            var i = a.length - 1;
            /** @type {?} */
            var itemCollision;
            /** @type {?} */
            var makePush = true;
            /** @type {?} */
            var b = [];
            for (; i > -1; i--) {
                itemCollision = a[i];
                if (!itemCollision['id']) {
                    itemCollision['id'] = this.generateTempRandomId();
                }
                if (itemCollision === this.gridsterItem) {
                    makePush = false;
                    break;
                }
                if (!itemCollision.canBeDragged()) {
                    makePush = false;
                    break;
                }
                /** @type {?} */
                var compare = this.pushedItemsTemp.find((/**
                 * @param {?} el
                 * @return {?}
                 */
                function (el) {
                    return el['id'] === itemCollision['id'];
                }));
                if (compare) {
                    makePush = false;
                    break;
                }
                if (this.tryPattern[direction][0].call(this, itemCollision, gridsterItem)) {
                    this.pushedItemsOrder.push(itemCollision);
                    b.push(itemCollision);
                }
                else if (this.tryPattern[direction][1].call(this, itemCollision, gridsterItem)) {
                    this.pushedItemsOrder.push(itemCollision);
                    b.push(itemCollision);
                }
                else if (this.tryPattern[direction][2].call(this, itemCollision, gridsterItem)) {
                    this.pushedItemsOrder.push(itemCollision);
                    b.push(itemCollision);
                }
                else if (this.tryPattern[direction][3].call(this, itemCollision, gridsterItem)) {
                    this.pushedItemsOrder.push(itemCollision);
                    b.push(itemCollision);
                }
                else {
                    makePush = false;
                    break;
                }
            }
            if (!makePush) {
                i = this.pushedItemsOrder.lastIndexOf(b[0]);
                if (i > -1) {
                    /** @type {?} */
                    var j = this.pushedItemsOrder.length - 1;
                    for (; j >= i; j--) {
                        itemCollision = this.pushedItemsOrder[j];
                        this.pushedItemsOrder.pop();
                        this.removeFromTempPushed(itemCollision);
                        this.removeFromPushedItem(itemCollision);
                    }
                }
            }
            return makePush;
        };
        /**
         * @private
         * @param {?} gridsterItemCollide
         * @param {?} gridsterItem
         * @return {?}
         */
        GridsterPush.prototype.trySouth = /**
         * @private
         * @param {?} gridsterItemCollide
         * @param {?} gridsterItem
         * @return {?}
         */
        function (gridsterItemCollide, gridsterItem) {
            if (!this.gridster.$options.pushDirections.south) {
                return false;
            }
            this.addToTempPushed(gridsterItemCollide);
            gridsterItemCollide.$item.y = gridsterItem.$item.y + gridsterItem.$item.rows;
            if (this.push(gridsterItemCollide, this.fromNorth)) {
                gridsterItemCollide.setSize();
                this.addToPushed(gridsterItemCollide);
                return true;
            }
            else {
                this.removeFromTempPushed(gridsterItemCollide);
            }
            return false;
        };
        /**
         * @private
         * @param {?} gridsterItemCollide
         * @param {?} gridsterItem
         * @return {?}
         */
        GridsterPush.prototype.tryNorth = /**
         * @private
         * @param {?} gridsterItemCollide
         * @param {?} gridsterItem
         * @return {?}
         */
        function (gridsterItemCollide, gridsterItem) {
            if (!this.gridster.$options.pushDirections.north) {
                return false;
            }
            this.addToTempPushed(gridsterItemCollide);
            gridsterItemCollide.$item.y = gridsterItem.$item.y - gridsterItemCollide.$item.rows;
            if (this.push(gridsterItemCollide, this.fromSouth)) {
                gridsterItemCollide.setSize();
                this.addToPushed(gridsterItemCollide);
                return true;
            }
            else {
                this.removeFromTempPushed(gridsterItemCollide);
            }
            return false;
        };
        /**
         * @private
         * @param {?} gridsterItemCollide
         * @param {?} gridsterItem
         * @return {?}
         */
        GridsterPush.prototype.tryEast = /**
         * @private
         * @param {?} gridsterItemCollide
         * @param {?} gridsterItem
         * @return {?}
         */
        function (gridsterItemCollide, gridsterItem) {
            if (!this.gridster.$options.pushDirections.east) {
                return false;
            }
            this.addToTempPushed(gridsterItemCollide);
            gridsterItemCollide.$item.x = gridsterItem.$item.x + gridsterItem.$item.cols;
            if (this.push(gridsterItemCollide, this.fromWest)) {
                gridsterItemCollide.setSize();
                this.addToPushed(gridsterItemCollide);
                return true;
            }
            else {
                this.removeFromTempPushed(gridsterItemCollide);
            }
            return false;
        };
        /**
         * @private
         * @param {?} gridsterItemCollide
         * @param {?} gridsterItem
         * @return {?}
         */
        GridsterPush.prototype.tryWest = /**
         * @private
         * @param {?} gridsterItemCollide
         * @param {?} gridsterItem
         * @return {?}
         */
        function (gridsterItemCollide, gridsterItem) {
            if (!this.gridster.$options.pushDirections.west) {
                return false;
            }
            this.addToTempPushed(gridsterItemCollide);
            gridsterItemCollide.$item.x = gridsterItem.$item.x - gridsterItemCollide.$item.cols;
            if (this.push(gridsterItemCollide, this.fromEast)) {
                gridsterItemCollide.setSize();
                this.addToPushed(gridsterItemCollide);
                return true;
            }
            else {
                this.removeFromTempPushed(gridsterItemCollide);
            }
            return false;
        };
        /**
         * @private
         * @param {?} gridsterItem
         * @return {?}
         */
        GridsterPush.prototype.addToTempPushed = /**
         * @private
         * @param {?} gridsterItem
         * @return {?}
         */
        function (gridsterItem) {
            /** @type {?} */
            var i = this.pushedItemsTemp.indexOf(gridsterItem);
            if (i === -1) {
                i = this.pushedItemsTemp.push(gridsterItem) - 1;
                this.pushedItemsTempPath[i] = [];
            }
            this.pushedItemsTempPath[i].push({ x: gridsterItem.$item.x, y: gridsterItem.$item.y });
        };
        /**
         * @private
         * @param {?} gridsterItem
         * @return {?}
         */
        GridsterPush.prototype.removeFromTempPushed = /**
         * @private
         * @param {?} gridsterItem
         * @return {?}
         */
        function (gridsterItem) {
            /** @type {?} */
            var i = this.pushedItemsTemp.indexOf(gridsterItem);
            /** @type {?} */
            var tempPosition = this.pushedItemsTempPath[i].pop();
            if (!tempPosition) {
                return;
            }
            gridsterItem.$item.x = tempPosition.x;
            gridsterItem.$item.y = tempPosition.y;
            gridsterItem.setSize();
            if (!this.pushedItemsTempPath[i].length) {
                this.pushedItemsTemp.splice(i, 1);
                this.pushedItemsTempPath.splice(i, 1);
            }
        };
        /**
         * @private
         * @param {?} gridsterItem
         * @return {?}
         */
        GridsterPush.prototype.addToPushed = /**
         * @private
         * @param {?} gridsterItem
         * @return {?}
         */
        function (gridsterItem) {
            if (this.pushedItems.indexOf(gridsterItem) < 0) {
                this.pushedItems.push(gridsterItem);
                this.pushedItemsPath.push([{ x: gridsterItem.item.x || 0, y: gridsterItem.item.y || 0 },
                    { x: gridsterItem.$item.x, y: gridsterItem.$item.y }]);
            }
            else {
                /** @type {?} */
                var i = this.pushedItems.indexOf(gridsterItem);
                this.pushedItemsPath[i].push({ x: gridsterItem.$item.x, y: gridsterItem.$item.y });
            }
        };
        /**
         * @private
         * @param {?} i
         * @return {?}
         */
        GridsterPush.prototype.removeFromPushed = /**
         * @private
         * @param {?} i
         * @return {?}
         */
        function (i) {
            if (i > -1) {
                this.pushedItems.splice(i, 1);
                this.pushedItemsPath.splice(i, 1);
            }
        };
        /**
         * @private
         * @param {?} gridsterItem
         * @return {?}
         */
        GridsterPush.prototype.removeFromPushedItem = /**
         * @private
         * @param {?} gridsterItem
         * @return {?}
         */
        function (gridsterItem) {
            /** @type {?} */
            var i = this.pushedItems.indexOf(gridsterItem);
            if (i > -1) {
                this.pushedItemsPath[i].pop();
                if (!this.pushedItemsPath.length) {
                    this.pushedItems.splice(i, 1);
                    this.pushedItemsPath.splice(i, 1);
                }
            }
        };
        /**
         * @private
         * @param {?} pushedItem
         * @param {?} i
         * @return {?}
         */
        GridsterPush.prototype.checkPushedItem = /**
         * @private
         * @param {?} pushedItem
         * @param {?} i
         * @return {?}
         */
        function (pushedItem, i) {
            /** @type {?} */
            var path = this.pushedItemsPath[i];
            /** @type {?} */
            var j = path.length - 2;
            /** @type {?} */
            var lastPosition;
            /** @type {?} */
            var x;
            /** @type {?} */
            var y;
            /** @type {?} */
            var change = false;
            for (; j > -1; j--) {
                lastPosition = path[j];
                x = pushedItem.$item.x;
                y = pushedItem.$item.y;
                pushedItem.$item.x = lastPosition.x;
                pushedItem.$item.y = lastPosition.y;
                if (!this.gridster.findItemWithItem(pushedItem.$item)) {
                    pushedItem.setSize();
                    path.splice(j + 1, path.length - j - 1);
                    change = true;
                }
                else {
                    pushedItem.$item.x = x;
                    pushedItem.$item.y = y;
                }
            }
            if (path.length < 2) {
                this.removeFromPushed(i);
            }
            return change;
        };
        GridsterPush.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        GridsterPush.ctorParameters = function () { return [
            { type: GridsterItemComponentInterface }
        ]; };
        return GridsterPush;
    }());
    if (false) {
        /** @type {?} */
        GridsterPush.prototype.fromSouth;
        /** @type {?} */
        GridsterPush.prototype.fromNorth;
        /** @type {?} */
        GridsterPush.prototype.fromEast;
        /** @type {?} */
        GridsterPush.prototype.fromWest;
        /**
         * @type {?}
         * @private
         */
        GridsterPush.prototype.pushedItems;
        /**
         * @type {?}
         * @private
         */
        GridsterPush.prototype.pushedItemsTemp;
        /**
         * @type {?}
         * @private
         */
        GridsterPush.prototype.pushedItemsTempPath;
        /**
         * @type {?}
         * @private
         */
        GridsterPush.prototype.pushedItemsPath;
        /**
         * @type {?}
         * @private
         */
        GridsterPush.prototype.gridsterItem;
        /**
         * @type {?}
         * @private
         */
        GridsterPush.prototype.gridster;
        /**
         * @type {?}
         * @private
         */
        GridsterPush.prototype.pushedItemsOrder;
        /**
         * @type {?}
         * @private
         */
        GridsterPush.prototype.tryPattern;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GridsterDraggable = /** @class */ (function () {
        function GridsterDraggable(gridsterItem, gridster, zone) {
            this.zone = zone;
            this.collision = false;
            this.gridsterItem = gridsterItem;
            this.gridster = gridster;
            this.lastMouse = {
                clientX: 0,
                clientY: 0
            };
            this.path = [];
        }
        /**
         * @return {?}
         */
        GridsterDraggable.prototype.destroy = /**
         * @return {?}
         */
        function () {
            if (this.gridster.previewStyle) {
                this.gridster.previewStyle(true);
            }
            delete this.gridsterItem;
            delete this.gridster;
            delete this.collision;
            if (this.mousedown) {
                this.mousedown();
                this.touchstart();
            }
        };
        /**
         * @param {?} e
         * @return {?}
         */
        GridsterDraggable.prototype.dragStart = /**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            var _this = this;
            switch (e.which) {
                case 1:
                    // left mouse button
                    break;
                case 2:
                case 3:
                    // right or middle mouse button
                    return;
            }
            if (this.gridster.options.draggable && this.gridster.options.draggable.start) {
                this.gridster.options.draggable.start(this.gridsterItem.item, this.gridsterItem, e);
            }
            e.stopPropagation();
            e.preventDefault();
            this.dragFunction = this.dragMove.bind(this);
            this.dragStopFunction = this.dragStop.bind(this);
            this.zone.runOutsideAngular((/**
             * @return {?}
             */
            function () {
                _this.mousemove = _this.gridsterItem.renderer.listen('document', 'mousemove', _this.dragFunction);
                _this.touchmove = _this.gridster.renderer.listen(_this.gridster.el, 'touchmove', _this.dragFunction);
            }));
            this.mouseup = this.gridsterItem.renderer.listen('document', 'mouseup', this.dragStopFunction);
            this.mouseleave = this.gridsterItem.renderer.listen('document', 'mouseleave', this.dragStopFunction);
            this.cancelOnBlur = this.gridsterItem.renderer.listen('window', 'blur', this.dragStopFunction);
            this.touchend = this.gridsterItem.renderer.listen('document', 'touchend', this.dragStopFunction);
            this.touchcancel = this.gridsterItem.renderer.listen('document', 'touchcancel', this.dragStopFunction);
            this.gridsterItem.renderer.addClass(this.gridsterItem.el, 'gridster-item-moving');
            this.margin = this.gridster.$options.margin;
            this.offsetLeft = this.gridster.el.scrollLeft - this.gridster.el.offsetLeft;
            this.offsetTop = this.gridster.el.scrollTop - this.gridster.el.offsetTop;
            this.left = this.gridsterItem.left - this.margin;
            this.top = this.gridsterItem.top - this.margin;
            this.width = this.gridsterItem.width;
            this.height = this.gridsterItem.height;
            this.diffLeft = e.clientX + this.offsetLeft - this.margin - this.left;
            this.diffTop = e.clientY + this.offsetTop - this.margin - this.top;
            this.gridster.movingItem = this.gridsterItem.$item;
            this.gridster.previewStyle(true);
            this.push = new GridsterPush(this.gridsterItem);
            this.swap = new GridsterSwap(this.gridsterItem);
            this.gridster.dragInProgress = true;
            this.gridster.updateGrid();
            this.path.push({ x: this.gridsterItem.item.x || 0, y: this.gridsterItem.item.y || 0 });
        };
        /**
         * @param {?} e
         * @return {?}
         */
        GridsterDraggable.prototype.dragMove = /**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            e.stopPropagation();
            e.preventDefault();
            GridsterUtils.checkTouchEvent(e);
            this.offsetLeft = this.gridster.el.scrollLeft - this.gridster.el.offsetLeft;
            this.offsetTop = this.gridster.el.scrollTop - this.gridster.el.offsetTop;
            scroll(this.gridster, this.left, this.top, this.width, this.height, e, this.lastMouse, this.calculateItemPositionFromMousePosition.bind(this));
            this.calculateItemPositionFromMousePosition(e);
        };
        /**
         * @param {?} e
         * @return {?}
         */
        GridsterDraggable.prototype.calculateItemPositionFromMousePosition = /**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            var _this = this;
            this.left = e.clientX + this.offsetLeft - this.diffLeft;
            this.top = e.clientY + this.offsetTop - this.diffTop;
            this.calculateItemPosition();
            this.lastMouse.clientX = e.clientX;
            this.lastMouse.clientY = e.clientY;
            this.zone.run((/**
             * @return {?}
             */
            function () {
                _this.gridster.updateGrid();
            }));
        };
        /**
         * @param {?} e
         * @return {?}
         */
        GridsterDraggable.prototype.dragStop = /**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            var _this = this;
            e.stopPropagation();
            e.preventDefault();
            cancelScroll();
            this.cancelOnBlur();
            this.mousemove();
            this.mouseup();
            this.mouseleave();
            this.touchmove();
            this.touchend();
            this.touchcancel();
            this.gridsterItem.renderer.removeClass(this.gridsterItem.el, 'gridster-item-moving');
            this.gridster.dragInProgress = false;
            this.gridster.updateGrid();
            this.path = [];
            if (this.gridster.options.draggable && this.gridster.options.draggable.stop) {
                Promise.resolve(this.gridster.options.draggable.stop(this.gridsterItem.item, this.gridsterItem, e))
                    .then(this.makeDrag.bind(this), this.cancelDrag.bind(this));
            }
            else {
                this.makeDrag();
            }
            setTimeout((/**
             * @return {?}
             */
            function () {
                if (_this.gridster) {
                    _this.gridster.movingItem = null;
                    _this.gridster.previewStyle(true);
                }
            }));
        };
        /**
         * @return {?}
         */
        GridsterDraggable.prototype.cancelDrag = /**
         * @return {?}
         */
        function () {
            this.gridsterItem.$item.x = this.gridsterItem.item.x || 0;
            this.gridsterItem.$item.y = this.gridsterItem.item.y || 0;
            this.gridsterItem.setSize();
            if (this.push) {
                this.push.restoreItems();
            }
            if (this.swap) {
                this.swap.restoreSwapItem();
            }
            if (this.push) {
                this.push.destroy();
                delete this.push;
            }
            if (this.swap) {
                this.swap.destroy();
                delete this.swap;
            }
        };
        /**
         * @return {?}
         */
        GridsterDraggable.prototype.makeDrag = /**
         * @return {?}
         */
        function () {
            if (this.gridster.$options.draggable.dropOverItems && this.gridster.options.draggable
                && this.gridster.options.draggable.dropOverItemsCallback
                && this.collision && this.collision !== true && this.collision.$item) {
                this.gridster.options.draggable.dropOverItemsCallback(this.gridsterItem.item, this.collision.item, this.gridster);
            }
            this.collision = false;
            this.gridsterItem.setSize();
            this.gridsterItem.checkItemChanges(this.gridsterItem.$item, this.gridsterItem.item);
            if (this.push) {
                this.push.setPushedItems();
            }
            if (this.swap) {
                this.swap.setSwapItem();
            }
            if (this.push) {
                this.push.destroy();
                delete this.push;
            }
            if (this.swap) {
                this.swap.destroy();
                delete this.swap;
            }
        };
        /**
         * @return {?}
         */
        GridsterDraggable.prototype.calculateItemPosition = /**
         * @return {?}
         */
        function () {
            this.gridster.movingItem = this.gridsterItem.$item;
            this.positionX = this.gridster.pixelsToPositionX(this.left, Math.round);
            this.positionY = this.gridster.pixelsToPositionY(this.top, Math.round);
            this.positionXBackup = this.gridsterItem.$item.x;
            this.positionYBackup = this.gridsterItem.$item.y;
            this.gridsterItem.$item.x = this.positionX;
            if (this.gridster.checkGridCollision(this.gridsterItem.$item)) {
                this.gridsterItem.$item.x = this.positionXBackup;
            }
            this.gridsterItem.$item.y = this.positionY;
            if (this.gridster.checkGridCollision(this.gridsterItem.$item)) {
                this.gridsterItem.$item.y = this.positionYBackup;
            }
            this.gridster.gridRenderer.setCellPosition(this.gridsterItem.renderer, this.gridsterItem.el, this.left, this.top);
            if (this.positionXBackup !== this.gridsterItem.$item.x || this.positionYBackup !== this.gridsterItem.$item.y) {
                /** @type {?} */
                var lastPosition = this.path[this.path.length - 1];
                /** @type {?} */
                var direction = '';
                if (lastPosition.x < this.gridsterItem.$item.x) {
                    direction = this.push.fromWest;
                }
                else if (lastPosition.x > this.gridsterItem.$item.x) {
                    direction = this.push.fromEast;
                }
                else if (lastPosition.y < this.gridsterItem.$item.y) {
                    direction = this.push.fromNorth;
                }
                else if (lastPosition.y > this.gridsterItem.$item.y) {
                    direction = this.push.fromSouth;
                }
                this.push.pushItems(direction, this.gridster.$options.disablePushOnDrag);
                this.swap.swapItems();
                this.collision = this.gridster.checkCollision(this.gridsterItem.$item);
                if (this.collision) {
                    this.gridsterItem.$item.x = this.positionXBackup;
                    this.gridsterItem.$item.y = this.positionYBackup;
                    if (this.gridster.$options.draggable.dropOverItems && this.collision !== true && this.collision.$item) {
                        this.gridster.movingItem = null;
                    }
                }
                else {
                    this.path.push({ x: this.gridsterItem.$item.x, y: this.gridsterItem.$item.y });
                }
                this.push.checkPushBack();
            }
            this.gridster.previewStyle(true);
        };
        /**
         * @return {?}
         */
        GridsterDraggable.prototype.toggle = /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var enableDrag = this.gridsterItem.canBeDragged();
            if (!this.enabled && enableDrag) {
                this.enabled = !this.enabled;
                this.dragStartFunction = this.dragStartDelay.bind(this);
                this.mousedown = this.gridsterItem.renderer.listen(this.gridsterItem.el, 'mousedown', this.dragStartFunction);
                this.touchstart = this.gridsterItem.renderer.listen(this.gridsterItem.el, 'touchstart', this.dragStartFunction);
            }
            else if (this.enabled && !enableDrag) {
                this.enabled = !this.enabled;
                this.mousedown();
                this.touchstart();
            }
        };
        /**
         * @param {?} e
         * @return {?}
         */
        GridsterDraggable.prototype.dragStartDelay = /**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            var _this = this;
            if (e.target.hasAttribute('class') && e.target.getAttribute('class').split(' ').indexOf('gridster-item-resizable-handler') > -1) {
                return;
            }
            if (GridsterUtils.checkContentClassForEvent(this.gridster, e)) {
                return;
            }
            GridsterUtils.checkTouchEvent(e);
            if (!this.gridster.$options.draggable.delayStart) {
                this.dragStart(e);
                return;
            }
            /** @type {?} */
            var timeout = setTimeout((/**
             * @return {?}
             */
            function () {
                _this.dragStart(e);
                cancelDrag();
            }), this.gridster.$options.draggable.delayStart);
            /** @type {?} */
            var cancelMouse = this.gridsterItem.renderer.listen('document', 'mouseup', cancelDrag);
            /** @type {?} */
            var cancelMouseLeave = this.gridsterItem.renderer.listen('document', 'mouseleave', cancelDrag);
            /** @type {?} */
            var cancelOnBlur = this.gridsterItem.renderer.listen('window', 'blur', cancelDrag);
            /** @type {?} */
            var cancelTouchMove = this.gridsterItem.renderer.listen('document', 'touchmove', cancelMove);
            /** @type {?} */
            var cancelTouchEnd = this.gridsterItem.renderer.listen('document', 'touchend', cancelDrag);
            /** @type {?} */
            var cancelTouchCancel = this.gridsterItem.renderer.listen('document', 'touchcancel', cancelDrag);
            /**
             * @param {?} eventMove
             * @return {?}
             */
            function cancelMove(eventMove) {
                GridsterUtils.checkTouchEvent(eventMove);
                if (Math.abs(eventMove.clientX - e.clientX) > 9 || Math.abs(eventMove.clientY - e.clientY) > 9) {
                    cancelDrag();
                }
            }
            /**
             * @return {?}
             */
            function cancelDrag() {
                clearTimeout(timeout);
                cancelOnBlur();
                cancelMouse();
                cancelMouseLeave();
                cancelTouchMove();
                cancelTouchEnd();
                cancelTouchCancel();
            }
        };
        GridsterDraggable.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        GridsterDraggable.ctorParameters = function () { return [
            { type: GridsterItemComponentInterface },
            { type: GridsterComponentInterface },
            { type: core.NgZone }
        ]; };
        return GridsterDraggable;
    }());
    if (false) {
        /** @type {?} */
        GridsterDraggable.prototype.gridsterItem;
        /** @type {?} */
        GridsterDraggable.prototype.gridster;
        /** @type {?} */
        GridsterDraggable.prototype.lastMouse;
        /** @type {?} */
        GridsterDraggable.prototype.offsetLeft;
        /** @type {?} */
        GridsterDraggable.prototype.offsetTop;
        /** @type {?} */
        GridsterDraggable.prototype.margin;
        /** @type {?} */
        GridsterDraggable.prototype.diffTop;
        /** @type {?} */
        GridsterDraggable.prototype.diffLeft;
        /** @type {?} */
        GridsterDraggable.prototype.top;
        /** @type {?} */
        GridsterDraggable.prototype.left;
        /** @type {?} */
        GridsterDraggable.prototype.height;
        /** @type {?} */
        GridsterDraggable.prototype.width;
        /** @type {?} */
        GridsterDraggable.prototype.positionX;
        /** @type {?} */
        GridsterDraggable.prototype.positionY;
        /** @type {?} */
        GridsterDraggable.prototype.positionXBackup;
        /** @type {?} */
        GridsterDraggable.prototype.positionYBackup;
        /** @type {?} */
        GridsterDraggable.prototype.enabled;
        /** @type {?} */
        GridsterDraggable.prototype.dragStartFunction;
        /** @type {?} */
        GridsterDraggable.prototype.dragFunction;
        /** @type {?} */
        GridsterDraggable.prototype.dragStopFunction;
        /** @type {?} */
        GridsterDraggable.prototype.mousemove;
        /** @type {?} */
        GridsterDraggable.prototype.mouseup;
        /** @type {?} */
        GridsterDraggable.prototype.mouseleave;
        /** @type {?} */
        GridsterDraggable.prototype.cancelOnBlur;
        /** @type {?} */
        GridsterDraggable.prototype.touchmove;
        /** @type {?} */
        GridsterDraggable.prototype.touchend;
        /** @type {?} */
        GridsterDraggable.prototype.touchcancel;
        /** @type {?} */
        GridsterDraggable.prototype.mousedown;
        /** @type {?} */
        GridsterDraggable.prototype.touchstart;
        /** @type {?} */
        GridsterDraggable.prototype.push;
        /** @type {?} */
        GridsterDraggable.prototype.swap;
        /** @type {?} */
        GridsterDraggable.prototype.path;
        /** @type {?} */
        GridsterDraggable.prototype.collision;
        /**
         * @type {?}
         * @private
         */
        GridsterDraggable.prototype.zone;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GridsterPushResize = /** @class */ (function () {
        function GridsterPushResize(gridsterItem) {
            this.pushedItems = [];
            this.pushedItemsPath = [];
            this.gridsterItem = gridsterItem;
            this.gridster = gridsterItem.gridster;
            this.tryPattern = {
                fromEast: this.tryWest,
                fromWest: this.tryEast,
                fromNorth: this.trySouth,
                fromSouth: this.tryNorth
            };
            this.fromSouth = 'fromSouth';
            this.fromNorth = 'fromNorth';
            this.fromEast = 'fromEast';
            this.fromWest = 'fromWest';
        }
        /**
         * @return {?}
         */
        GridsterPushResize.prototype.destroy = /**
         * @return {?}
         */
        function () {
            delete this.gridster;
            delete this.gridsterItem;
        };
        /**
         * @param {?} direction
         * @return {?}
         */
        GridsterPushResize.prototype.pushItems = /**
         * @param {?} direction
         * @return {?}
         */
        function (direction) {
            if (this.gridster.$options.pushResizeItems) {
                return this.push(this.gridsterItem, direction);
            }
            else {
                return false;
            }
        };
        /**
         * @return {?}
         */
        GridsterPushResize.prototype.restoreItems = /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var i = 0;
            /** @type {?} */
            var l = this.pushedItems.length;
            /** @type {?} */
            var pushedItem;
            for (; i < l; i++) {
                pushedItem = this.pushedItems[i];
                pushedItem.$item.x = pushedItem.item.x || 0;
                pushedItem.$item.y = pushedItem.item.y || 0;
                pushedItem.$item.cols = pushedItem.item.cols || 1;
                pushedItem.$item.row = pushedItem.item.row || 1;
                pushedItem.setSize();
            }
            this.pushedItems = [];
            this.pushedItemsPath = [];
        };
        /**
         * @return {?}
         */
        GridsterPushResize.prototype.setPushedItems = /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var i = 0;
            /** @type {?} */
            var l = this.pushedItems.length;
            /** @type {?} */
            var pushedItem;
            for (; i < l; i++) {
                pushedItem = this.pushedItems[i];
                pushedItem.checkItemChanges(pushedItem.$item, pushedItem.item);
            }
            this.pushedItems = [];
            this.pushedItemsPath = [];
        };
        /**
         * @return {?}
         */
        GridsterPushResize.prototype.checkPushBack = /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var i = this.pushedItems.length - 1;
            /** @type {?} */
            var change = false;
            for (; i > -1; i--) {
                if (this.checkPushedItem(this.pushedItems[i], i)) {
                    change = true;
                }
            }
            if (change) {
                this.checkPushBack();
            }
        };
        /**
         * @private
         * @param {?} gridsterItem
         * @param {?} direction
         * @return {?}
         */
        GridsterPushResize.prototype.push = /**
         * @private
         * @param {?} gridsterItem
         * @param {?} direction
         * @return {?}
         */
        function (gridsterItem, direction) {
            /** @type {?} */
            var gridsterItemCollision = this.gridster.checkCollision(gridsterItem.$item);
            if (gridsterItemCollision && gridsterItemCollision !== true &&
                gridsterItemCollision !== this.gridsterItem && gridsterItemCollision.canBeResized()) {
                if (this.tryPattern[direction].call(this, gridsterItemCollision, gridsterItem, direction)) {
                    return true;
                }
            }
            else if (gridsterItemCollision === false) {
                return true;
            }
            return false;
        };
        /**
         * @private
         * @param {?} gridsterItemCollide
         * @param {?} gridsterItem
         * @param {?} direction
         * @return {?}
         */
        GridsterPushResize.prototype.trySouth = /**
         * @private
         * @param {?} gridsterItemCollide
         * @param {?} gridsterItem
         * @param {?} direction
         * @return {?}
         */
        function (gridsterItemCollide, gridsterItem, direction) {
            /** @type {?} */
            var backUpY = gridsterItemCollide.$item.y;
            /** @type {?} */
            var backUpRows = gridsterItemCollide.$item.rows;
            gridsterItemCollide.$item.y = gridsterItem.$item.y + gridsterItem.$item.rows;
            gridsterItemCollide.$item.rows = backUpRows + backUpY - gridsterItemCollide.$item.y;
            if (!GridsterComponent.checkCollisionTwoItems(gridsterItemCollide.$item, gridsterItem.$item)
                && !this.gridster.checkGridCollision(gridsterItemCollide.$item)) {
                gridsterItemCollide.setSize();
                this.addToPushed(gridsterItemCollide);
                this.push(gridsterItem, direction);
                return true;
            }
            else {
                gridsterItemCollide.$item.y = backUpY;
                gridsterItemCollide.$item.rows = backUpRows;
            }
            return false;
        };
        /**
         * @private
         * @param {?} gridsterItemCollide
         * @param {?} gridsterItem
         * @param {?} direction
         * @return {?}
         */
        GridsterPushResize.prototype.tryNorth = /**
         * @private
         * @param {?} gridsterItemCollide
         * @param {?} gridsterItem
         * @param {?} direction
         * @return {?}
         */
        function (gridsterItemCollide, gridsterItem, direction) {
            /** @type {?} */
            var backUpRows = gridsterItemCollide.$item.rows;
            gridsterItemCollide.$item.rows = gridsterItem.$item.y - gridsterItemCollide.$item.y;
            if (!GridsterComponent.checkCollisionTwoItems(gridsterItemCollide.$item, gridsterItem.$item)
                && !this.gridster.checkGridCollision(gridsterItemCollide.$item)) {
                gridsterItemCollide.setSize();
                this.addToPushed(gridsterItemCollide);
                this.push(gridsterItem, direction);
                return true;
            }
            else {
                gridsterItemCollide.$item.rows = backUpRows;
            }
            return false;
        };
        /**
         * @private
         * @param {?} gridsterItemCollide
         * @param {?} gridsterItem
         * @param {?} direction
         * @return {?}
         */
        GridsterPushResize.prototype.tryEast = /**
         * @private
         * @param {?} gridsterItemCollide
         * @param {?} gridsterItem
         * @param {?} direction
         * @return {?}
         */
        function (gridsterItemCollide, gridsterItem, direction) {
            /** @type {?} */
            var backUpX = gridsterItemCollide.$item.x;
            /** @type {?} */
            var backUpCols = gridsterItemCollide.$item.cols;
            gridsterItemCollide.$item.x = gridsterItem.$item.x + gridsterItem.$item.cols;
            gridsterItemCollide.$item.cols = backUpCols + backUpX - gridsterItemCollide.$item.x;
            if (!GridsterComponent.checkCollisionTwoItems(gridsterItemCollide.$item, gridsterItem.$item)
                && !this.gridster.checkGridCollision(gridsterItemCollide.$item)) {
                gridsterItemCollide.setSize();
                this.addToPushed(gridsterItemCollide);
                this.push(gridsterItem, direction);
                return true;
            }
            else {
                gridsterItemCollide.$item.x = backUpX;
                gridsterItemCollide.$item.cols = backUpCols;
            }
            return false;
        };
        /**
         * @private
         * @param {?} gridsterItemCollide
         * @param {?} gridsterItem
         * @param {?} direction
         * @return {?}
         */
        GridsterPushResize.prototype.tryWest = /**
         * @private
         * @param {?} gridsterItemCollide
         * @param {?} gridsterItem
         * @param {?} direction
         * @return {?}
         */
        function (gridsterItemCollide, gridsterItem, direction) {
            /** @type {?} */
            var backUpCols = gridsterItemCollide.$item.cols;
            gridsterItemCollide.$item.cols = gridsterItem.$item.x - gridsterItemCollide.$item.x;
            if (!GridsterComponent.checkCollisionTwoItems(gridsterItemCollide.$item, gridsterItem.$item)
                && !this.gridster.checkGridCollision(gridsterItemCollide.$item)) {
                gridsterItemCollide.setSize();
                this.addToPushed(gridsterItemCollide);
                this.push(gridsterItem, direction);
                return true;
            }
            else {
                gridsterItemCollide.$item.cols = backUpCols;
            }
            return false;
        };
        /**
         * @private
         * @param {?} gridsterItem
         * @return {?}
         */
        GridsterPushResize.prototype.addToPushed = /**
         * @private
         * @param {?} gridsterItem
         * @return {?}
         */
        function (gridsterItem) {
            if (this.pushedItems.indexOf(gridsterItem) < 0) {
                this.pushedItems.push(gridsterItem);
                this.pushedItemsPath.push([
                    {
                        x: gridsterItem.item.x || 0,
                        y: gridsterItem.item.y || 0,
                        cols: gridsterItem.item.cols || 0,
                        rows: gridsterItem.item.rows || 0
                    },
                    {
                        x: gridsterItem.$item.x,
                        y: gridsterItem.$item.y,
                        cols: gridsterItem.$item.cols,
                        rows: gridsterItem.$item.rows
                    }
                ]);
            }
            else {
                /** @type {?} */
                var i = this.pushedItems.indexOf(gridsterItem);
                this.pushedItemsPath[i].push({
                    x: gridsterItem.$item.x,
                    y: gridsterItem.$item.y,
                    cols: gridsterItem.$item.cols,
                    rows: gridsterItem.$item.rows
                });
            }
        };
        /**
         * @private
         * @param {?} i
         * @return {?}
         */
        GridsterPushResize.prototype.removeFromPushed = /**
         * @private
         * @param {?} i
         * @return {?}
         */
        function (i) {
            if (i > -1) {
                this.pushedItems.splice(i, 1);
                this.pushedItemsPath.splice(i, 1);
            }
        };
        /**
         * @private
         * @param {?} pushedItem
         * @param {?} i
         * @return {?}
         */
        GridsterPushResize.prototype.checkPushedItem = /**
         * @private
         * @param {?} pushedItem
         * @param {?} i
         * @return {?}
         */
        function (pushedItem, i) {
            /** @type {?} */
            var path = this.pushedItemsPath[i];
            /** @type {?} */
            var j = path.length - 2;
            /** @type {?} */
            var lastPosition;
            /** @type {?} */
            var x;
            /** @type {?} */
            var y;
            /** @type {?} */
            var cols;
            /** @type {?} */
            var rows;
            for (; j > -1; j--) {
                lastPosition = path[j];
                x = pushedItem.$item.x;
                y = pushedItem.$item.y;
                cols = pushedItem.$item.cols;
                rows = pushedItem.$item.rows;
                pushedItem.$item.x = lastPosition.x;
                pushedItem.$item.y = lastPosition.y;
                pushedItem.$item.cols = lastPosition.cols;
                pushedItem.$item.rows = lastPosition.rows;
                if (!this.gridster.findItemWithItem(pushedItem.$item)) {
                    pushedItem.setSize();
                    path.splice(j + 1, path.length - 1 - j);
                }
                else {
                    pushedItem.$item.x = x;
                    pushedItem.$item.y = y;
                    pushedItem.$item.cols = cols;
                    pushedItem.$item.rows = rows;
                }
            }
            if (path.length < 2) {
                this.removeFromPushed(i);
                return true;
            }
            return false;
        };
        GridsterPushResize.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        GridsterPushResize.ctorParameters = function () { return [
            { type: GridsterItemComponentInterface }
        ]; };
        return GridsterPushResize;
    }());
    if (false) {
        /** @type {?} */
        GridsterPushResize.prototype.fromSouth;
        /** @type {?} */
        GridsterPushResize.prototype.fromNorth;
        /** @type {?} */
        GridsterPushResize.prototype.fromEast;
        /** @type {?} */
        GridsterPushResize.prototype.fromWest;
        /**
         * @type {?}
         * @private
         */
        GridsterPushResize.prototype.pushedItems;
        /**
         * @type {?}
         * @private
         */
        GridsterPushResize.prototype.pushedItemsPath;
        /**
         * @type {?}
         * @private
         */
        GridsterPushResize.prototype.gridsterItem;
        /**
         * @type {?}
         * @private
         */
        GridsterPushResize.prototype.gridster;
        /**
         * @type {?}
         * @private
         */
        GridsterPushResize.prototype.tryPattern;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GridsterResizable = /** @class */ (function () {
        function GridsterResizable(gridsterItem, gridster, zone) {
            this.zone = zone;
            this.gridsterItem = gridsterItem;
            this.gridster = gridster;
            this.lastMouse = {
                clientX: 0,
                clientY: 0
            };
            this.itemBackup = [0, 0, 0, 0];
            this.resizeEventScrollType = { w: false, e: false, n: false, s: false };
        }
        /**
         * @return {?}
         */
        GridsterResizable.prototype.destroy = /**
         * @return {?}
         */
        function () {
            if (this.gridster.previewStyle) {
                this.gridster.previewStyle();
            }
            delete this.gridsterItem;
            delete this.gridster;
        };
        /**
         * @param {?} e
         * @return {?}
         */
        GridsterResizable.prototype.dragStart = /**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            var _this = this;
            switch (e.which) {
                case 1:
                    // left mouse button
                    break;
                case 2:
                case 3:
                    // right or middle mouse button
                    return;
            }
            if (this.gridster.options.resizable && this.gridster.options.resizable.start) {
                this.gridster.options.resizable.start(this.gridsterItem.item, this.gridsterItem, e);
            }
            e.stopPropagation();
            e.preventDefault();
            this.dragFunction = this.dragMove.bind(this);
            this.dragStopFunction = this.dragStop.bind(this);
            this.zone.runOutsideAngular((/**
             * @return {?}
             */
            function () {
                _this.mousemove = _this.gridsterItem.renderer.listen('document', 'mousemove', _this.dragFunction);
                _this.touchmove = _this.gridster.renderer.listen(_this.gridster.el, 'touchmove', _this.dragFunction);
            }));
            this.mouseup = this.gridsterItem.renderer.listen('document', 'mouseup', this.dragStopFunction);
            this.mouseleave = this.gridsterItem.renderer.listen('document', 'mouseleave', this.dragStopFunction);
            this.cancelOnBlur = this.gridsterItem.renderer.listen('window', 'blur', this.dragStopFunction);
            this.touchend = this.gridsterItem.renderer.listen('document', 'touchend', this.dragStopFunction);
            this.touchcancel = this.gridsterItem.renderer.listen('document', 'touchcancel', this.dragStopFunction);
            this.gridsterItem.renderer.addClass(this.gridsterItem.el, 'gridster-item-resizing');
            this.lastMouse.clientX = e.clientX;
            this.lastMouse.clientY = e.clientY;
            this.left = this.gridsterItem.left;
            this.top = this.gridsterItem.top;
            this.width = this.gridsterItem.width;
            this.height = this.gridsterItem.height;
            this.bottom = this.gridsterItem.top + this.gridsterItem.height;
            this.right = this.gridsterItem.left + this.gridsterItem.width;
            this.margin = this.gridster.$options.margin;
            this.offsetLeft = this.gridster.el.scrollLeft - this.gridster.el.offsetLeft;
            this.offsetTop = this.gridster.el.scrollTop - this.gridster.el.offsetTop;
            this.diffLeft = e.clientX + this.offsetLeft - this.left;
            this.diffRight = e.clientX + this.offsetLeft - this.right;
            this.diffTop = e.clientY + this.offsetTop - this.top;
            this.diffBottom = e.clientY + this.offsetTop - this.bottom;
            this.minHeight = this.gridster.positionYToPixels(this.gridsterItem.$item.minItemRows || this.gridster.$options.minItemRows)
                - this.margin;
            this.minWidth = this.gridster.positionXToPixels(this.gridsterItem.$item.minItemCols || this.gridster.$options.minItemCols)
                - this.margin;
            this.gridster.movingItem = this.gridsterItem.$item;
            this.gridster.previewStyle();
            this.push = new GridsterPush(this.gridsterItem);
            this.pushResize = new GridsterPushResize(this.gridsterItem);
            this.gridster.dragInProgress = true;
            this.gridster.updateGrid();
            if (e.target.hasAttribute('class') && e.target.getAttribute('class').split(' ').indexOf('handle-n') > -1) {
                this.resizeEventScrollType.n = true;
                this.directionFunction = this.handleN;
            }
            else if (e.target.hasAttribute('class') && e.target.getAttribute('class').split(' ').indexOf('handle-w') > -1) {
                this.resizeEventScrollType.w = true;
                this.directionFunction = this.handleW;
            }
            else if (e.target.hasAttribute('class') && e.target.getAttribute('class').split(' ').indexOf('handle-s') > -1) {
                this.resizeEventScrollType.s = true;
                this.directionFunction = this.handleS;
            }
            else if (e.target.hasAttribute('class') && e.target.getAttribute('class').split(' ').indexOf('handle-e') > -1) {
                this.resizeEventScrollType.e = true;
                this.directionFunction = this.handleE;
            }
            else if (e.target.hasAttribute('class') && e.target.getAttribute('class').split(' ').indexOf('handle-nw') > -1) {
                this.resizeEventScrollType.n = true;
                this.resizeEventScrollType.w = true;
                this.directionFunction = this.handleNW;
            }
            else if (e.target.hasAttribute('class') && e.target.getAttribute('class').split(' ').indexOf('handle-ne') > -1) {
                this.resizeEventScrollType.n = true;
                this.resizeEventScrollType.e = true;
                this.directionFunction = this.handleNE;
            }
            else if (e.target.hasAttribute('class') && e.target.getAttribute('class').split(' ').indexOf('handle-sw') > -1) {
                this.resizeEventScrollType.s = true;
                this.resizeEventScrollType.w = true;
                this.directionFunction = this.handleSW;
            }
            else if (e.target.hasAttribute('class') && e.target.getAttribute('class').split(' ').indexOf('handle-se') > -1) {
                this.resizeEventScrollType.s = true;
                this.resizeEventScrollType.e = true;
                this.directionFunction = this.handleSE;
            }
        };
        /**
         * @param {?} e
         * @return {?}
         */
        GridsterResizable.prototype.dragMove = /**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            var _this = this;
            e.stopPropagation();
            e.preventDefault();
            GridsterUtils.checkTouchEvent(e);
            this.offsetTop = this.gridster.el.scrollTop - this.gridster.el.offsetTop;
            this.offsetLeft = this.gridster.el.scrollLeft - this.gridster.el.offsetLeft;
            scroll(this.gridster, this.left, this.top, this.width, this.height, e, this.lastMouse, this.directionFunction.bind(this), true, this.resizeEventScrollType);
            this.directionFunction(e);
            this.lastMouse.clientX = e.clientX;
            this.lastMouse.clientY = e.clientY;
            this.zone.run((/**
             * @return {?}
             */
            function () {
                _this.gridster.updateGrid();
            }));
        };
        /**
         * @param {?} e
         * @return {?}
         */
        GridsterResizable.prototype.dragStop = /**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            var _this = this;
            e.stopPropagation();
            e.preventDefault();
            cancelScroll();
            this.mousemove();
            this.mouseup();
            this.mouseleave();
            this.cancelOnBlur();
            this.touchmove();
            this.touchend();
            this.touchcancel();
            this.gridster.dragInProgress = false;
            this.gridster.updateGrid();
            if (this.gridster.options.resizable && this.gridster.options.resizable.stop) {
                Promise.resolve(this.gridster.options.resizable.stop(this.gridsterItem.item, this.gridsterItem, e))
                    .then(this.makeResize.bind(this), this.cancelResize.bind(this));
            }
            else {
                this.makeResize();
            }
            setTimeout((/**
             * @return {?}
             */
            function () {
                _this.gridsterItem.renderer.removeClass(_this.gridsterItem.el, 'gridster-item-resizing');
                if (_this.gridster) {
                    _this.gridster.movingItem = null;
                    _this.gridster.previewStyle();
                }
            }));
        };
        /**
         * @return {?}
         */
        GridsterResizable.prototype.cancelResize = /**
         * @return {?}
         */
        function () {
            this.gridsterItem.$item.cols = this.gridsterItem.item.cols || 1;
            this.gridsterItem.$item.rows = this.gridsterItem.item.rows || 1;
            this.gridsterItem.$item.x = this.gridsterItem.item.x || 0;
            this.gridsterItem.$item.y = this.gridsterItem.item.y || 0;
            this.gridsterItem.setSize();
            this.push.restoreItems();
            this.pushResize.restoreItems();
            this.push.destroy();
            delete this.push;
            this.pushResize.destroy();
            delete this.pushResize;
        };
        /**
         * @return {?}
         */
        GridsterResizable.prototype.makeResize = /**
         * @return {?}
         */
        function () {
            this.gridsterItem.setSize();
            this.gridsterItem.checkItemChanges(this.gridsterItem.$item, this.gridsterItem.item);
            this.push.setPushedItems();
            this.pushResize.setPushedItems();
            this.push.destroy();
            delete this.push;
            this.pushResize.destroy();
            delete this.pushResize;
        };
        /**
         * @param {?} e
         * @return {?}
         */
        GridsterResizable.prototype.handleN = /**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            this.top = e.clientY + this.offsetTop - this.diffTop;
            this.height = this.bottom - this.top;
            if (this.minHeight > this.height) {
                this.height = this.minHeight;
                this.top = this.bottom - this.minHeight;
            }
            this.newPosition = this.gridster.pixelsToPositionY(this.top + this.margin, Math.floor);
            if (this.gridsterItem.$item.y !== this.newPosition) {
                this.itemBackup[1] = this.gridsterItem.$item.y;
                this.itemBackup[3] = this.gridsterItem.$item.rows;
                this.gridsterItem.$item.rows += this.gridsterItem.$item.y - this.newPosition;
                this.gridsterItem.$item.y = this.newPosition;
                this.pushResize.pushItems(this.pushResize.fromSouth);
                this.push.pushItems(this.push.fromSouth, this.gridster.$options.disablePushOnResize);
                if (this.gridster.checkCollision(this.gridsterItem.$item)) {
                    this.gridsterItem.$item.y = this.itemBackup[1];
                    this.gridsterItem.$item.rows = this.itemBackup[3];
                    this.setItemTop(this.gridster.positionYToPixels(this.gridsterItem.$item.y));
                    this.setItemHeight(this.gridster.positionYToPixels(this.gridsterItem.$item.rows) - this.margin);
                    return;
                }
                else {
                    this.gridster.previewStyle();
                }
                this.pushResize.checkPushBack();
                this.push.checkPushBack();
            }
            this.setItemTop(this.top);
            this.setItemHeight(this.height);
        };
        /**
         * @param {?} e
         * @return {?}
         */
        GridsterResizable.prototype.handleW = /**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            this.left = e.clientX + this.offsetLeft - this.diffLeft;
            this.width = this.right - this.left;
            if (this.minWidth > this.width) {
                this.width = this.minWidth;
                this.left = this.right - this.minWidth;
            }
            this.newPosition = this.gridster.pixelsToPositionX(this.left + this.margin, Math.floor);
            if (this.gridsterItem.$item.x !== this.newPosition) {
                this.itemBackup[0] = this.gridsterItem.$item.x;
                this.itemBackup[2] = this.gridsterItem.$item.cols;
                this.gridsterItem.$item.cols += this.gridsterItem.$item.x - this.newPosition;
                this.gridsterItem.$item.x = this.newPosition;
                this.pushResize.pushItems(this.pushResize.fromEast);
                this.push.pushItems(this.push.fromEast, this.gridster.$options.disablePushOnResize);
                if (this.gridster.checkCollision(this.gridsterItem.$item)) {
                    this.gridsterItem.$item.x = this.itemBackup[0];
                    this.gridsterItem.$item.cols = this.itemBackup[2];
                    this.setItemLeft(this.gridster.positionXToPixels(this.gridsterItem.$item.x));
                    this.setItemWidth(this.gridster.positionXToPixels(this.gridsterItem.$item.cols) - this.margin);
                    return;
                }
                else {
                    this.gridster.previewStyle();
                }
                this.pushResize.checkPushBack();
                this.push.checkPushBack();
            }
            this.setItemLeft(this.left);
            this.setItemWidth(this.width);
        };
        /**
         * @param {?} e
         * @return {?}
         */
        GridsterResizable.prototype.handleS = /**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            this.height = e.clientY + this.offsetTop - this.diffBottom - this.top;
            if (this.minHeight > this.height) {
                this.height = this.minHeight;
            }
            this.bottom = this.top + this.height;
            this.newPosition = this.gridster.pixelsToPositionY(this.bottom, Math.ceil);
            if ((this.gridsterItem.$item.y + this.gridsterItem.$item.rows) !== this.newPosition) {
                this.itemBackup[3] = this.gridsterItem.$item.rows;
                this.gridsterItem.$item.rows = this.newPosition - this.gridsterItem.$item.y;
                this.pushResize.pushItems(this.pushResize.fromNorth);
                this.push.pushItems(this.push.fromNorth, this.gridster.$options.disablePushOnResize);
                if (this.gridster.checkCollision(this.gridsterItem.$item)) {
                    this.gridsterItem.$item.rows = this.itemBackup[3];
                    this.setItemHeight(this.gridster.positionYToPixels(this.gridsterItem.$item.rows) - this.margin);
                    return;
                }
                else {
                    this.gridster.previewStyle();
                }
                this.pushResize.checkPushBack();
                this.push.checkPushBack();
            }
            this.setItemHeight(this.height);
        };
        /**
         * @param {?} e
         * @return {?}
         */
        GridsterResizable.prototype.handleE = /**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            this.width = e.clientX + this.offsetLeft - this.diffRight - this.left;
            if (this.minWidth > this.width) {
                this.width = this.minWidth;
            }
            this.right = this.left + this.width;
            this.newPosition = this.gridster.pixelsToPositionX(this.right, Math.ceil);
            if ((this.gridsterItem.$item.x + this.gridsterItem.$item.cols) !== this.newPosition) {
                this.itemBackup[2] = this.gridsterItem.$item.cols;
                this.gridsterItem.$item.cols = this.newPosition - this.gridsterItem.$item.x;
                this.pushResize.pushItems(this.pushResize.fromWest);
                this.push.pushItems(this.push.fromWest, this.gridster.$options.disablePushOnResize);
                if (this.gridster.checkCollision(this.gridsterItem.$item)) {
                    this.gridsterItem.$item.cols = this.itemBackup[2];
                    this.setItemWidth(this.gridster.positionXToPixels(this.gridsterItem.$item.cols) - this.margin);
                    return;
                }
                else {
                    this.gridster.previewStyle();
                }
                this.pushResize.checkPushBack();
                this.push.checkPushBack();
            }
            this.setItemWidth(this.width);
        };
        /**
         * @param {?} e
         * @return {?}
         */
        GridsterResizable.prototype.handleNW = /**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            this.handleN(e);
            this.handleW(e);
        };
        /**
         * @param {?} e
         * @return {?}
         */
        GridsterResizable.prototype.handleNE = /**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            this.handleN(e);
            this.handleE(e);
        };
        /**
         * @param {?} e
         * @return {?}
         */
        GridsterResizable.prototype.handleSW = /**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            this.handleS(e);
            this.handleW(e);
        };
        /**
         * @param {?} e
         * @return {?}
         */
        GridsterResizable.prototype.handleSE = /**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            this.handleS(e);
            this.handleE(e);
        };
        /**
         * @return {?}
         */
        GridsterResizable.prototype.toggle = /**
         * @return {?}
         */
        function () {
            this.resizeEnabled = this.gridsterItem.canBeResized();
        };
        /**
         * @param {?} e
         * @return {?}
         */
        GridsterResizable.prototype.dragStartDelay = /**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            var _this = this;
            GridsterUtils.checkTouchEvent(e);
            if (!this.gridster.$options.resizable.delayStart) {
                this.dragStart(e);
                return;
            }
            /** @type {?} */
            var timeout = setTimeout((/**
             * @return {?}
             */
            function () {
                _this.dragStart(e);
                cancelDrag();
            }), this.gridster.$options.resizable.delayStart);
            /** @type {?} */
            var cancelMouse = this.gridsterItem.renderer.listen('document', 'mouseup', cancelDrag);
            /** @type {?} */
            var cancelMouseLeave = this.gridsterItem.renderer.listen('document', 'mouseleave', cancelDrag);
            /** @type {?} */
            var cancelOnBlur = this.gridsterItem.renderer.listen('window', 'blur', cancelDrag);
            /** @type {?} */
            var cancelTouchMove = this.gridsterItem.renderer.listen('document', 'touchmove', cancelMove);
            /** @type {?} */
            var cancelTouchEnd = this.gridsterItem.renderer.listen('document', 'touchend', cancelDrag);
            /** @type {?} */
            var cancelTouchCancel = this.gridsterItem.renderer.listen('document', 'touchcancel', cancelDrag);
            /**
             * @param {?} eventMove
             * @return {?}
             */
            function cancelMove(eventMove) {
                GridsterUtils.checkTouchEvent(eventMove);
                if (Math.abs(eventMove.clientX - e.clientX) > 9 || Math.abs(eventMove.clientY - e.clientY) > 9) {
                    cancelDrag();
                }
            }
            /**
             * @return {?}
             */
            function cancelDrag() {
                clearTimeout(timeout);
                cancelOnBlur();
                cancelMouse();
                cancelMouseLeave();
                cancelTouchMove();
                cancelTouchEnd();
                cancelTouchCancel();
            }
        };
        /**
         * @param {?} top
         * @return {?}
         */
        GridsterResizable.prototype.setItemTop = /**
         * @param {?} top
         * @return {?}
         */
        function (top) {
            this.gridster.gridRenderer.setCellPosition(this.gridsterItem.renderer, this.gridsterItem.el, this.left, top);
        };
        /**
         * @param {?} left
         * @return {?}
         */
        GridsterResizable.prototype.setItemLeft = /**
         * @param {?} left
         * @return {?}
         */
        function (left) {
            this.gridster.gridRenderer.setCellPosition(this.gridsterItem.renderer, this.gridsterItem.el, left, this.top);
        };
        /**
         * @param {?} height
         * @return {?}
         */
        GridsterResizable.prototype.setItemHeight = /**
         * @param {?} height
         * @return {?}
         */
        function (height) {
            this.gridsterItem.renderer.setStyle(this.gridsterItem.el, 'height', height + 'px');
        };
        /**
         * @param {?} width
         * @return {?}
         */
        GridsterResizable.prototype.setItemWidth = /**
         * @param {?} width
         * @return {?}
         */
        function (width) {
            this.gridsterItem.renderer.setStyle(this.gridsterItem.el, 'width', width + 'px');
        };
        GridsterResizable.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        GridsterResizable.ctorParameters = function () { return [
            { type: GridsterItemComponentInterface },
            { type: GridsterComponentInterface },
            { type: core.NgZone }
        ]; };
        return GridsterResizable;
    }());
    if (false) {
        /** @type {?} */
        GridsterResizable.prototype.gridsterItem;
        /** @type {?} */
        GridsterResizable.prototype.gridster;
        /** @type {?} */
        GridsterResizable.prototype.lastMouse;
        /** @type {?} */
        GridsterResizable.prototype.itemBackup;
        /** @type {?} */
        GridsterResizable.prototype.resizeEventScrollType;
        /** @type {?} */
        GridsterResizable.prototype.directionFunction;
        /** @type {?} */
        GridsterResizable.prototype.dragFunction;
        /** @type {?} */
        GridsterResizable.prototype.dragStopFunction;
        /** @type {?} */
        GridsterResizable.prototype.resizeEnabled;
        /** @type {?} */
        GridsterResizable.prototype.mousemove;
        /** @type {?} */
        GridsterResizable.prototype.mouseup;
        /** @type {?} */
        GridsterResizable.prototype.mouseleave;
        /** @type {?} */
        GridsterResizable.prototype.cancelOnBlur;
        /** @type {?} */
        GridsterResizable.prototype.touchmove;
        /** @type {?} */
        GridsterResizable.prototype.touchend;
        /** @type {?} */
        GridsterResizable.prototype.touchcancel;
        /** @type {?} */
        GridsterResizable.prototype.push;
        /** @type {?} */
        GridsterResizable.prototype.pushResize;
        /** @type {?} */
        GridsterResizable.prototype.minHeight;
        /** @type {?} */
        GridsterResizable.prototype.minWidth;
        /** @type {?} */
        GridsterResizable.prototype.offsetTop;
        /** @type {?} */
        GridsterResizable.prototype.offsetLeft;
        /** @type {?} */
        GridsterResizable.prototype.diffTop;
        /** @type {?} */
        GridsterResizable.prototype.diffLeft;
        /** @type {?} */
        GridsterResizable.prototype.diffRight;
        /** @type {?} */
        GridsterResizable.prototype.diffBottom;
        /** @type {?} */
        GridsterResizable.prototype.margin;
        /** @type {?} */
        GridsterResizable.prototype.top;
        /** @type {?} */
        GridsterResizable.prototype.left;
        /** @type {?} */
        GridsterResizable.prototype.bottom;
        /** @type {?} */
        GridsterResizable.prototype.right;
        /** @type {?} */
        GridsterResizable.prototype.width;
        /** @type {?} */
        GridsterResizable.prototype.height;
        /** @type {?} */
        GridsterResizable.prototype.newPosition;
        /**
         * @type {?}
         * @private
         */
        GridsterResizable.prototype.zone;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GridsterItemComponent = /** @class */ (function () {
        function GridsterItemComponent(el, gridster, renderer, zone) {
            this.renderer = renderer;
            this.zone = zone;
            this.el = el.nativeElement;
            this.$item = {
                cols: -1,
                rows: -1,
                x: -1,
                y: -1,
            };
            this.gridster = gridster;
            this.drag = new GridsterDraggable(this, gridster, this.zone);
            this.resize = new GridsterResizable(this, gridster, this.zone);
        }
        /**
         * @return {?}
         */
        GridsterItemComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            this.updateOptions();
            this.gridster.addItem(this);
        };
        /**
         * @return {?}
         */
        GridsterItemComponent.prototype.updateOptions = /**
         * @return {?}
         */
        function () {
            this.$item = GridsterUtils.merge(this.$item, this.item, {
                cols: undefined,
                rows: undefined,
                x: undefined,
                y: undefined,
                dragEnabled: undefined,
                resizeEnabled: undefined,
                compactEnabled: undefined,
                maxItemRows: undefined,
                minItemRows: undefined,
                maxItemCols: undefined,
                minItemCols: undefined,
                maxItemArea: undefined,
                minItemArea: undefined,
            });
        };
        /**
         * @return {?}
         */
        GridsterItemComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this.gridster.removeItem(this);
            delete this.gridster;
            this.drag.destroy();
            delete this.drag;
            this.resize.destroy();
            delete this.resize;
        };
        /**
         * @return {?}
         */
        GridsterItemComponent.prototype.setSize = /**
         * @return {?}
         */
        function () {
            this.renderer.setStyle(this.el, 'display', this.notPlaced ? '' : 'block');
            this.gridster.gridRenderer.updateItem(this.el, this.$item, this.renderer);
            this.updateItemSize();
        };
        /**
         * @return {?}
         */
        GridsterItemComponent.prototype.updateItemSize = /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var top = this.$item.y * this.gridster.curRowHeight;
            /** @type {?} */
            var left = this.$item.x * this.gridster.curColWidth;
            /** @type {?} */
            var width = this.$item.cols * this.gridster.curColWidth - this.gridster.$options.margin;
            /** @type {?} */
            var height = this.$item.rows * this.gridster.curRowHeight - this.gridster.$options.margin;
            if (!this.init && width > 0 && height > 0) {
                this.init = true;
                if (this.item.initCallback) {
                    this.item.initCallback(this.item, this);
                }
                if (this.gridster.options.itemInitCallback) {
                    this.gridster.options.itemInitCallback(this.item, this);
                }
                if (this.gridster.$options.scrollToNewItems) {
                    this.el.scrollIntoView(false);
                }
            }
            if (width !== this.width || height !== this.height) {
                this.width = width;
                this.height = height;
                if (this.gridster.options.itemResizeCallback) {
                    this.gridster.options.itemResizeCallback(this.item, this);
                }
            }
            this.top = top;
            this.left = left;
        };
        /**
         * @return {?}
         */
        GridsterItemComponent.prototype.itemChanged = /**
         * @return {?}
         */
        function () {
            if (this.gridster.options.itemChangeCallback) {
                this.gridster.options.itemChangeCallback(this.item, this);
            }
        };
        /**
         * @param {?} newValue
         * @param {?} oldValue
         * @return {?}
         */
        GridsterItemComponent.prototype.checkItemChanges = /**
         * @param {?} newValue
         * @param {?} oldValue
         * @return {?}
         */
        function (newValue, oldValue) {
            if (newValue.rows === oldValue.rows && newValue.cols === oldValue.cols && newValue.x === oldValue.x && newValue.y === oldValue.y) {
                return;
            }
            if (this.gridster.checkCollision(this.$item)) {
                this.$item.x = oldValue.x || 0;
                this.$item.y = oldValue.y || 0;
                this.$item.cols = oldValue.cols || 1;
                this.$item.rows = oldValue.rows || 1;
                this.setSize();
            }
            else {
                this.item.cols = this.$item.cols;
                this.item.rows = this.$item.rows;
                this.item.x = this.$item.x;
                this.item.y = this.$item.y;
                this.gridster.calculateLayoutDebounce();
                this.itemChanged();
            }
        };
        /**
         * @return {?}
         */
        GridsterItemComponent.prototype.canBeDragged = /**
         * @return {?}
         */
        function () {
            return !this.gridster.mobile &&
                (this.$item.dragEnabled === undefined ? this.gridster.$options.draggable.enabled : this.$item.dragEnabled);
        };
        /**
         * @return {?}
         */
        GridsterItemComponent.prototype.canBeResized = /**
         * @return {?}
         */
        function () {
            return !this.gridster.mobile &&
                (this.$item.resizeEnabled === undefined ? this.gridster.$options.resizable.enabled : this.$item.resizeEnabled);
        };
        GridsterItemComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'gridster-item',
                        template: "<ng-content></ng-content>\r\n<div (mousedown)=\"resize.dragStartDelay($event)\" (touchstart)=\"resize.dragStartDelay($event)\"\r\n     *ngIf=\"gridster.$options.resizable.handles.s && resize.resizeEnabled\"\r\n     class=\"gridster-item-resizable-handler handle-s\"></div>\r\n<div (mousedown)=\"resize.dragStartDelay($event)\" (touchstart)=\"resize.dragStartDelay($event)\"\r\n     *ngIf=\"gridster.$options.resizable.handles.e && resize.resizeEnabled\"\r\n     class=\"gridster-item-resizable-handler handle-e\"></div>\r\n<div (mousedown)=\"resize.dragStartDelay($event)\" (touchstart)=\"resize.dragStartDelay($event)\"\r\n     *ngIf=\"gridster.$options.resizable.handles.n && resize.resizeEnabled\"\r\n     class=\"gridster-item-resizable-handler handle-n\"></div>\r\n<div (mousedown)=\"resize.dragStartDelay($event)\" (touchstart)=\"resize.dragStartDelay($event)\"\r\n     *ngIf=\"gridster.$options.resizable.handles.w && resize.resizeEnabled\"\r\n     class=\"gridster-item-resizable-handler handle-w\"></div>\r\n<div (mousedown)=\"resize.dragStartDelay($event)\" (touchstart)=\"resize.dragStartDelay($event)\"\r\n     *ngIf=\"gridster.$options.resizable.handles.se && resize.resizeEnabled\"\r\n     class=\"gridster-item-resizable-handler handle-se\"></div>\r\n<div (mousedown)=\"resize.dragStartDelay($event)\" (touchstart)=\"resize.dragStartDelay($event)\"\r\n     *ngIf=\"gridster.$options.resizable.handles.ne && resize.resizeEnabled\"\r\n     class=\"gridster-item-resizable-handler handle-ne\"></div>\r\n<div (mousedown)=\"resize.dragStartDelay($event)\" (touchstart)=\"resize.dragStartDelay($event)\"\r\n     *ngIf=\"gridster.$options.resizable.handles.sw && resize.resizeEnabled\"\r\n     class=\"gridster-item-resizable-handler handle-sw\"></div>\r\n<div (mousedown)=\"resize.dragStartDelay($event)\" (touchstart)=\"resize.dragStartDelay($event)\"\r\n     *ngIf=\"gridster.$options.resizable.handles.nw && resize.resizeEnabled\"\r\n     class=\"gridster-item-resizable-handler handle-nw\"></div>\r\n",
                        encapsulation: core.ViewEncapsulation.None,
                        styles: ["gridster-item{box-sizing:border-box;z-index:1;position:absolute;overflow:hidden;transition:.3s;display:none;background:#fff;-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text}gridster-item.gridster-item-moving{cursor:move}gridster-item.gridster-item-moving,gridster-item.gridster-item-resizing{transition:none;z-index:2;box-shadow:0 0 5px 5px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12)}.gridster-item-resizable-handler{position:absolute;z-index:2}.gridster-item-resizable-handler.handle-n{cursor:n-resize;height:10px;right:0;top:0;left:0}.gridster-item-resizable-handler.handle-e{cursor:e-resize;width:10px;bottom:0;right:0;top:0}.gridster-item-resizable-handler.handle-s{cursor:s-resize;height:10px;right:0;bottom:0;left:0}.gridster-item-resizable-handler.handle-w{cursor:w-resize;width:10px;left:0;top:0;bottom:0}.gridster-item-resizable-handler.handle-ne{cursor:ne-resize;width:10px;height:10px;right:0;top:0}.gridster-item-resizable-handler.handle-nw{cursor:nw-resize;width:10px;height:10px;left:0;top:0}.gridster-item-resizable-handler.handle-se{cursor:se-resize;width:0;height:0;right:0;bottom:0;border-style:solid;border-width:0 0 10px 10px;border-color:transparent}.gridster-item-resizable-handler.handle-sw{cursor:sw-resize;width:10px;height:10px;left:0;bottom:0}gridster-item:hover .gridster-item-resizable-handler.handle-se{border-color:transparent transparent #ccc}"]
                    }] }
        ];
        /** @nocollapse */
        GridsterItemComponent.ctorParameters = function () { return [
            { type: core.ElementRef, decorators: [{ type: core.Inject, args: [core.ElementRef,] }] },
            { type: GridsterComponent },
            { type: core.Renderer2, decorators: [{ type: core.Inject, args: [core.Renderer2,] }] },
            { type: core.NgZone, decorators: [{ type: core.Inject, args: [core.NgZone,] }] }
        ]; };
        GridsterItemComponent.propDecorators = {
            item: [{ type: core.Input }]
        };
        return GridsterItemComponent;
    }());
    if (false) {
        /** @type {?} */
        GridsterItemComponent.prototype.item;
        /** @type {?} */
        GridsterItemComponent.prototype.$item;
        /** @type {?} */
        GridsterItemComponent.prototype.el;
        /** @type {?} */
        GridsterItemComponent.prototype.gridster;
        /** @type {?} */
        GridsterItemComponent.prototype.top;
        /** @type {?} */
        GridsterItemComponent.prototype.left;
        /** @type {?} */
        GridsterItemComponent.prototype.width;
        /** @type {?} */
        GridsterItemComponent.prototype.height;
        /** @type {?} */
        GridsterItemComponent.prototype.drag;
        /** @type {?} */
        GridsterItemComponent.prototype.resize;
        /** @type {?} */
        GridsterItemComponent.prototype.notPlaced;
        /** @type {?} */
        GridsterItemComponent.prototype.init;
        /** @type {?} */
        GridsterItemComponent.prototype.renderer;
        /**
         * @type {?}
         * @private
         */
        GridsterItemComponent.prototype.zone;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GridsterPreviewComponent = /** @class */ (function () {
        function GridsterPreviewComponent(el, gridster, renderer) {
            this.renderer = renderer;
            this.el = el.nativeElement;
            this.gridster = gridster;
            this.gridster.previewStyle = this.previewStyle.bind(this);
        }
        /**
         * @return {?}
         */
        GridsterPreviewComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            delete this.el;
            delete this.gridster.previewStyle;
            delete this.gridster;
        };
        /**
         * @param {?=} drag
         * @return {?}
         */
        GridsterPreviewComponent.prototype.previewStyle = /**
         * @param {?=} drag
         * @return {?}
         */
        function (drag) {
            if (!this.gridster.movingItem) {
                this.renderer.setStyle(this.el, 'display', '');
            }
            else {
                if (this.gridster.compact && drag) {
                    this.gridster.compact.checkCompactItem(this.gridster.movingItem);
                }
                this.renderer.setStyle(this.el, 'display', 'block');
                this.gridster.gridRenderer.updateItem(this.el, this.gridster.movingItem, this.renderer);
            }
        };
        GridsterPreviewComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'gridster-preview',
                        template: '',
                        encapsulation: core.ViewEncapsulation.None,
                        styles: ["gridster-preview{position:absolute;display:none;background:rgba(0,0,0,.15)}"]
                    }] }
        ];
        /** @nocollapse */
        GridsterPreviewComponent.ctorParameters = function () { return [
            { type: core.ElementRef, decorators: [{ type: core.Inject, args: [core.ElementRef,] }] },
            { type: GridsterComponent },
            { type: core.Renderer2, decorators: [{ type: core.Inject, args: [core.Renderer2,] }] }
        ]; };
        return GridsterPreviewComponent;
    }());
    if (false) {
        /** @type {?} */
        GridsterPreviewComponent.prototype.el;
        /** @type {?} */
        GridsterPreviewComponent.prototype.gridster;
        /** @type {?} */
        GridsterPreviewComponent.prototype.renderer;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GridsterModule = /** @class */ (function () {
        function GridsterModule() {
        }
        GridsterModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [
                            GridsterComponent,
                            GridsterItemComponent,
                            GridsterPreviewComponent
                        ],
                        imports: [
                            common.CommonModule
                        ],
                        exports: [GridsterComponent, GridsterItemComponent],
                        providers: [],
                        bootstrap: [],
                        entryComponents: [GridsterComponent, GridsterItemComponent]
                    },] }
        ];
        return GridsterModule;
    }());

    exports.CompactType = CompactType;
    exports.DisplayGrid = DisplayGrid;
    exports.GridType = GridType;
    exports.GridsterComponent = GridsterComponent;
    exports.GridsterComponentInterface = GridsterComponentInterface;
    exports.GridsterConfigService = GridsterConfigService;
    exports.GridsterItemComponent = GridsterItemComponent;
    exports.GridsterItemComponentInterface = GridsterItemComponentInterface;
    exports.GridsterModule = GridsterModule;
    exports.GridsterPush = GridsterPush;
    exports.GridsterPushResize = GridsterPushResize;
    exports.GridsterSwap = GridsterSwap;
    exports.ɵa = GridsterPreviewComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=angular-gridster2.umd.js.map
