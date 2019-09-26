/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, Input, NgZone, Renderer2, ViewEncapsulation, Inject } from '@angular/core';
import { GridsterDraggable } from './gridsterDraggable.service';
import { GridsterResizable } from './gridsterResizable.service';
import { GridsterUtils } from './gridsterUtils.service';
import { GridsterComponent } from './gridster.component';
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
        { type: Component, args: [{
                    selector: 'gridster-item',
                    template: "<ng-content></ng-content>\r\n<div (mousedown)=\"resize.dragStartDelay($event)\" (touchstart)=\"resize.dragStartDelay($event)\"\r\n     *ngIf=\"gridster.$options.resizable.handles.s && resize.resizeEnabled\"\r\n     class=\"gridster-item-resizable-handler handle-s\"></div>\r\n<div (mousedown)=\"resize.dragStartDelay($event)\" (touchstart)=\"resize.dragStartDelay($event)\"\r\n     *ngIf=\"gridster.$options.resizable.handles.e && resize.resizeEnabled\"\r\n     class=\"gridster-item-resizable-handler handle-e\"></div>\r\n<div (mousedown)=\"resize.dragStartDelay($event)\" (touchstart)=\"resize.dragStartDelay($event)\"\r\n     *ngIf=\"gridster.$options.resizable.handles.n && resize.resizeEnabled\"\r\n     class=\"gridster-item-resizable-handler handle-n\"></div>\r\n<div (mousedown)=\"resize.dragStartDelay($event)\" (touchstart)=\"resize.dragStartDelay($event)\"\r\n     *ngIf=\"gridster.$options.resizable.handles.w && resize.resizeEnabled\"\r\n     class=\"gridster-item-resizable-handler handle-w\"></div>\r\n<div (mousedown)=\"resize.dragStartDelay($event)\" (touchstart)=\"resize.dragStartDelay($event)\"\r\n     *ngIf=\"gridster.$options.resizable.handles.se && resize.resizeEnabled\"\r\n     class=\"gridster-item-resizable-handler handle-se\"></div>\r\n<div (mousedown)=\"resize.dragStartDelay($event)\" (touchstart)=\"resize.dragStartDelay($event)\"\r\n     *ngIf=\"gridster.$options.resizable.handles.ne && resize.resizeEnabled\"\r\n     class=\"gridster-item-resizable-handler handle-ne\"></div>\r\n<div (mousedown)=\"resize.dragStartDelay($event)\" (touchstart)=\"resize.dragStartDelay($event)\"\r\n     *ngIf=\"gridster.$options.resizable.handles.sw && resize.resizeEnabled\"\r\n     class=\"gridster-item-resizable-handler handle-sw\"></div>\r\n<div (mousedown)=\"resize.dragStartDelay($event)\" (touchstart)=\"resize.dragStartDelay($event)\"\r\n     *ngIf=\"gridster.$options.resizable.handles.nw && resize.resizeEnabled\"\r\n     class=\"gridster-item-resizable-handler handle-nw\"></div>\r\n",
                    encapsulation: ViewEncapsulation.None,
                    styles: ["gridster-item{box-sizing:border-box;z-index:1;position:absolute;overflow:hidden;transition:.3s;display:none;background:#fff;-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text}gridster-item.gridster-item-moving{cursor:move}gridster-item.gridster-item-moving,gridster-item.gridster-item-resizing{transition:none;z-index:2;box-shadow:0 0 5px 5px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12)}.gridster-item-resizable-handler{position:absolute;z-index:2}.gridster-item-resizable-handler.handle-n{cursor:n-resize;height:10px;right:0;top:0;left:0}.gridster-item-resizable-handler.handle-e{cursor:e-resize;width:10px;bottom:0;right:0;top:0}.gridster-item-resizable-handler.handle-s{cursor:s-resize;height:10px;right:0;bottom:0;left:0}.gridster-item-resizable-handler.handle-w{cursor:w-resize;width:10px;left:0;top:0;bottom:0}.gridster-item-resizable-handler.handle-ne{cursor:ne-resize;width:10px;height:10px;right:0;top:0}.gridster-item-resizable-handler.handle-nw{cursor:nw-resize;width:10px;height:10px;left:0;top:0}.gridster-item-resizable-handler.handle-se{cursor:se-resize;width:0;height:0;right:0;bottom:0;border-style:solid;border-width:0 0 10px 10px;border-color:transparent}.gridster-item-resizable-handler.handle-sw{cursor:sw-resize;width:10px;height:10px;left:0;bottom:0}gridster-item:hover .gridster-item-resizable-handler.handle-se{border-color:transparent transparent #ccc}"]
                }] }
    ];
    /** @nocollapse */
    GridsterItemComponent.ctorParameters = function () { return [
        { type: ElementRef, decorators: [{ type: Inject, args: [ElementRef,] }] },
        { type: GridsterComponent },
        { type: Renderer2, decorators: [{ type: Inject, args: [Renderer2,] }] },
        { type: NgZone, decorators: [{ type: Inject, args: [NgZone,] }] }
    ]; };
    GridsterItemComponent.propDecorators = {
        item: [{ type: Input }]
    };
    return GridsterItemComponent;
}());
export { GridsterItemComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZHN0ZXJJdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItZ3JpZHN0ZXIyLyIsInNvdXJjZXMiOlsibGliL2dyaWRzdGVySXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsVUFBVSxFQUFRLEtBQUssRUFBRSxNQUFNLEVBQXFCLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFHbEksT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sNkJBQTZCLENBQUM7QUFDOUQsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sNkJBQTZCLENBQUM7QUFDOUQsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBRXRELE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBRXZEO0lBb0JFLCtCQUFnQyxFQUFjLEVBQUcsUUFBMkIsRUFBNEIsUUFBbUIsRUFBMEIsSUFBWTtRQUF6RCxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQTBCLFNBQUksR0FBSixJQUFJLENBQVE7UUFDL0osSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsYUFBYSxDQUFDO1FBQzNCLElBQUksQ0FBQyxLQUFLLEdBQUc7WUFDWCxJQUFJLEVBQUUsQ0FBQyxDQUFDO1lBQ1IsSUFBSSxFQUFFLENBQUMsQ0FBQztZQUNSLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDTCxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ04sQ0FBQztRQUNGLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM3RCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksaUJBQWlCLENBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDakUsQ0FBQzs7OztJQUVELHdDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM5QixDQUFDOzs7O0lBRUQsNkNBQWE7OztJQUFiO1FBQ0UsSUFBSSxDQUFDLEtBQUssR0FBRyxhQUFhLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRTtZQUN0RCxJQUFJLEVBQUUsU0FBUztZQUNmLElBQUksRUFBRSxTQUFTO1lBQ2YsQ0FBQyxFQUFFLFNBQVM7WUFDWixDQUFDLEVBQUUsU0FBUztZQUNaLFdBQVcsRUFBRSxTQUFTO1lBQ3RCLGFBQWEsRUFBRSxTQUFTO1lBQ3hCLGNBQWMsRUFBRSxTQUFTO1lBQ3pCLFdBQVcsRUFBRSxTQUFTO1lBQ3RCLFdBQVcsRUFBRSxTQUFTO1lBQ3RCLFdBQVcsRUFBRSxTQUFTO1lBQ3RCLFdBQVcsRUFBRSxTQUFTO1lBQ3RCLFdBQVcsRUFBRSxTQUFTO1lBQ3RCLFdBQVcsRUFBRSxTQUFTO1NBQ3ZCLENBQUMsQ0FBQztJQUNMLENBQUM7Ozs7SUFFRCwyQ0FBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMvQixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDckIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNwQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUN0QixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDckIsQ0FBQzs7OztJQUVELHVDQUFPOzs7SUFBUDtRQUNFLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDMUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDMUUsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3hCLENBQUM7Ozs7SUFFRCw4Q0FBYzs7O0lBQWQ7O1lBQ1EsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWTs7WUFDL0MsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVzs7WUFDL0MsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLE1BQU07O1lBQ25GLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxNQUFNO1FBRTNGLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLEtBQUssR0FBRyxDQUFDLElBQUksTUFBTSxHQUFHLENBQUMsRUFBRTtZQUN6QyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztZQUNqQixJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFO2dCQUMxQixJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO2FBQ3pDO1lBQ0QsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsRUFBRTtnQkFDMUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQzthQUN6RDtZQUNELElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLEVBQUU7Z0JBQzNDLElBQUksQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQy9CO1NBQ0Y7UUFDRCxJQUFJLEtBQUssS0FBSyxJQUFJLENBQUMsS0FBSyxJQUFJLE1BQU0sS0FBSyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2xELElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1lBQ25CLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1lBQ3JCLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsa0JBQWtCLEVBQUU7Z0JBQzVDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7YUFDM0Q7U0FDRjtRQUNELElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ2YsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDbkIsQ0FBQzs7OztJQUVELDJDQUFXOzs7SUFBWDtRQUNFLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsa0JBQWtCLEVBQUU7WUFDNUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztTQUMzRDtJQUNILENBQUM7Ozs7OztJQUVELGdEQUFnQjs7Ozs7SUFBaEIsVUFBaUIsUUFBc0IsRUFBRSxRQUFzQjtRQUM3RCxJQUFJLFFBQVEsQ0FBQyxJQUFJLEtBQUssUUFBUSxDQUFDLElBQUksSUFBSSxRQUFRLENBQUMsSUFBSSxLQUFLLFFBQVEsQ0FBQyxJQUFJLElBQUksUUFBUSxDQUFDLENBQUMsS0FBSyxRQUFRLENBQUMsQ0FBQyxJQUFJLFFBQVEsQ0FBQyxDQUFDLEtBQUssUUFBUSxDQUFDLENBQUMsRUFBRTtZQUNoSSxPQUFPO1NBQ1I7UUFDRCxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUM1QyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMvQixJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMvQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxRQUFRLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQztZQUNyQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxRQUFRLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQztZQUNyQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDaEI7YUFBTTtZQUNMLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO1lBQ2pDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO1lBQ2pDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQzNCLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQzNCLElBQUksQ0FBQyxRQUFRLENBQUMsdUJBQXVCLEVBQUUsQ0FBQztZQUN4QyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDcEI7SUFDSCxDQUFDOzs7O0lBRUQsNENBQVk7OztJQUFaO1FBQ0UsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTTtZQUMxQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUMvRyxDQUFDOzs7O0lBRUQsNENBQVk7OztJQUFaO1FBQ0UsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTTtZQUMxQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNuSCxDQUFDOztnQkF0SUYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxlQUFlO29CQUN6Qix5K0RBQWtDO29CQUVsQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTs7aUJBQ3RDOzs7O2dCQWRrQixVQUFVLHVCQTZCZCxNQUFNLFNBQUMsVUFBVTtnQkF0QnhCLGlCQUFpQjtnQkFQOEMsU0FBUyx1QkE2QkMsTUFBTSxTQUFDLFNBQVM7Z0JBN0JyRCxNQUFNLHVCQTZCOEUsTUFBTSxTQUFDLE1BQU07Ozt1QkFiMUksS0FBSzs7SUFpSVIsNEJBQUM7Q0FBQSxBQXhJRCxJQXdJQztTQWxJWSxxQkFBcUI7OztJQUNoQyxxQ0FBNEI7O0lBQzVCLHNDQUFvQjs7SUFDcEIsbUNBQVE7O0lBQ1IseUNBQTRCOztJQUM1QixvQ0FBWTs7SUFDWixxQ0FBYTs7SUFDYixzQ0FBYzs7SUFDZCx1Q0FBZTs7SUFDZixxQ0FBd0I7O0lBQ3hCLHVDQUEwQjs7SUFDMUIsMENBQW1COztJQUNuQixxQ0FBYzs7SUFFZ0UseUNBQTZDOzs7OztJQUFFLHFDQUFvQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBFbGVtZW50UmVmLCBIb3N0LCBJbnB1dCwgTmdab25lLCBPbkRlc3Ryb3ksIE9uSW5pdCwgUmVuZGVyZXIyLCBWaWV3RW5jYXBzdWxhdGlvbiwgSW5qZWN0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7R3JpZHN0ZXJJdGVtfSBmcm9tICcuL2dyaWRzdGVySXRlbS5pbnRlcmZhY2UnO1xyXG5pbXBvcnQge0dyaWRzdGVyRHJhZ2dhYmxlfSBmcm9tICcuL2dyaWRzdGVyRHJhZ2dhYmxlLnNlcnZpY2UnO1xyXG5pbXBvcnQge0dyaWRzdGVyUmVzaXphYmxlfSBmcm9tICcuL2dyaWRzdGVyUmVzaXphYmxlLnNlcnZpY2UnO1xyXG5pbXBvcnQge0dyaWRzdGVyVXRpbHN9IGZyb20gJy4vZ3JpZHN0ZXJVdGlscy5zZXJ2aWNlJztcclxuaW1wb3J0IHtHcmlkc3Rlckl0ZW1Db21wb25lbnRJbnRlcmZhY2V9IGZyb20gJy4vZ3JpZHN0ZXJJdGVtQ29tcG9uZW50LmludGVyZmFjZSc7XHJcbmltcG9ydCB7R3JpZHN0ZXJDb21wb25lbnR9IGZyb20gJy4vZ3JpZHN0ZXIuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZ3JpZHN0ZXItaXRlbScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2dyaWRzdGVySXRlbS5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9ncmlkc3Rlckl0ZW0uY3NzJ10sXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxyXG59KVxyXG5leHBvcnQgY2xhc3MgR3JpZHN0ZXJJdGVtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIEdyaWRzdGVySXRlbUNvbXBvbmVudEludGVyZmFjZSB7XHJcbiAgQElucHV0KCkgaXRlbTogR3JpZHN0ZXJJdGVtO1xyXG4gICRpdGVtOiBHcmlkc3Rlckl0ZW07XHJcbiAgZWw6IGFueTtcclxuICBncmlkc3RlcjogR3JpZHN0ZXJDb21wb25lbnQ7XHJcbiAgdG9wOiBudW1iZXI7XHJcbiAgbGVmdDogbnVtYmVyO1xyXG4gIHdpZHRoOiBudW1iZXI7XHJcbiAgaGVpZ2h0OiBudW1iZXI7XHJcbiAgZHJhZzogR3JpZHN0ZXJEcmFnZ2FibGU7XHJcbiAgcmVzaXplOiBHcmlkc3RlclJlc2l6YWJsZTtcclxuICBub3RQbGFjZWQ6IGJvb2xlYW47XHJcbiAgaW5pdDogYm9vbGVhbjtcclxuXHJcbiAgY29uc3RydWN0b3IoQEluamVjdChFbGVtZW50UmVmKSBlbDogRWxlbWVudFJlZiwgIGdyaWRzdGVyOiBHcmlkc3RlckNvbXBvbmVudCwgQEluamVjdChSZW5kZXJlcjIpIHB1YmxpYyByZW5kZXJlcjogUmVuZGVyZXIyLCBASW5qZWN0KE5nWm9uZSkgcHJpdmF0ZSB6b25lOiBOZ1pvbmUpIHtcclxuICAgIHRoaXMuZWwgPSBlbC5uYXRpdmVFbGVtZW50O1xyXG4gICAgdGhpcy4kaXRlbSA9IHtcclxuICAgICAgY29sczogLTEsXHJcbiAgICAgIHJvd3M6IC0xLFxyXG4gICAgICB4OiAtMSxcclxuICAgICAgeTogLTEsXHJcbiAgICB9O1xyXG4gICAgdGhpcy5ncmlkc3RlciA9IGdyaWRzdGVyO1xyXG4gICAgdGhpcy5kcmFnID0gbmV3IEdyaWRzdGVyRHJhZ2dhYmxlKHRoaXMsIGdyaWRzdGVyLCB0aGlzLnpvbmUpO1xyXG4gICAgdGhpcy5yZXNpemUgPSBuZXcgR3JpZHN0ZXJSZXNpemFibGUodGhpcywgZ3JpZHN0ZXIsIHRoaXMuem9uZSk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMudXBkYXRlT3B0aW9ucygpO1xyXG4gICAgdGhpcy5ncmlkc3Rlci5hZGRJdGVtKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlT3B0aW9ucygpOiB2b2lkIHtcclxuICAgIHRoaXMuJGl0ZW0gPSBHcmlkc3RlclV0aWxzLm1lcmdlKHRoaXMuJGl0ZW0sIHRoaXMuaXRlbSwge1xyXG4gICAgICBjb2xzOiB1bmRlZmluZWQsXHJcbiAgICAgIHJvd3M6IHVuZGVmaW5lZCxcclxuICAgICAgeDogdW5kZWZpbmVkLFxyXG4gICAgICB5OiB1bmRlZmluZWQsXHJcbiAgICAgIGRyYWdFbmFibGVkOiB1bmRlZmluZWQsXHJcbiAgICAgIHJlc2l6ZUVuYWJsZWQ6IHVuZGVmaW5lZCxcclxuICAgICAgY29tcGFjdEVuYWJsZWQ6IHVuZGVmaW5lZCxcclxuICAgICAgbWF4SXRlbVJvd3M6IHVuZGVmaW5lZCxcclxuICAgICAgbWluSXRlbVJvd3M6IHVuZGVmaW5lZCxcclxuICAgICAgbWF4SXRlbUNvbHM6IHVuZGVmaW5lZCxcclxuICAgICAgbWluSXRlbUNvbHM6IHVuZGVmaW5lZCxcclxuICAgICAgbWF4SXRlbUFyZWE6IHVuZGVmaW5lZCxcclxuICAgICAgbWluSXRlbUFyZWE6IHVuZGVmaW5lZCxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmdyaWRzdGVyLnJlbW92ZUl0ZW0odGhpcyk7XHJcbiAgICBkZWxldGUgdGhpcy5ncmlkc3RlcjtcclxuICAgIHRoaXMuZHJhZy5kZXN0cm95KCk7XHJcbiAgICBkZWxldGUgdGhpcy5kcmFnO1xyXG4gICAgdGhpcy5yZXNpemUuZGVzdHJveSgpO1xyXG4gICAgZGVsZXRlIHRoaXMucmVzaXplO1xyXG4gIH1cclxuXHJcbiAgc2V0U2l6ZSgpOiB2b2lkIHtcclxuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbCwgJ2Rpc3BsYXknLCB0aGlzLm5vdFBsYWNlZCA/ICcnIDogJ2Jsb2NrJyk7XHJcbiAgICB0aGlzLmdyaWRzdGVyLmdyaWRSZW5kZXJlci51cGRhdGVJdGVtKHRoaXMuZWwsIHRoaXMuJGl0ZW0sIHRoaXMucmVuZGVyZXIpO1xyXG4gICAgdGhpcy51cGRhdGVJdGVtU2l6ZSgpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlSXRlbVNpemUoKSB7XHJcbiAgICBjb25zdCB0b3AgPSB0aGlzLiRpdGVtLnkgKiB0aGlzLmdyaWRzdGVyLmN1clJvd0hlaWdodDtcclxuICAgIGNvbnN0IGxlZnQgPSB0aGlzLiRpdGVtLnggKiB0aGlzLmdyaWRzdGVyLmN1ckNvbFdpZHRoO1xyXG4gICAgY29uc3Qgd2lkdGggPSB0aGlzLiRpdGVtLmNvbHMgKiB0aGlzLmdyaWRzdGVyLmN1ckNvbFdpZHRoIC0gdGhpcy5ncmlkc3Rlci4kb3B0aW9ucy5tYXJnaW47XHJcbiAgICBjb25zdCBoZWlnaHQgPSB0aGlzLiRpdGVtLnJvd3MgKiB0aGlzLmdyaWRzdGVyLmN1clJvd0hlaWdodCAtIHRoaXMuZ3JpZHN0ZXIuJG9wdGlvbnMubWFyZ2luO1xyXG5cclxuICAgIGlmICghdGhpcy5pbml0ICYmIHdpZHRoID4gMCAmJiBoZWlnaHQgPiAwKSB7XHJcbiAgICAgIHRoaXMuaW5pdCA9IHRydWU7XHJcbiAgICAgIGlmICh0aGlzLml0ZW0uaW5pdENhbGxiYWNrKSB7XHJcbiAgICAgICAgdGhpcy5pdGVtLmluaXRDYWxsYmFjayh0aGlzLml0ZW0sIHRoaXMpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh0aGlzLmdyaWRzdGVyLm9wdGlvbnMuaXRlbUluaXRDYWxsYmFjaykge1xyXG4gICAgICAgIHRoaXMuZ3JpZHN0ZXIub3B0aW9ucy5pdGVtSW5pdENhbGxiYWNrKHRoaXMuaXRlbSwgdGhpcyk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMuZ3JpZHN0ZXIuJG9wdGlvbnMuc2Nyb2xsVG9OZXdJdGVtcykge1xyXG4gICAgICAgIHRoaXMuZWwuc2Nyb2xsSW50b1ZpZXcoZmFsc2UpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAod2lkdGggIT09IHRoaXMud2lkdGggfHwgaGVpZ2h0ICE9PSB0aGlzLmhlaWdodCkge1xyXG4gICAgICB0aGlzLndpZHRoID0gd2lkdGg7XHJcbiAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgICBpZiAodGhpcy5ncmlkc3Rlci5vcHRpb25zLml0ZW1SZXNpemVDYWxsYmFjaykge1xyXG4gICAgICAgIHRoaXMuZ3JpZHN0ZXIub3B0aW9ucy5pdGVtUmVzaXplQ2FsbGJhY2sodGhpcy5pdGVtLCB0aGlzKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy50b3AgPSB0b3A7XHJcbiAgICB0aGlzLmxlZnQgPSBsZWZ0O1xyXG4gIH1cclxuXHJcbiAgaXRlbUNoYW5nZWQoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5ncmlkc3Rlci5vcHRpb25zLml0ZW1DaGFuZ2VDYWxsYmFjaykge1xyXG4gICAgICB0aGlzLmdyaWRzdGVyLm9wdGlvbnMuaXRlbUNoYW5nZUNhbGxiYWNrKHRoaXMuaXRlbSwgdGhpcyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjaGVja0l0ZW1DaGFuZ2VzKG5ld1ZhbHVlOiBHcmlkc3Rlckl0ZW0sIG9sZFZhbHVlOiBHcmlkc3Rlckl0ZW0pOiB2b2lkIHtcclxuICAgIGlmIChuZXdWYWx1ZS5yb3dzID09PSBvbGRWYWx1ZS5yb3dzICYmIG5ld1ZhbHVlLmNvbHMgPT09IG9sZFZhbHVlLmNvbHMgJiYgbmV3VmFsdWUueCA9PT0gb2xkVmFsdWUueCAmJiBuZXdWYWx1ZS55ID09PSBvbGRWYWx1ZS55KSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmdyaWRzdGVyLmNoZWNrQ29sbGlzaW9uKHRoaXMuJGl0ZW0pKSB7XHJcbiAgICAgIHRoaXMuJGl0ZW0ueCA9IG9sZFZhbHVlLnggfHwgMDtcclxuICAgICAgdGhpcy4kaXRlbS55ID0gb2xkVmFsdWUueSB8fCAwO1xyXG4gICAgICB0aGlzLiRpdGVtLmNvbHMgPSBvbGRWYWx1ZS5jb2xzIHx8IDE7XHJcbiAgICAgIHRoaXMuJGl0ZW0ucm93cyA9IG9sZFZhbHVlLnJvd3MgfHwgMTtcclxuICAgICAgdGhpcy5zZXRTaXplKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLml0ZW0uY29scyA9IHRoaXMuJGl0ZW0uY29scztcclxuICAgICAgdGhpcy5pdGVtLnJvd3MgPSB0aGlzLiRpdGVtLnJvd3M7XHJcbiAgICAgIHRoaXMuaXRlbS54ID0gdGhpcy4kaXRlbS54O1xyXG4gICAgICB0aGlzLml0ZW0ueSA9IHRoaXMuJGl0ZW0ueTtcclxuICAgICAgdGhpcy5ncmlkc3Rlci5jYWxjdWxhdGVMYXlvdXREZWJvdW5jZSgpO1xyXG4gICAgICB0aGlzLml0ZW1DaGFuZ2VkKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjYW5CZURyYWdnZWQoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gIXRoaXMuZ3JpZHN0ZXIubW9iaWxlICYmXHJcbiAgICAgICh0aGlzLiRpdGVtLmRyYWdFbmFibGVkID09PSB1bmRlZmluZWQgPyB0aGlzLmdyaWRzdGVyLiRvcHRpb25zLmRyYWdnYWJsZS5lbmFibGVkIDogdGhpcy4kaXRlbS5kcmFnRW5hYmxlZCk7XHJcbiAgfVxyXG5cclxuICBjYW5CZVJlc2l6ZWQoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gIXRoaXMuZ3JpZHN0ZXIubW9iaWxlICYmXHJcbiAgICAgICh0aGlzLiRpdGVtLnJlc2l6ZUVuYWJsZWQgPT09IHVuZGVmaW5lZCA/IHRoaXMuZ3JpZHN0ZXIuJG9wdGlvbnMucmVzaXphYmxlLmVuYWJsZWQgOiB0aGlzLiRpdGVtLnJlc2l6ZUVuYWJsZWQpO1xyXG4gIH1cclxuXHJcbn1cclxuIl19