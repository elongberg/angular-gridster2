/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { GridsterItemComponentInterface } from './gridsterItemComponent.interface';
export class GridsterSwap {
    /**
     * @param {?} gridsterItem
     */
    constructor(gridsterItem) {
        this.gridsterItem = gridsterItem;
        this.gridster = gridsterItem.gridster;
    }
    /**
     * @return {?}
     */
    destroy() {
        delete this.gridster;
        delete this.gridsterItem;
        delete this.swapedItem;
    }
    /**
     * @return {?}
     */
    swapItems() {
        if (this.gridster.$options.swap) {
            this.checkSwapBack();
            this.checkSwap(this.gridsterItem);
        }
    }
    /**
     * @return {?}
     */
    checkSwapBack() {
        if (this.swapedItem) {
            /** @type {?} */
            const x = this.swapedItem.$item.x;
            /** @type {?} */
            const y = this.swapedItem.$item.y;
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
    }
    /**
     * @return {?}
     */
    restoreSwapItem() {
        if (this.swapedItem) {
            this.swapedItem.$item.x = this.swapedItem.item.x || 0;
            this.swapedItem.$item.y = this.swapedItem.item.y || 0;
            this.swapedItem.setSize();
            this.swapedItem = undefined;
        }
    }
    /**
     * @return {?}
     */
    setSwapItem() {
        if (this.swapedItem) {
            this.swapedItem.checkItemChanges(this.swapedItem.$item, this.swapedItem.item);
            this.swapedItem = undefined;
        }
    }
    /**
     * @param {?} pushedBy
     * @return {?}
     */
    checkSwap(pushedBy) {
        /** @type {?} */
        let gridsterItemCollision;
        if (this.gridster.$options.swapWhileDragging) {
            gridsterItemCollision = this.gridster.checkCollisionForSwaping(pushedBy.$item);
        }
        else {
            gridsterItemCollision = this.gridster.checkCollision(pushedBy.$item);
        }
        if (gridsterItemCollision && gridsterItemCollision !== true && gridsterItemCollision.canBeDragged()) {
            /** @type {?} */
            const gridsterItemCollide = gridsterItemCollision;
            /** @type {?} */
            const copyCollisionX = gridsterItemCollide.$item.x;
            /** @type {?} */
            const copyCollisionY = gridsterItemCollide.$item.y;
            /** @type {?} */
            const copyX = pushedBy.$item.x;
            /** @type {?} */
            const copyY = pushedBy.$item.y;
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
    }
}
GridsterSwap.decorators = [
    { type: Injectable }
];
/** @nocollapse */
GridsterSwap.ctorParameters = () => [
    { type: GridsterItemComponentInterface }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZHN0ZXJTd2FwLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWdyaWRzdGVyMi8iLCJzb3VyY2VzIjpbImxpYi9ncmlkc3RlclN3YXAuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUMsOEJBQThCLEVBQUMsTUFBTSxtQ0FBbUMsQ0FBQztBQUlqRixNQUFNLE9BQU8sWUFBWTs7OztJQUt2QixZQUFZLFlBQTRDO1FBQ3RELElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxRQUFRLEdBQUcsWUFBWSxDQUFDLFFBQVEsQ0FBQztJQUN4QyxDQUFDOzs7O0lBRUQsT0FBTztRQUNMLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUNyQixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDekIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3pCLENBQUM7Ozs7SUFFRCxTQUFTO1FBQ1AsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUU7WUFDL0IsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQ3JCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQ25DO0lBQ0gsQ0FBQzs7OztJQUVELGFBQWE7UUFDWCxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7O2tCQUNiLENBQUMsR0FBVyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDOztrQkFDbkMsQ0FBQyxHQUFXLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDekMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdEQs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Z3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQge0dyaWRzdGVySXRlbUNvbXBvbmVudEludGVyZmFjZX0gZnJvbSAnLi9ncmlkc3Rlckl0ZW1Db21wb25lbnQuaW50ZXJmYWNlJztcclxuaW1wb3J0IHtHcmlkc3RlckNvbXBvbmVudEludGVyZmFjZX0gZnJvbSAnLi9ncmlkc3Rlci5pbnRlcmZhY2UnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgR3JpZHN0ZXJTd2FwIHtcclxuICBwcml2YXRlIHN3YXBlZEl0ZW06IEdyaWRzdGVySXRlbUNvbXBvbmVudEludGVyZmFjZSB8IHVuZGVmaW5lZDtcclxuICBwcml2YXRlIGdyaWRzdGVySXRlbTogR3JpZHN0ZXJJdGVtQ29tcG9uZW50SW50ZXJmYWNlO1xyXG4gIHByaXZhdGUgZ3JpZHN0ZXI6IEdyaWRzdGVyQ29tcG9uZW50SW50ZXJmYWNlO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihncmlkc3Rlckl0ZW06IEdyaWRzdGVySXRlbUNvbXBvbmVudEludGVyZmFjZSkge1xyXG4gICAgdGhpcy5ncmlkc3Rlckl0ZW0gPSBncmlkc3Rlckl0ZW07XHJcbiAgICB0aGlzLmdyaWRzdGVyID0gZ3JpZHN0ZXJJdGVtLmdyaWRzdGVyO1xyXG4gIH1cclxuXHJcbiAgZGVzdHJveSgpOiB2b2lkIHtcclxuICAgIGRlbGV0ZSB0aGlzLmdyaWRzdGVyO1xyXG4gICAgZGVsZXRlIHRoaXMuZ3JpZHN0ZXJJdGVtO1xyXG4gICAgZGVsZXRlIHRoaXMuc3dhcGVkSXRlbTtcclxuICB9XHJcblxyXG4gIHN3YXBJdGVtcygpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmdyaWRzdGVyLiRvcHRpb25zLnN3YXApIHtcclxuICAgICAgdGhpcy5jaGVja1N3YXBCYWNrKCk7XHJcbiAgICAgIHRoaXMuY2hlY2tTd2FwKHRoaXMuZ3JpZHN0ZXJJdGVtKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNoZWNrU3dhcEJhY2soKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5zd2FwZWRJdGVtKSB7XHJcbiAgICAgIGNvbnN0IHg6IG51bWJlciA9IHRoaXMuc3dhcGVkSXRlbS4kaXRlbS54O1xyXG4gICAgICBjb25zdCB5OiBudW1iZXIgPSB0aGlzLnN3YXBlZEl0ZW0uJGl0ZW0ueTtcclxuICAgICAgdGhpcy5zd2FwZWRJdGVtLiRpdGVtLnggPSB0aGlzLnN3YXBlZEl0ZW0uaXRlbS54IHx8IDA7XHJcbiAgICAgIHRoaXMuc3dhcGVkSXRlbS4kaXRlbS55ID0gdGhpcy5zd2FwZWRJdGVtLml0ZW0ueSB8fCAwO1xyXG4gICAgICBpZiAodGhpcy5ncmlkc3Rlci5jaGVja0NvbGxpc2lvbih0aGlzLnN3YXBlZEl0ZW0uJGl0ZW0pKSB7XHJcbiAgICAgICAgdGhpcy5zd2FwZWRJdGVtLiRpdGVtLnggPSB4O1xyXG4gICAgICAgIHRoaXMuc3dhcGVkSXRlbS4kaXRlbS55ID0geTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnN3YXBlZEl0ZW0uc2V0U2l6ZSgpO1xyXG4gICAgICAgIHRoaXMuZ3JpZHN0ZXJJdGVtLiRpdGVtLnggPSB0aGlzLmdyaWRzdGVySXRlbS5pdGVtLnggfHwgMDtcclxuICAgICAgICB0aGlzLmdyaWRzdGVySXRlbS4kaXRlbS55ID0gdGhpcy5ncmlkc3Rlckl0ZW0uaXRlbS55IHx8IDA7XHJcbiAgICAgICAgdGhpcy5zd2FwZWRJdGVtID0gdW5kZWZpbmVkO1xyXG4gICAgICB9XHJcblxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVzdG9yZVN3YXBJdGVtKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuc3dhcGVkSXRlbSkge1xyXG4gICAgICB0aGlzLnN3YXBlZEl0ZW0uJGl0ZW0ueCA9IHRoaXMuc3dhcGVkSXRlbS5pdGVtLnggfHwgMDtcclxuICAgICAgdGhpcy5zd2FwZWRJdGVtLiRpdGVtLnkgPSB0aGlzLnN3YXBlZEl0ZW0uaXRlbS55IHx8IDA7XHJcbiAgICAgIHRoaXMuc3dhcGVkSXRlbS5zZXRTaXplKCk7XHJcbiAgICAgIHRoaXMuc3dhcGVkSXRlbSA9IHVuZGVmaW5lZDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNldFN3YXBJdGVtKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuc3dhcGVkSXRlbSkge1xyXG4gICAgICB0aGlzLnN3YXBlZEl0ZW0uY2hlY2tJdGVtQ2hhbmdlcyh0aGlzLnN3YXBlZEl0ZW0uJGl0ZW0sIHRoaXMuc3dhcGVkSXRlbS5pdGVtKTtcclxuICAgICAgdGhpcy5zd2FwZWRJdGVtID0gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2hlY2tTd2FwKHB1c2hlZEJ5OiBHcmlkc3Rlckl0ZW1Db21wb25lbnRJbnRlcmZhY2UpOiB2b2lkIHtcclxuICAgIGxldCBncmlkc3Rlckl0ZW1Db2xsaXNpb247XHJcbiAgICBpZiAodGhpcy5ncmlkc3Rlci4kb3B0aW9ucy5zd2FwV2hpbGVEcmFnZ2luZykge1xyXG4gICAgICBncmlkc3Rlckl0ZW1Db2xsaXNpb24gPSB0aGlzLmdyaWRzdGVyLmNoZWNrQ29sbGlzaW9uRm9yU3dhcGluZyhwdXNoZWRCeS4kaXRlbSk7XHJcbiAgICB9ZWxzZXtcclxuICAgICAgZ3JpZHN0ZXJJdGVtQ29sbGlzaW9uID0gdGhpcy5ncmlkc3Rlci5jaGVja0NvbGxpc2lvbihwdXNoZWRCeS4kaXRlbSk7XHJcbiAgICB9XHJcbiAgICBpZiAoZ3JpZHN0ZXJJdGVtQ29sbGlzaW9uICYmIGdyaWRzdGVySXRlbUNvbGxpc2lvbiAhPT0gdHJ1ZSAmJiBncmlkc3Rlckl0ZW1Db2xsaXNpb24uY2FuQmVEcmFnZ2VkKCkpIHtcclxuICAgICAgY29uc3QgZ3JpZHN0ZXJJdGVtQ29sbGlkZTogR3JpZHN0ZXJJdGVtQ29tcG9uZW50SW50ZXJmYWNlID0gZ3JpZHN0ZXJJdGVtQ29sbGlzaW9uO1xyXG4gICAgICBjb25zdCBjb3B5Q29sbGlzaW9uWCA9IGdyaWRzdGVySXRlbUNvbGxpZGUuJGl0ZW0ueDtcclxuICAgICAgY29uc3QgY29weUNvbGxpc2lvblkgPSBncmlkc3Rlckl0ZW1Db2xsaWRlLiRpdGVtLnk7XHJcbiAgICAgIGNvbnN0IGNvcHlYID0gcHVzaGVkQnkuJGl0ZW0ueDtcclxuICAgICAgY29uc3QgY29weVkgPSBwdXNoZWRCeS4kaXRlbS55O1xyXG4gICAgICBncmlkc3Rlckl0ZW1Db2xsaWRlLiRpdGVtLnggPSBwdXNoZWRCeS5pdGVtLnggfHwgMDtcclxuICAgICAgZ3JpZHN0ZXJJdGVtQ29sbGlkZS4kaXRlbS55ID0gcHVzaGVkQnkuaXRlbS55IHx8IDA7XHJcbiAgICAgIHB1c2hlZEJ5LiRpdGVtLnggPSBncmlkc3Rlckl0ZW1Db2xsaWRlLml0ZW0ueCB8fCAwO1xyXG4gICAgICBwdXNoZWRCeS4kaXRlbS55ID0gZ3JpZHN0ZXJJdGVtQ29sbGlkZS5pdGVtLnkgfHwgMDtcclxuICAgICAgaWYgKHRoaXMuZ3JpZHN0ZXIuY2hlY2tDb2xsaXNpb24oZ3JpZHN0ZXJJdGVtQ29sbGlkZS4kaXRlbSkgfHwgdGhpcy5ncmlkc3Rlci5jaGVja0NvbGxpc2lvbihwdXNoZWRCeS4kaXRlbSkpIHtcclxuICAgICAgICBwdXNoZWRCeS4kaXRlbS54ID0gY29weVg7XHJcbiAgICAgICAgcHVzaGVkQnkuJGl0ZW0ueSA9IGNvcHlZO1xyXG4gICAgICAgIGdyaWRzdGVySXRlbUNvbGxpZGUuJGl0ZW0ueCA9IGNvcHlDb2xsaXNpb25YO1xyXG4gICAgICAgIGdyaWRzdGVySXRlbUNvbGxpZGUuJGl0ZW0ueSA9IGNvcHlDb2xsaXNpb25ZO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGdyaWRzdGVySXRlbUNvbGxpZGUuc2V0U2l6ZSgpO1xyXG4gICAgICAgIHRoaXMuc3dhcGVkSXRlbSA9IGdyaWRzdGVySXRlbUNvbGxpZGU7XHJcbiAgICAgICAgaWYgKHRoaXMuZ3JpZHN0ZXIuJG9wdGlvbnMuc3dhcFdoaWxlRHJhZ2dpbmcpIHtcclxuICAgICAgICAgIHRoaXMuZ3JpZHN0ZXJJdGVtLmNoZWNrSXRlbUNoYW5nZXModGhpcy5ncmlkc3Rlckl0ZW0uJGl0ZW0sIHRoaXMuZ3JpZHN0ZXJJdGVtLml0ZW0pO1xyXG4gICAgICAgICAgdGhpcy5zZXRTd2FwSXRlbSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=