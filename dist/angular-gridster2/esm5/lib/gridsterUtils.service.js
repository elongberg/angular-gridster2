/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
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
        { type: Injectable }
    ];
    return GridsterUtils;
}());
export { GridsterUtils };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZHN0ZXJVdGlscy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1ncmlkc3RlcjIvIiwic291cmNlcyI6WyJsaWIvZ3JpZHN0ZXJVdGlscy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBSXpDO0lBQUE7SUFrRkEsQ0FBQzs7Ozs7OztJQS9FUSxtQkFBSzs7Ozs7O0lBQVosVUFBYSxJQUFTLEVBQUUsSUFBUyxFQUFFLFVBQWU7UUFDaEQsS0FBSyxJQUFNLENBQUMsSUFBSSxJQUFJLEVBQUU7WUFDcEIsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssS0FBSyxDQUFDLElBQUksVUFBVSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDdEQsSUFBSSxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxRQUFRLEVBQUU7b0JBQy9CLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxhQUFhLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQ2hFO3FCQUFNO29CQUNMLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQ25CO2FBQ0Y7U0FDRjtRQUVELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQzs7Ozs7O0lBRU0sc0JBQVE7Ozs7O0lBQWYsVUFBZ0IsSUFBYyxFQUFFLElBQVk7O1lBQ3RDLE9BQVk7UUFDaEI7OztRQUFPOztnQkFDQyxPQUFPLEdBQUcsSUFBSTs7Z0JBQUUsSUFBSSxHQUFHLFNBQVM7O2dCQUNoQyxLQUFLOzs7WUFBRztnQkFDWixPQUFPLEdBQUcsSUFBSSxDQUFDO2dCQUNmLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLElBQUks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OztJQUVNLDBCQUFZOzs7OztJQUFuQixVQUFvQixDQUEyQixFQUFFLENBQTJCO1FBQzFFLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ2IsT0FBTyxDQUFDLENBQUMsQ0FBQztTQUNYO2FBQU0sSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDcEIsT0FBTyxDQUFDLENBQUM7U0FDVjthQUFNLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ3BCLE9BQU8sQ0FBQyxDQUFDLENBQUM7U0FDWDthQUFNO1lBQ0wsT0FBTyxDQUFDLENBQUM7U0FDVjtJQUNILENBQUM7O2dCQWpGRixVQUFVOztJQWtGWCxvQkFBQztDQUFBLEFBbEZELElBa0ZDO1NBakZZLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHtHcmlkc3RlckNvbXBvbmVudEludGVyZmFjZX0gZnJvbSAnLi9ncmlkc3Rlci5pbnRlcmZhY2UnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgR3JpZHN0ZXJVdGlscyB7XHJcblxyXG4gIHN0YXRpYyBtZXJnZShvYmoxOiBhbnksIG9iajI6IGFueSwgcHJvcGVydGllczogYW55KSB7XHJcbiAgICBmb3IgKGNvbnN0IHAgaW4gb2JqMikge1xyXG4gICAgICBpZiAob2JqMltwXSAhPT0gdm9pZCAwICYmIHByb3BlcnRpZXMuaGFzT3duUHJvcGVydHkocCkpIHtcclxuICAgICAgICBpZiAodHlwZW9mIG9iajJbcF0gPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgICBvYmoxW3BdID0gR3JpZHN0ZXJVdGlscy5tZXJnZShvYmoxW3BdLCBvYmoyW3BdLCBwcm9wZXJ0aWVzW3BdKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgb2JqMVtwXSA9IG9iajJbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG9iajE7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZGVib3VuY2UoZnVuYzogRnVuY3Rpb24sIHdhaXQ6IG51bWJlcik6ICgpID0+IHZvaWQge1xyXG4gICAgbGV0IHRpbWVvdXQ6IGFueTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLCBhcmdzID0gYXJndW1lbnRzO1xyXG4gICAgICBjb25zdCBsYXRlciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aW1lb3V0ID0gbnVsbDtcclxuICAgICAgICBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xyXG4gICAgICB9O1xyXG4gICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XHJcbiAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGxhdGVyLCB3YWl0KTtcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgY2hlY2tUb3VjaEV2ZW50KGU6IGFueSk6IHZvaWQge1xyXG4gICAgaWYgKGUuY2xpZW50WCA9PT0gdW5kZWZpbmVkICYmIGUudG91Y2hlcykge1xyXG4gICAgICBpZiAoZS50b3VjaGVzICYmIGUudG91Y2hlcy5sZW5ndGgpIHtcclxuICAgICAgICBlLmNsaWVudFggPSBlLnRvdWNoZXNbMF0uY2xpZW50WDtcclxuICAgICAgICBlLmNsaWVudFkgPSBlLnRvdWNoZXNbMF0uY2xpZW50WTtcclxuICAgICAgfSBlbHNlIGlmIChlLmNoYW5nZWRUb3VjaGVzICYmIGUuY2hhbmdlZFRvdWNoZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgZS5jbGllbnRYID0gZS5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRYO1xyXG4gICAgICAgIGUuY2xpZW50WSA9IGUuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc3RhdGljIGNoZWNrQ29udGVudENsYXNzRm9yRXZlbnQoZ3JpZHN0ZXI6IEdyaWRzdGVyQ29tcG9uZW50SW50ZXJmYWNlLCBlOiBhbnkpOiBib29sZWFuIHtcclxuICAgIGlmIChncmlkc3Rlci4kb3B0aW9ucy5kcmFnZ2FibGUuaWdub3JlQ29udGVudCkge1xyXG4gICAgICBpZiAoIUdyaWRzdGVyVXRpbHMuY2hlY2tDb250ZW50Q2xhc3MoZS50YXJnZXQsIGUuY3VycmVudFRhcmdldCwgZ3JpZHN0ZXIuJG9wdGlvbnMuZHJhZ2dhYmxlLmRyYWdIYW5kbGVDbGFzcykpIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKEdyaWRzdGVyVXRpbHMuY2hlY2tDb250ZW50Q2xhc3MoZS50YXJnZXQsIGUuY3VycmVudFRhcmdldCwgZ3JpZHN0ZXIuJG9wdGlvbnMuZHJhZ2dhYmxlLmlnbm9yZUNvbnRlbnRDbGFzcykpIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGNoZWNrQ29udGVudENsYXNzRm9yRW1wdHlDZWxsQ2xpY2tFdmVudChncmlkc3RlcjogR3JpZHN0ZXJDb21wb25lbnRJbnRlcmZhY2UsIGU6IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIEdyaWRzdGVyVXRpbHMuY2hlY2tDb250ZW50Q2xhc3MoZS50YXJnZXQsIGUuY3VycmVudFRhcmdldCwgZ3JpZHN0ZXIuJG9wdGlvbnMuZHJhZ2dhYmxlLmlnbm9yZUNvbnRlbnRDbGFzcylcclxuICAgICAgfHwgR3JpZHN0ZXJVdGlscy5jaGVja0NvbnRlbnRDbGFzcyhlLnRhcmdldCwgZS5jdXJyZW50VGFyZ2V0LCBncmlkc3Rlci4kb3B0aW9ucy5kcmFnZ2FibGUuZHJhZ0hhbmRsZUNsYXNzKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBjaGVja0NvbnRlbnRDbGFzcyh0YXJnZXQ6IGFueSwgY3VycmVudDogYW55LCBjb250ZW50Q2xhc3M6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKCF0YXJnZXQgfHwgdGFyZ2V0ID09PSBjdXJyZW50KSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGlmICh0YXJnZXQuaGFzQXR0cmlidXRlKCdjbGFzcycpICYmIHRhcmdldC5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykuc3BsaXQoJyAnKS5pbmRleE9mKGNvbnRlbnRDbGFzcykgPiAtMSkge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBHcmlkc3RlclV0aWxzLmNoZWNrQ29udGVudENsYXNzKHRhcmdldC5wYXJlbnROb2RlLCBjdXJyZW50LCBjb250ZW50Q2xhc3MpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc3RhdGljIGNvbXBhcmVJdGVtcyhhOiB7IHg6IG51bWJlciwgeTogbnVtYmVyIH0sIGI6IHsgeDogbnVtYmVyLCB5OiBudW1iZXIgfSk6IG51bWJlciB7XHJcbiAgICBpZiAoYS55ID4gYi55KSB7XHJcbiAgICAgIHJldHVybiAtMTtcclxuICAgIH0gZWxzZSBpZiAoYS55IDwgYi55KSB7XHJcbiAgICAgIHJldHVybiAxO1xyXG4gICAgfSBlbHNlIGlmIChhLnggPiBiLngpIHtcclxuICAgICAgcmV0dXJuIC0xO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIDE7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==