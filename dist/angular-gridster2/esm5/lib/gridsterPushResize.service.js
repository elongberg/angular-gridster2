/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { GridsterItemComponentInterface } from './gridsterItemComponent.interface';
import { GridsterComponent } from './gridster.component';
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
        { type: Injectable }
    ];
    /** @nocollapse */
    GridsterPushResize.ctorParameters = function () { return [
        { type: GridsterItemComponentInterface }
    ]; };
    return GridsterPushResize;
}());
export { GridsterPushResize };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZHN0ZXJQdXNoUmVzaXplLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWdyaWRzdGVyMi8iLCJzb3VyY2VzIjpbImxpYi9ncmlkc3RlclB1c2hSZXNpemUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUd6QyxPQUFPLEVBQUMsOEJBQThCLEVBQUMsTUFBTSxtQ0FBbUMsQ0FBQztBQUVqRixPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUV2RDtJQWtCRSw0QkFBWSxZQUE0QztRQUN0RCxJQUFJLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsZUFBZSxHQUFHLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQztRQUNqQyxJQUFJLENBQUMsUUFBUSxHQUFHLFlBQVksQ0FBQyxRQUFRLENBQUM7UUFDdEMsSUFBSSxDQUFDLFVBQVUsR0FBRztZQUNoQixRQUFRLEVBQUUsSUFBSSxDQUFDLE9BQU87WUFDdEIsUUFBUSxFQUFFLElBQUksQ0FBQyxPQUFPO1lBQ3RCLFNBQVMsRUFBRSxJQUFJLENBQUMsUUFBUTtZQUN4QixTQUFTLEVBQUUsSUFBSSxDQUFDLFFBQVE7U0FDekIsQ0FBQztRQUNGLElBQUksQ0FBQyxTQUFTLEdBQUcsV0FBVyxDQUFDO1FBQzdCLElBQUksQ0FBQyxTQUFTLEdBQUcsV0FBVyxDQUFDO1FBQzdCLElBQUksQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDO1FBQzNCLElBQUksQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDO0lBQzdCLENBQUM7Ozs7SUFFRCxvQ0FBTzs7O0lBQVA7UUFDRSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDckIsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQzNCLENBQUM7Ozs7O0lBRUQsc0NBQVM7Ozs7SUFBVCxVQUFVLFNBQWlCO1FBQ3pCLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsZUFBZSxFQUFFO1lBQzFDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1NBQ2hEO2FBQU07WUFDTCxPQUFPLEtBQUssQ0FBQztTQUNkO0lBQ0gsQ0FBQzs7OztJQUVELHlDQUFZOzs7SUFBWjs7WUFDTSxDQUFDLEdBQUcsQ0FBQzs7WUFDSCxDQUFDLEdBQVcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNOztZQUNyQyxVQUEwQztRQUM5QyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDakIsVUFBVSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDakMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzVDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM1QyxVQUFVLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLENBQUM7WUFDbEQsVUFBVSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO1lBQ2hELFVBQVUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUN0QjtRQUNELElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxlQUFlLEdBQUcsRUFBRSxDQUFDO0lBQzVCLENBQUM7Ozs7SUFFRCwyQ0FBYzs7O0lBQWQ7O1lBQ00sQ0FBQyxHQUFHLENBQUM7O1lBQ0gsQ0FBQyxHQUFXLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTTs7WUFDckMsVUFBMEM7UUFDOUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ2pCLFVBQVUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2pDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNoRTtRQUNELElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxlQUFlLEdBQUcsRUFBRSxDQUFDO0lBQzVCLENBQUM7Ozs7SUFFRCwwQ0FBYTs7O0lBQWI7O1lBQ00sQ0FBQyxHQUFXLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLENBQUM7O1lBQ3ZDLE1BQU0sR0FBRyxLQUFLO1FBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ2xCLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFO2dCQUNoRCxNQUFNLEdBQUcsSUFBSSxDQUFDO2FBQ2Y7U0FDRjtRQUNELElBQUksTUFBTSxFQUFFO1lBQ1YsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1NBQ3RCO0lBQ0gsQ0FBQzs7Ozs7OztJQUVPLGlDQUFJOzs7Ozs7SUFBWixVQUFhLFlBQTRDLEVBQUUsU0FBaUI7O1lBQ3BFLHFCQUFxQixHQUFRLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUM7UUFDbkYsSUFBSSxxQkFBcUIsSUFBSSxxQkFBcUIsS0FBSyxJQUFJO1lBQ3pELHFCQUFxQixLQUFLLElBQUksQ0FBQyxZQUFZLElBQUkscUJBQXFCLENBQUMsWUFBWSxFQUFFLEVBQUU7WUFDckYsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUscUJBQXFCLEVBQUUsWUFBWSxFQUFFLFNBQVMsQ0FBQyxFQUFFO2dCQUN6RixPQUFPLElBQUksQ0FBQzthQUNiO1NBQ0Y7YUFBTSxJQUFJLHFCQUFxQixLQUFLLEtBQUssRUFBRTtZQUMxQyxPQUFPLElBQUksQ0FBQztTQUNiO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDOzs7Ozs7OztJQUVPLHFDQUFROzs7Ozs7O0lBQWhCLFVBQWlCLG1CQUFtRCxFQUFFLFlBQTRDLEVBQ2pHLFNBQWlCOztZQUMxQixPQUFPLEdBQUcsbUJBQW1CLENBQUMsS0FBSyxDQUFDLENBQUM7O1lBQ3JDLFVBQVUsR0FBRyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsSUFBSTtRQUNqRCxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLFlBQVksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO1FBQzdFLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsVUFBVSxHQUFHLE9BQU8sR0FBRyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ3BGLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxzQkFBc0IsQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLEVBQUUsWUFBWSxDQUFDLEtBQUssQ0FBQztlQUN2RixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsa0JBQWtCLENBQUMsbUJBQW1CLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDakUsbUJBQW1CLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDOUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1lBQ3RDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1lBQ25DLE9BQU8sSUFBSSxDQUFDO1NBQ2I7YUFBTTtZQUNMLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsT0FBTyxDQUFDO1lBQ3RDLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsVUFBVSxDQUFDO1NBQzdDO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDOzs7Ozs7OztJQUVPLHFDQUFROzs7Ozs7O0lBQWhCLFVBQWlCLG1CQUFtRCxFQUFFLFlBQTRDLEVBQ2pHLFNBQWlCOztZQUMxQixVQUFVLEdBQUcsbUJBQW1CLENBQUMsS0FBSyxDQUFDLElBQUk7UUFDakQsbUJBQW1CLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ3BGLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxzQkFBc0IsQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLEVBQUUsWUFBWSxDQUFDLEtBQUssQ0FBQztlQUN2RixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsa0JBQWtCLENBQUMsbUJBQW1CLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDakUsbUJBQW1CLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDOUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1lBQ3RDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1lBQ25DLE9BQU8sSUFBSSxDQUFDO1NBQ2I7YUFBTTtZQUNMLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsVUFBVSxDQUFDO1NBQzdDO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDOzs7Ozs7OztJQUVPLG9DQUFPOzs7Ozs7O0lBQWYsVUFBZ0IsbUJBQW1ELEVBQUUsWUFBNEMsRUFDakcsU0FBaUI7O1lBQ3pCLE9BQU8sR0FBRyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsQ0FBQzs7WUFDckMsVUFBVSxHQUFHLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxJQUFJO1FBQ2pELG1CQUFtQixDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsWUFBWSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7UUFDN0UsbUJBQW1CLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxVQUFVLEdBQUcsT0FBTyxHQUFHLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDcEYsSUFBSSxDQUFDLGlCQUFpQixDQUFDLHNCQUFzQixDQUFDLG1CQUFtQixDQUFDLEtBQUssRUFBRSxZQUFZLENBQUMsS0FBSyxDQUFDO2VBQ3ZGLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNqRSxtQkFBbUIsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUM5QixJQUFJLENBQUMsV0FBVyxDQUFDLG1CQUFtQixDQUFDLENBQUM7WUFDdEMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsU0FBUyxDQUFDLENBQUM7WUFDbkMsT0FBTyxJQUFJLENBQUM7U0FDYjthQUFNO1lBQ0wsbUJBQW1CLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxPQUFPLENBQUM7WUFDdEMsbUJBQW1CLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxVQUFVLENBQUM7U0FDN0M7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7Ozs7Ozs7O0lBRU8sb0NBQU87Ozs7Ozs7SUFBZixVQUFnQixtQkFBbUQsRUFBRSxZQUE0QyxFQUNqRyxTQUFpQjs7WUFDekIsVUFBVSxHQUFHLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxJQUFJO1FBQ2pELG1CQUFtQixDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsbUJBQW1CLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUNwRixJQUFJLENBQUMsaUJBQWlCLENBQUMsc0JBQXNCLENBQUMsbUJBQW1CLENBQUMsS0FBSyxFQUFFLFlBQVksQ0FBQyxLQUFLLENBQUM7ZUFDdkYsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGtCQUFrQixDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ2pFLG1CQUFtQixDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQzlCLElBQUksQ0FBQyxXQUFXLENBQUMsbUJBQW1CLENBQUMsQ0FBQztZQUN0QyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxTQUFTLENBQUMsQ0FBQztZQUNuQyxPQUFPLElBQUksQ0FBQztTQUNiO2FBQU07WUFDTCxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLFVBQVUsQ0FBQztTQUM3QztRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQzs7Ozs7O0lBRU8sd0NBQVc7Ozs7O0lBQW5CLFVBQW9CLFlBQTRDO1FBQzlELElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQzlDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ3BDLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDO2dCQUN4QjtvQkFDRSxDQUFDLEVBQUUsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQztvQkFDM0IsQ0FBQyxFQUFFLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUM7b0JBQzNCLElBQUksRUFBRSxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDO29CQUNqQyxJQUFJLEVBQUUsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQztpQkFDbEM7Z0JBQ0Q7b0JBQ0UsQ0FBQyxFQUFFLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDdkIsQ0FBQyxFQUFFLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDdkIsSUFBSSxFQUFFLFlBQVksQ0FBQyxLQUFLLENBQUMsSUFBSTtvQkFDN0IsSUFBSSxFQUFFLFlBQVksQ0FBQyxLQUFLLENBQUMsSUFBSTtpQkFDOUI7YUFBQyxDQUFDLENBQUM7U0FDUDthQUFNOztnQkFDQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDO1lBQ2hELElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUMxQjtnQkFDRSxDQUFDLEVBQUUsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUN2QixDQUFDLEVBQUUsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUN2QixJQUFJLEVBQUUsWUFBWSxDQUFDLEtBQUssQ0FBQyxJQUFJO2dCQUM3QixJQUFJLEVBQUUsWUFBWSxDQUFDLEtBQUssQ0FBQyxJQUFJO2FBQzlCLENBQUMsQ0FBQztTQUNOO0lBQ0gsQ0FBQzs7Ozs7O0lBRU8sNkNBQWdCOzs7OztJQUF4QixVQUF5QixDQUFTO1FBQ2hDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFO1lBQ1YsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQzlCLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUNuQztJQUNILENBQUM7Ozs7Ozs7SUFFTyw0Q0FBZTs7Ozs7O0lBQXZCLFVBQXdCLFVBQTBDLEVBQUUsQ0FBUzs7WUFDckUsSUFBSSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDOztZQUNoQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDOztZQUNuQixZQUFrRTs7WUFBRSxDQUFDOztZQUFFLENBQUM7O1lBQUUsSUFBSTs7WUFBRSxJQUFJO1FBQ3hGLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ2xCLFlBQVksR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdkIsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ3ZCLENBQUMsR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUN2QixJQUFJLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7WUFDN0IsSUFBSSxHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO1lBQzdCLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLFlBQVksQ0FBQyxDQUFDLENBQUM7WUFDcEMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsWUFBWSxDQUFDLENBQUMsQ0FBQztZQUNwQyxVQUFVLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxZQUFZLENBQUMsSUFBSSxDQUFDO1lBQzFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLFlBQVksQ0FBQyxJQUFJLENBQUM7WUFDMUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUNyRCxVQUFVLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBQ3JCLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzthQUN6QztpQkFBTTtnQkFDTCxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ3ZCLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDdkIsVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO2dCQUM3QixVQUFVLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7YUFDOUI7U0FDRjtRQUNELElBQUksSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDbkIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3pCLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7O2dCQTVPRixVQUFVOzs7O2dCQUpILDhCQUE4Qjs7SUFpUHRDLHlCQUFDO0NBQUEsQUE3T0QsSUE2T0M7U0E1T1ksa0JBQWtCOzs7SUFDN0IsdUNBQXlCOztJQUN6Qix1Q0FBeUI7O0lBQ3pCLHNDQUF3Qjs7SUFDeEIsc0NBQXdCOzs7OztJQUN4Qix5Q0FBMkQ7Ozs7O0lBQzNELDZDQUFvRDs7Ozs7SUFDcEQsMENBQXFEOzs7OztJQUNyRCxzQ0FBNkM7Ozs7O0lBQzdDLHdDQU1FIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7R3JpZHN0ZXJJdGVtfSBmcm9tICcuL2dyaWRzdGVySXRlbS5pbnRlcmZhY2UnO1xyXG5pbXBvcnQge0dyaWRzdGVySXRlbUNvbXBvbmVudEludGVyZmFjZX0gZnJvbSAnLi9ncmlkc3Rlckl0ZW1Db21wb25lbnQuaW50ZXJmYWNlJztcclxuaW1wb3J0IHtHcmlkc3RlckNvbXBvbmVudEludGVyZmFjZX0gZnJvbSAnLi9ncmlkc3Rlci5pbnRlcmZhY2UnO1xyXG5pbXBvcnQge0dyaWRzdGVyQ29tcG9uZW50fSBmcm9tICcuL2dyaWRzdGVyLmNvbXBvbmVudCc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBHcmlkc3RlclB1c2hSZXNpemUge1xyXG4gIHB1YmxpYyBmcm9tU291dGg6IHN0cmluZztcclxuICBwdWJsaWMgZnJvbU5vcnRoOiBzdHJpbmc7XHJcbiAgcHVibGljIGZyb21FYXN0OiBzdHJpbmc7XHJcbiAgcHVibGljIGZyb21XZXN0OiBzdHJpbmc7XHJcbiAgcHJpdmF0ZSBwdXNoZWRJdGVtczogQXJyYXk8R3JpZHN0ZXJJdGVtQ29tcG9uZW50SW50ZXJmYWNlPjtcclxuICBwcml2YXRlIHB1c2hlZEl0ZW1zUGF0aDogQXJyYXk8QXJyYXk8R3JpZHN0ZXJJdGVtPj47XHJcbiAgcHJpdmF0ZSBncmlkc3Rlckl0ZW06IEdyaWRzdGVySXRlbUNvbXBvbmVudEludGVyZmFjZTtcclxuICBwcml2YXRlIGdyaWRzdGVyOiBHcmlkc3RlckNvbXBvbmVudEludGVyZmFjZTtcclxuICBwcml2YXRlIHRyeVBhdHRlcm46IHtcclxuICAgIGZyb21FYXN0OiBGdW5jdGlvbixcclxuICAgIGZyb21XZXN0OiBGdW5jdGlvbixcclxuICAgIGZyb21Ob3J0aDogRnVuY3Rpb24sXHJcbiAgICBmcm9tU291dGg6IEZ1bmN0aW9uLFxyXG4gICAgW2tleTogc3RyaW5nXTogRnVuY3Rpb25cclxuICB9O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihncmlkc3Rlckl0ZW06IEdyaWRzdGVySXRlbUNvbXBvbmVudEludGVyZmFjZSkge1xyXG4gICAgdGhpcy5wdXNoZWRJdGVtcyA9IFtdO1xyXG4gICAgdGhpcy5wdXNoZWRJdGVtc1BhdGggPSBbXTtcclxuICAgIHRoaXMuZ3JpZHN0ZXJJdGVtID0gZ3JpZHN0ZXJJdGVtO1xyXG4gICAgdGhpcy5ncmlkc3RlciA9IGdyaWRzdGVySXRlbS5ncmlkc3RlcjtcclxuICAgIHRoaXMudHJ5UGF0dGVybiA9IHtcclxuICAgICAgZnJvbUVhc3Q6IHRoaXMudHJ5V2VzdCxcclxuICAgICAgZnJvbVdlc3Q6IHRoaXMudHJ5RWFzdCxcclxuICAgICAgZnJvbU5vcnRoOiB0aGlzLnRyeVNvdXRoLFxyXG4gICAgICBmcm9tU291dGg6IHRoaXMudHJ5Tm9ydGhcclxuICAgIH07XHJcbiAgICB0aGlzLmZyb21Tb3V0aCA9ICdmcm9tU291dGgnO1xyXG4gICAgdGhpcy5mcm9tTm9ydGggPSAnZnJvbU5vcnRoJztcclxuICAgIHRoaXMuZnJvbUVhc3QgPSAnZnJvbUVhc3QnO1xyXG4gICAgdGhpcy5mcm9tV2VzdCA9ICdmcm9tV2VzdCc7XHJcbiAgfVxyXG5cclxuICBkZXN0cm95KCk6IHZvaWQge1xyXG4gICAgZGVsZXRlIHRoaXMuZ3JpZHN0ZXI7XHJcbiAgICBkZWxldGUgdGhpcy5ncmlkc3Rlckl0ZW07XHJcbiAgfVxyXG5cclxuICBwdXNoSXRlbXMoZGlyZWN0aW9uOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgIGlmICh0aGlzLmdyaWRzdGVyLiRvcHRpb25zLnB1c2hSZXNpemVJdGVtcykge1xyXG4gICAgICByZXR1cm4gdGhpcy5wdXNoKHRoaXMuZ3JpZHN0ZXJJdGVtLCBkaXJlY3Rpb24pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVzdG9yZUl0ZW1zKCk6IHZvaWQge1xyXG4gICAgbGV0IGkgPSAwO1xyXG4gICAgY29uc3QgbDogbnVtYmVyID0gdGhpcy5wdXNoZWRJdGVtcy5sZW5ndGg7XHJcbiAgICBsZXQgcHVzaGVkSXRlbTogR3JpZHN0ZXJJdGVtQ29tcG9uZW50SW50ZXJmYWNlO1xyXG4gICAgZm9yICg7IGkgPCBsOyBpKyspIHtcclxuICAgICAgcHVzaGVkSXRlbSA9IHRoaXMucHVzaGVkSXRlbXNbaV07XHJcbiAgICAgIHB1c2hlZEl0ZW0uJGl0ZW0ueCA9IHB1c2hlZEl0ZW0uaXRlbS54IHx8IDA7XHJcbiAgICAgIHB1c2hlZEl0ZW0uJGl0ZW0ueSA9IHB1c2hlZEl0ZW0uaXRlbS55IHx8IDA7XHJcbiAgICAgIHB1c2hlZEl0ZW0uJGl0ZW0uY29scyA9IHB1c2hlZEl0ZW0uaXRlbS5jb2xzIHx8IDE7XHJcbiAgICAgIHB1c2hlZEl0ZW0uJGl0ZW0ucm93ID0gcHVzaGVkSXRlbS5pdGVtLnJvdyB8fCAxO1xyXG4gICAgICBwdXNoZWRJdGVtLnNldFNpemUoKTtcclxuICAgIH1cclxuICAgIHRoaXMucHVzaGVkSXRlbXMgPSBbXTtcclxuICAgIHRoaXMucHVzaGVkSXRlbXNQYXRoID0gW107XHJcbiAgfVxyXG5cclxuICBzZXRQdXNoZWRJdGVtcygpIHtcclxuICAgIGxldCBpID0gMDtcclxuICAgIGNvbnN0IGw6IG51bWJlciA9IHRoaXMucHVzaGVkSXRlbXMubGVuZ3RoO1xyXG4gICAgbGV0IHB1c2hlZEl0ZW06IEdyaWRzdGVySXRlbUNvbXBvbmVudEludGVyZmFjZTtcclxuICAgIGZvciAoOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgIHB1c2hlZEl0ZW0gPSB0aGlzLnB1c2hlZEl0ZW1zW2ldO1xyXG4gICAgICBwdXNoZWRJdGVtLmNoZWNrSXRlbUNoYW5nZXMocHVzaGVkSXRlbS4kaXRlbSwgcHVzaGVkSXRlbS5pdGVtKTtcclxuICAgIH1cclxuICAgIHRoaXMucHVzaGVkSXRlbXMgPSBbXTtcclxuICAgIHRoaXMucHVzaGVkSXRlbXNQYXRoID0gW107XHJcbiAgfVxyXG5cclxuICBjaGVja1B1c2hCYWNrKCk6IHZvaWQge1xyXG4gICAgbGV0IGk6IG51bWJlciA9IHRoaXMucHVzaGVkSXRlbXMubGVuZ3RoIC0gMTtcclxuICAgIGxldCBjaGFuZ2UgPSBmYWxzZTtcclxuICAgIGZvciAoOyBpID4gLTE7IGktLSkge1xyXG4gICAgICBpZiAodGhpcy5jaGVja1B1c2hlZEl0ZW0odGhpcy5wdXNoZWRJdGVtc1tpXSwgaSkpIHtcclxuICAgICAgICBjaGFuZ2UgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoY2hhbmdlKSB7XHJcbiAgICAgIHRoaXMuY2hlY2tQdXNoQmFjaygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBwdXNoKGdyaWRzdGVySXRlbTogR3JpZHN0ZXJJdGVtQ29tcG9uZW50SW50ZXJmYWNlLCBkaXJlY3Rpb246IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgY29uc3QgZ3JpZHN0ZXJJdGVtQ29sbGlzaW9uOiBhbnkgPSB0aGlzLmdyaWRzdGVyLmNoZWNrQ29sbGlzaW9uKGdyaWRzdGVySXRlbS4kaXRlbSk7XHJcbiAgICBpZiAoZ3JpZHN0ZXJJdGVtQ29sbGlzaW9uICYmIGdyaWRzdGVySXRlbUNvbGxpc2lvbiAhPT0gdHJ1ZSAmJlxyXG4gICAgICBncmlkc3Rlckl0ZW1Db2xsaXNpb24gIT09IHRoaXMuZ3JpZHN0ZXJJdGVtICYmIGdyaWRzdGVySXRlbUNvbGxpc2lvbi5jYW5CZVJlc2l6ZWQoKSkge1xyXG4gICAgICBpZiAodGhpcy50cnlQYXR0ZXJuW2RpcmVjdGlvbl0uY2FsbCh0aGlzLCBncmlkc3Rlckl0ZW1Db2xsaXNpb24sIGdyaWRzdGVySXRlbSwgZGlyZWN0aW9uKSkge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKGdyaWRzdGVySXRlbUNvbGxpc2lvbiA9PT0gZmFsc2UpIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHRyeVNvdXRoKGdyaWRzdGVySXRlbUNvbGxpZGU6IEdyaWRzdGVySXRlbUNvbXBvbmVudEludGVyZmFjZSwgZ3JpZHN0ZXJJdGVtOiBHcmlkc3Rlckl0ZW1Db21wb25lbnRJbnRlcmZhY2UsXHJcbiAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb246IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgY29uc3QgYmFja1VwWSA9IGdyaWRzdGVySXRlbUNvbGxpZGUuJGl0ZW0ueTtcclxuICAgIGNvbnN0IGJhY2tVcFJvd3MgPSBncmlkc3Rlckl0ZW1Db2xsaWRlLiRpdGVtLnJvd3M7XHJcbiAgICBncmlkc3Rlckl0ZW1Db2xsaWRlLiRpdGVtLnkgPSBncmlkc3Rlckl0ZW0uJGl0ZW0ueSArIGdyaWRzdGVySXRlbS4kaXRlbS5yb3dzO1xyXG4gICAgZ3JpZHN0ZXJJdGVtQ29sbGlkZS4kaXRlbS5yb3dzID0gYmFja1VwUm93cyArIGJhY2tVcFkgLSBncmlkc3Rlckl0ZW1Db2xsaWRlLiRpdGVtLnk7XHJcbiAgICBpZiAoIUdyaWRzdGVyQ29tcG9uZW50LmNoZWNrQ29sbGlzaW9uVHdvSXRlbXMoZ3JpZHN0ZXJJdGVtQ29sbGlkZS4kaXRlbSwgZ3JpZHN0ZXJJdGVtLiRpdGVtKVxyXG4gICAgICAmJiAhdGhpcy5ncmlkc3Rlci5jaGVja0dyaWRDb2xsaXNpb24oZ3JpZHN0ZXJJdGVtQ29sbGlkZS4kaXRlbSkpIHtcclxuICAgICAgZ3JpZHN0ZXJJdGVtQ29sbGlkZS5zZXRTaXplKCk7XHJcbiAgICAgIHRoaXMuYWRkVG9QdXNoZWQoZ3JpZHN0ZXJJdGVtQ29sbGlkZSk7XHJcbiAgICAgIHRoaXMucHVzaChncmlkc3Rlckl0ZW0sIGRpcmVjdGlvbik7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZ3JpZHN0ZXJJdGVtQ29sbGlkZS4kaXRlbS55ID0gYmFja1VwWTtcclxuICAgICAgZ3JpZHN0ZXJJdGVtQ29sbGlkZS4kaXRlbS5yb3dzID0gYmFja1VwUm93cztcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgdHJ5Tm9ydGgoZ3JpZHN0ZXJJdGVtQ29sbGlkZTogR3JpZHN0ZXJJdGVtQ29tcG9uZW50SW50ZXJmYWNlLCBncmlkc3Rlckl0ZW06IEdyaWRzdGVySXRlbUNvbXBvbmVudEludGVyZmFjZSxcclxuICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICBjb25zdCBiYWNrVXBSb3dzID0gZ3JpZHN0ZXJJdGVtQ29sbGlkZS4kaXRlbS5yb3dzO1xyXG4gICAgZ3JpZHN0ZXJJdGVtQ29sbGlkZS4kaXRlbS5yb3dzID0gZ3JpZHN0ZXJJdGVtLiRpdGVtLnkgLSBncmlkc3Rlckl0ZW1Db2xsaWRlLiRpdGVtLnk7XHJcbiAgICBpZiAoIUdyaWRzdGVyQ29tcG9uZW50LmNoZWNrQ29sbGlzaW9uVHdvSXRlbXMoZ3JpZHN0ZXJJdGVtQ29sbGlkZS4kaXRlbSwgZ3JpZHN0ZXJJdGVtLiRpdGVtKVxyXG4gICAgICAmJiAhdGhpcy5ncmlkc3Rlci5jaGVja0dyaWRDb2xsaXNpb24oZ3JpZHN0ZXJJdGVtQ29sbGlkZS4kaXRlbSkpIHtcclxuICAgICAgZ3JpZHN0ZXJJdGVtQ29sbGlkZS5zZXRTaXplKCk7XHJcbiAgICAgIHRoaXMuYWRkVG9QdXNoZWQoZ3JpZHN0ZXJJdGVtQ29sbGlkZSk7XHJcbiAgICAgIHRoaXMucHVzaChncmlkc3Rlckl0ZW0sIGRpcmVjdGlvbik7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZ3JpZHN0ZXJJdGVtQ29sbGlkZS4kaXRlbS5yb3dzID0gYmFja1VwUm93cztcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgdHJ5RWFzdChncmlkc3Rlckl0ZW1Db2xsaWRlOiBHcmlkc3Rlckl0ZW1Db21wb25lbnRJbnRlcmZhY2UsIGdyaWRzdGVySXRlbTogR3JpZHN0ZXJJdGVtQ29tcG9uZW50SW50ZXJmYWNlLFxyXG4gICAgICAgICAgICAgICAgICBkaXJlY3Rpb246IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgY29uc3QgYmFja1VwWCA9IGdyaWRzdGVySXRlbUNvbGxpZGUuJGl0ZW0ueDtcclxuICAgIGNvbnN0IGJhY2tVcENvbHMgPSBncmlkc3Rlckl0ZW1Db2xsaWRlLiRpdGVtLmNvbHM7XHJcbiAgICBncmlkc3Rlckl0ZW1Db2xsaWRlLiRpdGVtLnggPSBncmlkc3Rlckl0ZW0uJGl0ZW0ueCArIGdyaWRzdGVySXRlbS4kaXRlbS5jb2xzO1xyXG4gICAgZ3JpZHN0ZXJJdGVtQ29sbGlkZS4kaXRlbS5jb2xzID0gYmFja1VwQ29scyArIGJhY2tVcFggLSBncmlkc3Rlckl0ZW1Db2xsaWRlLiRpdGVtLng7XHJcbiAgICBpZiAoIUdyaWRzdGVyQ29tcG9uZW50LmNoZWNrQ29sbGlzaW9uVHdvSXRlbXMoZ3JpZHN0ZXJJdGVtQ29sbGlkZS4kaXRlbSwgZ3JpZHN0ZXJJdGVtLiRpdGVtKVxyXG4gICAgICAmJiAhdGhpcy5ncmlkc3Rlci5jaGVja0dyaWRDb2xsaXNpb24oZ3JpZHN0ZXJJdGVtQ29sbGlkZS4kaXRlbSkpIHtcclxuICAgICAgZ3JpZHN0ZXJJdGVtQ29sbGlkZS5zZXRTaXplKCk7XHJcbiAgICAgIHRoaXMuYWRkVG9QdXNoZWQoZ3JpZHN0ZXJJdGVtQ29sbGlkZSk7XHJcbiAgICAgIHRoaXMucHVzaChncmlkc3Rlckl0ZW0sIGRpcmVjdGlvbik7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZ3JpZHN0ZXJJdGVtQ29sbGlkZS4kaXRlbS54ID0gYmFja1VwWDtcclxuICAgICAgZ3JpZHN0ZXJJdGVtQ29sbGlkZS4kaXRlbS5jb2xzID0gYmFja1VwQ29scztcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgdHJ5V2VzdChncmlkc3Rlckl0ZW1Db2xsaWRlOiBHcmlkc3Rlckl0ZW1Db21wb25lbnRJbnRlcmZhY2UsIGdyaWRzdGVySXRlbTogR3JpZHN0ZXJJdGVtQ29tcG9uZW50SW50ZXJmYWNlLFxyXG4gICAgICAgICAgICAgICAgICBkaXJlY3Rpb246IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgY29uc3QgYmFja1VwQ29scyA9IGdyaWRzdGVySXRlbUNvbGxpZGUuJGl0ZW0uY29scztcclxuICAgIGdyaWRzdGVySXRlbUNvbGxpZGUuJGl0ZW0uY29scyA9IGdyaWRzdGVySXRlbS4kaXRlbS54IC0gZ3JpZHN0ZXJJdGVtQ29sbGlkZS4kaXRlbS54O1xyXG4gICAgaWYgKCFHcmlkc3RlckNvbXBvbmVudC5jaGVja0NvbGxpc2lvblR3b0l0ZW1zKGdyaWRzdGVySXRlbUNvbGxpZGUuJGl0ZW0sIGdyaWRzdGVySXRlbS4kaXRlbSlcclxuICAgICAgJiYgIXRoaXMuZ3JpZHN0ZXIuY2hlY2tHcmlkQ29sbGlzaW9uKGdyaWRzdGVySXRlbUNvbGxpZGUuJGl0ZW0pKSB7XHJcbiAgICAgIGdyaWRzdGVySXRlbUNvbGxpZGUuc2V0U2l6ZSgpO1xyXG4gICAgICB0aGlzLmFkZFRvUHVzaGVkKGdyaWRzdGVySXRlbUNvbGxpZGUpO1xyXG4gICAgICB0aGlzLnB1c2goZ3JpZHN0ZXJJdGVtLCBkaXJlY3Rpb24pO1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGdyaWRzdGVySXRlbUNvbGxpZGUuJGl0ZW0uY29scyA9IGJhY2tVcENvbHM7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGFkZFRvUHVzaGVkKGdyaWRzdGVySXRlbTogR3JpZHN0ZXJJdGVtQ29tcG9uZW50SW50ZXJmYWNlKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5wdXNoZWRJdGVtcy5pbmRleE9mKGdyaWRzdGVySXRlbSkgPCAwKSB7XHJcbiAgICAgIHRoaXMucHVzaGVkSXRlbXMucHVzaChncmlkc3Rlckl0ZW0pO1xyXG4gICAgICB0aGlzLnB1c2hlZEl0ZW1zUGF0aC5wdXNoKFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICB4OiBncmlkc3Rlckl0ZW0uaXRlbS54IHx8IDAsXHJcbiAgICAgICAgICB5OiBncmlkc3Rlckl0ZW0uaXRlbS55IHx8IDAsXHJcbiAgICAgICAgICBjb2xzOiBncmlkc3Rlckl0ZW0uaXRlbS5jb2xzIHx8IDAsXHJcbiAgICAgICAgICByb3dzOiBncmlkc3Rlckl0ZW0uaXRlbS5yb3dzIHx8IDBcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHg6IGdyaWRzdGVySXRlbS4kaXRlbS54LFxyXG4gICAgICAgICAgeTogZ3JpZHN0ZXJJdGVtLiRpdGVtLnksXHJcbiAgICAgICAgICBjb2xzOiBncmlkc3Rlckl0ZW0uJGl0ZW0uY29scyxcclxuICAgICAgICAgIHJvd3M6IGdyaWRzdGVySXRlbS4kaXRlbS5yb3dzXHJcbiAgICAgICAgfV0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgaSA9IHRoaXMucHVzaGVkSXRlbXMuaW5kZXhPZihncmlkc3Rlckl0ZW0pO1xyXG4gICAgICB0aGlzLnB1c2hlZEl0ZW1zUGF0aFtpXS5wdXNoKFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHg6IGdyaWRzdGVySXRlbS4kaXRlbS54LFxyXG4gICAgICAgICAgeTogZ3JpZHN0ZXJJdGVtLiRpdGVtLnksXHJcbiAgICAgICAgICBjb2xzOiBncmlkc3Rlckl0ZW0uJGl0ZW0uY29scyxcclxuICAgICAgICAgIHJvd3M6IGdyaWRzdGVySXRlbS4kaXRlbS5yb3dzXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlbW92ZUZyb21QdXNoZWQoaTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICBpZiAoaSA+IC0xKSB7XHJcbiAgICAgIHRoaXMucHVzaGVkSXRlbXMuc3BsaWNlKGksIDEpO1xyXG4gICAgICB0aGlzLnB1c2hlZEl0ZW1zUGF0aC5zcGxpY2UoaSwgMSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNoZWNrUHVzaGVkSXRlbShwdXNoZWRJdGVtOiBHcmlkc3Rlckl0ZW1Db21wb25lbnRJbnRlcmZhY2UsIGk6IG51bWJlcik6IGJvb2xlYW4ge1xyXG4gICAgY29uc3QgcGF0aCA9IHRoaXMucHVzaGVkSXRlbXNQYXRoW2ldO1xyXG4gICAgbGV0IGogPSBwYXRoLmxlbmd0aCAtIDI7XHJcbiAgICBsZXQgbGFzdFBvc2l0aW9uOiB7IHg6IG51bWJlciwgeTogbnVtYmVyLCBjb2xzOiBudW1iZXIsIHJvd3M6IG51bWJlciB9LCB4LCB5LCBjb2xzLCByb3dzO1xyXG4gICAgZm9yICg7IGogPiAtMTsgai0tKSB7XHJcbiAgICAgIGxhc3RQb3NpdGlvbiA9IHBhdGhbal07XHJcbiAgICAgIHggPSBwdXNoZWRJdGVtLiRpdGVtLng7XHJcbiAgICAgIHkgPSBwdXNoZWRJdGVtLiRpdGVtLnk7XHJcbiAgICAgIGNvbHMgPSBwdXNoZWRJdGVtLiRpdGVtLmNvbHM7XHJcbiAgICAgIHJvd3MgPSBwdXNoZWRJdGVtLiRpdGVtLnJvd3M7XHJcbiAgICAgIHB1c2hlZEl0ZW0uJGl0ZW0ueCA9IGxhc3RQb3NpdGlvbi54O1xyXG4gICAgICBwdXNoZWRJdGVtLiRpdGVtLnkgPSBsYXN0UG9zaXRpb24ueTtcclxuICAgICAgcHVzaGVkSXRlbS4kaXRlbS5jb2xzID0gbGFzdFBvc2l0aW9uLmNvbHM7XHJcbiAgICAgIHB1c2hlZEl0ZW0uJGl0ZW0ucm93cyA9IGxhc3RQb3NpdGlvbi5yb3dzO1xyXG4gICAgICBpZiAoIXRoaXMuZ3JpZHN0ZXIuZmluZEl0ZW1XaXRoSXRlbShwdXNoZWRJdGVtLiRpdGVtKSkge1xyXG4gICAgICAgIHB1c2hlZEl0ZW0uc2V0U2l6ZSgpO1xyXG4gICAgICAgIHBhdGguc3BsaWNlKGogKyAxLCBwYXRoLmxlbmd0aCAtIDEgLSBqKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBwdXNoZWRJdGVtLiRpdGVtLnggPSB4O1xyXG4gICAgICAgIHB1c2hlZEl0ZW0uJGl0ZW0ueSA9IHk7XHJcbiAgICAgICAgcHVzaGVkSXRlbS4kaXRlbS5jb2xzID0gY29scztcclxuICAgICAgICBwdXNoZWRJdGVtLiRpdGVtLnJvd3MgPSByb3dzO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAocGF0aC5sZW5ndGggPCAyKSB7XHJcbiAgICAgIHRoaXMucmVtb3ZlRnJvbVB1c2hlZChpKTtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG59XHJcbiJdfQ==