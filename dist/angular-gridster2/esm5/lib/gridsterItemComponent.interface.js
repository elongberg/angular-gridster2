/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
var /**
 * @abstract
 */
GridsterItemComponentInterface = /** @class */ (function () {
    function GridsterItemComponentInterface() {
    }
    return GridsterItemComponentInterface;
}());
/**
 * @abstract
 */
export { GridsterItemComponentInterface };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZHN0ZXJJdGVtQ29tcG9uZW50LmludGVyZmFjZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItZ3JpZHN0ZXIyLyIsInNvdXJjZXMiOlsibGliL2dyaWRzdGVySXRlbUNvbXBvbmVudC5pbnRlcmZhY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQU1BOzs7O0lBQUE7SUFtQkEsQ0FBQztJQUFELHFDQUFDO0FBQUQsQ0FBQyxBQW5CRCxJQW1CQzs7Ozs7OztJQWxCQyw4Q0FBbUI7O0lBQ25CLCtDQUFvQjs7SUFDcEIsNkNBQVk7O0lBQ1osOENBQWE7O0lBQ2IsK0NBQWM7O0lBQ2QsZ0RBQWU7O0lBQ2YsOENBQXdCOztJQUN4QixnREFBMEI7O0lBQzFCLG1EQUFtQjs7SUFDbkIsdURBQTBCOztJQUMxQixxREFBd0I7O0lBQ3hCLGlEQUFvQjs7SUFDcEIsMERBQTJFOztJQUMzRSxzREFBNEI7O0lBQzVCLHNEQUE0Qjs7SUFDNUIsNENBQVE7O0lBQ1Isa0RBQXFDOztJQUNyQyxrREFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0dyaWRzdGVySXRlbX0gZnJvbSAnLi9ncmlkc3Rlckl0ZW0uaW50ZXJmYWNlJztcclxuaW1wb3J0IHtHcmlkc3RlckRyYWdnYWJsZX0gZnJvbSAnLi9ncmlkc3RlckRyYWdnYWJsZS5zZXJ2aWNlJztcclxuaW1wb3J0IHtSZW5kZXJlcjJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0dyaWRzdGVyUmVzaXphYmxlfSBmcm9tICcuL2dyaWRzdGVyUmVzaXphYmxlLnNlcnZpY2UnO1xyXG5pbXBvcnQge0dyaWRzdGVyQ29tcG9uZW50SW50ZXJmYWNlfSBmcm9tICcuL2dyaWRzdGVyLmludGVyZmFjZSc7XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgR3JpZHN0ZXJJdGVtQ29tcG9uZW50SW50ZXJmYWNlIHtcclxuICBpdGVtOiBHcmlkc3Rlckl0ZW07XHJcbiAgJGl0ZW06IEdyaWRzdGVySXRlbTtcclxuICB0b3A6IG51bWJlcjtcclxuICBsZWZ0OiBudW1iZXI7XHJcbiAgd2lkdGg6IG51bWJlcjtcclxuICBoZWlnaHQ6IG51bWJlcjtcclxuICBkcmFnOiBHcmlkc3RlckRyYWdnYWJsZTtcclxuICByZXNpemU6IEdyaWRzdGVyUmVzaXphYmxlO1xyXG4gIG5vdFBsYWNlZDogYm9vbGVhbjtcclxuICB1cGRhdGVPcHRpb25zOiAoKSA9PiB2b2lkO1xyXG4gIGl0ZW1DaGFuZ2VkOiAoKSA9PiB2b2lkO1xyXG4gIHNldFNpemU6ICgpID0+IHZvaWQ7XHJcbiAgY2hlY2tJdGVtQ2hhbmdlczogKG5ld1ZhbHVlOiBHcmlkc3Rlckl0ZW0sIG9sZFZhbHVlOiBHcmlkc3Rlckl0ZW0pID0+IHZvaWQ7XHJcbiAgY2FuQmVEcmFnZ2VkOiAoKSA9PiBib29sZWFuO1xyXG4gIGNhbkJlUmVzaXplZDogKCkgPT4gYm9vbGVhbjtcclxuICBlbDogYW55O1xyXG4gIGdyaWRzdGVyOiBHcmlkc3RlckNvbXBvbmVudEludGVyZmFjZTtcclxuICByZW5kZXJlcjogUmVuZGVyZXIyO1xyXG59XHJcbiJdfQ==