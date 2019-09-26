/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { GridsterUtils } from './gridsterUtils.service';
import { GridsterComponentInterface } from './gridster.interface';
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
        { type: Injectable }
    ];
    /** @nocollapse */
    GridsterEmptyCell.ctorParameters = function () { return [
        { type: GridsterComponentInterface }
    ]; };
    return GridsterEmptyCell;
}());
export { GridsterEmptyCell };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZHN0ZXJFbXB0eUNlbGwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItZ3JpZHN0ZXIyLyIsInNvdXJjZXMiOlsibGliL2dyaWRzdGVyRW1wdHlDZWxsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBRXRELE9BQU8sRUFBQywwQkFBMEIsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBRWhFO0lBZ0JFLDJCQUFvQixRQUFvQztRQUFwQyxhQUFRLEdBQVIsUUFBUSxDQUE0QjtJQUN4RCxDQUFDOzs7O0lBRUQsbUNBQU87OztJQUFQO1FBQ0UsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQ3hCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUM7UUFDaEMsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksRUFBRTtZQUM5QixJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksRUFBRSxDQUFDO1NBQzlCO1FBQ0QsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3JCLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUN0QixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDckIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7U0FDM0I7SUFDSCxDQUFDOzs7O0lBRUQseUNBQWE7OztJQUFiO1FBQUEsaUJBMkNDO1FBMUNDLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsb0JBQW9CLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLHNCQUFzQixFQUFFO1lBQ3ZILElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLElB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QUU7WUFDeEYsT0FBTztTQUNSO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDOztnQkFqTkYsVUFBVTs7OztnQkFGSCwwQkFBMEI7O0lBb05sQyx3QkFBQztDQUFBLEFBbE5ELElBa05DO1NBak5ZLGlCQUFpQjs7O0lBQzVCLHdDQUFpQzs7SUFDakMsMkNBQWdDOztJQUNoQyxnREFBcUM7O0lBQ3JDLGlEQUFzQzs7SUFDdEMsMENBQStCOztJQUMvQiwwQ0FBK0I7O0lBQy9CLCtDQUFvQzs7SUFDcEMsMkNBQXlCOztJQUN6QixnREFBOEI7O0lBQzlCLHdDQUFzQjs7SUFDdEIsNkNBQTJCOztJQUMzQiwwQ0FBK0I7O0lBQy9CLDBDQUErQjs7Ozs7SUFFbkIscUNBQTRDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7R3JpZHN0ZXJVdGlsc30gZnJvbSAnLi9ncmlkc3RlclV0aWxzLnNlcnZpY2UnO1xyXG5pbXBvcnQge0dyaWRzdGVySXRlbX0gZnJvbSAnLi9ncmlkc3Rlckl0ZW0uaW50ZXJmYWNlJztcclxuaW1wb3J0IHtHcmlkc3RlckNvbXBvbmVudEludGVyZmFjZX0gZnJvbSAnLi9ncmlkc3Rlci5pbnRlcmZhY2UnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgR3JpZHN0ZXJFbXB0eUNlbGwge1xyXG4gIGluaXRpYWxJdGVtOiBHcmlkc3Rlckl0ZW0gfCBudWxsO1xyXG4gIGVtcHR5Q2VsbENsaWNrOiBGdW5jdGlvbiB8IG51bGw7XHJcbiAgZW1wdHlDZWxsQ2xpY2tUb3VjaDogRnVuY3Rpb24gfCBudWxsO1xyXG4gIGVtcHR5Q2VsbENvbnRleHRNZW51OiBGdW5jdGlvbiB8IG51bGw7XHJcbiAgZW1wdHlDZWxsRHJvcDogRnVuY3Rpb24gfCBudWxsO1xyXG4gIGVtcHR5Q2VsbERyYWc6IEZ1bmN0aW9uIHwgbnVsbDtcclxuICBlbXB0eUNlbGxEcmFnVG91Y2g6IEZ1bmN0aW9uIHwgbnVsbDtcclxuICBlbXB0eUNlbGxNTW92ZTogRnVuY3Rpb247XHJcbiAgZW1wdHlDZWxsTU1vdmVUb3VjaDogRnVuY3Rpb247XHJcbiAgZW1wdHlDZWxsVXA6IEZ1bmN0aW9uO1xyXG4gIGVtcHR5Q2VsbFVwVG91Y2g6IEZ1bmN0aW9uO1xyXG4gIGVtcHR5Q2VsbE1vdmU6IEZ1bmN0aW9uIHwgbnVsbDtcclxuICBlbXB0eUNlbGxFeGl0OiBGdW5jdGlvbiB8IG51bGw7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZ3JpZHN0ZXI6IEdyaWRzdGVyQ29tcG9uZW50SW50ZXJmYWNlKSB7XHJcbiAgfVxyXG5cclxuICBkZXN0cm95KCk6IHZvaWQge1xyXG4gICAgZGVsZXRlIHRoaXMuaW5pdGlhbEl0ZW07XHJcbiAgICBkZWxldGUgdGhpcy5ncmlkc3Rlci5tb3ZpbmdJdGVtO1xyXG4gICAgaWYgKHRoaXMuZ3JpZHN0ZXIucHJldmlld1N0eWxlKSB7XHJcbiAgICAgIHRoaXMuZ3JpZHN0ZXIucHJldmlld1N0eWxlKCk7XHJcbiAgICB9XHJcbiAgICBkZWxldGUgdGhpcy5ncmlkc3RlcjtcclxuICAgIGlmICh0aGlzLmVtcHR5Q2VsbEV4aXQpIHtcclxuICAgICAgdGhpcy5lbXB0eUNlbGxFeGl0KCk7XHJcbiAgICAgIHRoaXMuZW1wdHlDZWxsRXhpdCA9IG51bGw7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1cGRhdGVPcHRpb25zKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuZ3JpZHN0ZXIuJG9wdGlvbnMuZW5hYmxlRW1wdHlDZWxsQ2xpY2sgJiYgIXRoaXMuZW1wdHlDZWxsQ2xpY2sgJiYgdGhpcy5ncmlkc3Rlci5vcHRpb25zLmVtcHR5Q2VsbENsaWNrQ2FsbGJhY2spIHtcclxuICAgICAgdGhpcy5lbXB0eUNlbGxDbGljayA9IHRoaXMuZ3JpZHN0ZXIucmVuZGVyZXIubGlzdGVuKHRoaXMuZ3JpZHN0ZXIuZWwsICdjbGljaycsIHRoaXMuZW1wdHlDZWxsQ2xpY2tDYi5iaW5kKHRoaXMpKTtcclxuICAgICAgdGhpcy5lbXB0eUNlbGxDbGlja1RvdWNoID0gdGhpcy5ncmlkc3Rlci5yZW5kZXJlci5saXN0ZW4odGhpcy5ncmlkc3Rlci5lbCwgJ3RvdWNoZW5kJywgdGhpcy5lbXB0eUNlbGxDbGlja0NiLmJpbmQodGhpcykpO1xyXG4gICAgfSBlbHNlIGlmICghdGhpcy5ncmlkc3Rlci4kb3B0aW9ucy5lbmFibGVFbXB0eUNlbGxDbGljayAmJiB0aGlzLmVtcHR5Q2VsbENsaWNrICYmIHRoaXMuZW1wdHlDZWxsQ2xpY2tUb3VjaCkge1xyXG4gICAgICB0aGlzLmVtcHR5Q2VsbENsaWNrKCk7XHJcbiAgICAgIHRoaXMuZW1wdHlDZWxsQ2xpY2tUb3VjaCgpO1xyXG4gICAgICB0aGlzLmVtcHR5Q2VsbENsaWNrID0gbnVsbDtcclxuICAgICAgdGhpcy5lbXB0eUNlbGxDbGlja1RvdWNoID0gbnVsbDtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmdyaWRzdGVyLiRvcHRpb25zLmVuYWJsZUVtcHR5Q2VsbENvbnRleHRNZW51ICYmICF0aGlzLmVtcHR5Q2VsbENvbnRleHRNZW51ICYmXHJcbiAgICAgIHRoaXMuZ3JpZHN0ZXIub3B0aW9ucy5lbXB0eUNlbGxDb250ZXh0TWVudUNhbGxiYWNrKSB7XHJcbiAgICAgIHRoaXMuZW1wdHlDZWxsQ29udGV4dE1lbnUgPSB0aGlzLmdyaWRzdGVyLnJlbmRlcmVyLmxpc3Rlbih0aGlzLmdyaWRzdGVyLmVsLCAnY29udGV4dG1lbnUnLCB0aGlzLmVtcHR5Q2VsbENvbnRleHRNZW51Q2IuYmluZCh0aGlzKSk7XHJcbiAgICB9IGVsc2UgaWYgKCF0aGlzLmdyaWRzdGVyLiRvcHRpb25zLmVuYWJsZUVtcHR5Q2VsbENvbnRleHRNZW51ICYmIHRoaXMuZW1wdHlDZWxsQ29udGV4dE1lbnUpIHtcclxuICAgICAgdGhpcy5lbXB0eUNlbGxDb250ZXh0TWVudSgpO1xyXG4gICAgICB0aGlzLmVtcHR5Q2VsbENvbnRleHRNZW51ID0gbnVsbDtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmdyaWRzdGVyLiRvcHRpb25zLmVuYWJsZUVtcHR5Q2VsbERyb3AgJiYgIXRoaXMuZW1wdHlDZWxsRHJvcCAmJiB0aGlzLmdyaWRzdGVyLm9wdGlvbnMuZW1wdHlDZWxsRHJvcENhbGxiYWNrKSB7XHJcbiAgICAgIHRoaXMuZW1wdHlDZWxsRHJvcCA9IHRoaXMuZ3JpZHN0ZXIucmVuZGVyZXIubGlzdGVuKHRoaXMuZ3JpZHN0ZXIuZWwsICdkcm9wJywgdGhpcy5lbXB0eUNlbGxEcmFnRHJvcC5iaW5kKHRoaXMpKTtcclxuICAgICAgdGhpcy5ncmlkc3Rlci56b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcclxuICAgICAgICB0aGlzLmVtcHR5Q2VsbE1vdmUgPSB0aGlzLmdyaWRzdGVyLnJlbmRlcmVyLmxpc3Rlbih0aGlzLmdyaWRzdGVyLmVsLCAnZHJhZ292ZXInLCB0aGlzLmVtcHR5Q2VsbERyYWdPdmVyLmJpbmQodGhpcykpO1xyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5lbXB0eUNlbGxFeGl0ID0gdGhpcy5ncmlkc3Rlci5yZW5kZXJlci5saXN0ZW4oJ2RvY3VtZW50JywgJ2RyYWdlbmQnLCAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5ncmlkc3Rlci5tb3ZpbmdJdGVtID0gbnVsbDtcclxuICAgICAgICB0aGlzLmdyaWRzdGVyLnByZXZpZXdTdHlsZSgpO1xyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSBpZiAoIXRoaXMuZ3JpZHN0ZXIuJG9wdGlvbnMuZW5hYmxlRW1wdHlDZWxsRHJvcCAmJiB0aGlzLmVtcHR5Q2VsbERyb3AgJiYgdGhpcy5lbXB0eUNlbGxNb3ZlICYmIHRoaXMuZW1wdHlDZWxsRXhpdCkge1xyXG4gICAgICB0aGlzLmVtcHR5Q2VsbERyb3AoKTtcclxuICAgICAgdGhpcy5lbXB0eUNlbGxNb3ZlKCk7XHJcbiAgICAgIHRoaXMuZW1wdHlDZWxsRXhpdCgpO1xyXG4gICAgICB0aGlzLmVtcHR5Q2VsbE1vdmUgPSBudWxsO1xyXG4gICAgICB0aGlzLmVtcHR5Q2VsbERyb3AgPSBudWxsO1xyXG4gICAgICB0aGlzLmVtcHR5Q2VsbEV4aXQgPSBudWxsO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuZ3JpZHN0ZXIuJG9wdGlvbnMuZW5hYmxlRW1wdHlDZWxsRHJhZyAmJiAhdGhpcy5lbXB0eUNlbGxEcmFnICYmIHRoaXMuZ3JpZHN0ZXIub3B0aW9ucy5lbXB0eUNlbGxEcmFnQ2FsbGJhY2spIHtcclxuICAgICAgdGhpcy5lbXB0eUNlbGxEcmFnID0gdGhpcy5ncmlkc3Rlci5yZW5kZXJlci5saXN0ZW4odGhpcy5ncmlkc3Rlci5lbCwgJ21vdXNlZG93bicsIHRoaXMuZW1wdHlDZWxsTW91c2VEb3duLmJpbmQodGhpcykpO1xyXG4gICAgICB0aGlzLmVtcHR5Q2VsbERyYWdUb3VjaCA9IHRoaXMuZ3JpZHN0ZXIucmVuZGVyZXIubGlzdGVuKHRoaXMuZ3JpZHN0ZXIuZWwsICd0b3VjaHN0YXJ0JywgdGhpcy5lbXB0eUNlbGxNb3VzZURvd24uYmluZCh0aGlzKSk7XHJcbiAgICB9IGVsc2UgaWYgKCF0aGlzLmdyaWRzdGVyLiRvcHRpb25zLmVuYWJsZUVtcHR5Q2VsbERyYWcgJiYgdGhpcy5lbXB0eUNlbGxEcmFnICYmIHRoaXMuZW1wdHlDZWxsRHJhZ1RvdWNoKSB7XHJcbiAgICAgIHRoaXMuZW1wdHlDZWxsRHJhZygpO1xyXG4gICAgICB0aGlzLmVtcHR5Q2VsbERyYWdUb3VjaCgpO1xyXG4gICAgICB0aGlzLmVtcHR5Q2VsbERyYWcgPSBudWxsO1xyXG4gICAgICB0aGlzLmVtcHR5Q2VsbERyYWdUb3VjaCA9IG51bGw7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBlbXB0eUNlbGxDbGlja0NiKGU6IGFueSk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuZ3JpZHN0ZXIubW92aW5nSXRlbSB8fCBHcmlkc3RlclV0aWxzLmNoZWNrQ29udGVudENsYXNzRm9yRW1wdHlDZWxsQ2xpY2tFdmVudCh0aGlzLmdyaWRzdGVyLCBlKSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCBpdGVtID0gdGhpcy5nZXRWYWxpZEl0ZW1Gcm9tRXZlbnQoZSk7XHJcbiAgICBpZiAoIWl0ZW0pIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuZ3JpZHN0ZXIub3B0aW9ucy5lbXB0eUNlbGxDbGlja0NhbGxiYWNrKSB7XHJcbiAgICAgIHRoaXMuZ3JpZHN0ZXIub3B0aW9ucy5lbXB0eUNlbGxDbGlja0NhbGxiYWNrKGUsIGl0ZW0pO1xyXG4gICAgfVxyXG4gICAgdGhpcy5ncmlkc3Rlci5jZFJlZi5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG4gIGVtcHR5Q2VsbENvbnRleHRNZW51Q2IoZTogYW55KTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5ncmlkc3Rlci5tb3ZpbmdJdGVtIHx8IEdyaWRzdGVyVXRpbHMuY2hlY2tDb250ZW50Q2xhc3NGb3JFbXB0eUNlbGxDbGlja0V2ZW50KHRoaXMuZ3JpZHN0ZXIsIGUpKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnN0IGl0ZW0gPSB0aGlzLmdldFZhbGlkSXRlbUZyb21FdmVudChlKTtcclxuICAgIGlmICghaXRlbSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5ncmlkc3Rlci5vcHRpb25zLmVtcHR5Q2VsbENvbnRleHRNZW51Q2FsbGJhY2spIHtcclxuICAgICAgdGhpcy5ncmlkc3Rlci5vcHRpb25zLmVtcHR5Q2VsbENvbnRleHRNZW51Q2FsbGJhY2soZSwgaXRlbSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmdyaWRzdGVyLmNkUmVmLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxuXHJcbiAgZW1wdHlDZWxsRHJhZ0Ryb3AoZTogYW55KTogdm9pZCB7XHJcbiAgICBjb25zdCBpdGVtID0gdGhpcy5nZXRWYWxpZEl0ZW1Gcm9tRXZlbnQoZSk7XHJcbiAgICBpZiAoIWl0ZW0pIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuZ3JpZHN0ZXIub3B0aW9ucy5lbXB0eUNlbGxEcm9wQ2FsbGJhY2spIHtcclxuICAgICAgdGhpcy5ncmlkc3Rlci5vcHRpb25zLmVtcHR5Q2VsbERyb3BDYWxsYmFjayhlLCBpdGVtKTtcclxuICAgIH1cclxuICAgIHRoaXMuZ3JpZHN0ZXIuY2RSZWYubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICBlbXB0eUNlbGxEcmFnT3ZlcihlOiBhbnkpOiB2b2lkIHtcclxuICAgIGNvbnN0IGl0ZW0gPSB0aGlzLmdldFZhbGlkSXRlbUZyb21FdmVudChlKTtcclxuICAgIGlmIChpdGVtKSB7XHJcbiAgICAgIGUuZGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgPSAnbW92ZSc7XHJcbiAgICAgIHRoaXMuZ3JpZHN0ZXIubW92aW5nSXRlbSA9IGl0ZW07XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBlLmRhdGFUcmFuc2Zlci5kcm9wRWZmZWN0ID0gJ25vbmUnO1xyXG4gICAgICB0aGlzLmdyaWRzdGVyLm1vdmluZ0l0ZW0gPSBudWxsO1xyXG4gICAgfVxyXG4gICAgdGhpcy5ncmlkc3Rlci5wcmV2aWV3U3R5bGUoKTtcclxuICB9XHJcblxyXG4gIGVtcHR5Q2VsbE1vdXNlRG93bihlOiBhbnkpOiB2b2lkIHtcclxuICAgIGlmIChHcmlkc3RlclV0aWxzLmNoZWNrQ29udGVudENsYXNzRm9yRW1wdHlDZWxsQ2xpY2tFdmVudCh0aGlzLmdyaWRzdGVyLCBlKSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCBpdGVtID0gdGhpcy5nZXRWYWxpZEl0ZW1Gcm9tRXZlbnQoZSk7XHJcbiAgICBjb25zdCBsZWZ0TW91c2VCdXR0b25Db2RlID0gMTtcclxuICAgIGlmICghaXRlbSB8fCBlLmJ1dHRvbnMgIT09IGxlZnRNb3VzZUJ1dHRvbkNvZGUpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy5pbml0aWFsSXRlbSA9IGl0ZW07XHJcbiAgICB0aGlzLmdyaWRzdGVyLm1vdmluZ0l0ZW0gPSBpdGVtO1xyXG4gICAgdGhpcy5ncmlkc3Rlci5wcmV2aWV3U3R5bGUoKTtcclxuICAgIHRoaXMuZ3JpZHN0ZXIuem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XHJcbiAgICAgIHRoaXMuZW1wdHlDZWxsTU1vdmUgPSB0aGlzLmdyaWRzdGVyLnJlbmRlcmVyLmxpc3Rlbignd2luZG93JywgJ21vdXNlbW92ZScsIHRoaXMuZW1wdHlDZWxsTW91c2VNb3ZlLmJpbmQodGhpcykpO1xyXG4gICAgICB0aGlzLmVtcHR5Q2VsbE1Nb3ZlVG91Y2ggPSB0aGlzLmdyaWRzdGVyLnJlbmRlcmVyLmxpc3Rlbignd2luZG93JywgJ3RvdWNobW92ZScsIHRoaXMuZW1wdHlDZWxsTW91c2VNb3ZlLmJpbmQodGhpcykpO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLmVtcHR5Q2VsbFVwID0gdGhpcy5ncmlkc3Rlci5yZW5kZXJlci5saXN0ZW4oJ3dpbmRvdycsICdtb3VzZXVwJywgdGhpcy5lbXB0eUNlbGxNb3VzZVVwLmJpbmQodGhpcykpO1xyXG4gICAgdGhpcy5lbXB0eUNlbGxVcFRvdWNoID0gdGhpcy5ncmlkc3Rlci5yZW5kZXJlci5saXN0ZW4oJ3dpbmRvdycsICd0b3VjaGVuZCcsIHRoaXMuZW1wdHlDZWxsTW91c2VVcC5iaW5kKHRoaXMpKTtcclxuICB9XHJcblxyXG4gIGVtcHR5Q2VsbE1vdXNlTW92ZShlOiBhbnkpOiB2b2lkIHtcclxuICAgIGNvbnN0IGl0ZW0gPSB0aGlzLmdldFZhbGlkSXRlbUZyb21FdmVudChlLCB0aGlzLmluaXRpYWxJdGVtKTtcclxuICAgIGlmICghaXRlbSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5ncmlkc3Rlci5tb3ZpbmdJdGVtID0gaXRlbTtcclxuICAgIHRoaXMuZ3JpZHN0ZXIucHJldmlld1N0eWxlKCk7XHJcbiAgfVxyXG5cclxuICBlbXB0eUNlbGxNb3VzZVVwKGU6IGFueSk6IHZvaWQge1xyXG4gICAgdGhpcy5lbXB0eUNlbGxNTW92ZSgpO1xyXG4gICAgdGhpcy5lbXB0eUNlbGxNTW92ZVRvdWNoKCk7XHJcbiAgICB0aGlzLmVtcHR5Q2VsbFVwKCk7XHJcbiAgICB0aGlzLmVtcHR5Q2VsbFVwVG91Y2goKTtcclxuICAgIGNvbnN0IGl0ZW0gPSB0aGlzLmdldFZhbGlkSXRlbUZyb21FdmVudChlLCB0aGlzLmluaXRpYWxJdGVtKTtcclxuICAgIGlmIChpdGVtKSB7XHJcbiAgICAgIHRoaXMuZ3JpZHN0ZXIubW92aW5nSXRlbSA9IGl0ZW07XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5ncmlkc3Rlci5vcHRpb25zLmVtcHR5Q2VsbERyYWdDYWxsYmFjayAmJiB0aGlzLmdyaWRzdGVyLm1vdmluZ0l0ZW0pIHtcclxuICAgICAgdGhpcy5ncmlkc3Rlci5vcHRpb25zLmVtcHR5Q2VsbERyYWdDYWxsYmFjayhlLCB0aGlzLmdyaWRzdGVyLm1vdmluZ0l0ZW0pO1xyXG4gICAgfVxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMuaW5pdGlhbEl0ZW0gPSBudWxsO1xyXG4gICAgICBpZiAodGhpcy5ncmlkc3Rlcikge1xyXG4gICAgICAgIHRoaXMuZ3JpZHN0ZXIubW92aW5nSXRlbSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5ncmlkc3Rlci5wcmV2aWV3U3R5bGUoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICB0aGlzLmdyaWRzdGVyLmNkUmVmLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxuXHJcbiAgZ2V0VmFsaWRJdGVtRnJvbUV2ZW50KGU6IGFueSwgb2xkSXRlbT86IEdyaWRzdGVySXRlbSB8IG51bGwpOiBHcmlkc3Rlckl0ZW0gfCB1bmRlZmluZWQge1xyXG4gICAgR3JpZHN0ZXJVdGlscy5jaGVja1RvdWNoRXZlbnQoZSk7XHJcbiAgICBjb25zdCByZWN0ID0gdGhpcy5ncmlkc3Rlci5lbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgIGNvbnN0IHggPSBlLmNsaWVudFggKyB0aGlzLmdyaWRzdGVyLmVsLnNjcm9sbExlZnQgLSByZWN0LmxlZnQgLSB0aGlzLmdyaWRzdGVyLiRvcHRpb25zLm1hcmdpbjtcclxuICAgIGNvbnN0IHkgPSBlLmNsaWVudFkgKyB0aGlzLmdyaWRzdGVyLmVsLnNjcm9sbFRvcCAtIHJlY3QudG9wIC0gdGhpcy5ncmlkc3Rlci4kb3B0aW9ucy5tYXJnaW47XHJcbiAgICBjb25zdCBpdGVtOiBHcmlkc3Rlckl0ZW0gPSB7XHJcbiAgICAgIHg6IHRoaXMuZ3JpZHN0ZXIucGl4ZWxzVG9Qb3NpdGlvblgoeCwgTWF0aC5mbG9vciwgdHJ1ZSksXHJcbiAgICAgIHk6IHRoaXMuZ3JpZHN0ZXIucGl4ZWxzVG9Qb3NpdGlvblkoeSwgTWF0aC5mbG9vciwgdHJ1ZSksXHJcbiAgICAgIGNvbHM6IHRoaXMuZ3JpZHN0ZXIuJG9wdGlvbnMuZGVmYXVsdEl0ZW1Db2xzLFxyXG4gICAgICByb3dzOiB0aGlzLmdyaWRzdGVyLiRvcHRpb25zLmRlZmF1bHRJdGVtUm93c1xyXG4gICAgfTtcclxuICAgIGlmIChvbGRJdGVtKSB7XHJcbiAgICAgIGl0ZW0uY29scyA9IE1hdGgubWluKE1hdGguYWJzKG9sZEl0ZW0ueCAtIGl0ZW0ueCkgKyAxLCB0aGlzLmdyaWRzdGVyLiRvcHRpb25zLmVtcHR5Q2VsbERyYWdNYXhDb2xzKTtcclxuICAgICAgaXRlbS5yb3dzID0gTWF0aC5taW4oTWF0aC5hYnMob2xkSXRlbS55IC0gaXRlbS55KSArIDEsIHRoaXMuZ3JpZHN0ZXIuJG9wdGlvbnMuZW1wdHlDZWxsRHJhZ01heFJvd3MpO1xyXG4gICAgICBpZiAob2xkSXRlbS54IDwgaXRlbS54KSB7XHJcbiAgICAgICAgaXRlbS54ID0gb2xkSXRlbS54O1xyXG4gICAgICB9IGVsc2UgaWYgKG9sZEl0ZW0ueCAtIGl0ZW0ueCA+IHRoaXMuZ3JpZHN0ZXIuJG9wdGlvbnMuZW1wdHlDZWxsRHJhZ01heENvbHMgLSAxKSB7XHJcbiAgICAgICAgaXRlbS54ID0gdGhpcy5ncmlkc3Rlci5tb3ZpbmdJdGVtID8gdGhpcy5ncmlkc3Rlci5tb3ZpbmdJdGVtLnggOiAwO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChvbGRJdGVtLnkgPCBpdGVtLnkpIHtcclxuICAgICAgICBpdGVtLnkgPSBvbGRJdGVtLnk7XHJcbiAgICAgIH0gZWxzZSBpZiAob2xkSXRlbS55IC0gaXRlbS55ID4gdGhpcy5ncmlkc3Rlci4kb3B0aW9ucy5lbXB0eUNlbGxEcmFnTWF4Um93cyAtIDEpIHtcclxuICAgICAgICBpdGVtLnkgPSB0aGlzLmdyaWRzdGVyLm1vdmluZ0l0ZW0gPyB0aGlzLmdyaWRzdGVyLm1vdmluZ0l0ZW0ueSA6IDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICghdGhpcy5ncmlkc3Rlci4kb3B0aW9ucy5lbmFibGVPY2N1cGllZENlbGxEcm9wICYmIHRoaXMuZ3JpZHN0ZXIuY2hlY2tDb2xsaXNpb24oaXRlbSkpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGl0ZW07XHJcbiAgfVxyXG59XHJcbiJdfQ==