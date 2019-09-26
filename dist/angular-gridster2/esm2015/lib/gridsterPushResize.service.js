/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { GridsterItemComponentInterface } from './gridsterItemComponent.interface';
import { GridsterComponent } from './gridster.component';
export class GridsterPushResize {
    /**
     * @param {?} gridsterItem
     */
    constructor(gridsterItem) {
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
    destroy() {
        delete this.gridster;
        delete this.gridsterItem;
    }
    /**
     * @param {?} direction
     * @return {?}
     */
    pushItems(direction) {
        if (this.gridster.$options.pushResizeItems) {
            return this.push(this.gridsterItem, direction);
        }
        else {
            return false;
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
            pushedItem.$item.cols = pushedItem.item.cols || 1;
            pushedItem.$item.row = pushedItem.item.row || 1;
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
     * @param {?} gridsterItem
     * @param {?} direction
     * @return {?}
     */
    push(gridsterItem, direction) {
        /** @type {?} */
        const gridsterItemCollision = this.gridster.checkCollision(gridsterItem.$item);
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
    }
    /**
     * @private
     * @param {?} gridsterItemCollide
     * @param {?} gridsterItem
     * @param {?} direction
     * @return {?}
     */
    trySouth(gridsterItemCollide, gridsterItem, direction) {
        /** @type {?} */
        const backUpY = gridsterItemCollide.$item.y;
        /** @type {?} */
        const backUpRows = gridsterItemCollide.$item.rows;
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
    }
    /**
     * @private
     * @param {?} gridsterItemCollide
     * @param {?} gridsterItem
     * @param {?} direction
     * @return {?}
     */
    tryNorth(gridsterItemCollide, gridsterItem, direction) {
        /** @type {?} */
        const backUpRows = gridsterItemCollide.$item.rows;
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
    }
    /**
     * @private
     * @param {?} gridsterItemCollide
     * @param {?} gridsterItem
     * @param {?} direction
     * @return {?}
     */
    tryEast(gridsterItemCollide, gridsterItem, direction) {
        /** @type {?} */
        const backUpX = gridsterItemCollide.$item.x;
        /** @type {?} */
        const backUpCols = gridsterItemCollide.$item.cols;
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
    }
    /**
     * @private
     * @param {?} gridsterItemCollide
     * @param {?} gridsterItem
     * @param {?} direction
     * @return {?}
     */
    tryWest(gridsterItemCollide, gridsterItem, direction) {
        /** @type {?} */
        const backUpCols = gridsterItemCollide.$item.cols;
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
    }
    /**
     * @private
     * @param {?} gridsterItem
     * @return {?}
     */
    addToPushed(gridsterItem) {
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
            const i = this.pushedItems.indexOf(gridsterItem);
            this.pushedItemsPath[i].push({
                x: gridsterItem.$item.x,
                y: gridsterItem.$item.y,
                cols: gridsterItem.$item.cols,
                rows: gridsterItem.$item.rows
            });
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
        let cols;
        /** @type {?} */
        let rows;
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
    }
}
GridsterPushResize.decorators = [
    { type: Injectable }
];
/** @nocollapse */
GridsterPushResize.ctorParameters = () => [
    { type: GridsterItemComponentInterface }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZHN0ZXJQdXNoUmVzaXplLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWdyaWRzdGVyMi8iLCJzb3VyY2VzIjpbImxpYi9ncmlkc3RlclB1c2hSZXNpemUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUd6QyxPQUFPLEVBQUMsOEJBQThCLEVBQUMsTUFBTSxtQ0FBbUMsQ0FBQztBQUVqRixPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUd2RCxNQUFNLE9BQU8sa0JBQWtCOzs7O0lBaUI3QixZQUFZLFlBQTRDO1FBQ3RELElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxlQUFlLEdBQUcsRUFBRSxDQUFDO1FBQzFCLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxRQUFRLEdBQUcsWUFBWSxDQUFDLFFBQVEsQ0FBQztRQUN0QyxJQUFJLENBQUMsVUFBVSxHQUFHO1lBQ2hCLFFBQVEsRUFBRSxJQUFJLENBQUMsT0FBTztZQUN0QixRQUFRLEVBQUUsSUFBSSxDQUFDLE9BQU87WUFDdEIsU0FBUyxFQUFFLElBQUksQ0FBQyxRQUFRO1lBQ3hCLFNBQVMsRUFBRSxJQUFJLENBQUMsUUFBUTtTQUN6QixDQUFDO1FBQ0YsSUFBSSxDQUFDLFNBQVMsR0FBRyxXQUFXLENBQUM7UUFDN0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxXQUFXLENBQUM7UUFDN0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUM7UUFDM0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUM7SUFDN0IsQ0FBQzs7OztJQUVELE9BQU87UUFDTCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDckIsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQzNCLENBQUM7Ozs7O0lB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VSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsWUFBWSxDQUFDLElBQUksQ0FBQztZQUMxQyxVQUFVLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxZQUFZLENBQUMsSUFBSSxDQUFDO1lBQzFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDckQsVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUNyQixJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7YUFDekM7aUJBQU07Z0JBQ0wsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUN2QixVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ3ZCLFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztnQkFDN0IsVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO2FBQzlCO1NBQ0Y7UUFDRCxJQUFJLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ25CLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN6QixPQUFPLElBQUksQ0FBQztTQUNiO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDOzs7WUE1T0YsVUFBVTs7OztZQUpILDhCQUE4Qjs7OztJQU1wQyx1Q0FBeUI7O0lBQ3pCLHVDQUF5Qjs7SUFDekIsc0NBQXdCOztJQUN4QixzQ0FBd0I7Ozs7O0lBQ3hCLHlDQUEyRDs7Ozs7SUFDM0QsNkNBQW9EOzs7OztJQUNwRCwwQ0FBcUQ7Ozs7O0lBQ3JELHNDQUE2Qzs7Ozs7SUFDN0Msd0NBTUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHtHcmlkc3Rlckl0ZW19IGZyb20gJy4vZ3JpZHN0ZXJJdGVtLmludGVyZmFjZSc7XHJcbmltcG9ydCB7R3JpZHN0ZXJJdGVtQ29tcG9uZW50SW50ZXJmYWNlfSBmcm9tICcuL2dyaWRzdGVySXRlbUNvbXBvbmVudC5pbnRlcmZhY2UnO1xyXG5pbXBvcnQge0dyaWRzdGVyQ29tcG9uZW50SW50ZXJmYWNlfSBmcm9tICcuL2dyaWRzdGVyLmludGVyZmFjZSc7XHJcbmltcG9ydCB7R3JpZHN0ZXJDb21wb25lbnR9IGZyb20gJy4vZ3JpZHN0ZXIuY29tcG9uZW50JztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEdyaWRzdGVyUHVzaFJlc2l6ZSB7XHJcbiAgcHVibGljIGZyb21Tb3V0aDogc3RyaW5nO1xyXG4gIHB1YmxpYyBmcm9tTm9ydGg6IHN0cmluZztcclxuICBwdWJsaWMgZnJvbUVhc3Q6IHN0cmluZztcclxuICBwdWJsaWMgZnJvbVdlc3Q6IHN0cmluZztcclxuICBwcml2YXRlIHB1c2hlZEl0ZW1zOiBBcnJheTxHcmlkc3Rlckl0ZW1Db21wb25lbnRJbnRlcmZhY2U+O1xyXG4gIHByaXZhdGUgcHVzaGVkSXRlbXNQYXRoOiBBcnJheTxBcnJheTxHcmlkc3Rlckl0ZW0+PjtcclxuICBwcml2YXRlIGdyaWRzdGVySXRlbTogR3JpZHN0ZXJJdGVtQ29tcG9uZW50SW50ZXJmYWNlO1xyXG4gIHByaXZhdGUgZ3JpZHN0ZXI6IEdyaWRzdGVyQ29tcG9uZW50SW50ZXJmYWNlO1xyXG4gIHByaXZhdGUgdHJ5UGF0dGVybjoge1xyXG4gICAgZnJvbUVhc3Q6IEZ1bmN0aW9uLFxyXG4gICAgZnJvbVdlc3Q6IEZ1bmN0aW9uLFxyXG4gICAgZnJvbU5vcnRoOiBGdW5jdGlvbixcclxuICAgIGZyb21Tb3V0aDogRnVuY3Rpb24sXHJcbiAgICBba2V5OiBzdHJpbmddOiBGdW5jdGlvblxyXG4gIH07XHJcblxyXG4gIGNvbnN0cnVjdG9yKGdyaWRzdGVySXRlbTogR3JpZHN0ZXJJdGVtQ29tcG9uZW50SW50ZXJmYWNlKSB7XHJcbiAgICB0aGlzLnB1c2hlZEl0ZW1zID0gW107XHJcbiAgICB0aGlzLnB1c2hlZEl0ZW1zUGF0aCA9IFtdO1xyXG4gICAgdGhpcy5ncmlkc3Rlckl0ZW0gPSBncmlkc3Rlckl0ZW07XHJcbiAgICB0aGlzLmdyaWRzdGVyID0gZ3JpZHN0ZXJJdGVtLmdyaWRzdGVyO1xyXG4gICAgdGhpcy50cnlQYXR0ZXJuID0ge1xyXG4gICAgICBmcm9tRWFzdDogdGhpcy50cnlXZXN0LFxyXG4gICAgICBmcm9tV2VzdDogdGhpcy50cnlFYXN0LFxyXG4gICAgICBmcm9tTm9ydGg6IHRoaXMudHJ5U291dGgsXHJcbiAgICAgIGZyb21Tb3V0aDogdGhpcy50cnlOb3J0aFxyXG4gICAgfTtcclxuICAgIHRoaXMuZnJvbVNvdXRoID0gJ2Zyb21Tb3V0aCc7XHJcbiAgICB0aGlzLmZyb21Ob3J0aCA9ICdmcm9tTm9ydGgnO1xyXG4gICAgdGhpcy5mcm9tRWFzdCA9ICdmcm9tRWFzdCc7XHJcbiAgICB0aGlzLmZyb21XZXN0ID0gJ2Zyb21XZXN0JztcclxuICB9XHJcblxyXG4gIGRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICBkZWxldGUgdGhpcy5ncmlkc3RlcjtcclxuICAgIGRlbGV0ZSB0aGlzLmdyaWRzdGVySXRlbTtcclxuICB9XHJcblxyXG4gIHB1c2hJdGVtcyhkaXJlY3Rpb246IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKHRoaXMuZ3JpZHN0ZXIuJG9wdGlvbnMucHVzaFJlc2l6ZUl0ZW1zKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnB1c2godGhpcy5ncmlkc3Rlckl0ZW0sIGRpcmVjdGlvbik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXN0b3JlSXRlbXMoKTogdm9pZCB7XHJcbiAgICBsZXQgaSA9IDA7XHJcbiAgICBjb25zdCBsOiBudW1iZXIgPSB0aGlzLnB1c2hlZEl0ZW1zLmxlbmd0aDtcclxuICAgIGxldCBwdXNoZWRJdGVtOiBHcmlkc3Rlckl0ZW1Db21wb25lbnRJbnRlcmZhY2U7XHJcbiAgICBmb3IgKDsgaSA8IGw7IGkrKykge1xyXG4gICAgICBwdXNoZWRJdGVtID0gdGhpcy5wdXNoZWRJdGVtc1tpXTtcclxuICAgICAgcHVzaGVkSXRlbS4kaXRlbS54ID0gcHVzaGVkSXRlbS5pdGVtLnggfHwgMDtcclxuICAgICAgcHVzaGVkSXRlbS4kaXRlbS55ID0gcHVzaGVkSXRlbS5pdGVtLnkgfHwgMDtcclxuICAgICAgcHVzaGVkSXRlbS4kaXRlbS5jb2xzID0gcHVzaGVkSXRlbS5pdGVtLmNvbHMgfHwgMTtcclxuICAgICAgcHVzaGVkSXRlbS4kaXRlbS5yb3cgPSBwdXNoZWRJdGVtLml0ZW0ucm93IHx8IDE7XHJcbiAgICAgIHB1c2hlZEl0ZW0uc2V0U2l6ZSgpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5wdXNoZWRJdGVtcyA9IFtdO1xyXG4gICAgdGhpcy5wdXNoZWRJdGVtc1BhdGggPSBbXTtcclxuICB9XHJcblxyXG4gIHNldFB1c2hlZEl0ZW1zKCkge1xyXG4gICAgbGV0IGkgPSAwO1xyXG4gICAgY29uc3QgbDogbnVtYmVyID0gdGhpcy5wdXNoZWRJdGVtcy5sZW5ndGg7XHJcbiAgICBsZXQgcHVzaGVkSXRlbTogR3JpZHN0ZXJJdGVtQ29tcG9uZW50SW50ZXJmYWNlO1xyXG4gICAgZm9yICg7IGkgPCBsOyBpKyspIHtcclxuICAgICAgcHVzaGVkSXRlbSA9IHRoaXMucHVzaGVkSXRlbXNbaV07XHJcbiAgICAgIHB1c2hlZEl0ZW0uY2hlY2tJdGVtQ2hhbmdlcyhwdXNoZWRJdGVtLiRpdGVtLCBwdXNoZWRJdGVtLml0ZW0pO1xyXG4gICAgfVxyXG4gICAgdGhpcy5wdXNoZWRJdGVtcyA9IFtdO1xyXG4gICAgdGhpcy5wdXNoZWRJdGVtc1BhdGggPSBbXTtcclxuICB9XHJcblxyXG4gIGNoZWNrUHVzaEJhY2soKTogdm9pZCB7XHJcbiAgICBsZXQgaTogbnVtYmVyID0gdGhpcy5wdXNoZWRJdGVtcy5sZW5ndGggLSAxO1xyXG4gICAgbGV0IGNoYW5nZSA9IGZhbHNlO1xyXG4gICAgZm9yICg7IGkgPiAtMTsgaS0tKSB7XHJcbiAgICAgIGlmICh0aGlzLmNoZWNrUHVzaGVkSXRlbSh0aGlzLnB1c2hlZEl0ZW1zW2ldLCBpKSkge1xyXG4gICAgICAgIGNoYW5nZSA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChjaGFuZ2UpIHtcclxuICAgICAgdGhpcy5jaGVja1B1c2hCYWNrKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHB1c2goZ3JpZHN0ZXJJdGVtOiBHcmlkc3Rlckl0ZW1Db21wb25lbnRJbnRlcmZhY2UsIGRpcmVjdGlvbjogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICBjb25zdCBncmlkc3Rlckl0ZW1Db2xsaXNpb246IGFueSA9IHRoaXMuZ3JpZHN0ZXIuY2hlY2tDb2xsaXNpb24oZ3JpZHN0ZXJJdGVtLiRpdGVtKTtcclxuICAgIGlmIChncmlkc3Rlckl0ZW1Db2xsaXNpb24gJiYgZ3JpZHN0ZXJJdGVtQ29sbGlzaW9uICE9PSB0cnVlICYmXHJcbiAgICAgIGdyaWRzdGVySXRlbUNvbGxpc2lvbiAhPT0gdGhpcy5ncmlkc3Rlckl0ZW0gJiYgZ3JpZHN0ZXJJdGVtQ29sbGlzaW9uLmNhbkJlUmVzaXplZCgpKSB7XHJcbiAgICAgIGlmICh0aGlzLnRyeVBhdHRlcm5bZGlyZWN0aW9uXS5jYWxsKHRoaXMsIGdyaWRzdGVySXRlbUNvbGxpc2lvbiwgZ3JpZHN0ZXJJdGVtLCBkaXJlY3Rpb24pKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAoZ3JpZHN0ZXJJdGVtQ29sbGlzaW9uID09PSBmYWxzZSkge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgdHJ5U291dGgoZ3JpZHN0ZXJJdGVtQ29sbGlkZTogR3JpZHN0ZXJJdGVtQ29tcG9uZW50SW50ZXJmYWNlLCBncmlkc3Rlckl0ZW06IEdyaWRzdGVySXRlbUNvbXBvbmVudEludGVyZmFjZSxcclxuICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICBjb25zdCBiYWNrVXBZID0gZ3JpZHN0ZXJJdGVtQ29sbGlkZS4kaXRlbS55O1xyXG4gICAgY29uc3QgYmFja1VwUm93cyA9IGdyaWRzdGVySXRlbUNvbGxpZGUuJGl0ZW0ucm93cztcclxuICAgIGdyaWRzdGVySXRlbUNvbGxpZGUuJGl0ZW0ueSA9IGdyaWRzdGVySXRlbS4kaXRlbS55ICsgZ3JpZHN0ZXJJdGVtLiRpdGVtLnJvd3M7XHJcbiAgICBncmlkc3Rlckl0ZW1Db2xsaWRlLiRpdGVtLnJvd3MgPSBiYWNrVXBSb3dzICsgYmFja1VwWSAtIGdyaWRzdGVySXRlbUNvbGxpZGUuJGl0ZW0ueTtcclxuICAgIGlmICghR3JpZHN0ZXJDb21wb25lbnQuY2hlY2tDb2xsaXNpb25Ud29JdGVtcyhncmlkc3Rlckl0ZW1Db2xsaWRlLiRpdGVtLCBncmlkc3Rlckl0ZW0uJGl0ZW0pXHJcbiAgICAgICYmICF0aGlzLmdyaWRzdGVyLmNoZWNrR3JpZENvbGxpc2lvbihncmlkc3Rlckl0ZW1Db2xsaWRlLiRpdGVtKSkge1xyXG4gICAgICBncmlkc3Rlckl0ZW1Db2xsaWRlLnNldFNpemUoKTtcclxuICAgICAgdGhpcy5hZGRUb1B1c2hlZChncmlkc3Rlckl0ZW1Db2xsaWRlKTtcclxuICAgICAgdGhpcy5wdXNoKGdyaWRzdGVySXRlbSwgZGlyZWN0aW9uKTtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBncmlkc3Rlckl0ZW1Db2xsaWRlLiRpdGVtLnkgPSBiYWNrVXBZO1xyXG4gICAgICBncmlkc3Rlckl0ZW1Db2xsaWRlLiRpdGVtLnJvd3MgPSBiYWNrVXBSb3dzO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB0cnlOb3J0aChncmlkc3Rlckl0ZW1Db2xsaWRlOiBHcmlkc3Rlckl0ZW1Db21wb25lbnRJbnRlcmZhY2UsIGdyaWRzdGVySXRlbTogR3JpZHN0ZXJJdGVtQ29tcG9uZW50SW50ZXJmYWNlLFxyXG4gICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgIGNvbnN0IGJhY2tVcFJvd3MgPSBncmlkc3Rlckl0ZW1Db2xsaWRlLiRpdGVtLnJvd3M7XHJcbiAgICBncmlkc3Rlckl0ZW1Db2xsaWRlLiRpdGVtLnJvd3MgPSBncmlkc3Rlckl0ZW0uJGl0ZW0ueSAtIGdyaWRzdGVySXRlbUNvbGxpZGUuJGl0ZW0ueTtcclxuICAgIGlmICghR3JpZHN0ZXJDb21wb25lbnQuY2hlY2tDb2xsaXNpb25Ud29JdGVtcyhncmlkc3Rlckl0ZW1Db2xsaWRlLiRpdGVtLCBncmlkc3Rlckl0ZW0uJGl0ZW0pXHJcbiAgICAgICYmICF0aGlzLmdyaWRzdGVyLmNoZWNrR3JpZENvbGxpc2lvbihncmlkc3Rlckl0ZW1Db2xsaWRlLiRpdGVtKSkge1xyXG4gICAgICBncmlkc3Rlckl0ZW1Db2xsaWRlLnNldFNpemUoKTtcclxuICAgICAgdGhpcy5hZGRUb1B1c2hlZChncmlkc3Rlckl0ZW1Db2xsaWRlKTtcclxuICAgICAgdGhpcy5wdXNoKGdyaWRzdGVySXRlbSwgZGlyZWN0aW9uKTtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBncmlkc3Rlckl0ZW1Db2xsaWRlLiRpdGVtLnJvd3MgPSBiYWNrVXBSb3dzO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB0cnlFYXN0KGdyaWRzdGVySXRlbUNvbGxpZGU6IEdyaWRzdGVySXRlbUNvbXBvbmVudEludGVyZmFjZSwgZ3JpZHN0ZXJJdGVtOiBHcmlkc3Rlckl0ZW1Db21wb25lbnRJbnRlcmZhY2UsXHJcbiAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICBjb25zdCBiYWNrVXBYID0gZ3JpZHN0ZXJJdGVtQ29sbGlkZS4kaXRlbS54O1xyXG4gICAgY29uc3QgYmFja1VwQ29scyA9IGdyaWRzdGVySXRlbUNvbGxpZGUuJGl0ZW0uY29scztcclxuICAgIGdyaWRzdGVySXRlbUNvbGxpZGUuJGl0ZW0ueCA9IGdyaWRzdGVySXRlbS4kaXRlbS54ICsgZ3JpZHN0ZXJJdGVtLiRpdGVtLmNvbHM7XHJcbiAgICBncmlkc3Rlckl0ZW1Db2xsaWRlLiRpdGVtLmNvbHMgPSBiYWNrVXBDb2xzICsgYmFja1VwWCAtIGdyaWRzdGVySXRlbUNvbGxpZGUuJGl0ZW0ueDtcclxuICAgIGlmICghR3JpZHN0ZXJDb21wb25lbnQuY2hlY2tDb2xsaXNpb25Ud29JdGVtcyhncmlkc3Rlckl0ZW1Db2xsaWRlLiRpdGVtLCBncmlkc3Rlckl0ZW0uJGl0ZW0pXHJcbiAgICAgICYmICF0aGlzLmdyaWRzdGVyLmNoZWNrR3JpZENvbGxpc2lvbihncmlkc3Rlckl0ZW1Db2xsaWRlLiRpdGVtKSkge1xyXG4gICAgICBncmlkc3Rlckl0ZW1Db2xsaWRlLnNldFNpemUoKTtcclxuICAgICAgdGhpcy5hZGRUb1B1c2hlZChncmlkc3Rlckl0ZW1Db2xsaWRlKTtcclxuICAgICAgdGhpcy5wdXNoKGdyaWRzdGVySXRlbSwgZGlyZWN0aW9uKTtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBncmlkc3Rlckl0ZW1Db2xsaWRlLiRpdGVtLnggPSBiYWNrVXBYO1xyXG4gICAgICBncmlkc3Rlckl0ZW1Db2xsaWRlLiRpdGVtLmNvbHMgPSBiYWNrVXBDb2xzO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB0cnlXZXN0KGdyaWRzdGVySXRlbUNvbGxpZGU6IEdyaWRzdGVySXRlbUNvbXBvbmVudEludGVyZmFjZSwgZ3JpZHN0ZXJJdGVtOiBHcmlkc3Rlckl0ZW1Db21wb25lbnRJbnRlcmZhY2UsXHJcbiAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICBjb25zdCBiYWNrVXBDb2xzID0gZ3JpZHN0ZXJJdGVtQ29sbGlkZS4kaXRlbS5jb2xzO1xyXG4gICAgZ3JpZHN0ZXJJdGVtQ29sbGlkZS4kaXRlbS5jb2xzID0gZ3JpZHN0ZXJJdGVtLiRpdGVtLnggLSBncmlkc3Rlckl0ZW1Db2xsaWRlLiRpdGVtLng7XHJcbiAgICBpZiAoIUdyaWRzdGVyQ29tcG9uZW50LmNoZWNrQ29sbGlzaW9uVHdvSXRlbXMoZ3JpZHN0ZXJJdGVtQ29sbGlkZS4kaXRlbSwgZ3JpZHN0ZXJJdGVtLiRpdGVtKVxyXG4gICAgICAmJiAhdGhpcy5ncmlkc3Rlci5jaGVja0dyaWRDb2xsaXNpb24oZ3JpZHN0ZXJJdGVtQ29sbGlkZS4kaXRlbSkpIHtcclxuICAgICAgZ3JpZHN0ZXJJdGVtQ29sbGlkZS5zZXRTaXplKCk7XHJcbiAgICAgIHRoaXMuYWRkVG9QdXNoZWQoZ3JpZHN0ZXJJdGVtQ29sbGlkZSk7XHJcbiAgICAgIHRoaXMucHVzaChncmlkc3Rlckl0ZW0sIGRpcmVjdGlvbik7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZ3JpZHN0ZXJJdGVtQ29sbGlkZS4kaXRlbS5jb2xzID0gYmFja1VwQ29scztcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgYWRkVG9QdXNoZWQoZ3JpZHN0ZXJJdGVtOiBHcmlkc3Rlckl0ZW1Db21wb25lbnRJbnRlcmZhY2UpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnB1c2hlZEl0ZW1zLmluZGV4T2YoZ3JpZHN0ZXJJdGVtKSA8IDApIHtcclxuICAgICAgdGhpcy5wdXNoZWRJdGVtcy5wdXNoKGdyaWRzdGVySXRlbSk7XHJcbiAgICAgIHRoaXMucHVzaGVkSXRlbXNQYXRoLnB1c2goW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIHg6IGdyaWRzdGVySXRlbS5pdGVtLnggfHwgMCxcclxuICAgICAgICAgIHk6IGdyaWRzdGVySXRlbS5pdGVtLnkgfHwgMCxcclxuICAgICAgICAgIGNvbHM6IGdyaWRzdGVySXRlbS5pdGVtLmNvbHMgfHwgMCxcclxuICAgICAgICAgIHJvd3M6IGdyaWRzdGVySXRlbS5pdGVtLnJvd3MgfHwgMFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgeDogZ3JpZHN0ZXJJdGVtLiRpdGVtLngsXHJcbiAgICAgICAgICB5OiBncmlkc3Rlckl0ZW0uJGl0ZW0ueSxcclxuICAgICAgICAgIGNvbHM6IGdyaWRzdGVySXRlbS4kaXRlbS5jb2xzLFxyXG4gICAgICAgICAgcm93czogZ3JpZHN0ZXJJdGVtLiRpdGVtLnJvd3NcclxuICAgICAgICB9XSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBpID0gdGhpcy5wdXNoZWRJdGVtcy5pbmRleE9mKGdyaWRzdGVySXRlbSk7XHJcbiAgICAgIHRoaXMucHVzaGVkSXRlbXNQYXRoW2ldLnB1c2goXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgeDogZ3JpZHN0ZXJJdGVtLiRpdGVtLngsXHJcbiAgICAgICAgICB5OiBncmlkc3Rlckl0ZW0uJGl0ZW0ueSxcclxuICAgICAgICAgIGNvbHM6IGdyaWRzdGVySXRlbS4kaXRlbS5jb2xzLFxyXG4gICAgICAgICAgcm93czogZ3JpZHN0ZXJJdGVtLiRpdGVtLnJvd3NcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVtb3ZlRnJvbVB1c2hlZChpOiBudW1iZXIpOiB2b2lkIHtcclxuICAgIGlmIChpID4gLTEpIHtcclxuICAgICAgdGhpcy5wdXNoZWRJdGVtcy5zcGxpY2UoaSwgMSk7XHJcbiAgICAgIHRoaXMucHVzaGVkSXRlbXNQYXRoLnNwbGljZShpLCAxKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2hlY2tQdXNoZWRJdGVtKHB1c2hlZEl0ZW06IEdyaWRzdGVySXRlbUNvbXBvbmVudEludGVyZmFjZSwgaTogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgICBjb25zdCBwYXRoID0gdGhpcy5wdXNoZWRJdGVtc1BhdGhbaV07XHJcbiAgICBsZXQgaiA9IHBhdGgubGVuZ3RoIC0gMjtcclxuICAgIGxldCBsYXN0UG9zaXRpb246IHsgeDogbnVtYmVyLCB5OiBudW1iZXIsIGNvbHM6IG51bWJlciwgcm93czogbnVtYmVyIH0sIHgsIHksIGNvbHMsIHJvd3M7XHJcbiAgICBmb3IgKDsgaiA+IC0xOyBqLS0pIHtcclxuICAgICAgbGFzdFBvc2l0aW9uID0gcGF0aFtqXTtcclxuICAgICAgeCA9IHB1c2hlZEl0ZW0uJGl0ZW0ueDtcclxuICAgICAgeSA9IHB1c2hlZEl0ZW0uJGl0ZW0ueTtcclxuICAgICAgY29scyA9IHB1c2hlZEl0ZW0uJGl0ZW0uY29scztcclxuICAgICAgcm93cyA9IHB1c2hlZEl0ZW0uJGl0ZW0ucm93cztcclxuICAgICAgcHVzaGVkSXRlbS4kaXRlbS54ID0gbGFzdFBvc2l0aW9uLng7XHJcbiAgICAgIHB1c2hlZEl0ZW0uJGl0ZW0ueSA9IGxhc3RQb3NpdGlvbi55O1xyXG4gICAgICBwdXNoZWRJdGVtLiRpdGVtLmNvbHMgPSBsYXN0UG9zaXRpb24uY29scztcclxuICAgICAgcHVzaGVkSXRlbS4kaXRlbS5yb3dzID0gbGFzdFBvc2l0aW9uLnJvd3M7XHJcbiAgICAgIGlmICghdGhpcy5ncmlkc3Rlci5maW5kSXRlbVdpdGhJdGVtKHB1c2hlZEl0ZW0uJGl0ZW0pKSB7XHJcbiAgICAgICAgcHVzaGVkSXRlbS5zZXRTaXplKCk7XHJcbiAgICAgICAgcGF0aC5zcGxpY2UoaiArIDEsIHBhdGgubGVuZ3RoIC0gMSAtIGopO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHB1c2hlZEl0ZW0uJGl0ZW0ueCA9IHg7XHJcbiAgICAgICAgcHVzaGVkSXRlbS4kaXRlbS55ID0geTtcclxuICAgICAgICBwdXNoZWRJdGVtLiRpdGVtLmNvbHMgPSBjb2xzO1xyXG4gICAgICAgIHB1c2hlZEl0ZW0uJGl0ZW0ucm93cyA9IHJvd3M7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChwYXRoLmxlbmd0aCA8IDIpIHtcclxuICAgICAgdGhpcy5yZW1vdmVGcm9tUHVzaGVkKGkpO1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbn1cclxuIl19