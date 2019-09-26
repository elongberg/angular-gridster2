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
export { GridType };
/** @enum {string} */
var DisplayGrid = {
    Always: 'always',
    OnDragAndResize: 'onDrag&Resize',
    None: 'none',
};
export { DisplayGrid };
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
export { CompactType };
/**
 * @record
 */
export function GridsterConfig() { }
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
export function DragBase() { }
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
export function Draggable() { }
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
export function Resizable() { }
if (false) {
    /** @type {?|undefined} */
    Resizable.prototype.handles;
}
/**
 * @record
 */
export function PushDirections() { }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZHN0ZXJDb25maWcuaW50ZXJmYWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1ncmlkc3RlcjIvIiwic291cmNlcyI6WyJsaWIvZ3JpZHN0ZXJDb25maWcuaW50ZXJmYWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztJQWlCRSxLQUFNLEtBQUs7SUFDWCxnQkFBaUIsZ0JBQWdCO0lBQ2pDLGtCQUFtQixrQkFBa0I7SUFDckMsT0FBUSxPQUFPO0lBQ2YsZUFBZ0IsZUFBZTtJQUMvQixpQkFBa0IsaUJBQWlCOzs7OztJQUluQyxRQUFTLFFBQVE7SUFDakIsaUJBQWtCLGVBQWU7SUFDakMsTUFBTyxNQUFNOzs7OztJQUliLE1BQU8sTUFBTTtJQUNiLFdBQVksV0FBVztJQUN2QixhQUFjLGFBQWE7SUFDM0Isa0JBQW1CLGdCQUFnQjtJQUNuQyxrQkFBbUIsZ0JBQWdCO0lBQ25DLGNBQWUsY0FBYztJQUM3QixtQkFBb0IsaUJBQWlCO0lBQ3JDLG1CQUFvQixpQkFBaUI7Ozs7OztBQUd2QyxvQ0EyRUM7OztJQTFFQyxrQ0FBcUI7O0lBQ3JCLHVDQUF1Qjs7SUFDdkIsd0NBQXdCOztJQUN4QixpREFBa0M7O0lBQ2xDLGdEQUFpQzs7SUFDakMscUNBQXNCOztJQUN0QixxQ0FBMkI7O0lBQzNCLDBDQUEwQjs7SUFDMUIsaUNBQWlCOztJQUNqQixpQ0FBaUI7O0lBQ2pCLGlDQUFpQjs7SUFDakIsaUNBQWlCOztJQUNqQix5Q0FBeUI7O0lBQ3pCLHlDQUF5Qjs7SUFDekIscUNBQXFCOztJQUNyQixxQ0FBcUI7O0lBQ3JCLHFDQUFxQjs7SUFDckIscUNBQXFCOztJQUNyQixxQ0FBcUI7O0lBQ3JCLHFDQUFxQjs7SUFDckIsZ0NBQWdCOztJQUNoQixxQ0FBc0I7O0lBQ3RCLHdDQUErQjs7SUFDL0IsMENBQWlDOztJQUNqQywyQ0FBa0M7O0lBQ2xDLHlDQUFnQzs7SUFDaEMsaURBQWtDOztJQUNsQywyQ0FBa0M7O0lBQ2xDLHFDQUFxQjs7SUFDckIsc0NBQThEOztJQUM5RCx5Q0FBaUU7O0lBQ2pFLGlEQUF5RTs7SUFDekUsNENBQWlHOztJQUNqRyw0Q0FBaUc7O0lBQ2pHLDBDQUErRjs7SUFDL0YsNkNBQWtHOztJQUNsRyw4Q0FBdUQ7O0lBQ3ZELG1DQUFzQjs7SUFDdEIsbUNBQXNCOztJQUN0Qiw4QkFBZTs7SUFDZiwyQ0FBNEI7O0lBQzVCLG1DQUFvQjs7SUFDcEIsMkNBQTRCOztJQUM1Qiw2Q0FBOEI7O0lBQzlCLHVEQUF3Qzs7SUFDeEMsd0NBQWdDOztJQUNoQyx5Q0FBMEI7O0lBQzFCLHFDQUEyQjs7SUFDM0IsNkNBQThCOztJQUM5Qix5Q0FBMEI7O0lBQzFCLDBDQUEyQjs7SUFDM0IsaURBQWtDOztJQUNsQywrQ0FBZ0M7O0lBQ2hDLDhDQUErQjs7SUFDL0Isb0RBQXFDOztJQUNyQyw2Q0FBOEI7O0lBQzlCLDZDQUE4Qjs7SUFDOUIsZ0RBQWlDOztJQUNqQyxnREFBeUU7O0lBQ3pFLHNEQUErRTs7SUFDL0UsK0NBQXdFOztJQUN4RSwrQ0FBd0U7O0lBQ3hFLDhDQUE4Qjs7SUFDOUIsOENBQThCOztJQUM5QiwyQ0FBNEI7O0lBQzVCLDZCQU1FOzs7Ozs7QUFLSiw4QkFLQzs7O0lBSkMsMkJBQWtCOztJQUNsQix3QkFBcUg7O0lBQ3JILHlCQUF1Rzs7SUFDdkcsOEJBQW9COzs7OztBQUd0QiwrQkFNQzs7O0lBTEMsdUNBQTRCOztJQUM1QixrQ0FBd0I7O0lBQ3hCLG9DQUF5Qjs7SUFDekIsa0NBQXdCOztJQUN4QiwwQ0FBZ0g7Ozs7O0FBR2xILCtCQVdDOzs7SUFWQyw0QkFTRTs7Ozs7QUFHSixvQ0FLQzs7O0lBSkMsK0JBQWU7O0lBQ2YsOEJBQWM7O0lBQ2QsK0JBQWU7O0lBQ2YsOEJBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0dyaWRzdGVySXRlbX0gZnJvbSAnLi9ncmlkc3Rlckl0ZW0uaW50ZXJmYWNlJztcclxuaW1wb3J0IHtHcmlkc3Rlckl0ZW1Db21wb25lbnRJbnRlcmZhY2V9IGZyb20gJy4vZ3JpZHN0ZXJJdGVtQ29tcG9uZW50LmludGVyZmFjZSc7XHJcbmltcG9ydCB7R3JpZHN0ZXJDb21wb25lbnRJbnRlcmZhY2V9IGZyb20gJy4vZ3JpZHN0ZXIuaW50ZXJmYWNlJztcclxuXHJcbmV4cG9ydCB0eXBlIGdyaWRUeXBlcyA9ICdmaXQnIHwgJ3Njcm9sbFZlcnRpY2FsJyB8ICdzY3JvbGxIb3Jpem9udGFsJyB8ICdmaXhlZCcgfCAndmVydGljYWxGaXhlZCcgfCAnaG9yaXpvbnRhbEZpeGVkJztcclxuZXhwb3J0IHR5cGUgZGlzcGxheUdyaWRzID0gJ2Fsd2F5cycgfCAnb25EcmFnJlJlc2l6ZScgfCAnbm9uZSc7XHJcbmV4cG9ydCB0eXBlIGNvbXBhY3RUeXBlcyA9XHJcbiAgJ25vbmUnXHJcbiAgfCAnY29tcGFjdFVwJ1xyXG4gIHwgJ2NvbXBhY3RMZWZ0J1xyXG4gIHwgJ2NvbXBhY3RVcCZMZWZ0J1xyXG4gIHwgJ2NvbXBhY3RMZWZ0JlVwJ1xyXG4gIHwgJ2NvbXBhY3RSaWdodCdcclxuICB8ICdjb21wYWN0VXAmUmlnaHQnXHJcbiAgfCAnY29tcGFjdFJpZ2h0JlVwJztcclxuXHJcbmV4cG9ydCBlbnVtIEdyaWRUeXBlIHtcclxuICBGaXQgPSAnZml0JyxcclxuICBTY3JvbGxWZXJ0aWNhbCA9ICdzY3JvbGxWZXJ0aWNhbCcsXHJcbiAgU2Nyb2xsSG9yaXpvbnRhbCA9ICdzY3JvbGxIb3Jpem9udGFsJyxcclxuICBGaXhlZCA9ICdmaXhlZCcsXHJcbiAgVmVydGljYWxGaXhlZCA9ICd2ZXJ0aWNhbEZpeGVkJyxcclxuICBIb3Jpem9udGFsRml4ZWQgPSAnaG9yaXpvbnRhbEZpeGVkJ1xyXG59XHJcblxyXG5leHBvcnQgZW51bSBEaXNwbGF5R3JpZCB7XHJcbiAgQWx3YXlzID0gJ2Fsd2F5cycsXHJcbiAgT25EcmFnQW5kUmVzaXplID0gJ29uRHJhZyZSZXNpemUnLFxyXG4gIE5vbmUgPSAnbm9uZSdcclxufVxyXG5cclxuZXhwb3J0IGVudW0gQ29tcGFjdFR5cGUge1xyXG4gIE5vbmUgPSAnbm9uZScsXHJcbiAgQ29tcGFjdFVwID0gJ2NvbXBhY3RVcCcsXHJcbiAgQ29tcGFjdExlZnQgPSAnY29tcGFjdExlZnQnLFxyXG4gIENvbXBhY3RVcEFuZExlZnQgPSAnY29tcGFjdFVwJkxlZnQnLFxyXG4gIENvbXBhY3RMZWZ0QW5kVXAgPSAnY29tcGFjdExlZnQmVXAnLFxyXG4gIENvbXBhY3RSaWdodCA9ICdjb21wYWN0UmlnaHQnLFxyXG4gIENvbXBhY3RVcEFuZFJpZ2h0ID0gJ2NvbXBhY3RVcCZSaWdodCcsXHJcbiAgQ29tcGFjdFJpZ2h0QW5kVXAgPSAnY29tcGFjdFJpZ2h0JlVwJyxcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBHcmlkc3RlckNvbmZpZyB7XHJcbiAgZ3JpZFR5cGU/OiBncmlkVHlwZXM7XHJcbiAgZml4ZWRDb2xXaWR0aD86IG51bWJlcjtcclxuICBmaXhlZFJvd0hlaWdodD86IG51bWJlcjtcclxuICBrZWVwRml4ZWRIZWlnaHRJbk1vYmlsZT86IGJvb2xlYW47XHJcbiAga2VlcEZpeGVkV2lkdGhJbk1vYmlsZT86IGJvb2xlYW47XHJcbiAgc2V0R3JpZFNpemU/OiBib29sZWFuO1xyXG4gIGNvbXBhY3RUeXBlPzogY29tcGFjdFR5cGVzO1xyXG4gIG1vYmlsZUJyZWFrcG9pbnQ/OiBudW1iZXI7XHJcbiAgbWluQ29scz86IG51bWJlcjtcclxuICBtYXhDb2xzPzogbnVtYmVyO1xyXG4gIG1pblJvd3M/OiBudW1iZXI7XHJcbiAgbWF4Um93cz86IG51bWJlcjtcclxuICBkZWZhdWx0SXRlbUNvbHM/OiBudW1iZXI7XHJcbiAgZGVmYXVsdEl0ZW1Sb3dzPzogbnVtYmVyO1xyXG4gIG1heEl0ZW1Db2xzPzogbnVtYmVyO1xyXG4gIG1heEl0ZW1Sb3dzPzogbnVtYmVyO1xyXG4gIG1pbkl0ZW1Db2xzPzogbnVtYmVyO1xyXG4gIG1pbkl0ZW1Sb3dzPzogbnVtYmVyO1xyXG4gIG1pbkl0ZW1BcmVhPzogbnVtYmVyO1xyXG4gIG1heEl0ZW1BcmVhPzogbnVtYmVyO1xyXG4gIG1hcmdpbj86IG51bWJlcjtcclxuICBvdXRlck1hcmdpbj86IGJvb2xlYW47XHJcbiAgb3V0ZXJNYXJnaW5Ub3A/OiBudW1iZXIgfCBudWxsO1xyXG4gIG91dGVyTWFyZ2luUmlnaHQ/OiBudW1iZXIgfCBudWxsO1xyXG4gIG91dGVyTWFyZ2luQm90dG9tPzogbnVtYmVyIHwgbnVsbDtcclxuICBvdXRlck1hcmdpbkxlZnQ/OiBudW1iZXIgfCBudWxsO1xyXG4gIHVzZVRyYW5zZm9ybVBvc2l0aW9uaW5nPzogYm9vbGVhbjtcclxuICBzY3JvbGxTZW5zaXRpdml0eT86IG51bWJlciB8IG51bGw7XHJcbiAgc2Nyb2xsU3BlZWQ/OiBudW1iZXI7XHJcbiAgaW5pdENhbGxiYWNrPzogKGdyaWRzdGVyOiBHcmlkc3RlckNvbXBvbmVudEludGVyZmFjZSkgPT4gdm9pZDtcclxuICBkZXN0cm95Q2FsbGJhY2s/OiAoZ3JpZHN0ZXI6IEdyaWRzdGVyQ29tcG9uZW50SW50ZXJmYWNlKSA9PiB2b2lkO1xyXG4gIGdyaWRTaXplQ2hhbmdlZENhbGxiYWNrPzogKGdyaWRzdGVyOiBHcmlkc3RlckNvbXBvbmVudEludGVyZmFjZSkgPT4gdm9pZDtcclxuICBpdGVtQ2hhbmdlQ2FsbGJhY2s/OiAoaXRlbTogR3JpZHN0ZXJJdGVtLCBpdGVtQ29tcG9uZW50OiBHcmlkc3Rlckl0ZW1Db21wb25lbnRJbnRlcmZhY2UpID0+IHZvaWQ7XHJcbiAgaXRlbVJlc2l6ZUNhbGxiYWNrPzogKGl0ZW06IEdyaWRzdGVySXRlbSwgaXRlbUNvbXBvbmVudDogR3JpZHN0ZXJJdGVtQ29tcG9uZW50SW50ZXJmYWNlKSA9PiB2b2lkO1xyXG4gIGl0ZW1Jbml0Q2FsbGJhY2s/OiAoaXRlbTogR3JpZHN0ZXJJdGVtLCBpdGVtQ29tcG9uZW50OiBHcmlkc3Rlckl0ZW1Db21wb25lbnRJbnRlcmZhY2UpID0+IHZvaWQ7XHJcbiAgaXRlbVJlbW92ZWRDYWxsYmFjaz86IChpdGVtOiBHcmlkc3Rlckl0ZW0sIGl0ZW1Db21wb25lbnQ6IEdyaWRzdGVySXRlbUNvbXBvbmVudEludGVyZmFjZSkgPT4gdm9pZDtcclxuICBpdGVtVmFsaWRhdGVDYWxsYmFjaz86IChpdGVtOiBHcmlkc3Rlckl0ZW0pID0+IGJvb2xlYW47XHJcbiAgZHJhZ2dhYmxlPzogRHJhZ2dhYmxlO1xyXG4gIHJlc2l6YWJsZT86IFJlc2l6YWJsZTtcclxuICBzd2FwPzogYm9vbGVhbjtcclxuICBzd2FwV2hpbGVEcmFnZ2luZz86IGJvb2xlYW47XHJcbiAgcHVzaEl0ZW1zPzogYm9vbGVhbjtcclxuICBkaXNhYmxlUHVzaE9uRHJhZz86IGJvb2xlYW47XHJcbiAgZGlzYWJsZVB1c2hPblJlc2l6ZT86IGJvb2xlYW47XHJcbiAgZGlzYWJsZUF1dG9Qb3NpdGlvbk9uQ29uZmxpY3Q/OiBib29sZWFuO1xyXG4gIHB1c2hEaXJlY3Rpb25zPzogUHVzaERpcmVjdGlvbnM7XHJcbiAgcHVzaFJlc2l6ZUl0ZW1zPzogYm9vbGVhbjtcclxuICBkaXNwbGF5R3JpZD86IGRpc3BsYXlHcmlkcztcclxuICBkaXNhYmxlV2luZG93UmVzaXplPzogYm9vbGVhbjtcclxuICBkaXNhYmxlV2FybmluZ3M/OiBib29sZWFuO1xyXG4gIHNjcm9sbFRvTmV3SXRlbXM/OiBib29sZWFuO1xyXG4gIGRpc2FibGVTY3JvbGxIb3Jpem9udGFsPzogYm9vbGVhbjtcclxuICBkaXNhYmxlU2Nyb2xsVmVydGljYWw/OiBib29sZWFuO1xyXG4gIGVuYWJsZUVtcHR5Q2VsbENsaWNrPzogYm9vbGVhbjtcclxuICBlbmFibGVFbXB0eUNlbGxDb250ZXh0TWVudT86IGJvb2xlYW47XHJcbiAgZW5hYmxlRW1wdHlDZWxsRHJvcD86IGJvb2xlYW47XHJcbiAgZW5hYmxlRW1wdHlDZWxsRHJhZz86IGJvb2xlYW47XHJcbiAgZW5hYmxlT2NjdXBpZWRDZWxsRHJvcD86IGJvb2xlYW47XHJcbiAgZW1wdHlDZWxsQ2xpY2tDYWxsYmFjaz86IChldmVudDogTW91c2VFdmVudCwgaXRlbTogR3JpZHN0ZXJJdGVtKSA9PiB2b2lkO1xyXG4gIGVtcHR5Q2VsbENvbnRleHRNZW51Q2FsbGJhY2s/OiAoZXZlbnQ6IE1vdXNlRXZlbnQsIGl0ZW06IEdyaWRzdGVySXRlbSkgPT4gdm9pZDtcclxuICBlbXB0eUNlbGxEcm9wQ2FsbGJhY2s/OiAoZXZlbnQ6IE1vdXNlRXZlbnQsIGl0ZW06IEdyaWRzdGVySXRlbSkgPT4gdm9pZDtcclxuICBlbXB0eUNlbGxEcmFnQ2FsbGJhY2s/OiAoZXZlbnQ6IE1vdXNlRXZlbnQsIGl0ZW06IEdyaWRzdGVySXRlbSkgPT4gdm9pZDtcclxuICBlbXB0eUNlbGxEcmFnTWF4Q29scz86IG51bWJlcjtcclxuICBlbXB0eUNlbGxEcmFnTWF4Um93cz86IG51bWJlcjtcclxuICBpZ25vcmVNYXJnaW5JblJvdz86IGJvb2xlYW47XHJcbiAgYXBpPzoge1xyXG4gICAgcmVzaXplPzogKCkgPT4gdm9pZCxcclxuICAgIG9wdGlvbnNDaGFuZ2VkPzogKCkgPT4gdm9pZCxcclxuICAgIGdldE5leHRQb3NzaWJsZVBvc2l0aW9uPzogKG5ld0l0ZW06IEdyaWRzdGVySXRlbSkgPT4gYm9vbGVhbixcclxuICAgIGdldEZpcnN0UG9zc2libGVQb3NpdGlvbj86IChpdGVtOiBHcmlkc3Rlckl0ZW0pID0+IEdyaWRzdGVySXRlbSxcclxuICAgIGdldExhc3RQb3NzaWJsZVBvc2l0aW9uPzogKGl0ZW06IEdyaWRzdGVySXRlbSkgPT4gR3JpZHN0ZXJJdGVtLFxyXG4gIH07XHJcblxyXG4gIFtwcm9wTmFtZTogc3RyaW5nXTogYW55O1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIERyYWdCYXNlIHtcclxuICBlbmFibGVkPzogYm9vbGVhbjtcclxuICBzdG9wPzogKGl0ZW06IEdyaWRzdGVySXRlbSwgaXRlbUNvbXBvbmVudDogR3JpZHN0ZXJJdGVtQ29tcG9uZW50SW50ZXJmYWNlLCBldmVudDogTW91c2VFdmVudCkgPT4gUHJvbWlzZTxhbnk+IHwgdm9pZDtcclxuICBzdGFydD86IChpdGVtOiBHcmlkc3Rlckl0ZW0sIGl0ZW1Db21wb25lbnQ6IEdyaWRzdGVySXRlbUNvbXBvbmVudEludGVyZmFjZSwgZXZlbnQ6IE1vdXNlRXZlbnQpID0+IHZvaWQ7XHJcbiAgZGVsYXlTdGFydD86IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBEcmFnZ2FibGUgZXh0ZW5kcyBEcmFnQmFzZSB7XHJcbiAgaWdub3JlQ29udGVudENsYXNzPzogc3RyaW5nO1xyXG4gIGlnbm9yZUNvbnRlbnQ/OiBib29sZWFuO1xyXG4gIGRyYWdIYW5kbGVDbGFzcz86IHN0cmluZztcclxuICBkcm9wT3Zlckl0ZW1zPzogYm9vbGVhbjtcclxuICBkcm9wT3Zlckl0ZW1zQ2FsbGJhY2s/OiAoc291cmNlOiBHcmlkc3Rlckl0ZW0sIHRhcmdldDogR3JpZHN0ZXJJdGVtLCBncmlkPzogR3JpZHN0ZXJDb21wb25lbnRJbnRlcmZhY2UpID0+IHZvaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUmVzaXphYmxlIGV4dGVuZHMgRHJhZ0Jhc2Uge1xyXG4gIGhhbmRsZXM/OiB7XHJcbiAgICBzOiBib29sZWFuLFxyXG4gICAgZTogYm9vbGVhbixcclxuICAgIG46IGJvb2xlYW4sXHJcbiAgICB3OiBib29sZWFuLFxyXG4gICAgc2U6IGJvb2xlYW4sXHJcbiAgICBuZTogYm9vbGVhbixcclxuICAgIHN3OiBib29sZWFuLFxyXG4gICAgbnc6IGJvb2xlYW5cclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFB1c2hEaXJlY3Rpb25zIHtcclxuICBub3J0aDogYm9vbGVhbjtcclxuICBlYXN0OiBib29sZWFuO1xyXG4gIHNvdXRoOiBib29sZWFuO1xyXG4gIHdlc3Q6IGJvb2xlYW47XHJcbn1cclxuIl19