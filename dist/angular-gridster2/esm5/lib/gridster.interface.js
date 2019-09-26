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
GridsterComponentInterface = /** @class */ (function () {
    function GridsterComponentInterface() {
    }
    return GridsterComponentInterface;
}());
/**
 * @abstract
 */
export { GridsterComponentInterface };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZHN0ZXIuaW50ZXJmYWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1ncmlkc3RlcjIvIiwic291cmNlcyI6WyJsaWIvZ3JpZHN0ZXIuaW50ZXJmYWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFTQTs7OztJQUFBO0lBc0NBLENBQUM7SUFBRCxpQ0FBQztBQUFELENBQUMsQUF0Q0QsSUFzQ0M7Ozs7Ozs7SUFyQ0MsOENBQTBCOztJQUMxQiwwQ0FBNEM7O0lBQzVDLG9EQUFpRjs7SUFDakYsOERBQTJGOztJQUMzRix1REFBeUM7O0lBQ3pDLHVEQUFtRzs7SUFDbkcsdURBQXlDOztJQUN6Qyx1REFBbUc7O0lBQ25HLHNEQUFtRjs7SUFDbkYsdURBQWlGOztJQUNqRix3REFBb0Q7O0lBQ3BELHdDQUFROztJQUNSLDhDQUFvQjs7SUFDcEIsa0RBQStCOztJQUMvQiwyQ0FBeUI7O0lBQ3pCLDZDQUF3Qjs7SUFDeEIsNkRBQW9DOztJQUNwQyxnREFBdUI7O0lBQ3ZCLGdEQUFnQzs7SUFDaEMsNkNBQXdEOztJQUN4RCxnREFBMkQ7O0lBQzNELGtEQUF1Qzs7SUFDdkMsNENBQWdCOztJQUNoQiw4Q0FBaUI7O0lBQ2pCLCtDQUFrQjs7SUFDbEIsNkNBQWdCOztJQUNoQiwwQ0FBYTs7SUFDYixpREFBb0I7O0lBQ3BCLGtEQUFxQjs7SUFDckIsa0RBQWtDOztJQUNsQyx1REFBZ0M7O0lBQ2hDLG9EQUF3Qjs7SUFDeEIsK0NBQTZCOztJQUM3Qiw2Q0FBeUI7O0lBQ3pCLDBDQUFhOztJQUNiLDhDQUF3Qjs7SUFDeEIsaURBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtHcmlkc3RlckNvbmZpZ1N9IGZyb20gJy4vZ3JpZHN0ZXJDb25maWdTLmludGVyZmFjZSc7XHJcbmltcG9ydCB7Q2hhbmdlRGV0ZWN0b3JSZWYsIE5nWm9uZSwgUmVuZGVyZXIyfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtHcmlkc3RlckVtcHR5Q2VsbH0gZnJvbSAnLi9ncmlkc3RlckVtcHR5Q2VsbC5zZXJ2aWNlJztcclxuaW1wb3J0IHtHcmlkc3RlckNvbXBhY3R9IGZyb20gJy4vZ3JpZHN0ZXJDb21wYWN0LnNlcnZpY2UnO1xyXG5pbXBvcnQge0dyaWRzdGVyQ29uZmlnfSBmcm9tICcuL2dyaWRzdGVyQ29uZmlnLmludGVyZmFjZSc7XHJcbmltcG9ydCB7R3JpZHN0ZXJJdGVtfSBmcm9tICcuL2dyaWRzdGVySXRlbS5pbnRlcmZhY2UnO1xyXG5pbXBvcnQge0dyaWRzdGVySXRlbUNvbXBvbmVudEludGVyZmFjZX0gZnJvbSAnLi9ncmlkc3Rlckl0ZW1Db21wb25lbnQuaW50ZXJmYWNlJztcclxuaW1wb3J0IHtHcmlkc3RlclJlbmRlcmVyfSBmcm9tICcuL2dyaWRzdGVyUmVuZGVyZXIuc2VydmljZSc7XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgR3JpZHN0ZXJDb21wb25lbnRJbnRlcmZhY2Uge1xyXG4gICRvcHRpb25zOiBHcmlkc3RlckNvbmZpZ1M7XHJcbiAgZ3JpZDogQXJyYXk8R3JpZHN0ZXJJdGVtQ29tcG9uZW50SW50ZXJmYWNlPjtcclxuICBjaGVja0NvbGxpc2lvbjogKGl0ZW06IEdyaWRzdGVySXRlbSkgPT4gR3JpZHN0ZXJJdGVtQ29tcG9uZW50SW50ZXJmYWNlIHwgYm9vbGVhbjtcclxuICBjaGVja0NvbGxpc2lvbkZvclN3YXBpbmc6IChpdGVtOiBHcmlkc3Rlckl0ZW0pID0+IEdyaWRzdGVySXRlbUNvbXBvbmVudEludGVyZmFjZSB8IGJvb2xlYW47XHJcbiAgcG9zaXRpb25YVG9QaXhlbHM6ICh4OiBudW1iZXIpID0+IG51bWJlcjtcclxuICBwaXhlbHNUb1Bvc2l0aW9uWDogKHg6IG51bWJlciwgcm91bmRpbmdNZXRob2Q6ICh4OiBudW1iZXIpID0+IG51bWJlciwgbm9MaW1pdD86IGJvb2xlYW4pID0+IG51bWJlcjtcclxuICBwb3NpdGlvbllUb1BpeGVsczogKHk6IG51bWJlcikgPT4gbnVtYmVyO1xyXG4gIHBpeGVsc1RvUG9zaXRpb25ZOiAoeTogbnVtYmVyLCByb3VuZGluZ01ldGhvZDogKHg6IG51bWJlcikgPT4gbnVtYmVyLCBub0xpbWl0PzogYm9vbGVhbikgPT4gbnVtYmVyO1xyXG4gIGZpbmRJdGVtV2l0aEl0ZW06IChpdGVtOiBHcmlkc3Rlckl0ZW0pID0+IEdyaWRzdGVySXRlbUNvbXBvbmVudEludGVyZmFjZSB8IGJvb2xlYW47XHJcbiAgZmluZEl0ZW1zV2l0aEl0ZW06IChpdGVtOiBHcmlkc3Rlckl0ZW0pID0+IEFycmF5PEdyaWRzdGVySXRlbUNvbXBvbmVudEludGVyZmFjZT47XHJcbiAgY2hlY2tHcmlkQ29sbGlzaW9uOiAoaXRlbTogR3JpZHN0ZXJJdGVtKSA9PiBib29sZWFuO1xyXG4gIGVsOiBhbnk7XHJcbiAgcmVuZGVyZXI6IFJlbmRlcmVyMjtcclxuICBncmlkUmVuZGVyZXI6IEdyaWRzdGVyUmVuZGVyZXI7XHJcbiAgY2RSZWY6IENoYW5nZURldGVjdG9yUmVmO1xyXG4gIG9wdGlvbnM6IEdyaWRzdGVyQ29uZmlnO1xyXG4gIGNhbGN1bGF0ZUxheW91dERlYm91bmNlOiAoKSA9PiB2b2lkO1xyXG4gIHVwZGF0ZUdyaWQ6ICgpID0+IHZvaWQ7XHJcbiAgbW92aW5nSXRlbTogR3JpZHN0ZXJJdGVtIHwgbnVsbDtcclxuICBhZGRJdGVtOiAoaXRlbTogR3JpZHN0ZXJJdGVtQ29tcG9uZW50SW50ZXJmYWNlKSA9PiB2b2lkO1xyXG4gIHJlbW92ZUl0ZW06IChpdGVtOiBHcmlkc3Rlckl0ZW1Db21wb25lbnRJbnRlcmZhY2UpID0+IHZvaWQ7XHJcbiAgcHJldmlld1N0eWxlOiAoZHJhZz86IGJvb2xlYW4pID0+IHZvaWQ7XHJcbiAgbW9iaWxlOiBib29sZWFuO1xyXG4gIGN1cldpZHRoOiBudW1iZXI7XHJcbiAgY3VySGVpZ2h0OiBudW1iZXI7XHJcbiAgY29sdW1uczogbnVtYmVyO1xyXG4gIHJvd3M6IG51bWJlcjtcclxuICBjdXJDb2xXaWR0aDogbnVtYmVyO1xyXG4gIGN1clJvd0hlaWdodDogbnVtYmVyO1xyXG4gIHdpbmRvd1Jlc2l6ZTogKCgpID0+IHZvaWQpIHwgbnVsbDtcclxuICBzZXRHcmlkRGltZW5zaW9uczogKCgpID0+IHZvaWQpO1xyXG4gIGRyYWdJblByb2dyZXNzOiBib29sZWFuO1xyXG4gIGVtcHR5Q2VsbDogR3JpZHN0ZXJFbXB0eUNlbGw7XHJcbiAgY29tcGFjdDogR3JpZHN0ZXJDb21wYWN0O1xyXG4gIHpvbmU6IE5nWm9uZTtcclxuICBncmlkUm93czogQXJyYXk8bnVtYmVyPjtcclxuICBncmlkQ29sdW1uczogQXJyYXk8bnVtYmVyPjtcclxufVxyXG4iXX0=