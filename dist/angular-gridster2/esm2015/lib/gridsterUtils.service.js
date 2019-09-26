/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
export class GridsterUtils {
    /**
     * @param {?} obj1
     * @param {?} obj2
     * @param {?} properties
     * @return {?}
     */
    static merge(obj1, obj2, properties) {
        for (const p in obj2) {
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
    }
    /**
     * @param {?} func
     * @param {?} wait
     * @return {?}
     */
    static debounce(func, wait) {
        /** @type {?} */
        let timeout;
        return (/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            const context = this;
            /** @type {?} */
            const args = arguments;
            /** @type {?} */
            const later = (/**
             * @return {?}
             */
            function () {
                timeout = null;
                func.apply(context, args);
            });
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        });
    }
    /**
     * @param {?} e
     * @return {?}
     */
    static checkTouchEvent(e) {
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
    }
    /**
     * @param {?} gridster
     * @param {?} e
     * @return {?}
     */
    static checkContentClassForEvent(gridster, e) {
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
    }
    /**
     * @param {?} gridster
     * @param {?} e
     * @return {?}
     */
    static checkContentClassForEmptyCellClickEvent(gridster, e) {
        return GridsterUtils.checkContentClass(e.target, e.currentTarget, gridster.$options.draggable.ignoreContentClass)
            || GridsterUtils.checkContentClass(e.target, e.currentTarget, gridster.$options.draggable.dragHandleClass);
    }
    /**
     * @param {?} target
     * @param {?} current
     * @param {?} contentClass
     * @return {?}
     */
    static checkContentClass(target, current, contentClass) {
        if (!target || target === current) {
            return false;
        }
        if (target.hasAttribute('class') && target.getAttribute('class').split(' ').indexOf(contentClass) > -1) {
            return true;
        }
        else {
            return GridsterUtils.checkContentClass(target.parentNode, current, contentClass);
        }
    }
    /**
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    static compareItems(a, b) {
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
    }
}
GridsterUtils.decorators = [
    { type: Injectable }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZHN0ZXJVdGlscy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1ncmlkc3RlcjIvIiwic291cmNlcyI6WyJsaWIvZ3JpZHN0ZXJVdGlscy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBS3pDLE1BQU0sT0FBTyxhQUFhOzs7Ozs7O0lBRXhCLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBUyxFQUFFLElBQVMsRUFBRSxVQUFlO1FBQ2hELEtBQUssTUFBTSxDQUFDLElBQUksSUFBSSxFQUFFO1lBQ3BCLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLEtBQUssQ0FBQyxJQUFJLFVBQVUsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ3RELElBQUksT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssUUFBUSxFQUFFO29CQUMvQixJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsYUFBYSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUNoRTtxQkFBTTtvQkFDTCxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUNuQjthQUNGO1NBQ0Y7UUFFRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7Ozs7OztJQUVELE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBYyxFQUFFLElBQVk7O1lBQ3RDLE9BQVk7UUFDaEI7OztRQUFPOztrQkFDQyxPQUFPLEdBQUcsSUFBSTs7a0JBQUUsSUFBSSxHQUFHLFNBQVM7O2tCQUNoQyxLQUFLOzs7WUFBRztnQkFDWixPQUFPLEdBQUcsSUFBSSxDQUFDO2dCQUNmLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLElBQUksQ0FB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QUFNLENBQUMsWUFBWSxDQUFDLENBQTJCLEVBQUUsQ0FBMkI7UUFDMUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDYixPQUFPLENBQUMsQ0FBQyxDQUFDO1NBQ1g7YUFBTSxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNwQixPQUFPLENBQUMsQ0FBQztTQUNWO2FBQU0sSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDcEIsT0FBTyxDQUFDLENBQUMsQ0FBQztTQUNYO2FBQU07WUFDTCxPQUFPLENBQUMsQ0FBQztTQUNWO0lBQ0gsQ0FBQzs7O1lBakZGLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHtHcmlkc3RlckNvbXBvbmVudEludGVyZmFjZX0gZnJvbSAnLi9ncmlkc3Rlci5pbnRlcmZhY2UnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgR3JpZHN0ZXJVdGlscyB7XHJcblxyXG4gIHN0YXRpYyBtZXJnZShvYmoxOiBhbnksIG9iajI6IGFueSwgcHJvcGVydGllczogYW55KSB7XHJcbiAgICBmb3IgKGNvbnN0IHAgaW4gb2JqMikge1xyXG4gICAgICBpZiAob2JqMltwXSAhPT0gdm9pZCAwICYmIHByb3BlcnRpZXMuaGFzT3duUHJvcGVydHkocCkpIHtcclxuICAgICAgICBpZiAodHlwZW9mIG9iajJbcF0gPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgICBvYmoxW3BdID0gR3JpZHN0ZXJVdGlscy5tZXJnZShvYmoxW3BdLCBvYmoyW3BdLCBwcm9wZXJ0aWVzW3BdKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgb2JqMVtwXSA9IG9iajJbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG9iajE7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZGVib3VuY2UoZnVuYzogRnVuY3Rpb24sIHdhaXQ6IG51bWJlcik6ICgpID0+IHZvaWQge1xyXG4gICAgbGV0IHRpbWVvdXQ6IGFueTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLCBhcmdzID0gYXJndW1lbnRzO1xyXG4gICAgICBjb25zdCBsYXRlciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aW1lb3V0ID0gbnVsbDtcclxuICAgICAgICBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xyXG4gICAgICB9O1xyXG4gICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XHJcbiAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGxhdGVyLCB3YWl0KTtcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgY2hlY2tUb3VjaEV2ZW50KGU6IGFueSk6IHZvaWQge1xyXG4gICAgaWYgKGUuY2xpZW50WCA9PT0gdW5kZWZpbmVkICYmIGUudG91Y2hlcykge1xyXG4gICAgICBpZiAoZS50b3VjaGVzICYmIGUudG91Y2hlcy5sZW5ndGgpIHtcclxuICAgICAgICBlLmNsaWVudFggPSBlLnRvdWNoZXNbMF0uY2xpZW50WDtcclxuICAgICAgICBlLmNsaWVudFkgPSBlLnRvdWNoZXNbMF0uY2xpZW50WTtcclxuICAgICAgfSBlbHNlIGlmIChlLmNoYW5nZWRUb3VjaGVzICYmIGUuY2hhbmdlZFRvdWNoZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgZS5jbGllbnRYID0gZS5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRYO1xyXG4gICAgICAgIGUuY2xpZW50WSA9IGUuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc3RhdGljIGNoZWNrQ29udGVudENsYXNzRm9yRXZlbnQoZ3JpZHN0ZXI6IEdyaWRzdGVyQ29tcG9uZW50SW50ZXJmYWNlLCBlOiBhbnkpOiBib29sZWFuIHtcclxuICAgIGlmIChncmlkc3Rlci4kb3B0aW9ucy5kcmFnZ2FibGUuaWdub3JlQ29udGVudCkge1xyXG4gICAgICBpZiAoIUdyaWRzdGVyVXRpbHMuY2hlY2tDb250ZW50Q2xhc3MoZS50YXJnZXQsIGUuY3VycmVudFRhcmdldCwgZ3JpZHN0ZXIuJG9wdGlvbnMuZHJhZ2dhYmxlLmRyYWdIYW5kbGVDbGFzcykpIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKEdyaWRzdGVyVXRpbHMuY2hlY2tDb250ZW50Q2xhc3MoZS50YXJnZXQsIGUuY3VycmVudFRhcmdldCwgZ3JpZHN0ZXIuJG9wdGlvbnMuZHJhZ2dhYmxlLmlnbm9yZUNvbnRlbnRDbGFzcykpIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGNoZWNrQ29udGVudENsYXNzRm9yRW1wdHlDZWxsQ2xpY2tFdmVudChncmlkc3RlcjogR3JpZHN0ZXJDb21wb25lbnRJbnRlcmZhY2UsIGU6IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIEdyaWRzdGVyVXRpbHMuY2hlY2tDb250ZW50Q2xhc3MoZS50YXJnZXQsIGUuY3VycmVudFRhcmdldCwgZ3JpZHN0ZXIuJG9wdGlvbnMuZHJhZ2dhYmxlLmlnbm9yZUNvbnRlbnRDbGFzcylcclxuICAgICAgfHwgR3JpZHN0ZXJVdGlscy5jaGVja0NvbnRlbnRDbGFzcyhlLnRhcmdldCwgZS5jdXJyZW50VGFyZ2V0LCBncmlkc3Rlci4kb3B0aW9ucy5kcmFnZ2FibGUuZHJhZ0hhbmRsZUNsYXNzKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBjaGVja0NvbnRlbnRDbGFzcyh0YXJnZXQ6IGFueSwgY3VycmVudDogYW55LCBjb250ZW50Q2xhc3M6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKCF0YXJnZXQgfHwgdGFyZ2V0ID09PSBjdXJyZW50KSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGlmICh0YXJnZXQuaGFzQXR0cmlidXRlKCdjbGFzcycpICYmIHRhcmdldC5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykuc3BsaXQoJyAnKS5pbmRleE9mKGNvbnRlbnRDbGFzcykgPiAtMSkge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBHcmlkc3RlclV0aWxzLmNoZWNrQ29udGVudENsYXNzKHRhcmdldC5wYXJlbnROb2RlLCBjdXJyZW50LCBjb250ZW50Q2xhc3MpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc3RhdGljIGNvbXBhcmVJdGVtcyhhOiB7IHg6IG51bWJlciwgeTogbnVtYmVyIH0sIGI6IHsgeDogbnVtYmVyLCB5OiBudW1iZXIgfSk6IG51bWJlciB7XHJcbiAgICBpZiAoYS55ID4gYi55KSB7XHJcbiAgICAgIHJldHVybiAtMTtcclxuICAgIH0gZWxzZSBpZiAoYS55IDwgYi55KSB7XHJcbiAgICAgIHJldHVybiAxO1xyXG4gICAgfSBlbHNlIGlmIChhLnggPiBiLngpIHtcclxuICAgICAgcmV0dXJuIC0xO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIDE7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==