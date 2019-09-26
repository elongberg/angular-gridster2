/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { GridsterItemComponentInterface } from './gridsterItemComponent.interface';
var GridsterSwap = /** @class */ (function () {
    function GridsterSwap(gridsterItem) {
        this.gridsterItem = gridsterItem;
        this.gridster = gridsterItem.gridster;
    }
    /**
     * @return {?}
     */
    GridsterSwap.prototype.destroy = /**
     * @return {?}
     */
    function () {
        delete this.gridster;
        delete this.gridsterItem;
        delete this.swapedItem;
    };
    /**
     * @return {?}
     */
    GridsterSwap.prototype.swapItems = /**
     * @return {?}
     */
    function () {
        if (this.gridster.$options.swap) {
            this.checkSwapBack();
            this.checkSwap(this.gridsterItem);
        }
    };
    /**
     * @return {?}
     */
    GridsterSwap.prototype.checkSwapBack = /**
     * @return {?}
     */
    function () {
        if (this.swapedItem) {
            /** @type {?} */
            var x = this.swapedItem.$item.x;
            /** @type {?} */
            var y = this.swapedItem.$item.y;
            this.swapedItem.$item.x = this.swapedItem.item.x || 0;
            this.swapedItem.$item.y = this.swapedItem.item.y || 0;
            if (this.gridster.checkCollision(this.swapedItem.$item)) {
                this.swapedItem.$item.x = x;
                this.swapedItem.$item.y = y;
            }
            else {
                this.swapedItem.setSize();
                this.gridsterItem.$item.x = this.gridsterItem.item.x || 0;
                this.gridsterItem.$item.y = this.gridsterItem.item.y || 0;
                this.swapedItem = undefined;
            }
        }
    };
    /**
     * @return {?}
     */
    GridsterSwap.prototype.restoreSwapItem = /**
     * @return {?}
     */
    function () {
        if (this.swapedItem) {
            this.swapedItem.$item.x = this.swapedItem.item.x || 0;
            this.swapedItem.$item.y = this.swapedItem.item.y || 0;
            this.swapedItem.setSize();
            this.swapedItem = undefined;
        }
    };
    /**
     * @return {?}
     */
    GridsterSwap.prototype.setSwapItem = /**
     * @return {?}
     */
    function () {
        if (this.swapedItem) {
            this.swapedItem.checkItemChanges(this.swapedItem.$item, this.swapedItem.item);
            this.swapedItem = undefined;
        }
    };
    /**
     * @param {?} pushedBy
     * @return {?}
     */
    GridsterSwap.prototype.checkSwap = /**
     * @param {?} pushedBy
     * @return {?}
     */
    function (pushedBy) {
        /** @type {?} */
        var gridsterItemCollision;
        if (this.gridster.$options.swapWhileDragging) {
            gridsterItemCollision = this.gridster.checkCollisionForSwaping(pushedBy.$item);
        }
        else {
            gridsterItemCollision = this.gridster.checkCollision(pushedBy.$item);
        }
        if (gridsterItemCollision && gridsterItemCollision !== true && gridsterItemCollision.canBeDragged()) {
            /** @type {?} */
            var gridsterItemCollide = gridsterItemCollision;
            /** @type {?} */
            var copyCollisionX = gridsterItemCollide.$item.x;
            /** @type {?} */
            var copyCollisionY = gridsterItemCollide.$item.y;
            /** @type {?} */
            var copyX = pushedBy.$item.x;
            /** @type {?} */
            var copyY = pushedBy.$item.y;
            gridsterItemCollide.$item.x = pushedBy.item.x || 0;
            gridsterItemCollide.$item.y = pushedBy.item.y || 0;
            pushedBy.$item.x = gridsterItemCollide.item.x || 0;
            pushedBy.$item.y = gridsterItemCollide.item.y || 0;
            if (this.gridster.checkCollision(gridsterItemCollide.$item) || this.gridster.checkCollision(pushedBy.$item)) {
                pushedBy.$item.x = copyX;
                pushedBy.$item.y = copyY;
                gridsterItemCollide.$item.x = copyCollisionX;
                gridsterItemCollide.$item.y = copyCollisionY;
            }
            else {
                gridsterItemCollide.setSize();
                this.swapedItem = gridsterItemCollide;
                if (this.gridster.$options.swapWhileDragging) {
                    this.gridsterItem.checkItemChanges(this.gridsterItem.$item, this.gridsterItem.item);
                    this.setSwapItem();
                }
            }
        }
    };
    GridsterSwap.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    GridsterSwap.ctorParameters = function () { return [
        { type: GridsterItemComponentInterface }
    ]; };
    return GridsterSwap;
}());
export { GridsterSwap };
if (false) {
    /**
     * @type {?}
     * @private
     */
    GridsterSwap.prototype.swapedItem;
    /**
     * @type {?}
     * @private
     */
    GridsterSwap.prototype.gridsterItem;
    /**
     * @type {?}
     * @private
     */
    GridsterSwap.prototype.gridster;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZHN0ZXJTd2FwLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWdyaWRzdGVyMi8iLCJzb3VyY2VzIjpbImxpYi9ncmlkc3RlclN3YXAuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUMsOEJBQThCLEVBQUMsTUFBTSxtQ0FBbUMsQ0FBQztBQUdqRjtJQU1FLHNCQUFZLFlBQTRDO1FBQ3RELElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxRQUFRLEdBQUcsWUFBWSxDQUFDLFFBQVEsQ0FBQztJQUN4QyxDQUFDOzs7O0lBRUQsOEJBQU87OztJQUFQO1FBQ0UsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztRQUN6QixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDekIsQ0FBQzs7OztJQUVELGdDQUFTOzs7SUFBVDtRQUNFLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFO1lBQy9CLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUNyQixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUNuQztJQUNILENBQUM7Ozs7SUFFRCxvQ0FBYTs7O0lBQWI7UUFDRSxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7O2dCQUNiLENBQUMsR0FBVyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDOztnQkFDbkMsQ0FBQyxHQUFXLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDekMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7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b0NBQXFEOzs7OztJQUNyRCxnQ0FBNkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHtHcmlkc3Rlckl0ZW1Db21wb25lbnRJbnRlcmZhY2V9IGZyb20gJy4vZ3JpZHN0ZXJJdGVtQ29tcG9uZW50LmludGVyZmFjZSc7XHJcbmltcG9ydCB7R3JpZHN0ZXJDb21wb25lbnRJbnRlcmZhY2V9IGZyb20gJy4vZ3JpZHN0ZXIuaW50ZXJmYWNlJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEdyaWRzdGVyU3dhcCB7XHJcbiAgcHJpdmF0ZSBzd2FwZWRJdGVtOiBHcmlkc3Rlckl0ZW1Db21wb25lbnRJbnRlcmZhY2UgfCB1bmRlZmluZWQ7XHJcbiAgcHJpdmF0ZSBncmlkc3Rlckl0ZW06IEdyaWRzdGVySXRlbUNvbXBvbmVudEludGVyZmFjZTtcclxuICBwcml2YXRlIGdyaWRzdGVyOiBHcmlkc3RlckNvbXBvbmVudEludGVyZmFjZTtcclxuXHJcbiAgY29uc3RydWN0b3IoZ3JpZHN0ZXJJdGVtOiBHcmlkc3Rlckl0ZW1Db21wb25lbnRJbnRlcmZhY2UpIHtcclxuICAgIHRoaXMuZ3JpZHN0ZXJJdGVtID0gZ3JpZHN0ZXJJdGVtO1xyXG4gICAgdGhpcy5ncmlkc3RlciA9IGdyaWRzdGVySXRlbS5ncmlkc3RlcjtcclxuICB9XHJcblxyXG4gIGRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICBkZWxldGUgdGhpcy5ncmlkc3RlcjtcclxuICAgIGRlbGV0ZSB0aGlzLmdyaWRzdGVySXRlbTtcclxuICAgIGRlbGV0ZSB0aGlzLnN3YXBlZEl0ZW07XHJcbiAgfVxyXG5cclxuICBzd2FwSXRlbXMoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5ncmlkc3Rlci4kb3B0aW9ucy5zd2FwKSB7XHJcbiAgICAgIHRoaXMuY2hlY2tTd2FwQmFjaygpO1xyXG4gICAgICB0aGlzLmNoZWNrU3dhcCh0aGlzLmdyaWRzdGVySXRlbSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjaGVja1N3YXBCYWNrKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuc3dhcGVkSXRlbSkge1xyXG4gICAgICBjb25zdCB4OiBudW1iZXIgPSB0aGlzLnN3YXBlZEl0ZW0uJGl0ZW0ueDtcclxuICAgICAgY29uc3QgeTogbnVtYmVyID0gdGhpcy5zd2FwZWRJdGVtLiRpdGVtLnk7XHJcbiAgICAgIHRoaXMuc3dhcGVkSXRlbS4kaXRlbS54ID0gdGhpcy5zd2FwZWRJdGVtLml0ZW0ueCB8fCAwO1xyXG4gICAgICB0aGlzLnN3YXBlZEl0ZW0uJGl0ZW0ueSA9IHRoaXMuc3dhcGVkSXRlbS5pdGVtLnkgfHwgMDtcclxuICAgICAgaWYgKHRoaXMuZ3JpZHN0ZXIuY2hlY2tDb2xsaXNpb24odGhpcy5zd2FwZWRJdGVtLiRpdGVtKSkge1xyXG4gICAgICAgIHRoaXMuc3dhcGVkSXRlbS4kaXRlbS54ID0geDtcclxuICAgICAgICB0aGlzLnN3YXBlZEl0ZW0uJGl0ZW0ueSA9IHk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5zd2FwZWRJdGVtLnNldFNpemUoKTtcclxuICAgICAgICB0aGlzLmdyaWRzdGVySXRlbS4kaXRlbS54ID0gdGhpcy5ncmlkc3Rlckl0ZW0uaXRlbS54IHx8IDA7XHJcbiAgICAgICAgdGhpcy5ncmlkc3Rlckl0ZW0uJGl0ZW0ueSA9IHRoaXMuZ3JpZHN0ZXJJdGVtLml0ZW0ueSB8fCAwO1xyXG4gICAgICAgIHRoaXMuc3dhcGVkSXRlbSA9IHVuZGVmaW5lZDtcclxuICAgICAgfVxyXG5cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlc3RvcmVTd2FwSXRlbSgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnN3YXBlZEl0ZW0pIHtcclxuICAgICAgdGhpcy5zd2FwZWRJdGVtLiRpdGVtLnggPSB0aGlzLnN3YXBlZEl0ZW0uaXRlbS54IHx8IDA7XHJcbiAgICAgIHRoaXMuc3dhcGVkSXRlbS4kaXRlbS55ID0gdGhpcy5zd2FwZWRJdGVtLml0ZW0ueSB8fCAwO1xyXG4gICAgICB0aGlzLnN3YXBlZEl0ZW0uc2V0U2l6ZSgpO1xyXG4gICAgICB0aGlzLnN3YXBlZEl0ZW0gPSB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZXRTd2FwSXRlbSgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnN3YXBlZEl0ZW0pIHtcclxuICAgICAgdGhpcy5zd2FwZWRJdGVtLmNoZWNrSXRlbUNoYW5nZXModGhpcy5zd2FwZWRJdGVtLiRpdGVtLCB0aGlzLnN3YXBlZEl0ZW0uaXRlbSk7XHJcbiAgICAgIHRoaXMuc3dhcGVkSXRlbSA9IHVuZGVmaW5lZDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNoZWNrU3dhcChwdXNoZWRCeTogR3JpZHN0ZXJJdGVtQ29tcG9uZW50SW50ZXJmYWNlKTogdm9pZCB7XHJcbiAgICBsZXQgZ3JpZHN0ZXJJdGVtQ29sbGlzaW9uO1xyXG4gICAgaWYgKHRoaXMuZ3JpZHN0ZXIuJG9wdGlvbnMuc3dhcFdoaWxlRHJhZ2dpbmcpIHtcclxuICAgICAgZ3JpZHN0ZXJJdGVtQ29sbGlzaW9uID0gdGhpcy5ncmlkc3Rlci5jaGVja0NvbGxpc2lvbkZvclN3YXBpbmcocHVzaGVkQnkuJGl0ZW0pO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgIGdyaWRzdGVySXRlbUNvbGxpc2lvbiA9IHRoaXMuZ3JpZHN0ZXIuY2hlY2tDb2xsaXNpb24ocHVzaGVkQnkuJGl0ZW0pO1xyXG4gICAgfVxyXG4gICAgaWYgKGdyaWRzdGVySXRlbUNvbGxpc2lvbiAmJiBncmlkc3Rlckl0ZW1Db2xsaXNpb24gIT09IHRydWUgJiYgZ3JpZHN0ZXJJdGVtQ29sbGlzaW9uLmNhbkJlRHJhZ2dlZCgpKSB7XHJcbiAgICAgIGNvbnN0IGdyaWRzdGVySXRlbUNvbGxpZGU6IEdyaWRzdGVySXRlbUNvbXBvbmVudEludGVyZmFjZSA9IGdyaWRzdGVySXRlbUNvbGxpc2lvbjtcclxuICAgICAgY29uc3QgY29weUNvbGxpc2lvblggPSBncmlkc3Rlckl0ZW1Db2xsaWRlLiRpdGVtLng7XHJcbiAgICAgIGNvbnN0IGNvcHlDb2xsaXNpb25ZID0gZ3JpZHN0ZXJJdGVtQ29sbGlkZS4kaXRlbS55O1xyXG4gICAgICBjb25zdCBjb3B5WCA9IHB1c2hlZEJ5LiRpdGVtLng7XHJcbiAgICAgIGNvbnN0IGNvcHlZID0gcHVzaGVkQnkuJGl0ZW0ueTtcclxuICAgICAgZ3JpZHN0ZXJJdGVtQ29sbGlkZS4kaXRlbS54ID0gcHVzaGVkQnkuaXRlbS54IHx8IDA7XHJcbiAgICAgIGdyaWRzdGVySXRlbUNvbGxpZGUuJGl0ZW0ueSA9IHB1c2hlZEJ5Lml0ZW0ueSB8fCAwO1xyXG4gICAgICBwdXNoZWRCeS4kaXRlbS54ID0gZ3JpZHN0ZXJJdGVtQ29sbGlkZS5pdGVtLnggfHwgMDtcclxuICAgICAgcHVzaGVkQnkuJGl0ZW0ueSA9IGdyaWRzdGVySXRlbUNvbGxpZGUuaXRlbS55IHx8IDA7XHJcbiAgICAgIGlmICh0aGlzLmdyaWRzdGVyLmNoZWNrQ29sbGlzaW9uKGdyaWRzdGVySXRlbUNvbGxpZGUuJGl0ZW0pIHx8IHRoaXMuZ3JpZHN0ZXIuY2hlY2tDb2xsaXNpb24ocHVzaGVkQnkuJGl0ZW0pKSB7XHJcbiAgICAgICAgcHVzaGVkQnkuJGl0ZW0ueCA9IGNvcHlYO1xyXG4gICAgICAgIHB1c2hlZEJ5LiRpdGVtLnkgPSBjb3B5WTtcclxuICAgICAgICBncmlkc3Rlckl0ZW1Db2xsaWRlLiRpdGVtLnggPSBjb3B5Q29sbGlzaW9uWDtcclxuICAgICAgICBncmlkc3Rlckl0ZW1Db2xsaWRlLiRpdGVtLnkgPSBjb3B5Q29sbGlzaW9uWTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBncmlkc3Rlckl0ZW1Db2xsaWRlLnNldFNpemUoKTtcclxuICAgICAgICB0aGlzLnN3YXBlZEl0ZW0gPSBncmlkc3Rlckl0ZW1Db2xsaWRlO1xyXG4gICAgICAgIGlmICh0aGlzLmdyaWRzdGVyLiRvcHRpb25zLnN3YXBXaGlsZURyYWdnaW5nKSB7XHJcbiAgICAgICAgICB0aGlzLmdyaWRzdGVySXRlbS5jaGVja0l0ZW1DaGFuZ2VzKHRoaXMuZ3JpZHN0ZXJJdGVtLiRpdGVtLCB0aGlzLmdyaWRzdGVySXRlbS5pdGVtKTtcclxuICAgICAgICAgIHRoaXMuc2V0U3dhcEl0ZW0oKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19