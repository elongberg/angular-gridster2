/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { GridsterItemComponentInterface } from './gridsterItemComponent.interface';
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
        { type: Injectable }
    ];
    /** @nocollapse */
    GridsterPush.ctorParameters = function () { return [
        { type: GridsterItemComponentInterface }
    ]; };
    return GridsterPush;
}());
export { GridsterPush };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZHN0ZXJQdXNoLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWdyaWRzdGVyMi8iLCJzb3VyY2VzIjpbImxpYi9ncmlkc3RlclB1c2guc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUMsOEJBQThCLEVBQUMsTUFBTSxtQ0FBbUMsQ0FBQztBQUdqRjtJQXFCRSxzQkFBWSxZQUE0QztRQUN0RCxJQUFJLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsZUFBZSxHQUFHLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsbUJBQW1CLEdBQUcsRUFBRSxDQUFDO1FBQzlCLElBQUksQ0FBQyxlQUFlLEdBQUcsRUFBRSxDQUFDO1FBQzFCLFlBQVksQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztRQUNqRCxJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQztRQUNqQyxJQUFJLENBQUMsUUFBUSxHQUFHLFlBQVksQ0FBQyxRQUFRLENBQUM7UUFDdEMsSUFBSSxDQUFDLFVBQVUsR0FBRztZQUNoQixRQUFRLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ3BFLFFBQVEsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDcEUsU0FBUyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUNyRSxTQUFTLEVBQUUsQ0FBQyxJ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LENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDeEMsTUFBTSxHQUFHLElBQUksQ0FBQzthQUNmO2lCQUFNO2dCQUNMLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDdkIsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ3hCO1NBQ0Y7UUFDRCxJQUFJLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ25CLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUMxQjtRQUNELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7O2dCQWxVRixVQUFVOzs7O2dCQUhILDhCQUE4Qjs7SUFzVXRDLG1CQUFDO0NBQUEsQUFuVUQsSUFtVUM7U0FsVVksWUFBWTs7O0lBQ3ZCLGlDQUF5Qjs7SUFDekIsaUNBQXlCOztJQUN6QixnQ0FBd0I7O0lBQ3hCLGdDQUF3Qjs7Ozs7SUFDeEIsbUNBQTJEOzs7OztJQUMzRCx1Q0FBK0Q7Ozs7O0lBQy9ELDJDQUFvRTs7Ozs7SUFDcEUsdUNBQWdFOzs7OztJQUNoRSxvQ0FBcUQ7Ozs7O0lBQ3JELGdDQUE2Qzs7Ozs7SUFDN0Msd0NBQWdFOzs7OztJQUNoRSxrQ0FNRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQge0dyaWRzdGVySXRlbUNvbXBvbmVudEludGVyZmFjZX0gZnJvbSAnLi9ncmlkc3Rlckl0ZW1Db21wb25lbnQuaW50ZXJmYWNlJztcclxuaW1wb3J0IHtHcmlkc3RlckNvbXBvbmVudEludGVyZmFjZX0gZnJvbSAnLi9ncmlkc3Rlci5pbnRlcmZhY2UnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgR3JpZHN0ZXJQdXNoIHtcclxuICBwdWJsaWMgZnJvbVNvdXRoOiBzdHJpbmc7XHJcbiAgcHVibGljIGZyb21Ob3J0aDogc3RyaW5nO1xyXG4gIHB1YmxpYyBmcm9tRWFzdDogc3RyaW5nO1xyXG4gIHB1YmxpYyBmcm9tV2VzdDogc3RyaW5nO1xyXG4gIHByaXZhdGUgcHVzaGVkSXRlbXM6IEFycmF5PEdyaWRzdGVySXRlbUNvbXBvbmVudEludGVyZmFjZT47XHJcbiAgcHJpdmF0ZSBwdXNoZWRJdGVtc1RlbXA6IEFycmF5PEdyaWRzdGVySXRlbUNvbXBvbmVudEludGVyZmFjZT47XHJcbiAgcHJpdmF0ZSBwdXNoZWRJdGVtc1RlbXBQYXRoOiBBcnJheTxBcnJheTx7IHg6IG51bWJlciwgeTogbnVtYmVyIH0+PjtcclxuICBwcml2YXRlIHB1c2hlZEl0ZW1zUGF0aDogQXJyYXk8QXJyYXk8eyB4OiBudW1iZXIsIHk6IG51bWJlciB9Pj47XHJcbiAgcHJpdmF0ZSBncmlkc3Rlckl0ZW06IEdyaWRzdGVySXRlbUNvbXBvbmVudEludGVyZmFjZTtcclxuICBwcml2YXRlIGdyaWRzdGVyOiBHcmlkc3RlckNvbXBvbmVudEludGVyZmFjZTtcclxuICBwcml2YXRlIHB1c2hlZEl0ZW1zT3JkZXI6IEFycmF5PEdyaWRzdGVySXRlbUNvbXBvbmVudEludGVyZmFjZT47XHJcbiAgcHJpdmF0ZSB0cnlQYXR0ZXJuOiB7XHJcbiAgICBmcm9tRWFzdDogQXJyYXk8RnVuY3Rpb24+LFxyXG4gICAgZnJvbVdlc3Q6IEFycmF5PEZ1bmN0aW9uPixcclxuICAgIGZyb21Ob3J0aDogQXJyYXk8RnVuY3Rpb24+LFxyXG4gICAgZnJvbVNvdXRoOiBBcnJheTxGdW5jdGlvbj4sXHJcbiAgICBba2V5OiBzdHJpbmddOiBBcnJheTxGdW5jdGlvbj5cclxuICB9O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihncmlkc3Rlckl0ZW06IEdyaWRzdGVySXRlbUNvbXBvbmVudEludGVyZmFjZSkge1xyXG4gICAgdGhpcy5wdXNoZWRJdGVtcyA9IFtdO1xyXG4gICAgdGhpcy5wdXNoZWRJdGVtc1RlbXAgPSBbXTtcclxuICAgIHRoaXMucHVzaGVkSXRlbXNUZW1wUGF0aCA9IFtdO1xyXG4gICAgdGhpcy5wdXNoZWRJdGVtc1BhdGggPSBbXTtcclxuICAgIGdyaWRzdGVySXRlbVsnaWQnXSA9IHRoaXMuZ2VuZXJhdGVUZW1wUmFuZG9tSWQoKTtcclxuICAgIHRoaXMuZ3JpZHN0ZXJJdGVtID0gZ3JpZHN0ZXJJdGVtO1xyXG4gICAgdGhpcy5ncmlkc3RlciA9IGdyaWRzdGVySXRlbS5ncmlkc3RlcjtcclxuICAgIHRoaXMudHJ5UGF0dGVybiA9IHtcclxuICAgICAgZnJvbUVhc3Q6IFt0aGlzLnRyeVdlc3QsIHRoaXMudHJ5U291dGgsIHRoaXMudHJ5Tm9ydGgsIHRoaXMudHJ5RWFzdF0sXHJcbiAgICAgIGZyb21XZXN0OiBbdGhpcy50cnlFYXN0LCB0aGlzLnRyeVNvdXRoLCB0aGlzLnRyeU5vcnRoLCB0aGlzLnRyeVdlc3RdLFxyXG4gICAgICBmcm9tTm9ydGg6IFt0aGlzLnRyeVNvdXRoLCB0aGlzLnRyeUVhc3QsIHRoaXMudHJ5V2VzdCwgdGhpcy50cnlOb3J0aF0sXHJcbiAgICAgIGZyb21Tb3V0aDogW3RoaXMudHJ5Tm9ydGgsIHRoaXMudHJ5RWFzdCwgdGhpcy50cnlXZXN0LCB0aGlzLnRyeVNvdXRoXVxyXG4gICAgfTtcclxuICAgIHRoaXMuZnJvbVNvdXRoID0gJ2Zyb21Tb3V0aCc7XHJcbiAgICB0aGlzLmZyb21Ob3J0aCA9ICdmcm9tTm9ydGgnO1xyXG4gICAgdGhpcy5mcm9tRWFzdCA9ICdmcm9tRWFzdCc7XHJcbiAgICB0aGlzLmZyb21XZXN0ID0gJ2Zyb21XZXN0JztcclxuICB9XHJcblxyXG4gIGRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICBkZWxldGUgdGhpcy5ncmlkc3RlcjtcclxuICAgIGRlbGV0ZSB0aGlzLmdyaWRzdGVySXRlbTtcclxuICB9XHJcblxyXG4gIHB1c2hJdGVtcyhkaXJlY3Rpb246IHN0cmluZywgZGlzYWJsZT86IGJvb2xlYW4pOiBib29sZWFuIHtcclxuICAgIGlmICh0aGlzLmdyaWRzdGVyLiRvcHRpb25zLnB1c2hJdGVtcyAmJiAhZGlzYWJsZSkge1xyXG4gICAgICB0aGlzLnB1c2hlZEl0ZW1zT3JkZXIgPSBbXTtcclxuICAgICAgY29uc3QgcHVzaGVkID0gdGhpcy5wdXNoKHRoaXMuZ3JpZHN0ZXJJdGVtLCBkaXJlY3Rpb24pO1xyXG4gICAgICBpZiAoIXB1c2hlZCkge1xyXG4gICAgICAgIHRoaXMucmVzdG9yZVRlbXBJdGVtcygpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMucHVzaGVkSXRlbXNPcmRlciA9IFtdO1xyXG4gICAgICB0aGlzLnB1c2hlZEl0ZW1zVGVtcCA9IFtdO1xyXG4gICAgICB0aGlzLnB1c2hlZEl0ZW1zVGVtcFBhdGggPSBbXTtcclxuICAgICAgdGhpcy5jbGVhblRlbXBJZHMoKTtcclxuICAgICAgcmV0dXJuIHB1c2hlZDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlc3RvcmVUZW1wSXRlbXMoKTogdm9pZCB7XHJcbiAgICBsZXQgaSA9IHRoaXMucHVzaGVkSXRlbXNUZW1wLmxlbmd0aCAtIDE7XHJcbiAgICBmb3IgKDsgaSA+IC0xOyBpLS0pIHtcclxuICAgICAgdGhpcy5yZW1vdmVGcm9tVGVtcFB1c2hlZCh0aGlzLnB1c2hlZEl0ZW1zVGVtcFtpXSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXN0b3JlSXRlbXMoKTogdm9pZCB7XHJcbiAgICBsZXQgaSA9IDA7XHJcbiAgICBjb25zdCBsOiBudW1iZXIgPSB0aGlzLnB1c2hlZEl0ZW1zLmxlbmd0aDtcclxuICAgIGxldCBwdXNoZWRJdGVtOiBHcmlkc3Rlckl0ZW1Db21wb25lbnRJbnRlcmZhY2U7XHJcbiAgICBmb3IgKDsgaSA8IGw7IGkrKykge1xyXG4gICAgICBwdXNoZWRJdGVtID0gdGhpcy5wdXNoZWRJdGVtc1tpXTtcclxuICAgICAgcHVzaGVkSXRlbS4kaXRlbS54ID0gcHVzaGVkSXRlbS5pdGVtLnggfHwgMDtcclxuICAgICAgcHVzaGVkSXRlbS4kaXRlbS55ID0gcHVzaGVkSXRlbS5pdGVtLnkgfHwgMDtcclxuICAgICAgcHVzaGVkSXRlbS5zZXRTaXplKCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnB1c2hlZEl0ZW1zID0gW107XHJcbiAgICB0aGlzLnB1c2hlZEl0ZW1zUGF0aCA9IFtdO1xyXG4gIH1cclxuXHJcbiAgc2V0UHVzaGVkSXRlbXMoKSB7XHJcbiAgICBsZXQgaSA9IDA7XHJcbiAgICBjb25zdCBsOiBudW1iZXIgPSB0aGlzLnB1c2hlZEl0ZW1zLmxlbmd0aDtcclxuICAgIGxldCBwdXNoZWRJdGVtOiBHcmlkc3Rlckl0ZW1Db21wb25lbnRJbnRlcmZhY2U7XHJcbiAgICBmb3IgKDsgaSA8IGw7IGkrKykge1xyXG4gICAgICBwdXNoZWRJdGVtID0gdGhpcy5wdXNoZWRJdGVtc1tpXTtcclxuICAgICAgcHVzaGVkSXRlbS5jaGVja0l0ZW1DaGFuZ2VzKHB1c2hlZEl0ZW0uJGl0ZW0sIHB1c2hlZEl0ZW0uaXRlbSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnB1c2hlZEl0ZW1zID0gW107XHJcbiAgICB0aGlzLnB1c2hlZEl0ZW1zUGF0aCA9IFtdO1xyXG4gIH1cclxuXHJcbiAgY2hlY2tQdXNoQmFjaygpOiB2b2lkIHtcclxuICAgIGxldCBpOiBudW1iZXIgPSB0aGlzLnB1c2hlZEl0ZW1zLmxlbmd0aCAtIDE7XHJcbiAgICBsZXQgY2hhbmdlID0gZmFsc2U7XHJcbiAgICBmb3IgKDsgaSA+IC0xOyBpLS0pIHtcclxuICAgICAgaWYgKHRoaXMuY2hlY2tQdXNoZWRJdGVtKHRoaXMucHVzaGVkSXRlbXNbaV0sIGkpKSB7XHJcbiAgICAgICAgY2hhbmdlID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKGNoYW5nZSkge1xyXG4gICAgICB0aGlzLmNoZWNrUHVzaEJhY2soKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2VuZXJhdGVUZW1wUmFuZG9tSWQoKSA6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikucmVwbGFjZSgvW15hLXpdKy9nLCAnJykuc3Vic3RyKDIsIDEwKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2xlYW5UZW1wSWRzKCl7XHJcbiAgICBjb25zdCBhbGxJdGVtc1dpdGhJZHMgPSB0aGlzLmdyaWRzdGVyLmdyaWQuZmlsdGVyKChlbDpHcmlkc3Rlckl0ZW1Db21wb25lbnRJbnRlcmZhY2UpID0+IGVsWydpZCddKTtcclxuICAgIGFsbEl0ZW1zV2l0aElkcy5mb3JFYWNoKChlbDogR3JpZHN0ZXJJdGVtQ29tcG9uZW50SW50ZXJmYWNlKSA9PiBkZWxldGUgZWxbJ2lkJ10pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBwdXNoKGdyaWRzdGVySXRlbTogR3JpZHN0ZXJJdGVtQ29tcG9uZW50SW50ZXJmYWNlLCBkaXJlY3Rpb246IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKHRoaXMuZ3JpZHN0ZXIuY2hlY2tHcmlkQ29sbGlzaW9uKGdyaWRzdGVySXRlbS4kaXRlbSkpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gJycpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgY29uc3QgYTogQXJyYXk8R3JpZHN0ZXJJdGVtQ29tcG9uZW50SW50ZXJmYWNlPiA9IHRoaXMuZ3JpZHN0ZXIuZmluZEl0ZW1zV2l0aEl0ZW0oZ3JpZHN0ZXJJdGVtLiRpdGVtKTtcclxuICAgIGxldCBpID0gYS5sZW5ndGggLSAxLCBpdGVtQ29sbGlzaW9uOiBHcmlkc3Rlckl0ZW1Db21wb25lbnRJbnRlcmZhY2U7XHJcbiAgICBsZXQgbWFrZVB1c2ggPSB0cnVlO1xyXG4gICAgY29uc3QgYjogQXJyYXk8R3JpZHN0ZXJJdGVtQ29tcG9uZW50SW50ZXJmYWNlPiA9IFtdO1xyXG4gICAgZm9yICg7IGkgPiAtMTsgaS0tKSB7XHJcbiAgICAgIGl0ZW1Db2xsaXNpb24gPSBhW2ldO1xyXG4gICAgICBpZiAoIWl0ZW1Db2xsaXNpb25bJ2lkJ10pIHtcclxuICAgICAgICBpdGVtQ29sbGlzaW9uWydpZCddID0gdGhpcy5nZW5lcmF0ZVRlbXBSYW5kb21JZCgpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChpdGVtQ29sbGlzaW9uID09PSB0aGlzLmdyaWRzdGVySXRlbSkge1xyXG4gICAgICAgIG1ha2VQdXNoID0gZmFsc2U7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKCFpdGVtQ29sbGlzaW9uLmNhbkJlRHJhZ2dlZCgpKSB7XHJcbiAgICAgICAgbWFrZVB1c2ggPSBmYWxzZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBjb21wYXJlID0gdGhpcy5wdXNoZWRJdGVtc1RlbXAuZmluZCgoZWw6IEdyaWRzdGVySXRlbUNvbXBvbmVudEludGVyZmFjZSkgPT4ge1xyXG4gICAgICAgIHJldHVybiBlbFsnaWQnXSA9PT0gaXRlbUNvbGxpc2lvblsnaWQnXTtcclxuICAgICAgfSk7XHJcbiAgICAgIGlmIChjb21wYXJlKSB7XHJcbiAgICAgICAgbWFrZVB1c2ggPSBmYWxzZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBpZiAodGhpcy50cnlQYXR0ZXJuW2RpcmVjdGlvbl1bMF0uY2FsbCh0aGlzLCBpdGVtQ29sbGlzaW9uLCBncmlkc3Rlckl0ZW0pKSB7XHJcbiAgICAgICAgdGhpcy5wdXNoZWRJdGVtc09yZGVyLnB1c2goaXRlbUNvbGxpc2lvbik7XHJcbiAgICAgICAgYi5wdXNoKGl0ZW1Db2xsaXNpb24pO1xyXG4gICAgICB9IGVsc2UgaWYgKHRoaXMudHJ5UGF0dGVybltkaXJlY3Rpb25dWzFdLmNhbGwodGhpcywgaXRlbUNvbGxpc2lvbiwgZ3JpZHN0ZXJJdGVtKSkge1xyXG4gICAgICAgIHRoaXMucHVzaGVkSXRlbXNPcmRlci5wdXNoKGl0ZW1Db2xsaXNpb24pO1xyXG4gICAgICAgIGIucHVzaChpdGVtQ29sbGlzaW9uKTtcclxuICAgICAgfSBlbHNlIGlmICh0aGlzLnRyeVBhdHRlcm5bZGlyZWN0aW9uXVsyXS5jYWxsKHRoaXMsIGl0ZW1Db2xsaXNpb24sIGdyaWRzdGVySXRlbSkpIHtcclxuICAgICAgICB0aGlzLnB1c2hlZEl0ZW1zT3JkZXIucHVzaChpdGVtQ29sbGlzaW9uKTtcclxuICAgICAgICBiLnB1c2goaXRlbUNvbGxpc2lvbik7XHJcbiAgICAgIH0gZWxzZSBpZiAodGhpcy50cnlQYXR0ZXJuW2RpcmVjdGlvbl1bM10uY2FsbCh0aGlzLCBpdGVtQ29sbGlzaW9uLCBncmlkc3Rlckl0ZW0pKSB7XHJcbiAgICAgICAgdGhpcy5wdXNoZWRJdGVtc09yZGVyLnB1c2goaXRlbUNvbGxpc2lvbik7XHJcbiAgICAgICAgYi5wdXNoKGl0ZW1Db2xsaXNpb24pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG1ha2VQdXNoID0gZmFsc2U7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICghbWFrZVB1c2gpIHtcclxuICAgICAgaSA9IHRoaXMucHVzaGVkSXRlbXNPcmRlci5sYXN0SW5kZXhPZihiWzBdKTtcclxuICAgICAgaWYgKGkgPiAtMSkge1xyXG4gICAgICAgIGxldCBqID0gdGhpcy5wdXNoZWRJdGVtc09yZGVyLmxlbmd0aCAtIDE7XHJcbiAgICAgICAgZm9yICg7IGogPj0gaTsgai0tKSB7XHJcbiAgICAgICAgICBpdGVtQ29sbGlzaW9uID0gdGhpcy5wdXNoZWRJdGVtc09yZGVyW2pdO1xyXG4gICAgICAgICAgdGhpcy5wdXNoZWRJdGVtc09yZGVyLnBvcCgpO1xyXG4gICAgICAgICAgdGhpcy5yZW1vdmVGcm9tVGVtcFB1c2hlZChpdGVtQ29sbGlzaW9uKTtcclxuICAgICAgICAgIHRoaXMucmVtb3ZlRnJvbVB1c2hlZEl0ZW0oaXRlbUNvbGxpc2lvbik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbWFrZVB1c2g7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHRyeVNvdXRoKGdyaWRzdGVySXRlbUNvbGxpZGU6IEdyaWRzdGVySXRlbUNvbXBvbmVudEludGVyZmFjZSwgZ3JpZHN0ZXJJdGVtOiBHcmlkc3Rlckl0ZW1Db21wb25lbnRJbnRlcmZhY2UpOiBib29sZWFuIHtcclxuICAgIGlmICghdGhpcy5ncmlkc3Rlci4kb3B0aW9ucy5wdXNoRGlyZWN0aW9ucy5zb3V0aCkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICB0aGlzLmFkZFRvVGVtcFB1c2hlZChncmlkc3Rlckl0ZW1Db2xsaWRlKTtcclxuICAgIGdyaWRzdGVySXRlbUNvbGxpZGUuJGl0ZW0ueSA9IGdyaWRzdGVySXRlbS4kaXRlbS55ICsgZ3JpZHN0ZXJJdGVtLiRpdGVtLnJvd3M7XHJcbiAgICBpZiAodGhpcy5wdXNoKGdyaWRzdGVySXRlbUNvbGxpZGUsIHRoaXMuZnJvbU5vcnRoKSkge1xyXG4gICAgICBncmlkc3Rlckl0ZW1Db2xsaWRlLnNldFNpemUoKTtcclxuICAgICAgdGhpcy5hZGRUb1B1c2hlZChncmlkc3Rlckl0ZW1Db2xsaWRlKTtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnJlbW92ZUZyb21UZW1wUHVzaGVkKGdyaWRzdGVySXRlbUNvbGxpZGUpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB0cnlOb3J0aChncmlkc3Rlckl0ZW1Db2xsaWRlOiBHcmlkc3Rlckl0ZW1Db21wb25lbnRJbnRlcmZhY2UsIGdyaWRzdGVySXRlbTogR3JpZHN0ZXJJdGVtQ29tcG9uZW50SW50ZXJmYWNlKTogYm9vbGVhbiB7XHJcbiAgICBpZiAoIXRoaXMuZ3JpZHN0ZXIuJG9wdGlvbnMucHVzaERpcmVjdGlvbnMubm9ydGgpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgdGhpcy5hZGRUb1RlbXBQdXNoZWQoZ3JpZHN0ZXJJdGVtQ29sbGlkZSk7XHJcbiAgICBncmlkc3Rlckl0ZW1Db2xsaWRlLiRpdGVtLnkgPSBncmlkc3Rlckl0ZW0uJGl0ZW0ueSAtIGdyaWRzdGVySXRlbUNvbGxpZGUuJGl0ZW0ucm93cztcclxuICAgIGlmICh0aGlzLnB1c2goZ3JpZHN0ZXJJdGVtQ29sbGlkZSwgdGhpcy5mcm9tU291dGgpKSB7XHJcbiAgICAgIGdyaWRzdGVySXRlbUNvbGxpZGUuc2V0U2l6ZSgpO1xyXG4gICAgICB0aGlzLmFkZFRvUHVzaGVkKGdyaWRzdGVySXRlbUNvbGxpZGUpO1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMucmVtb3ZlRnJvbVRlbXBQdXNoZWQoZ3JpZHN0ZXJJdGVtQ29sbGlkZSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHRyeUVhc3QoZ3JpZHN0ZXJJdGVtQ29sbGlkZTogR3JpZHN0ZXJJdGVtQ29tcG9uZW50SW50ZXJmYWNlLCBncmlkc3Rlckl0ZW06IEdyaWRzdGVySXRlbUNvbXBvbmVudEludGVyZmFjZSk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKCF0aGlzLmdyaWRzdGVyLiRvcHRpb25zLnB1c2hEaXJlY3Rpb25zLmVhc3QpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgdGhpcy5hZGRUb1RlbXBQdXNoZWQoZ3JpZHN0ZXJJdGVtQ29sbGlkZSk7XHJcbiAgICBncmlkc3Rlckl0ZW1Db2xsaWRlLiRpdGVtLnggPSBncmlkc3Rlckl0ZW0uJGl0ZW0ueCArIGdyaWRzdGVySXRlbS4kaXRlbS5jb2xzO1xyXG4gICAgaWYgKHRoaXMucHVzaChncmlkc3Rlckl0ZW1Db2xsaWRlLCB0aGlzLmZyb21XZXN0KSkge1xyXG4gICAgICBncmlkc3Rlckl0ZW1Db2xsaWRlLnNldFNpemUoKTtcclxuICAgICAgdGhpcy5hZGRUb1B1c2hlZChncmlkc3Rlckl0ZW1Db2xsaWRlKTtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnJlbW92ZUZyb21UZW1wUHVzaGVkKGdyaWRzdGVySXRlbUNvbGxpZGUpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB0cnlXZXN0KGdyaWRzdGVySXRlbUNvbGxpZGU6IEdyaWRzdGVySXRlbUNvbXBvbmVudEludGVyZmFjZSwgZ3JpZHN0ZXJJdGVtOiBHcmlkc3Rlckl0ZW1Db21wb25lbnRJbnRlcmZhY2UpOiBib29sZWFuIHtcclxuICAgIGlmICghdGhpcy5ncmlkc3Rlci4kb3B0aW9ucy5wdXNoRGlyZWN0aW9ucy53ZXN0KSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIHRoaXMuYWRkVG9UZW1wUHVzaGVkKGdyaWRzdGVySXRlbUNvbGxpZGUpO1xyXG4gICAgZ3JpZHN0ZXJJdGVtQ29sbGlkZS4kaXRlbS54ID0gZ3JpZHN0ZXJJdGVtLiRpdGVtLnggLSBncmlkc3Rlckl0ZW1Db2xsaWRlLiRpdGVtLmNvbHM7XHJcbiAgICBpZiAodGhpcy5wdXNoKGdyaWRzdGVySXRlbUNvbGxpZGUsIHRoaXMuZnJvbUVhc3QpKSB7XHJcbiAgICAgIGdyaWRzdGVySXRlbUNvbGxpZGUuc2V0U2l6ZSgpO1xyXG4gICAgICB0aGlzLmFkZFRvUHVzaGVkKGdyaWRzdGVySXRlbUNvbGxpZGUpO1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMucmVtb3ZlRnJvbVRlbXBQdXNoZWQoZ3JpZHN0ZXJJdGVtQ29sbGlkZSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGFkZFRvVGVtcFB1c2hlZChncmlkc3Rlckl0ZW06IEdyaWRzdGVySXRlbUNvbXBvbmVudEludGVyZmFjZSk6IHZvaWQge1xyXG4gICAgbGV0IGkgPSB0aGlzLnB1c2hlZEl0ZW1zVGVtcC5pbmRleE9mKGdyaWRzdGVySXRlbSk7XHJcbiAgICBpZiAoaSA9PT0gLTEpIHtcclxuICAgICAgaSA9IHRoaXMucHVzaGVkSXRlbXNUZW1wLnB1c2goZ3JpZHN0ZXJJdGVtKSAtIDE7XHJcbiAgICAgIHRoaXMucHVzaGVkSXRlbXNUZW1wUGF0aFtpXSA9IFtdO1xyXG4gICAgfVxyXG4gICAgdGhpcy5wdXNoZWRJdGVtc1RlbXBQYXRoW2ldLnB1c2goe3g6IGdyaWRzdGVySXRlbS4kaXRlbS54LCB5OiBncmlkc3Rlckl0ZW0uJGl0ZW0ueX0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZW1vdmVGcm9tVGVtcFB1c2hlZChncmlkc3Rlckl0ZW06IEdyaWRzdGVySXRlbUNvbXBvbmVudEludGVyZmFjZSk6IHZvaWQge1xyXG4gICAgY29uc3QgaSA9IHRoaXMucHVzaGVkSXRlbXNUZW1wLmluZGV4T2YoZ3JpZHN0ZXJJdGVtKTtcclxuICAgIGNvbnN0IHRlbXBQb3NpdGlvbiA9IHRoaXMucHVzaGVkSXRlbXNUZW1wUGF0aFtpXS5wb3AoKTtcclxuICAgIGlmICghdGVtcFBvc2l0aW9uKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGdyaWRzdGVySXRlbS4kaXRlbS54ID0gdGVtcFBvc2l0aW9uLng7XHJcbiAgICBncmlkc3Rlckl0ZW0uJGl0ZW0ueSA9IHRlbXBQb3NpdGlvbi55O1xyXG4gICAgZ3JpZHN0ZXJJdGVtLnNldFNpemUoKTtcclxuICAgIGlmICghdGhpcy5wdXNoZWRJdGVtc1RlbXBQYXRoW2ldLmxlbmd0aCkge1xyXG4gICAgICB0aGlzLnB1c2hlZEl0ZW1zVGVtcC5zcGxpY2UoaSwgMSk7XHJcbiAgICAgIHRoaXMucHVzaGVkSXRlbXNUZW1wUGF0aC5zcGxpY2UoaSwgMSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGFkZFRvUHVzaGVkKGdyaWRzdGVySXRlbTogR3JpZHN0ZXJJdGVtQ29tcG9uZW50SW50ZXJmYWNlKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5wdXNoZWRJdGVtcy5pbmRleE9mKGdyaWRzdGVySXRlbSkgPCAwKSB7XHJcbiAgICAgIHRoaXMucHVzaGVkSXRlbXMucHVzaChncmlkc3Rlckl0ZW0pO1xyXG4gICAgICB0aGlzLnB1c2hlZEl0ZW1zUGF0aC5wdXNoKFt7eDogZ3JpZHN0ZXJJdGVtLml0ZW0ueCB8fCAwLCB5OiBncmlkc3Rlckl0ZW0uaXRlbS55IHx8IDB9LFxyXG4gICAgICAgIHt4OiBncmlkc3Rlckl0ZW0uJGl0ZW0ueCwgeTogZ3JpZHN0ZXJJdGVtLiRpdGVtLnl9XSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBpID0gdGhpcy5wdXNoZWRJdGVtcy5pbmRleE9mKGdyaWRzdGVySXRlbSk7XHJcbiAgICAgIHRoaXMucHVzaGVkSXRlbXNQYXRoW2ldLnB1c2goe3g6IGdyaWRzdGVySXRlbS4kaXRlbS54LCB5OiBncmlkc3Rlckl0ZW0uJGl0ZW0ueX0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZW1vdmVGcm9tUHVzaGVkKGk6IG51bWJlcik6IHZvaWQge1xyXG4gICAgaWYgKGkgPiAtMSkge1xyXG4gICAgICB0aGlzLnB1c2hlZEl0ZW1zLnNwbGljZShpLCAxKTtcclxuICAgICAgdGhpcy5wdXNoZWRJdGVtc1BhdGguc3BsaWNlKGksIDEpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZW1vdmVGcm9tUHVzaGVkSXRlbShncmlkc3Rlckl0ZW06IEdyaWRzdGVySXRlbUNvbXBvbmVudEludGVyZmFjZSk6IHZvaWQge1xyXG4gICAgY29uc3QgaSA9IHRoaXMucHVzaGVkSXRlbXMuaW5kZXhPZihncmlkc3Rlckl0ZW0pO1xyXG4gICAgaWYgKGkgPiAtMSkge1xyXG4gICAgICB0aGlzLnB1c2hlZEl0ZW1zUGF0aFtpXS5wb3AoKTtcclxuICAgICAgaWYgKCF0aGlzLnB1c2hlZEl0ZW1zUGF0aC5sZW5ndGgpIHtcclxuICAgICAgICB0aGlzLnB1c2hlZEl0ZW1zLnNwbGljZShpLCAxKTtcclxuICAgICAgICB0aGlzLnB1c2hlZEl0ZW1zUGF0aC5zcGxpY2UoaSwgMSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2hlY2tQdXNoZWRJdGVtKHB1c2hlZEl0ZW06IEdyaWRzdGVySXRlbUNvbXBvbmVudEludGVyZmFjZSwgaTogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgICBjb25zdCBwYXRoID0gdGhpcy5wdXNoZWRJdGVtc1BhdGhbaV07XHJcbiAgICBsZXQgaiA9IHBhdGgubGVuZ3RoIC0gMjtcclxuICAgIGxldCBsYXN0UG9zaXRpb24sIHgsIHk7XHJcbiAgICBsZXQgY2hhbmdlID0gZmFsc2U7XHJcbiAgICBmb3IgKDsgaiA+IC0xOyBqLS0pIHtcclxuICAgICAgbGFzdFBvc2l0aW9uID0gcGF0aFtqXTtcclxuICAgICAgeCA9IHB1c2hlZEl0ZW0uJGl0ZW0ueDtcclxuICAgICAgeSA9IHB1c2hlZEl0ZW0uJGl0ZW0ueTtcclxuICAgICAgcHVzaGVkSXRlbS4kaXRlbS54ID0gbGFzdFBvc2l0aW9uLng7XHJcbiAgICAgIHB1c2hlZEl0ZW0uJGl0ZW0ueSA9IGxhc3RQb3NpdGlvbi55O1xyXG4gICAgICBpZiAoIXRoaXMuZ3JpZHN0ZXIuZmluZEl0ZW1XaXRoSXRlbShwdXNoZWRJdGVtLiRpdGVtKSkge1xyXG4gICAgICAgIHB1c2hlZEl0ZW0uc2V0U2l6ZSgpO1xyXG4gICAgICAgIHBhdGguc3BsaWNlKGogKyAxLCBwYXRoLmxlbmd0aCAtIGogLSAxKTtcclxuICAgICAgICBjaGFuZ2UgPSB0cnVlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHB1c2hlZEl0ZW0uJGl0ZW0ueCA9IHg7XHJcbiAgICAgICAgcHVzaGVkSXRlbS4kaXRlbS55ID0geTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKHBhdGgubGVuZ3RoIDwgMikge1xyXG4gICAgICB0aGlzLnJlbW92ZUZyb21QdXNoZWQoaSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gY2hhbmdlO1xyXG4gIH1cclxufVxyXG4iXX0=