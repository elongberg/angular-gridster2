/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, Renderer2, ViewEncapsulation, Inject } from '@angular/core';
import { GridsterComponent } from './gridster.component';
var GridsterPreviewComponent = /** @class */ (function () {
    function GridsterPreviewComponent(el, gridster, renderer) {
        this.renderer = renderer;
        this.el = el.nativeElement;
        this.gridster = gridster;
        this.gridster.previewStyle = this.previewStyle.bind(this);
    }
    /**
     * @return {?}
     */
    GridsterPreviewComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        delete this.el;
        delete this.gridster.previewStyle;
        delete this.gridster;
    };
    /**
     * @param {?=} drag
     * @return {?}
     */
    GridsterPreviewComponent.prototype.previewStyle = /**
     * @param {?=} drag
     * @return {?}
     */
    function (drag) {
        if (!this.gridster.movingItem) {
            this.renderer.setStyle(this.el, 'display', '');
        }
        else {
            if (this.gridster.compact && drag) {
                this.gridster.compact.checkCompactItem(this.gridster.movingItem);
            }
            this.renderer.setStyle(this.el, 'display', 'block');
            this.gridster.gridRenderer.updateItem(this.el, this.gridster.movingItem, this.renderer);
        }
    };
    GridsterPreviewComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gridster-preview',
                    template: '',
                    encapsulation: ViewEncapsulation.None,
                    styles: ["gridster-preview{position:absolute;display:none;background:rgba(0,0,0,.15)}"]
                }] }
    ];
    /** @nocollapse */
    GridsterPreviewComponent.ctorParameters = function () { return [
        { type: ElementRef, decorators: [{ type: Inject, args: [ElementRef,] }] },
        { type: GridsterComponent },
        { type: Renderer2, decorators: [{ type: Inject, args: [Renderer2,] }] }
    ]; };
    return GridsterPreviewComponent;
}());
export { GridsterPreviewComponent };
if (false) {
    /** @type {?} */
    GridsterPreviewComponent.prototype.el;
    /** @type {?} */
    GridsterPreviewComponent.prototype.gridster;
    /** @type {?} */
    GridsterPreviewComponent.prototype.renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZHN0ZXJQcmV2aWV3LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItZ3JpZHN0ZXIyLyIsInNvdXJjZXMiOlsibGliL2dyaWRzdGVyUHJldmlldy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsVUFBVSxFQUFtQixTQUFTLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRTNHLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBRXZEO0lBVUUsa0NBQWlDLEVBQWMsRUFBRyxRQUEyQixFQUE0QixRQUFtQjtRQUFuQixhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQzFILElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLGFBQWEsQ0FBQztRQUMzQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM1RCxDQUFDOzs7O0lBRUQsOENBQVc7OztJQUFYO1FBQ0UsT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDO1FBQ2YsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQztRQUNsQyxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdkIsQ0FBQzs7Ozs7SUFFRCwrQ0FBWTs7OztJQUFaLFVBQWEsSUFBYztRQUN6QixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUU7WUFDN0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxTQUFTLEVBQUUsRUFBRSxDQUFDLENBQUM7U0FDaEQ7YUFBTTtZQUNMLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLElBQUksSUFBSSxFQUFFO2dCQUNqQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2FBQ2xFO1lBQ0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFDcEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ3pGO0lBQ0gsQ0FBQzs7Z0JBaENGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsa0JBQWtCO29CQUM1QixRQUFRLEVBQUUsRUFBRTtvQkFFWixhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTs7aUJBQ3RDOzs7O2dCQVRrQixVQUFVLHVCQWNkLE1BQU0sU0FBQyxVQUFVO2dCQVp4QixpQkFBaUI7Z0JBRnVCLFNBQVMsdUJBY3lCLE1BQU0sU0FBQyxTQUFTOztJQXVCbEcsK0JBQUM7Q0FBQSxBQWpDRCxJQWlDQztTQTNCWSx3QkFBd0I7OztJQUNuQyxzQ0FBUTs7SUFDUiw0Q0FBNEI7O0lBRW1ELDRDQUE2QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBFbGVtZW50UmVmLCBIb3N0LCBPbkRlc3Ryb3ksIFJlbmRlcmVyMiwgVmlld0VuY2Fwc3VsYXRpb24sIEluamVjdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQge0dyaWRzdGVyQ29tcG9uZW50fSBmcm9tICcuL2dyaWRzdGVyLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2dyaWRzdGVyLXByZXZpZXcnLFxyXG4gIHRlbXBsYXRlOiAnJyxcclxuICBzdHlsZVVybHM6IFsnLi9ncmlkc3RlclByZXZpZXcuY3NzJ10sXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxyXG59KVxyXG5leHBvcnQgY2xhc3MgR3JpZHN0ZXJQcmV2aWV3Q29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95IHtcclxuICBlbDogYW55O1xyXG4gIGdyaWRzdGVyOiBHcmlkc3RlckNvbXBvbmVudDtcclxuXHJcbiAgY29uc3RydWN0b3IoQEluamVjdChFbGVtZW50UmVmKSAgZWw6IEVsZW1lbnRSZWYsICBncmlkc3RlcjogR3JpZHN0ZXJDb21wb25lbnQsIEBJbmplY3QoUmVuZGVyZXIyKSBwdWJsaWMgcmVuZGVyZXI6IFJlbmRlcmVyMikge1xyXG4gICAgdGhpcy5lbCA9IGVsLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICB0aGlzLmdyaWRzdGVyID0gZ3JpZHN0ZXI7XHJcbiAgICB0aGlzLmdyaWRzdGVyLnByZXZpZXdTdHlsZSA9IHRoaXMucHJldmlld1N0eWxlLmJpbmQodGhpcyk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIGRlbGV0ZSB0aGlzLmVsO1xyXG4gICAgZGVsZXRlIHRoaXMuZ3JpZHN0ZXIucHJldmlld1N0eWxlO1xyXG4gICAgZGVsZXRlIHRoaXMuZ3JpZHN0ZXI7XHJcbiAgfVxyXG5cclxuICBwcmV2aWV3U3R5bGUoZHJhZz86IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5ncmlkc3Rlci5tb3ZpbmdJdGVtKSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbCwgJ2Rpc3BsYXknLCAnJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAodGhpcy5ncmlkc3Rlci5jb21wYWN0ICYmIGRyYWcpIHtcclxuICAgICAgICB0aGlzLmdyaWRzdGVyLmNvbXBhY3QuY2hlY2tDb21wYWN0SXRlbSh0aGlzLmdyaWRzdGVyLm1vdmluZ0l0ZW0pO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbCwgJ2Rpc3BsYXknLCAnYmxvY2snKTtcclxuICAgICAgdGhpcy5ncmlkc3Rlci5ncmlkUmVuZGVyZXIudXBkYXRlSXRlbSh0aGlzLmVsLCB0aGlzLmdyaWRzdGVyLm1vdmluZ0l0ZW0sIHRoaXMucmVuZGVyZXIpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=