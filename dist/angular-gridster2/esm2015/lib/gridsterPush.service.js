/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { GridsterItemComponentInterface } from './gridsterItemComponent.interface';
export class GridsterPush {
    /**
     * @param {?} gridsterItem
     */
    constructor(gridsterItem) {
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
    destroy() {
        delete this.gridster;
        delete this.gridsterItem;
    }
    /**
     * @param {?} direction
     * @param {?=} disable
     * @return {?}
     */
    pushItems(direction, disable) {
        if (this.gridster.$options.pushItems && !disable) {
            this.pushedItemsOrder = [];
            /** @type {?} */
            const pushed = this.push(this.gridsterItem, direction);
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
    }
    /**
     * @return {?}
     */
    restoreTempItems() {
        /** @type {?} */
        let i = this.pushedItemsTemp.length - 1;
        for (; i > -1; i--) {
            this.removeFromTempPushed(this.pushedItemsTemp[i]);
        }
    }
    /**
     * @return {?}
     */
    restoreItems() {
        /** @type {?} */
        let i = 0;
        /** @type {?} */
        const l = this.pushedItems.length;
        /** @type {?} */
        let pushedItem;
        for (; i < l; i++) {
            pushedItem = this.pushedItems[i];
            pushedItem.$item.x = pushedItem.item.x || 0;
            pushedItem.$item.y = pushedItem.item.y || 0;
            pushedItem.setSize();
        }
        this.pushedItems = [];
        this.pushedItemsPath = [];
    }
    /**
     * @return {?}
     */
    setPushedItems() {
        /** @type {?} */
        let i = 0;
        /** @type {?} */
        const l = this.pushedItems.length;
        /** @type {?} */
        let pushedItem;
        for (; i < l; i++) {
            pushedItem = this.pushedItems[i];
            pushedItem.checkItemChanges(pushedItem.$item, pushedItem.item);
        }
        this.pushedItems = [];
        this.pushedItemsPath = [];
    }
    /**
     * @return {?}
     */
    checkPushBack() {
        /** @type {?} */
        let i = this.pushedItems.length - 1;
        /** @type {?} */
        let change = false;
        for (; i > -1; i--) {
            if (this.checkPushedItem(this.pushedItems[i], i)) {
                change = true;
            }
        }
        if (change) {
            this.checkPushBack();
        }
    }
    /**
     * @private
     * @return {?}
     */
    generateTempRandomId() {
        return Math.random().toString(36).replace(/[^a-z]+/g, '').substr(2, 10);
    }
    /**
     * @private
     * @return {?}
     */
    cleanTempIds() {
        /** @type {?} */
        const allItemsWithIds = this.gridster.grid.filter((/**
         * @param {?} el
         * @return {?}
         */
        (el) => el['id']));
        allItemsWithIds.forEach((/**
         * @param {?} el
         * @return {?}
         */
        (el) => delete el['id']));
    }
    /**
     * @private
     * @param {?} gridsterItem
     * @param {?} direction
     * @return {?}
     */
    push(gridsterItem, direction) {
        if (this.gridster.checkGridCollision(gridsterItem.$item)) {
            return false;
        }
        if (direction === '') {
            return false;
        }
        /** @type {?} */
        const a = this.gridster.findItemsWithItem(gridsterItem.$item);
        /** @type {?} */
        let i = a.length - 1;
        /** @type {?} */
        let itemCollision;
        /** @type {?} */
        let makePush = true;
        /** @type {?} */
        const b = [];
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
            const compare = this.pushedItemsTemp.find((/**
             * @param {?} el
             * @return {?}
             */
            (el) => {
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
                let j = this.pushedItemsOrder.length - 1;
                for (; j >= i; j--) {
                    itemCollision = this.pushedItemsOrder[j];
                    this.pushedItemsOrder.pop();
                    this.removeFromTempPushed(itemCollision);
                    this.removeFromPushedItem(itemCollision);
                }
            }
        }
        return makePush;
    }
    /**
     * @private
     * @param {?} gridsterItemCollide
     * @param {?} gridsterItem
     * @return {?}
     */
    trySouth(gridsterItemCollide, gridsterItem) {
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
    }
    /**
     * @private
     * @param {?} gridsterItemCollide
     * @param {?} gridsterItem
     * @return {?}
     */
    tryNorth(gridsterItemCollide, gridsterItem) {
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
    }
    /**
     * @private
     * @param {?} gridsterItemCollide
     * @param {?} gridsterItem
     * @return {?}
     */
    tryEast(gridsterItemCollide, gridsterItem) {
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
    }
    /**
     * @private
     * @param {?} gridsterItemCollide
     * @param {?} gridsterItem
     * @return {?}
     */
    tryWest(gridsterItemCollide, gridsterItem) {
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
    }
    /**
     * @private
     * @param {?} gridsterItem
     * @return {?}
     */
    addToTempPushed(gridsterItem) {
        /** @type {?} */
        let i = this.pushedItemsTemp.indexOf(gridsterItem);
        if (i === -1) {
            i = this.pushedItemsTemp.push(gridsterItem) - 1;
            this.pushedItemsTempPath[i] = [];
        }
        this.pushedItemsTempPath[i].push({ x: gridsterItem.$item.x, y: gridsterItem.$item.y });
    }
    /**
     * @private
     * @param {?} gridsterItem
     * @return {?}
     */
    removeFromTempPushed(gridsterItem) {
        /** @type {?} */
        const i = this.pushedItemsTemp.indexOf(gridsterItem);
        /** @type {?} */
        const tempPosition = this.pushedItemsTempPath[i].pop();
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
    }
    /**
     * @private
     * @param {?} gridsterItem
     * @return {?}
     */
    addToPushed(gridsterItem) {
        if (this.pushedItems.indexOf(gridsterItem) < 0) {
            this.pushedItems.push(gridsterItem);
            this.pushedItemsPath.push([{ x: gridsterItem.item.x || 0, y: gridsterItem.item.y || 0 },
                { x: gridsterItem.$item.x, y: gridsterItem.$item.y }]);
        }
        else {
            /** @type {?} */
            const i = this.pushedItems.indexOf(gridsterItem);
            this.pushedItemsPath[i].push({ x: gridsterItem.$item.x, y: gridsterItem.$item.y });
        }
    }
    /**
     * @private
     * @param {?} i
     * @return {?}
     */
    removeFromPushed(i) {
        if (i > -1) {
            this.pushedItems.splice(i, 1);
            this.pushedItemsPath.splice(i, 1);
        }
    }
    /**
     * @private
     * @param {?} gridsterItem
     * @return {?}
     */
    removeFromPushedItem(gridsterItem) {
        /** @type {?} */
        const i = this.pushedItems.indexOf(gridsterItem);
        if (i > -1) {
            this.pushedItemsPath[i].pop();
            if (!this.pushedItemsPath.length) {
                this.pushedItems.splice(i, 1);
                this.pushedItemsPath.splice(i, 1);
            }
        }
    }
    /**
     * @private
     * @param {?} pushedItem
     * @param {?} i
     * @return {?}
     */
    checkPushedItem(pushedItem, i) {
        /** @type {?} */
        const path = this.pushedItemsPath[i];
        /** @type {?} */
        let j = path.length - 2;
        /** @type {?} */
        let lastPosition;
        /** @type {?} */
        let x;
        /** @type {?} */
        let y;
        /** @type {?} */
        let change = false;
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
    }
}
GridsterPush.decorators = [
    { type: Injectable }
];
/** @nocollapse */
GridsterPush.ctorParameters = () => [
    { type: GridsterItemComponentInterface }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZHN0ZXJQdXNoLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWdyaWRzdGVyMi8iLCJzb3VyY2VzIjpbImxpYi9ncmlkc3RlclB1c2guc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUMsOEJBQThCLEVBQUMsTUFBTSxtQ0FBbUMsQ0FBQztBQUlqRixNQUFNLE9BQU8sWUFBWTs7OztJQW9CdkIsWUFBWSxZQUE0QztRQUN0RCxJQUFJLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsZUFBZSxHQUFHLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsbUJBQW1CLEdBQUcsRUFBRSxDQUFDO1FBQzlCLElBQUksQ0FBQyxlQUFlLEdBQUcsRUFBRSxDQUFDO1FBQzFCLFlBQVksQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztRQUNqRCxJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQztRQUNqQyxJQUFJLENBQUMsUUFBUSxHQUFHLFlBQVksQ0FBQyxRQUFRLENBQUM7UUFDdEMsSUFBSSxDQUFDLFVBQVUsR0FBRztZQUNoQixRQUFRLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ3BFLFFBQVEsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDcEUsU0FBUyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUNy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SSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDbkIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzFCO1FBQ0QsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQzs7O1lBbFVGLFVBQVU7Ozs7WUFISCw4QkFBOEI7Ozs7SUFLcEMsaUNBQXlCOztJQUN6QixpQ0FBeUI7O0lBQ3pCLGdDQUF3Qjs7SUFDeEIsZ0NBQXdCOzs7OztJQUN4QixtQ0FBMkQ7Ozs7O0lBQzNELHVDQUErRDs7Ozs7SUFDL0QsMkNBQW9FOzs7OztJQUNwRSx1Q0FBZ0U7Ozs7O0lBQ2hFLG9DQUFxRDs7Ozs7SUFDckQsZ0NBQTZDOzs7OztJQUM3Qyx3Q0FBZ0U7Ozs7O0lBQ2hFLGtDQU1FIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7R3JpZHN0ZXJJdGVtQ29tcG9uZW50SW50ZXJmYWNlfSBmcm9tICcuL2dyaWRzdGVySXRlbUNvbXBvbmVudC5pbnRlcmZhY2UnO1xyXG5pbXBvcnQge0dyaWRzdGVyQ29tcG9uZW50SW50ZXJmYWNlfSBmcm9tICcuL2dyaWRzdGVyLmludGVyZmFjZSc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBHcmlkc3RlclB1c2gge1xyXG4gIHB1YmxpYyBmcm9tU291dGg6IHN0cmluZztcclxuICBwdWJsaWMgZnJvbU5vcnRoOiBzdHJpbmc7XHJcbiAgcHVibGljIGZyb21FYXN0OiBzdHJpbmc7XHJcbiAgcHVibGljIGZyb21XZXN0OiBzdHJpbmc7XHJcbiAgcHJpdmF0ZSBwdXNoZWRJdGVtczogQXJyYXk8R3JpZHN0ZXJJdGVtQ29tcG9uZW50SW50ZXJmYWNlPjtcclxuICBwcml2YXRlIHB1c2hlZEl0ZW1zVGVtcDogQXJyYXk8R3JpZHN0ZXJJdGVtQ29tcG9uZW50SW50ZXJmYWNlPjtcclxuICBwcml2YXRlIHB1c2hlZEl0ZW1zVGVtcFBhdGg6IEFycmF5PEFycmF5PHsgeDogbnVtYmVyLCB5OiBudW1iZXIgfT4+O1xyXG4gIHByaXZhdGUgcHVzaGVkSXRlbXNQYXRoOiBBcnJheTxBcnJheTx7IHg6IG51bWJlciwgeTogbnVtYmVyIH0+PjtcclxuICBwcml2YXRlIGdyaWRzdGVySXRlbTogR3JpZHN0ZXJJdGVtQ29tcG9uZW50SW50ZXJmYWNlO1xyXG4gIHByaXZhdGUgZ3JpZHN0ZXI6IEdyaWRzdGVyQ29tcG9uZW50SW50ZXJmYWNlO1xyXG4gIHByaXZhdGUgcHVzaGVkSXRlbXNPcmRlcjogQXJyYXk8R3JpZHN0ZXJJdGVtQ29tcG9uZW50SW50ZXJmYWNlPjtcclxuICBwcml2YXRlIHRyeVBhdHRlcm46IHtcclxuICAgIGZyb21FYXN0OiBBcnJheTxGdW5jdGlvbj4sXHJcbiAgICBmcm9tV2VzdDogQXJyYXk8RnVuY3Rpb24+LFxyXG4gICAgZnJvbU5vcnRoOiBBcnJheTxGdW5jdGlvbj4sXHJcbiAgICBmcm9tU291dGg6IEFycmF5PEZ1bmN0aW9uPixcclxuICAgIFtrZXk6IHN0cmluZ106IEFycmF5PEZ1bmN0aW9uPlxyXG4gIH07XHJcblxyXG4gIGNvbnN0cnVjdG9yKGdyaWRzdGVySXRlbTogR3JpZHN0ZXJJdGVtQ29tcG9uZW50SW50ZXJmYWNlKSB7XHJcbiAgICB0aGlzLnB1c2hlZEl0ZW1zID0gW107XHJcbiAgICB0aGlzLnB1c2hlZEl0ZW1zVGVtcCA9IFtdO1xyXG4gICAgdGhpcy5wdXNoZWRJdGVtc1RlbXBQYXRoID0gW107XHJcbiAgICB0aGlzLnB1c2hlZEl0ZW1zUGF0aCA9IFtdO1xyXG4gICAgZ3JpZHN0ZXJJdGVtWydpZCddID0gdGhpcy5nZW5lcmF0ZVRlbXBSYW5kb21JZCgpO1xyXG4gICAgdGhpcy5ncmlkc3Rlckl0ZW0gPSBncmlkc3Rlckl0ZW07XHJcbiAgICB0aGlzLmdyaWRzdGVyID0gZ3JpZHN0ZXJJdGVtLmdyaWRzdGVyO1xyXG4gICAgdGhpcy50cnlQYXR0ZXJuID0ge1xyXG4gICAgICBmcm9tRWFzdDogW3RoaXMudHJ5V2VzdCwgdGhpcy50cnlTb3V0aCwgdGhpcy50cnlOb3J0aCwgdGhpcy50cnlFYXN0XSxcclxuICAgICAgZnJvbVdlc3Q6IFt0aGlzLnRyeUVhc3QsIHRoaXMudHJ5U291dGgsIHRoaXMudHJ5Tm9ydGgsIHRoaXMudHJ5V2VzdF0sXHJcbiAgICAgIGZyb21Ob3J0aDogW3RoaXMudHJ5U291dGgsIHRoaXMudHJ5RWFzdCwgdGhpcy50cnlXZXN0LCB0aGlzLnRyeU5vcnRoXSxcclxuICAgICAgZnJvbVNvdXRoOiBbdGhpcy50cnlOb3J0aCwgdGhpcy50cnlFYXN0LCB0aGlzLnRyeVdlc3QsIHRoaXMudHJ5U291dGhdXHJcbiAgICB9O1xyXG4gICAgdGhpcy5mcm9tU291dGggPSAnZnJvbVNvdXRoJztcclxuICAgIHRoaXMuZnJvbU5vcnRoID0gJ2Zyb21Ob3J0aCc7XHJcbiAgICB0aGlzLmZyb21FYXN0ID0gJ2Zyb21FYXN0JztcclxuICAgIHRoaXMuZnJvbVdlc3QgPSAnZnJvbVdlc3QnO1xyXG4gIH1cclxuXHJcbiAgZGVzdHJveSgpOiB2b2lkIHtcclxuICAgIGRlbGV0ZSB0aGlzLmdyaWRzdGVyO1xyXG4gICAgZGVsZXRlIHRoaXMuZ3JpZHN0ZXJJdGVtO1xyXG4gIH1cclxuXHJcbiAgcHVzaEl0ZW1zKGRpcmVjdGlvbjogc3RyaW5nLCBkaXNhYmxlPzogYm9vbGVhbik6IGJvb2xlYW4ge1xyXG4gICAgaWYgKHRoaXMuZ3JpZHN0ZXIuJG9wdGlvbnMucHVzaEl0ZW1zICYmICFkaXNhYmxlKSB7XHJcbiAgICAgIHRoaXMucHVzaGVkSXRlbXNPcmRlciA9IFtdO1xyXG4gICAgICBjb25zdCBwdXNoZWQgPSB0aGlzLnB1c2godGhpcy5ncmlkc3Rlckl0ZW0sIGRpcmVjdGlvbik7XHJcbiAgICAgIGlmICghcHVzaGVkKSB7XHJcbiAgICAgICAgdGhpcy5yZXN0b3JlVGVtcEl0ZW1zKCk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5wdXNoZWRJdGVtc09yZGVyID0gW107XHJcbiAgICAgIHRoaXMucHVzaGVkSXRlbXNUZW1wID0gW107XHJcbiAgICAgIHRoaXMucHVzaGVkSXRlbXNUZW1wUGF0aCA9IFtdO1xyXG4gICAgICB0aGlzLmNsZWFuVGVtcElkcygpO1xyXG4gICAgICByZXR1cm4gcHVzaGVkO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVzdG9yZVRlbXBJdGVtcygpOiB2b2lkIHtcclxuICAgIGxldCBpID0gdGhpcy5wdXNoZWRJdGVtc1RlbXAubGVuZ3RoIC0gMTtcclxuICAgIGZvciAoOyBpID4gLTE7IGktLSkge1xyXG4gICAgICB0aGlzLnJlbW92ZUZyb21UZW1wUHVzaGVkKHRoaXMucHVzaGVkSXRlbXNUZW1wW2ldKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlc3RvcmVJdGVtcygpOiB2b2lkIHtcclxuICAgIGxldCBpID0gMDtcclxuICAgIGNvbnN0IGw6IG51bWJlciA9IHRoaXMucHVzaGVkSXRlbXMubGVuZ3RoO1xyXG4gICAgbGV0IHB1c2hlZEl0ZW06IEdyaWRzdGVySXRlbUNvbXBvbmVudEludGVyZmFjZTtcclxuICAgIGZvciAoOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgIHB1c2hlZEl0ZW0gPSB0aGlzLnB1c2hlZEl0ZW1zW2ldO1xyXG4gICAgICBwdXNoZWRJdGVtLiRpdGVtLnggPSBwdXNoZWRJdGVtLml0ZW0ueCB8fCAwO1xyXG4gICAgICBwdXNoZWRJdGVtLiRpdGVtLnkgPSBwdXNoZWRJdGVtLml0ZW0ueSB8fCAwO1xyXG4gICAgICBwdXNoZWRJdGVtLnNldFNpemUoKTtcclxuICAgIH1cclxuICAgIHRoaXMucHVzaGVkSXRlbXMgPSBbXTtcclxuICAgIHRoaXMucHVzaGVkSXRlbXNQYXRoID0gW107XHJcbiAgfVxyXG5cclxuICBzZXRQdXNoZWRJdGVtcygpIHtcclxuICAgIGxldCBpID0gMDtcclxuICAgIGNvbnN0IGw6IG51bWJlciA9IHRoaXMucHVzaGVkSXRlbXMubGVuZ3RoO1xyXG4gICAgbGV0IHB1c2hlZEl0ZW06IEdyaWRzdGVySXRlbUNvbXBvbmVudEludGVyZmFjZTtcclxuICAgIGZvciAoOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgIHB1c2hlZEl0ZW0gPSB0aGlzLnB1c2hlZEl0ZW1zW2ldO1xyXG4gICAgICBwdXNoZWRJdGVtLmNoZWNrSXRlbUNoYW5nZXMocHVzaGVkSXRlbS4kaXRlbSwgcHVzaGVkSXRlbS5pdGVtKTtcclxuICAgIH1cclxuICAgIHRoaXMucHVzaGVkSXRlbXMgPSBbXTtcclxuICAgIHRoaXMucHVzaGVkSXRlbXNQYXRoID0gW107XHJcbiAgfVxyXG5cclxuICBjaGVja1B1c2hCYWNrKCk6IHZvaWQge1xyXG4gICAgbGV0IGk6IG51bWJlciA9IHRoaXMucHVzaGVkSXRlbXMubGVuZ3RoIC0gMTtcclxuICAgIGxldCBjaGFuZ2UgPSBmYWxzZTtcclxuICAgIGZvciAoOyBpID4gLTE7IGktLSkge1xyXG4gICAgICBpZiAodGhpcy5jaGVja1B1c2hlZEl0ZW0odGhpcy5wdXNoZWRJdGVtc1tpXSwgaSkpIHtcclxuICAgICAgICBjaGFuZ2UgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoY2hhbmdlKSB7XHJcbiAgICAgIHRoaXMuY2hlY2tQdXNoQmFjaygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZW5lcmF0ZVRlbXBSYW5kb21JZCgpIDogc3RyaW5nIHtcclxuICAgIHJldHVybiBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5yZXBsYWNlKC9bXmEtel0rL2csICcnKS5zdWJzdHIoMiwgMTApO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjbGVhblRlbXBJZHMoKXtcclxuICAgIGNvbnN0IGFsbEl0ZW1zV2l0aElkcyA9IHRoaXMuZ3JpZHN0ZXIuZ3JpZC5maWx0ZXIoKGVsOkdyaWRzdGVySXRlbUNvbXBvbmVudEludGVyZmFjZSkgPT4gZWxbJ2lkJ10pO1xyXG4gICAgYWxsSXRlbXNXaXRoSWRzLmZvckVhY2goKGVsOiBHcmlkc3Rlckl0ZW1Db21wb25lbnRJbnRlcmZhY2UpID0+IGRlbGV0ZSBlbFsnaWQnXSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHB1c2goZ3JpZHN0ZXJJdGVtOiBHcmlkc3Rlckl0ZW1Db21wb25lbnRJbnRlcmZhY2UsIGRpcmVjdGlvbjogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICBpZiAodGhpcy5ncmlkc3Rlci5jaGVja0dyaWRDb2xsaXNpb24oZ3JpZHN0ZXJJdGVtLiRpdGVtKSkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBpZiAoZGlyZWN0aW9uID09PSAnJykge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBjb25zdCBhOiBBcnJheTxHcmlkc3Rlckl0ZW1Db21wb25lbnRJbnRlcmZhY2U+ID0gdGhpcy5ncmlkc3Rlci5maW5kSXRlbXNXaXRoSXRlbShncmlkc3Rlckl0ZW0uJGl0ZW0pO1xyXG4gICAgbGV0IGkgPSBhLmxlbmd0aCAtIDEsIGl0ZW1Db2xsaXNpb246IEdyaWRzdGVySXRlbUNvbXBvbmVudEludGVyZmFjZTtcclxuICAgIGxldCBtYWtlUHVzaCA9IHRydWU7XHJcbiAgICBjb25zdCBiOiBBcnJheTxHcmlkc3Rlckl0ZW1Db21wb25lbnRJbnRlcmZhY2U+ID0gW107XHJcbiAgICBmb3IgKDsgaSA+IC0xOyBpLS0pIHtcclxuICAgICAgaXRlbUNvbGxpc2lvbiA9IGFbaV07XHJcbiAgICAgIGlmICghaXRlbUNvbGxpc2lvblsnaWQnXSkge1xyXG4gICAgICAgIGl0ZW1Db2xsaXNpb25bJ2lkJ10gPSB0aGlzLmdlbmVyYXRlVGVtcFJhbmRvbUlkKCk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGl0ZW1Db2xsaXNpb24gPT09IHRoaXMuZ3JpZHN0ZXJJdGVtKSB7XHJcbiAgICAgICAgbWFrZVB1c2ggPSBmYWxzZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBpZiAoIWl0ZW1Db2xsaXNpb24uY2FuQmVEcmFnZ2VkKCkpIHtcclxuICAgICAgICBtYWtlUHVzaCA9IGZhbHNlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IGNvbXBhcmUgPSB0aGlzLnB1c2hlZEl0ZW1zVGVtcC5maW5kKChlbDogR3JpZHN0ZXJJdGVtQ29tcG9uZW50SW50ZXJmYWNlKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGVsWydpZCddID09PSBpdGVtQ29sbGlzaW9uWydpZCddO1xyXG4gICAgICB9KTtcclxuICAgICAgaWYgKGNvbXBhcmUpIHtcclxuICAgICAgICBtYWtlUHVzaCA9IGZhbHNlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh0aGlzLnRyeVBhdHRlcm5bZGlyZWN0aW9uXVswXS5jYWxsKHRoaXMsIGl0ZW1Db2xsaXNpb24sIGdyaWRzdGVySXRlbSkpIHtcclxuICAgICAgICB0aGlzLnB1c2hlZEl0ZW1zT3JkZXIucHVzaChpdGVtQ29sbGlzaW9uKTtcclxuICAgICAgICBiLnB1c2goaXRlbUNvbGxpc2lvbik7XHJcbiAgICAgIH0gZWxzZSBpZiAodGhpcy50cnlQYXR0ZXJuW2RpcmVjdGlvbl1bMV0uY2FsbCh0aGlzLCBpdGVtQ29sbGlzaW9uLCBncmlkc3Rlckl0ZW0pKSB7XHJcbiAgICAgICAgdGhpcy5wdXNoZWRJdGVtc09yZGVyLnB1c2goaXRlbUNvbGxpc2lvbik7XHJcbiAgICAgICAgYi5wdXNoKGl0ZW1Db2xsaXNpb24pO1xyXG4gICAgICB9IGVsc2UgaWYgKHRoaXMudHJ5UGF0dGVybltkaXJlY3Rpb25dWzJdLmNhbGwodGhpcywgaXRlbUNvbGxpc2lvbiwgZ3JpZHN0ZXJJdGVtKSkge1xyXG4gICAgICAgIHRoaXMucHVzaGVkSXRlbXNPcmRlci5wdXNoKGl0ZW1Db2xsaXNpb24pO1xyXG4gICAgICAgIGIucHVzaChpdGVtQ29sbGlzaW9uKTtcclxuICAgICAgfSBlbHNlIGlmICh0aGlzLnRyeVBhdHRlcm5bZGlyZWN0aW9uXVszXS5jYWxsKHRoaXMsIGl0ZW1Db2xsaXNpb24sIGdyaWRzdGVySXRlbSkpIHtcclxuICAgICAgICB0aGlzLnB1c2hlZEl0ZW1zT3JkZXIucHVzaChpdGVtQ29sbGlzaW9uKTtcclxuICAgICAgICBiLnB1c2goaXRlbUNvbGxpc2lvbik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbWFrZVB1c2ggPSBmYWxzZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKCFtYWtlUHVzaCkge1xyXG4gICAgICBpID0gdGhpcy5wdXNoZWRJdGVtc09yZGVyLmxhc3RJbmRleE9mKGJbMF0pO1xyXG4gICAgICBpZiAoaSA+IC0xKSB7XHJcbiAgICAgICAgbGV0IGogPSB0aGlzLnB1c2hlZEl0ZW1zT3JkZXIubGVuZ3RoIC0gMTtcclxuICAgICAgICBmb3IgKDsgaiA+PSBpOyBqLS0pIHtcclxuICAgICAgICAgIGl0ZW1Db2xsaXNpb24gPSB0aGlzLnB1c2hlZEl0ZW1zT3JkZXJbal07XHJcbiAgICAgICAgICB0aGlzLnB1c2hlZEl0ZW1zT3JkZXIucG9wKCk7XHJcbiAgICAgICAgICB0aGlzLnJlbW92ZUZyb21UZW1wUHVzaGVkKGl0ZW1Db2xsaXNpb24pO1xyXG4gICAgICAgICAgdGhpcy5yZW1vdmVGcm9tUHVzaGVkSXRlbShpdGVtQ29sbGlzaW9uKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBtYWtlUHVzaDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgdHJ5U291dGgoZ3JpZHN0ZXJJdGVtQ29sbGlkZTogR3JpZHN0ZXJJdGVtQ29tcG9uZW50SW50ZXJmYWNlLCBncmlkc3Rlckl0ZW06IEdyaWRzdGVySXRlbUNvbXBvbmVudEludGVyZmFjZSk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKCF0aGlzLmdyaWRzdGVyLiRvcHRpb25zLnB1c2hEaXJlY3Rpb25zLnNvdXRoKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIHRoaXMuYWRkVG9UZW1wUHVzaGVkKGdyaWRzdGVySXRlbUNvbGxpZGUpO1xyXG4gICAgZ3JpZHN0ZXJJdGVtQ29sbGlkZS4kaXRlbS55ID0gZ3JpZHN0ZXJJdGVtLiRpdGVtLnkgKyBncmlkc3Rlckl0ZW0uJGl0ZW0ucm93cztcclxuICAgIGlmICh0aGlzLnB1c2goZ3JpZHN0ZXJJdGVtQ29sbGlkZSwgdGhpcy5mcm9tTm9ydGgpKSB7XHJcbiAgICAgIGdyaWRzdGVySXRlbUNvbGxpZGUuc2V0U2l6ZSgpO1xyXG4gICAgICB0aGlzLmFkZFRvUHVzaGVkKGdyaWRzdGVySXRlbUNvbGxpZGUpO1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMucmVtb3ZlRnJvbVRlbXBQdXNoZWQoZ3JpZHN0ZXJJdGVtQ29sbGlkZSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHRyeU5vcnRoKGdyaWRzdGVySXRlbUNvbGxpZGU6IEdyaWRzdGVySXRlbUNvbXBvbmVudEludGVyZmFjZSwgZ3JpZHN0ZXJJdGVtOiBHcmlkc3Rlckl0ZW1Db21wb25lbnRJbnRlcmZhY2UpOiBib29sZWFuIHtcclxuICAgIGlmICghdGhpcy5ncmlkc3Rlci4kb3B0aW9ucy5wdXNoRGlyZWN0aW9ucy5ub3J0aCkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICB0aGlzLmFkZFRvVGVtcFB1c2hlZChncmlkc3Rlckl0ZW1Db2xsaWRlKTtcclxuICAgIGdyaWRzdGVySXRlbUNvbGxpZGUuJGl0ZW0ueSA9IGdyaWRzdGVySXRlbS4kaXRlbS55IC0gZ3JpZHN0ZXJJdGVtQ29sbGlkZS4kaXRlbS5yb3dzO1xyXG4gICAgaWYgKHRoaXMucHVzaChncmlkc3Rlckl0ZW1Db2xsaWRlLCB0aGlzLmZyb21Tb3V0aCkpIHtcclxuICAgICAgZ3JpZHN0ZXJJdGVtQ29sbGlkZS5zZXRTaXplKCk7XHJcbiAgICAgIHRoaXMuYWRkVG9QdXNoZWQoZ3JpZHN0ZXJJdGVtQ29sbGlkZSk7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5yZW1vdmVGcm9tVGVtcFB1c2hlZChncmlkc3Rlckl0ZW1Db2xsaWRlKTtcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgdHJ5RWFzdChncmlkc3Rlckl0ZW1Db2xsaWRlOiBHcmlkc3Rlckl0ZW1Db21wb25lbnRJbnRlcmZhY2UsIGdyaWRzdGVySXRlbTogR3JpZHN0ZXJJdGVtQ29tcG9uZW50SW50ZXJmYWNlKTogYm9vbGVhbiB7XHJcbiAgICBpZiAoIXRoaXMuZ3JpZHN0ZXIuJG9wdGlvbnMucHVzaERpcmVjdGlvbnMuZWFzdCkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICB0aGlzLmFkZFRvVGVtcFB1c2hlZChncmlkc3Rlckl0ZW1Db2xsaWRlKTtcclxuICAgIGdyaWRzdGVySXRlbUNvbGxpZGUuJGl0ZW0ueCA9IGdyaWRzdGVySXRlbS4kaXRlbS54ICsgZ3JpZHN0ZXJJdGVtLiRpdGVtLmNvbHM7XHJcbiAgICBpZiAodGhpcy5wdXNoKGdyaWRzdGVySXRlbUNvbGxpZGUsIHRoaXMuZnJvbVdlc3QpKSB7XHJcbiAgICAgIGdyaWRzdGVySXRlbUNvbGxpZGUuc2V0U2l6ZSgpO1xyXG4gICAgICB0aGlzLmFkZFRvUHVzaGVkKGdyaWRzdGVySXRlbUNvbGxpZGUpO1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMucmVtb3ZlRnJvbVRlbXBQdXNoZWQoZ3JpZHN0ZXJJdGVtQ29sbGlkZSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHRyeVdlc3QoZ3JpZHN0ZXJJdGVtQ29sbGlkZTogR3JpZHN0ZXJJdGVtQ29tcG9uZW50SW50ZXJmYWNlLCBncmlkc3Rlckl0ZW06IEdyaWRzdGVySXRlbUNvbXBvbmVudEludGVyZmFjZSk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKCF0aGlzLmdyaWRzdGVyLiRvcHRpb25zLnB1c2hEaXJlY3Rpb25zLndlc3QpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgdGhpcy5hZGRUb1RlbXBQdXNoZWQoZ3JpZHN0ZXJJdGVtQ29sbGlkZSk7XHJcbiAgICBncmlkc3Rlckl0ZW1Db2xsaWRlLiRpdGVtLnggPSBncmlkc3Rlckl0ZW0uJGl0ZW0ueCAtIGdyaWRzdGVySXRlbUNvbGxpZGUuJGl0ZW0uY29scztcclxuICAgIGlmICh0aGlzLnB1c2goZ3JpZHN0ZXJJdGVtQ29sbGlkZSwgdGhpcy5mcm9tRWFzdCkpIHtcclxuICAgICAgZ3JpZHN0ZXJJdGVtQ29sbGlkZS5zZXRTaXplKCk7XHJcbiAgICAgIHRoaXMuYWRkVG9QdXNoZWQoZ3JpZHN0ZXJJdGVtQ29sbGlkZSk7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5yZW1vdmVGcm9tVGVtcFB1c2hlZChncmlkc3Rlckl0ZW1Db2xsaWRlKTtcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgYWRkVG9UZW1wUHVzaGVkKGdyaWRzdGVySXRlbTogR3JpZHN0ZXJJdGVtQ29tcG9uZW50SW50ZXJmYWNlKTogdm9pZCB7XHJcbiAgICBsZXQgaSA9IHRoaXMucHVzaGVkSXRlbXNUZW1wLmluZGV4T2YoZ3JpZHN0ZXJJdGVtKTtcclxuICAgIGlmIChpID09PSAtMSkge1xyXG4gICAgICBpID0gdGhpcy5wdXNoZWRJdGVtc1RlbXAucHVzaChncmlkc3Rlckl0ZW0pIC0gMTtcclxuICAgICAgdGhpcy5wdXNoZWRJdGVtc1RlbXBQYXRoW2ldID0gW107XHJcbiAgICB9XHJcbiAgICB0aGlzLnB1c2hlZEl0ZW1zVGVtcFBhdGhbaV0ucHVzaCh7eDogZ3JpZHN0ZXJJdGVtLiRpdGVtLngsIHk6IGdyaWRzdGVySXRlbS4kaXRlbS55fSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlbW92ZUZyb21UZW1wUHVzaGVkKGdyaWRzdGVySXRlbTogR3JpZHN0ZXJJdGVtQ29tcG9uZW50SW50ZXJmYWNlKTogdm9pZCB7XHJcbiAgICBjb25zdCBpID0gdGhpcy5wdXNoZWRJdGVtc1RlbXAuaW5kZXhPZihncmlkc3Rlckl0ZW0pO1xyXG4gICAgY29uc3QgdGVtcFBvc2l0aW9uID0gdGhpcy5wdXNoZWRJdGVtc1RlbXBQYXRoW2ldLnBvcCgpO1xyXG4gICAgaWYgKCF0ZW1wUG9zaXRpb24pIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgZ3JpZHN0ZXJJdGVtLiRpdGVtLnggPSB0ZW1wUG9zaXRpb24ueDtcclxuICAgIGdyaWRzdGVySXRlbS4kaXRlbS55ID0gdGVtcFBvc2l0aW9uLnk7XHJcbiAgICBncmlkc3Rlckl0ZW0uc2V0U2l6ZSgpO1xyXG4gICAgaWYgKCF0aGlzLnB1c2hlZEl0ZW1zVGVtcFBhdGhbaV0ubGVuZ3RoKSB7XHJcbiAgICAgIHRoaXMucHVzaGVkSXRlbXNUZW1wLnNwbGljZShpLCAxKTtcclxuICAgICAgdGhpcy5wdXNoZWRJdGVtc1RlbXBQYXRoLnNwbGljZShpLCAxKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgYWRkVG9QdXNoZWQoZ3JpZHN0ZXJJdGVtOiBHcmlkc3Rlckl0ZW1Db21wb25lbnRJbnRlcmZhY2UpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnB1c2hlZEl0ZW1zLmluZGV4T2YoZ3JpZHN0ZXJJdGVtKSA8IDApIHtcclxuICAgICAgdGhpcy5wdXNoZWRJdGVtcy5wdXNoKGdyaWRzdGVySXRlbSk7XHJcbiAgICAgIHRoaXMucHVzaGVkSXRlbXNQYXRoLnB1c2goW3t4OiBncmlkc3Rlckl0ZW0uaXRlbS54IHx8IDAsIHk6IGdyaWRzdGVySXRlbS5pdGVtLnkgfHwgMH0sXHJcbiAgICAgICAge3g6IGdyaWRzdGVySXRlbS4kaXRlbS54LCB5OiBncmlkc3Rlckl0ZW0uJGl0ZW0ueX1dKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IGkgPSB0aGlzLnB1c2hlZEl0ZW1zLmluZGV4T2YoZ3JpZHN0ZXJJdGVtKTtcclxuICAgICAgdGhpcy5wdXNoZWRJdGVtc1BhdGhbaV0ucHVzaCh7eDogZ3JpZHN0ZXJJdGVtLiRpdGVtLngsIHk6IGdyaWRzdGVySXRlbS4kaXRlbS55fSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlbW92ZUZyb21QdXNoZWQoaTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICBpZiAoaSA+IC0xKSB7XHJcbiAgICAgIHRoaXMucHVzaGVkSXRlbXMuc3BsaWNlKGksIDEpO1xyXG4gICAgICB0aGlzLnB1c2hlZEl0ZW1zUGF0aC5zcGxpY2UoaSwgMSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlbW92ZUZyb21QdXNoZWRJdGVtKGdyaWRzdGVySXRlbTogR3JpZHN0ZXJJdGVtQ29tcG9uZW50SW50ZXJmYWNlKTogdm9pZCB7XHJcbiAgICBjb25zdCBpID0gdGhpcy5wdXNoZWRJdGVtcy5pbmRleE9mKGdyaWRzdGVySXRlbSk7XHJcbiAgICBpZiAoaSA+IC0xKSB7XHJcbiAgICAgIHRoaXMucHVzaGVkSXRlbXNQYXRoW2ldLnBvcCgpO1xyXG4gICAgICBpZiAoIXRoaXMucHVzaGVkSXRlbXNQYXRoLmxlbmd0aCkge1xyXG4gICAgICAgIHRoaXMucHVzaGVkSXRlbXMuc3BsaWNlKGksIDEpO1xyXG4gICAgICAgIHRoaXMucHVzaGVkSXRlbXNQYXRoLnNwbGljZShpLCAxKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjaGVja1B1c2hlZEl0ZW0ocHVzaGVkSXRlbTogR3JpZHN0ZXJJdGVtQ29tcG9uZW50SW50ZXJmYWNlLCBpOiBudW1iZXIpOiBib29sZWFuIHtcclxuICAgIGNvbnN0IHBhdGggPSB0aGlzLnB1c2hlZEl0ZW1zUGF0aFtpXTtcclxuICAgIGxldCBqID0gcGF0aC5sZW5ndGggLSAyO1xyXG4gICAgbGV0IGxhc3RQb3NpdGlvbiwgeCwgeTtcclxuICAgIGxldCBjaGFuZ2UgPSBmYWxzZTtcclxuICAgIGZvciAoOyBqID4gLTE7IGotLSkge1xyXG4gICAgICBsYXN0UG9zaXRpb24gPSBwYXRoW2pdO1xyXG4gICAgICB4ID0gcHVzaGVkSXRlbS4kaXRlbS54O1xyXG4gICAgICB5ID0gcHVzaGVkSXRlbS4kaXRlbS55O1xyXG4gICAgICBwdXNoZWRJdGVtLiRpdGVtLnggPSBsYXN0UG9zaXRpb24ueDtcclxuICAgICAgcHVzaGVkSXRlbS4kaXRlbS55ID0gbGFzdFBvc2l0aW9uLnk7XHJcbiAgICAgIGlmICghdGhpcy5ncmlkc3Rlci5maW5kSXRlbVdpdGhJdGVtKHB1c2hlZEl0ZW0uJGl0ZW0pKSB7XHJcbiAgICAgICAgcHVzaGVkSXRlbS5zZXRTaXplKCk7XHJcbiAgICAgICAgcGF0aC5zcGxpY2UoaiArIDEsIHBhdGgubGVuZ3RoIC0gaiAtIDEpO1xyXG4gICAgICAgIGNoYW5nZSA9IHRydWU7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcHVzaGVkSXRlbS4kaXRlbS54ID0geDtcclxuICAgICAgICBwdXNoZWRJdGVtLiRpdGVtLnkgPSB5O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAocGF0aC5sZW5ndGggPCAyKSB7XHJcbiAgICAgIHRoaXMucmVtb3ZlRnJvbVB1c2hlZChpKTtcclxuICAgIH1cclxuICAgIHJldHVybiBjaGFuZ2U7XHJcbiAgfVxyXG59XHJcbiJdfQ==