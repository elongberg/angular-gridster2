/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
export class GridsterComponentInterface {
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZHN0ZXIuaW50ZXJmYWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1ncmlkc3RlcjIvIiwic291cmNlcyI6WyJsaWIvZ3JpZHN0ZXIuaW50ZXJmYWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFTQSxNQUFNLE9BQWdCLDBCQUEwQjtDQXNDL0M7OztJQXJDQyw4Q0FBMEI7O0lBQzFCLDBDQUE0Qzs7SUFDNUMsb0RBQWlGOztJQUNqRiw4REFBMkY7O0lBQzNGLHVEQUF5Qzs7SUFDekMsdURBQW1HOztJQUNuRyx1REFBeUM7O0lBQ3pDLHVEQUFtRzs7SUFDbkcsc0RBQW1GOztJQUNuRix1REFBaUY7O0lBQ2pGLHdEQUFvRDs7SUFDcEQsd0NBQVE7O0lBQ1IsOENBQW9COztJQUNwQixrREFBK0I7O0lBQy9CLDJDQUF5Qjs7SUFDekIsNkNBQXdCOztJQUN4Qiw2REFBb0M7O0lBQ3BDLGdEQUF1Qjs7SUFDdkIsZ0RBQWdDOztJQUNoQyw2Q0FBd0Q7O0lBQ3hELGdEQUEyRDs7SUFDM0Qsa0RBQXVDOztJQUN2Qyw0Q0FBZ0I7O0lBQ2hCLDhDQUFpQjs7SUFDakIsK0NBQWtCOztJQUNsQiw2Q0FBZ0I7O0lBQ2hCLDBDQUFhOztJQUNiLGlEQUFvQjs7SUFDcEIsa0RBQXFCOztJQUNyQixrREFBa0M7O0lBQ2xDLHVEQUFnQzs7SUFDaEMsb0RBQXdCOztJQUN4QiwrQ0FBNkI7O0lBQzdCLDZDQUF5Qjs7SUFDekIsMENBQWE7O0lBQ2IsOENBQXdCOztJQUN4QixpREFBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0dyaWRzdGVyQ29uZmlnU30gZnJvbSAnLi9ncmlkc3RlckNvbmZpZ1MuaW50ZXJmYWNlJztcclxuaW1wb3J0IHtDaGFuZ2VEZXRlY3RvclJlZiwgTmdab25lLCBSZW5kZXJlcjJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0dyaWRzdGVyRW1wdHlDZWxsfSBmcm9tICcuL2dyaWRzdGVyRW1wdHlDZWxsLnNlcnZpY2UnO1xyXG5pbXBvcnQge0dyaWRzdGVyQ29tcGFjdH0gZnJvbSAnLi9ncmlkc3RlckNvbXBhY3Quc2VydmljZSc7XHJcbmltcG9ydCB7R3JpZHN0ZXJDb25maWd9IGZyb20gJy4vZ3JpZHN0ZXJDb25maWcuaW50ZXJmYWNlJztcclxuaW1wb3J0IHtHcmlkc3Rlckl0ZW19IGZyb20gJy4vZ3JpZHN0ZXJJdGVtLmludGVyZmFjZSc7XHJcbmltcG9ydCB7R3JpZHN0ZXJJdGVtQ29tcG9uZW50SW50ZXJmYWNlfSBmcm9tICcuL2dyaWRzdGVySXRlbUNvbXBvbmVudC5pbnRlcmZhY2UnO1xyXG5pbXBvcnQge0dyaWRzdGVyUmVuZGVyZXJ9IGZyb20gJy4vZ3JpZHN0ZXJSZW5kZXJlci5zZXJ2aWNlJztcclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBHcmlkc3RlckNvbXBvbmVudEludGVyZmFjZSB7XHJcbiAgJG9wdGlvbnM6IEdyaWRzdGVyQ29uZmlnUztcclxuICBncmlkOiBBcnJheTxHcmlkc3Rlckl0ZW1Db21wb25lbnRJbnRlcmZhY2U+O1xyXG4gIGNoZWNrQ29sbGlzaW9uOiAoaXRlbTogR3JpZHN0ZXJJdGVtKSA9PiBHcmlkc3Rlckl0ZW1Db21wb25lbnRJbnRlcmZhY2UgfCBib29sZWFuO1xyXG4gIGNoZWNrQ29sbGlzaW9uRm9yU3dhcGluZzogKGl0ZW06IEdyaWRzdGVySXRlbSkgPT4gR3JpZHN0ZXJJdGVtQ29tcG9uZW50SW50ZXJmYWNlIHwgYm9vbGVhbjtcclxuICBwb3NpdGlvblhUb1BpeGVsczogKHg6IG51bWJlcikgPT4gbnVtYmVyO1xyXG4gIHBpeGVsc1RvUG9zaXRpb25YOiAoeDogbnVtYmVyLCByb3VuZGluZ01ldGhvZDogKHg6IG51bWJlcikgPT4gbnVtYmVyLCBub0xpbWl0PzogYm9vbGVhbikgPT4gbnVtYmVyO1xyXG4gIHBvc2l0aW9uWVRvUGl4ZWxzOiAoeTogbnVtYmVyKSA9PiBudW1iZXI7XHJcbiAgcGl4ZWxzVG9Qb3NpdGlvblk6ICh5OiBudW1iZXIsIHJvdW5kaW5nTWV0aG9kOiAoeDogbnVtYmVyKSA9PiBudW1iZXIsIG5vTGltaXQ/OiBib29sZWFuKSA9PiBudW1iZXI7XHJcbiAgZmluZEl0ZW1XaXRoSXRlbTogKGl0ZW06IEdyaWRzdGVySXRlbSkgPT4gR3JpZHN0ZXJJdGVtQ29tcG9uZW50SW50ZXJmYWNlIHwgYm9vbGVhbjtcclxuICBmaW5kSXRlbXNXaXRoSXRlbTogKGl0ZW06IEdyaWRzdGVySXRlbSkgPT4gQXJyYXk8R3JpZHN0ZXJJdGVtQ29tcG9uZW50SW50ZXJmYWNlPjtcclxuICBjaGVja0dyaWRDb2xsaXNpb246IChpdGVtOiBHcmlkc3Rlckl0ZW0pID0+IGJvb2xlYW47XHJcbiAgZWw6IGFueTtcclxuICByZW5kZXJlcjogUmVuZGVyZXIyO1xyXG4gIGdyaWRSZW5kZXJlcjogR3JpZHN0ZXJSZW5kZXJlcjtcclxuICBjZFJlZjogQ2hhbmdlRGV0ZWN0b3JSZWY7XHJcbiAgb3B0aW9uczogR3JpZHN0ZXJDb25maWc7XHJcbiAgY2FsY3VsYXRlTGF5b3V0RGVib3VuY2U6ICgpID0+IHZvaWQ7XHJcbiAgdXBkYXRlR3JpZDogKCkgPT4gdm9pZDtcclxuICBtb3ZpbmdJdGVtOiBHcmlkc3Rlckl0ZW0gfCBudWxsO1xyXG4gIGFkZEl0ZW06IChpdGVtOiBHcmlkc3Rlckl0ZW1Db21wb25lbnRJbnRlcmZhY2UpID0+IHZvaWQ7XHJcbiAgcmVtb3ZlSXRlbTogKGl0ZW06IEdyaWRzdGVySXRlbUNvbXBvbmVudEludGVyZmFjZSkgPT4gdm9pZDtcclxuICBwcmV2aWV3U3R5bGU6IChkcmFnPzogYm9vbGVhbikgPT4gdm9pZDtcclxuICBtb2JpbGU6IGJvb2xlYW47XHJcbiAgY3VyV2lkdGg6IG51bWJlcjtcclxuICBjdXJIZWlnaHQ6IG51bWJlcjtcclxuICBjb2x1bW5zOiBudW1iZXI7XHJcbiAgcm93czogbnVtYmVyO1xyXG4gIGN1ckNvbFdpZHRoOiBudW1iZXI7XHJcbiAgY3VyUm93SGVpZ2h0OiBudW1iZXI7XHJcbiAgd2luZG93UmVzaXplOiAoKCkgPT4gdm9pZCkgfCBudWxsO1xyXG4gIHNldEdyaWREaW1lbnNpb25zOiAoKCkgPT4gdm9pZCk7XHJcbiAgZHJhZ0luUHJvZ3Jlc3M6IGJvb2xlYW47XHJcbiAgZW1wdHlDZWxsOiBHcmlkc3RlckVtcHR5Q2VsbDtcclxuICBjb21wYWN0OiBHcmlkc3RlckNvbXBhY3Q7XHJcbiAgem9uZTogTmdab25lO1xyXG4gIGdyaWRSb3dzOiBBcnJheTxudW1iZXI+O1xyXG4gIGdyaWRDb2x1bW5zOiBBcnJheTxudW1iZXI+O1xyXG59XHJcbiJdfQ==