/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CompactType, DisplayGrid, GridType } from './gridsterConfig.interface';
/** @type {?} */
export const GridsterConfigService = {
    gridType: GridType.Fit,
    // 'fit' will fit the items in the container without scroll;
    // 'scrollVertical' will fit on width and height of the items will be the same as the width
    // 'scrollHorizontal' will fit on height and width of the items will be the same as the height
    // 'fixed' will set the rows and columns dimensions based on fixedColWidth and fixedRowHeight options
    // 'verticalFixed' will set the rows to fixedRowHeight and columns width will fit the space available
    // 'horizontalFixed' will set the columns to fixedColWidth and rows height will fit the space available
    fixedColWidth: 250,
    // fixed col width for gridType: 'fixed'
    fixedRowHeight: 250,
    // fixed row height for gridType: 'fixed'
    keepFixedHeightInMobile: false,
    // keep the height from fixed gridType in mobile layout
    keepFixedWidthInMobile: false,
    // keep the width from fixed gridType in mobile layout
    setGridSize: false,
    // sets grid size depending on content
    compactType: CompactType.None,
    // compact items: 'none' | 'compactUp' | 'compactLeft' | 'compactUp&Left' | 'compactLeft&Up'
    mobileBreakpoint: 640,
    // if the screen is not wider that this, remove the grid layout and stack the items
    minCols: 1,
    // minimum amount of columns in the grid
    maxCols: 100,
    // maximum amount of columns in the grid
    minRows: 1,
    // minimum amount of rows in the grid
    maxRows: 100,
    // maximum amount of rows in the grid
    defaultItemCols: 1,
    // default width of an item in columns
    defaultItemRows: 1,
    // default height of an item in rows
    maxItemCols: 50,
    // max item number of cols
    maxItemRows: 50,
    // max item number of rows
    minItemCols: 1,
    // min item number of columns
    minItemRows: 1,
    // min item number of rows
    minItemArea: 1,
    // min item area: cols * rows
    maxItemArea: 2500,
    // max item area: cols * rows
    margin: 10,
    // margin between grid items
    outerMargin: true,
    // if margins will apply to the sides of the container
    outerMarginTop: null,
    // override outer margin for grid
    outerMarginRight: null,
    // override outer margin for grid
    outerMarginBottom: null,
    // override outer margin for grid
    outerMarginLeft: null,
    // override outer margin for grid
    useTransformPositioning: true,
    // toggle between transform or top/left positioning of items
    scrollSensitivity: 10,
    // margin of the dashboard where to start scrolling
    scrollSpeed: 20,
    // how much to scroll each mouse move when in the scrollSensitivity zone
    initCallback: undefined,
    // callback to call after grid has initialized. Arguments: gridsterComponent
    destroyCallback: undefined,
    // callback to call after grid has destroyed. Arguments: gridsterComponent
    gridSizeChangedCallback: undefined,
    // callback to call after grid has changed size. Arguments: gridsterComponent
    itemChangeCallback: undefined,
    // callback to call for each item when is changes x, y, rows, cols.
    // Arguments: gridsterItem, gridsterItemComponent
    itemResizeCallback: undefined,
    // callback to call for each item when width/height changes.
    // Arguments: gridsterItem, gridsterItemComponent
    itemInitCallback: undefined,
    // callback to call for each item when is initialized.
    // Arguments: gridsterItem, gridsterItemComponent
    itemRemovedCallback: undefined,
    // callback to call for each item when is initialized.
    // Arguments: gridsterItem, gridsterItemComponent
    itemValidateCallback: undefined,
    // callback to call to validate item position/size. Return true if valid.
    // Arguments: gridsterItem
    enableEmptyCellClick: false,
    // enable empty cell click events
    enableEmptyCellContextMenu: false,
    // enable empty cell context menu (right click) events
    enableEmptyCellDrop: false,
    // enable empty cell drop events
    enableEmptyCellDrag: false,
    // enable empty cell drag events
    enableOccupiedCellDrop: false,
    // enable occupied cell drop events
    emptyCellClickCallback: undefined,
    // empty cell click callback
    emptyCellContextMenuCallback: undefined,
    // empty cell context menu (right click) callback
    emptyCellDropCallback: undefined,
    // empty cell drag drop callback. HTML5 Drag & Drop
    emptyCellDragCallback: undefined,
    // empty cell drag and create item like excel cell selection
    emptyCellDragMaxCols: 50,
    // limit empty cell drag max cols
    emptyCellDragMaxRows: 50,
    // limit empty cell drag max rows
    // Arguments: event, gridsterItem{x, y, rows: defaultItemRows, cols: defaultItemCols}
    ignoreMarginInRow: false,
    // ignore the gap between rows for items which span multiple rows (see #162, #224)
    draggable: {
        delayStart: 0,
        // milliseconds to delay the start of drag, useful for touch interaction
        enabled: false,
        // enable/disable draggable items
        ignoreContentClass: 'gridster-item-content',
        // default content class to ignore the drag event from
        ignoreContent: false,
        // if true drag will start only from elements from `dragHandleClass`
        dragHandleClass: 'drag-handler',
        // drag event only from this class. If `ignoreContent` is true.
        stop: undefined,
        // callback when dragging an item stops.  Accepts Promise return to cancel/approve drag.
        start: undefined,
        // callback when dragging an item starts.
        // Arguments: item, gridsterItem, event
        dropOverItems: false,
        // enable drop items on top other item
        dropOverItemsCallback: undefined // callback on drop over another item
        // Arguments: source, target, gridComponent
    },
    resizable: {
        delayStart: 0,
        // milliseconds to delay the start of resize, useful for touch interaction
        enabled: false,
        // enable/disable resizable items
        handles: {
            s: true,
            e: true,
            n: true,
            w: true,
            se: true,
            ne: true,
            sw: true,
            nw: true
        },
        // resizable edges of an item
        stop: undefined,
        // callback when resizing an item stops. Accepts Promise return to cancel/approve resize.
        start: undefined // callback when resizing an item starts.
        // Arguments: item, gridsterItem, event
    },
    swap: true,
    // allow items to switch position if drop on top of another
    swapWhileDragging: false,
    // allow items to switch position while dragging
    pushItems: false,
    // push items when resizing and dragging
    disablePushOnDrag: false,
    // disable push on drag
    disablePushOnResize: false,
    // disable push on resize
    pushDirections: { north: true, east: true, south: true, west: true },
    // control the directions items are pushed
    pushResizeItems: false,
    // on resize of item will shrink adjacent items
    displayGrid: DisplayGrid.OnDragAndResize,
    // display background grid of rows and columns
    disableWindowResize: false,
    // disable the window on resize listener. This will stop grid to recalculate on window resize.
    disableWarnings: false,
    // disable console log warnings about misplacement of grid items
    scrollToNewItems: false,
    // scroll to new items placed in a scrollable view
    disableScrollHorizontal: false,
    // disable horizontal scrolling
    disableScrollVertical: false,
    // disable vertical scrolling
    disableAutoPositionOnConflict: false // disable auto-position of items on conflict state
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZHN0ZXJDb25maWcuY29uc3RhbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWdyaWRzdGVyMi8iLCJzb3VyY2VzIjpbImxpYi9ncmlkc3RlckNvbmZpZy5jb25zdGFudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFdBQVcsRUFBRSxXQUFXLEVBQWtCLFFBQVEsRUFBQyxNQUFNLDRCQUE0QixDQUFDOztBQUU5RixNQUFNLE9BQU8scUJBQXFCLEdBQW1CO0lBQ25ELFFBQVEsRUFBRSxRQUFRLENBQUMsR0FBRzs7Ozs7OztJQU10QixhQUFhLEVBQUUsR0FBRzs7SUFDbEIsY0FBYyxFQUFFLEdBQUc7O0lBQ25CLHVCQUF1QixFQUFFLEtBQUs7O0lBQzlCLHNCQUFzQixFQUFFLEtBQUs7O0lBQzdCLFdBQVcsRUFBRSxLQUFLOztJQUNsQixXQUFXLEVBQUUsV0FBVyxDQUFDLElBQUk7O0lBQzdCLGdCQUFnQixFQUFFLEdBQUc7O0lBQ3JCLE9BQU8sRUFBRSxDQUFDOztJQUNWLE9BQU8sRUFBRSxHQUFHOztJQUNaLE9BQU8sRUFBRSxDQUFDOztJQUNWLE9BQU8sRUFBRSxHQUFHOztJQUNaLGVBQWUsRUFBRSxDQUFDOztJQUNsQixlQUFlLEVBQUUsQ0FBQzs7SUFDbEIsV0FBVyxFQUFFLEVBQUU7O0lBQ2YsV0FBVyxFQUFFLEVBQUU7O0lBQ2YsV0FBVyxFQUFFLENBQUM7O0lBQ2QsV0FBVyxFQUFFLENBQUM7O0lBQ2QsV0FBVyxFQUFFLENBQUM7O0lBQ2QsV0FBVyxFQUFFLElBQUk7O0lBQ2pCLE1BQU0sRUFBRSxFQUFFOztJQUNWLFdBQVcsRUFBRSxJQUFJOztJQUNqQixjQUFjLEVBQUUsSUFBSTs7SUFDcEIsZ0JBQWdCLEVBQUUsSUFBSTs7SUFDdEIsaUJBQWlCLEVBQUUsSUFBSTs7SUFDdkIsZUFBZSxFQUFFLElBQUk7O0lBQ3JCLHVCQUF1QixFQUFFLElBQUk7O0lBQzdCLGlCQUFpQixFQUFFLEVBQUU7O0lBQ3JCLFdBQVcsRUFBRSxFQUFFOztJQUNmLFlBQVksRUFBRSxTQUFTOztJQUN2QixlQUFlLEVBQUUsU0FBUzs7SUFDMUIsdUJBQXVCLEVBQUUsU0FBUzs7SUFDbEMsa0JBQWtCLEVBQUUsU0FBUzs7O0lBRTdCLGtCQUFrQixFQUFFLFNBQVM7OztJQUU3QixnQkFBZ0IsRUFBRSxTQUFTOzs7SUFFM0IsbUJBQW1CLEVBQUUsU0FBUzs7O0lBRTlCLG9CQUFvQixFQUFFLFNBQVM7OztJQUUvQixvQkFBb0IsRUFBRSxLQUFLOztJQUMzQiwwQkFBMEIsRUFBRSxLQUFLOztJQUNqQyxtQkFBbUIsRUFBRSxLQUFLOztJQUMxQixtQkFBbUIsRUFBRSxLQUFLOztJQUMxQixzQkFBc0IsRUFBRSxLQUFLOztJQUM3QixzQkFBc0IsRUFBRSxTQUFTOztJQUNqQyw0QkFBNEIsRUFBRSxTQUFTOztJQUN2QyxxQkFBcUIsRUFBRSxTQUFTOztJQUNoQyxxQkFBcUIsRUFBRSxTQUFTOztJQUNoQyxvQkFBb0IsRUFBRSxFQUFFOztJQUN4QixvQkFBb0IsRUFBRSxFQUFFOzs7SUFFeEIsaUJBQWlCLEVBQUUsS0FBSzs7SUFDeEIsU0FBUyxFQUFFO1FBQ1QsVUFBVSxFQUFFLENBQUM7O1FBQ2IsT0FBTyxFQUFFLEtBQUs7O1FBQ2Qsa0JBQWtCLEVBQUUsdUJBQXVCOztRQUMzQyxhQUFhLEVBQUUsS0FBSzs7UUFDcEIsZUFBZSxFQUFFLGNBQWM7O1FBQy9CLElBQUksRUFBRSxTQUFTOztRQUNmLEtBQUssRUFBRSxTQUFTOzs7UUFFaEIsYUFBYSxFQUFFLEtBQUs7O1FBQ3BCLHFCQUFxQixFQUFFLFNBQVMsQ0FBQyxxQ0FBcUM7UUFDdEUsMkNBQTJDO0tBQzVDO0lBQ0QsU0FBUyxFQUFFO1FBQ1QsVUFBVSxFQUFFLENBQUM7O1FBQ2IsT0FBTyxFQUFFLEtBQUs7O1FBQ2QsT0FBTyxFQUFFO1lBQ1AsQ0FBQyxFQUFFLElBQUk7WUFDUCxDQUFDLEVBQUUsSUFBSTtZQUNQLENBQUMsRUFBRSxJQUFJO1lBQ1AsQ0FBQyxFQUFFLElBQUk7WUFDUCxFQUFFLEVBQUUsSUFBSTtZQUNSLEVBQUUsRUFBRSxJQUFJO1lBQ1IsRUFBRSxFQUFFLElBQUk7WUFDUixFQUFFLEVBQUUsSUFBSTtTQUNUOztRQUNELElBQUksRUFBRSxTQUFTOztRQUNmLEtBQUssRUFBRSxTQUFTLENBQUMseUNBQXlDO1FBQzFELHVDQUF1QztLQUN4QztJQUNELElBQUksRUFBRSxJQUFJOztJQUNWLGlCQUFpQixFQUFFLEtBQUs7O0lBQ3hCLFNBQVMsRUFBRSxLQUFLOztJQUNoQixpQkFBaUIsRUFBRSxLQUFLOztJQUN4QixtQkFBbUIsRUFBRSxLQUFLOztJQUMxQixjQUFjLEVBQUUsRUFBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFDOztJQUNsRSxlQUFlLEVBQUUsS0FBSzs7SUFDdEIsV0FBVyxFQUFFLFdBQVcsQ0FBQyxlQUFlOztJQUN4QyxtQkFBbUIsRUFBRSxLQUFLOztJQUMxQixlQUFlLEVBQUUsS0FBSzs7SUFDdEIsZ0JBQWdCLEVBQUUsS0FBSzs7SUFDdkIsdUJBQXVCLEVBQUUsS0FBSzs7SUFDOUIscUJBQXFCLEVBQUUsS0FBSzs7SUFDNUIsNkJBQTZCLEVBQUUsS0FBSyxDQUFFLG1EQUFtRDtDQUMxRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcGFjdFR5cGUsIERpc3BsYXlHcmlkLCBHcmlkc3RlckNvbmZpZywgR3JpZFR5cGV9IGZyb20gJy4vZ3JpZHN0ZXJDb25maWcuaW50ZXJmYWNlJztcclxuXHJcbmV4cG9ydCBjb25zdCBHcmlkc3RlckNvbmZpZ1NlcnZpY2U6IEdyaWRzdGVyQ29uZmlnID0ge1xyXG4gIGdyaWRUeXBlOiBHcmlkVHlwZS5GaXQsIC8vICdmaXQnIHdpbGwgZml0IHRoZSBpdGVtcyBpbiB0aGUgY29udGFpbmVyIHdpdGhvdXQgc2Nyb2xsO1xyXG4gIC8vICdzY3JvbGxWZXJ0aWNhbCcgd2lsbCBmaXQgb24gd2lkdGggYW5kIGhlaWdodCBvZiB0aGUgaXRlbXMgd2lsbCBiZSB0aGUgc2FtZSBhcyB0aGUgd2lkdGhcclxuICAvLyAnc2Nyb2xsSG9yaXpvbnRhbCcgd2lsbCBmaXQgb24gaGVpZ2h0IGFuZCB3aWR0aCBvZiB0aGUgaXRlbXMgd2lsbCBiZSB0aGUgc2FtZSBhcyB0aGUgaGVpZ2h0XHJcbiAgLy8gJ2ZpeGVkJyB3aWxsIHNldCB0aGUgcm93cyBhbmQgY29sdW1ucyBkaW1lbnNpb25zIGJhc2VkIG9uIGZpeGVkQ29sV2lkdGggYW5kIGZpeGVkUm93SGVpZ2h0IG9wdGlvbnNcclxuICAvLyAndmVydGljYWxGaXhlZCcgd2lsbCBzZXQgdGhlIHJvd3MgdG8gZml4ZWRSb3dIZWlnaHQgYW5kIGNvbHVtbnMgd2lkdGggd2lsbCBmaXQgdGhlIHNwYWNlIGF2YWlsYWJsZVxyXG4gIC8vICdob3Jpem9udGFsRml4ZWQnIHdpbGwgc2V0IHRoZSBjb2x1bW5zIHRvIGZpeGVkQ29sV2lkdGggYW5kIHJvd3MgaGVpZ2h0IHdpbGwgZml0IHRoZSBzcGFjZSBhdmFpbGFibGVcclxuICBmaXhlZENvbFdpZHRoOiAyNTAsIC8vIGZpeGVkIGNvbCB3aWR0aCBmb3IgZ3JpZFR5cGU6ICdmaXhlZCdcclxuICBmaXhlZFJvd0hlaWdodDogMjUwLCAvLyBmaXhlZCByb3cgaGVpZ2h0IGZvciBncmlkVHlwZTogJ2ZpeGVkJ1xyXG4gIGtlZXBGaXhlZEhlaWdodEluTW9iaWxlOiBmYWxzZSwgLy8ga2VlcCB0aGUgaGVpZ2h0IGZyb20gZml4ZWQgZ3JpZFR5cGUgaW4gbW9iaWxlIGxheW91dFxyXG4gIGtlZXBGaXhlZFdpZHRoSW5Nb2JpbGU6IGZhbHNlLCAvLyBrZWVwIHRoZSB3aWR0aCBmcm9tIGZpeGVkIGdyaWRUeXBlIGluIG1vYmlsZSBsYXlvdXRcclxuICBzZXRHcmlkU2l6ZTogZmFsc2UsIC8vIHNldHMgZ3JpZCBzaXplIGRlcGVuZGluZyBvbiBjb250ZW50XHJcbiAgY29tcGFjdFR5cGU6IENvbXBhY3RUeXBlLk5vbmUsIC8vIGNvbXBhY3QgaXRlbXM6ICdub25lJyB8ICdjb21wYWN0VXAnIHwgJ2NvbXBhY3RMZWZ0JyB8ICdjb21wYWN0VXAmTGVmdCcgfCAnY29tcGFjdExlZnQmVXAnXHJcbiAgbW9iaWxlQnJlYWtwb2ludDogNjQwLCAvLyBpZiB0aGUgc2NyZWVuIGlzIG5vdCB3aWRlciB0aGF0IHRoaXMsIHJlbW92ZSB0aGUgZ3JpZCBsYXlvdXQgYW5kIHN0YWNrIHRoZSBpdGVtc1xyXG4gIG1pbkNvbHM6IDEsIC8vIG1pbmltdW0gYW1vdW50IG9mIGNvbHVtbnMgaW4gdGhlIGdyaWRcclxuICBtYXhDb2xzOiAxMDAsIC8vIG1heGltdW0gYW1vdW50IG9mIGNvbHVtbnMgaW4gdGhlIGdyaWRcclxuICBtaW5Sb3dzOiAxLCAvLyBtaW5pbXVtIGFtb3VudCBvZiByb3dzIGluIHRoZSBncmlkXHJcbiAgbWF4Um93czogMTAwLCAvLyBtYXhpbXVtIGFtb3VudCBvZiByb3dzIGluIHRoZSBncmlkXHJcbiAgZGVmYXVsdEl0ZW1Db2xzOiAxLCAvLyBkZWZhdWx0IHdpZHRoIG9mIGFuIGl0ZW0gaW4gY29sdW1uc1xyXG4gIGRlZmF1bHRJdGVtUm93czogMSwgLy8gZGVmYXVsdCBoZWlnaHQgb2YgYW4gaXRlbSBpbiByb3dzXHJcbiAgbWF4SXRlbUNvbHM6IDUwLCAvLyBtYXggaXRlbSBudW1iZXIgb2YgY29sc1xyXG4gIG1heEl0ZW1Sb3dzOiA1MCwgLy8gbWF4IGl0ZW0gbnVtYmVyIG9mIHJvd3NcclxuICBtaW5JdGVtQ29sczogMSwgLy8gbWluIGl0ZW0gbnVtYmVyIG9mIGNvbHVtbnNcclxuICBtaW5JdGVtUm93czogMSwgLy8gbWluIGl0ZW0gbnVtYmVyIG9mIHJvd3NcclxuICBtaW5JdGVtQXJlYTogMSwgLy8gbWluIGl0ZW0gYXJlYTogY29scyAqIHJvd3NcclxuICBtYXhJdGVtQXJlYTogMjUwMCwgLy8gbWF4IGl0ZW0gYXJlYTogY29scyAqIHJvd3NcclxuICBtYXJnaW46IDEwLCAgLy8gbWFyZ2luIGJldHdlZW4gZ3JpZCBpdGVtc1xyXG4gIG91dGVyTWFyZ2luOiB0cnVlLCAgLy8gaWYgbWFyZ2lucyB3aWxsIGFwcGx5IHRvIHRoZSBzaWRlcyBvZiB0aGUgY29udGFpbmVyXHJcbiAgb3V0ZXJNYXJnaW5Ub3A6IG51bGwsIC8vIG92ZXJyaWRlIG91dGVyIG1hcmdpbiBmb3IgZ3JpZFxyXG4gIG91dGVyTWFyZ2luUmlnaHQ6IG51bGwsIC8vIG92ZXJyaWRlIG91dGVyIG1hcmdpbiBmb3IgZ3JpZFxyXG4gIG91dGVyTWFyZ2luQm90dG9tOiBudWxsLCAvLyBvdmVycmlkZSBvdXRlciBtYXJnaW4gZm9yIGdyaWRcclxuICBvdXRlck1hcmdpbkxlZnQ6IG51bGwsIC8vIG92ZXJyaWRlIG91dGVyIG1hcmdpbiBmb3IgZ3JpZFxyXG4gIHVzZVRyYW5zZm9ybVBvc2l0aW9uaW5nOiB0cnVlLCAvLyB0b2dnbGUgYmV0d2VlbiB0cmFuc2Zvcm0gb3IgdG9wL2xlZnQgcG9zaXRpb25pbmcgb2YgaXRlbXNcclxuICBzY3JvbGxTZW5zaXRpdml0eTogMTAsICAvLyBtYXJnaW4gb2YgdGhlIGRhc2hib2FyZCB3aGVyZSB0byBzdGFydCBzY3JvbGxpbmdcclxuICBzY3JvbGxTcGVlZDogMjAsICAvLyBob3cgbXVjaCB0byBzY3JvbGwgZWFjaCBtb3VzZSBtb3ZlIHdoZW4gaW4gdGhlIHNjcm9sbFNlbnNpdGl2aXR5IHpvbmVcclxuICBpbml0Q2FsbGJhY2s6IHVuZGVmaW5lZCwgLy8gY2FsbGJhY2sgdG8gY2FsbCBhZnRlciBncmlkIGhhcyBpbml0aWFsaXplZC4gQXJndW1lbnRzOiBncmlkc3RlckNvbXBvbmVudFxyXG4gIGRlc3Ryb3lDYWxsYmFjazogdW5kZWZpbmVkLCAvLyBjYWxsYmFjayB0byBjYWxsIGFmdGVyIGdyaWQgaGFzIGRlc3Ryb3llZC4gQXJndW1lbnRzOiBncmlkc3RlckNvbXBvbmVudFxyXG4gIGdyaWRTaXplQ2hhbmdlZENhbGxiYWNrOiB1bmRlZmluZWQsIC8vIGNhbGxiYWNrIHRvIGNhbGwgYWZ0ZXIgZ3JpZCBoYXMgY2hhbmdlZCBzaXplLiBBcmd1bWVudHM6IGdyaWRzdGVyQ29tcG9uZW50XHJcbiAgaXRlbUNoYW5nZUNhbGxiYWNrOiB1bmRlZmluZWQsICAvLyBjYWxsYmFjayB0byBjYWxsIGZvciBlYWNoIGl0ZW0gd2hlbiBpcyBjaGFuZ2VzIHgsIHksIHJvd3MsIGNvbHMuXHJcbiAgLy8gQXJndW1lbnRzOiBncmlkc3Rlckl0ZW0sIGdyaWRzdGVySXRlbUNvbXBvbmVudFxyXG4gIGl0ZW1SZXNpemVDYWxsYmFjazogdW5kZWZpbmVkLCAgLy8gY2FsbGJhY2sgdG8gY2FsbCBmb3IgZWFjaCBpdGVtIHdoZW4gd2lkdGgvaGVpZ2h0IGNoYW5nZXMuXHJcbiAgLy8gQXJndW1lbnRzOiBncmlkc3Rlckl0ZW0sIGdyaWRzdGVySXRlbUNvbXBvbmVudFxyXG4gIGl0ZW1Jbml0Q2FsbGJhY2s6IHVuZGVmaW5lZCwgIC8vIGNhbGxiYWNrIHRvIGNhbGwgZm9yIGVhY2ggaXRlbSB3aGVuIGlzIGluaXRpYWxpemVkLlxyXG4gIC8vIEFyZ3VtZW50czogZ3JpZHN0ZXJJdGVtLCBncmlkc3Rlckl0ZW1Db21wb25lbnRcclxuICBpdGVtUmVtb3ZlZENhbGxiYWNrOiB1bmRlZmluZWQsICAvLyBjYWxsYmFjayB0byBjYWxsIGZvciBlYWNoIGl0ZW0gd2hlbiBpcyBpbml0aWFsaXplZC5cclxuICAvLyBBcmd1bWVudHM6IGdyaWRzdGVySXRlbSwgZ3JpZHN0ZXJJdGVtQ29tcG9uZW50XHJcbiAgaXRlbVZhbGlkYXRlQ2FsbGJhY2s6IHVuZGVmaW5lZCwgIC8vIGNhbGxiYWNrIHRvIGNhbGwgdG8gdmFsaWRhdGUgaXRlbSBwb3NpdGlvbi9zaXplLiBSZXR1cm4gdHJ1ZSBpZiB2YWxpZC5cclxuICAvLyBBcmd1bWVudHM6IGdyaWRzdGVySXRlbVxyXG4gIGVuYWJsZUVtcHR5Q2VsbENsaWNrOiBmYWxzZSwgLy8gZW5hYmxlIGVtcHR5IGNlbGwgY2xpY2sgZXZlbnRzXHJcbiAgZW5hYmxlRW1wdHlDZWxsQ29udGV4dE1lbnU6IGZhbHNlLCAvLyBlbmFibGUgZW1wdHkgY2VsbCBjb250ZXh0IG1lbnUgKHJpZ2h0IGNsaWNrKSBldmVudHNcclxuICBlbmFibGVFbXB0eUNlbGxEcm9wOiBmYWxzZSwgLy8gZW5hYmxlIGVtcHR5IGNlbGwgZHJvcCBldmVudHNcclxuICBlbmFibGVFbXB0eUNlbGxEcmFnOiBmYWxzZSwgLy8gZW5hYmxlIGVtcHR5IGNlbGwgZHJhZyBldmVudHNcclxuICBlbmFibGVPY2N1cGllZENlbGxEcm9wOiBmYWxzZSwgLy8gZW5hYmxlIG9jY3VwaWVkIGNlbGwgZHJvcCBldmVudHNcclxuICBlbXB0eUNlbGxDbGlja0NhbGxiYWNrOiB1bmRlZmluZWQsIC8vIGVtcHR5IGNlbGwgY2xpY2sgY2FsbGJhY2tcclxuICBlbXB0eUNlbGxDb250ZXh0TWVudUNhbGxiYWNrOiB1bmRlZmluZWQsIC8vIGVtcHR5IGNlbGwgY29udGV4dCBtZW51IChyaWdodCBjbGljaykgY2FsbGJhY2tcclxuICBlbXB0eUNlbGxEcm9wQ2FsbGJhY2s6IHVuZGVmaW5lZCwgLy8gZW1wdHkgY2VsbCBkcmFnIGRyb3AgY2FsbGJhY2suIEhUTUw1IERyYWcgJiBEcm9wXHJcbiAgZW1wdHlDZWxsRHJhZ0NhbGxiYWNrOiB1bmRlZmluZWQsIC8vIGVtcHR5IGNlbGwgZHJhZyBhbmQgY3JlYXRlIGl0ZW0gbGlrZSBleGNlbCBjZWxsIHNlbGVjdGlvblxyXG4gIGVtcHR5Q2VsbERyYWdNYXhDb2xzOiA1MCwgLy8gbGltaXQgZW1wdHkgY2VsbCBkcmFnIG1heCBjb2xzXHJcbiAgZW1wdHlDZWxsRHJhZ01heFJvd3M6IDUwLCAvLyBsaW1pdCBlbXB0eSBjZWxsIGRyYWcgbWF4IHJvd3NcclxuICAvLyBBcmd1bWVudHM6IGV2ZW50LCBncmlkc3Rlckl0ZW17eCwgeSwgcm93czogZGVmYXVsdEl0ZW1Sb3dzLCBjb2xzOiBkZWZhdWx0SXRlbUNvbHN9XHJcbiAgaWdub3JlTWFyZ2luSW5Sb3c6IGZhbHNlLCAvLyBpZ25vcmUgdGhlIGdhcCBiZXR3ZWVuIHJvd3MgZm9yIGl0ZW1zIHdoaWNoIHNwYW4gbXVsdGlwbGUgcm93cyAoc2VlICMxNjIsICMyMjQpXHJcbiAgZHJhZ2dhYmxlOiB7XHJcbiAgICBkZWxheVN0YXJ0OiAwLCAvLyBtaWxsaXNlY29uZHMgdG8gZGVsYXkgdGhlIHN0YXJ0IG9mIGRyYWcsIHVzZWZ1bCBmb3IgdG91Y2ggaW50ZXJhY3Rpb25cclxuICAgIGVuYWJsZWQ6IGZhbHNlLCAvLyBlbmFibGUvZGlzYWJsZSBkcmFnZ2FibGUgaXRlbXNcclxuICAgIGlnbm9yZUNvbnRlbnRDbGFzczogJ2dyaWRzdGVyLWl0ZW0tY29udGVudCcsIC8vIGRlZmF1bHQgY29udGVudCBjbGFzcyB0byBpZ25vcmUgdGhlIGRyYWcgZXZlbnQgZnJvbVxyXG4gICAgaWdub3JlQ29udGVudDogZmFsc2UsIC8vIGlmIHRydWUgZHJhZyB3aWxsIHN0YXJ0IG9ubHkgZnJvbSBlbGVtZW50cyBmcm9tIGBkcmFnSGFuZGxlQ2xhc3NgXHJcbiAgICBkcmFnSGFuZGxlQ2xhc3M6ICdkcmFnLWhhbmRsZXInLCAvLyBkcmFnIGV2ZW50IG9ubHkgZnJvbSB0aGlzIGNsYXNzLiBJZiBgaWdub3JlQ29udGVudGAgaXMgdHJ1ZS5cclxuICAgIHN0b3A6IHVuZGVmaW5lZCwgLy8gY2FsbGJhY2sgd2hlbiBkcmFnZ2luZyBhbiBpdGVtIHN0b3BzLiAgQWNjZXB0cyBQcm9taXNlIHJldHVybiB0byBjYW5jZWwvYXBwcm92ZSBkcmFnLlxyXG4gICAgc3RhcnQ6IHVuZGVmaW5lZCwgLy8gY2FsbGJhY2sgd2hlbiBkcmFnZ2luZyBhbiBpdGVtIHN0YXJ0cy5cclxuICAgIC8vIEFyZ3VtZW50czogaXRlbSwgZ3JpZHN0ZXJJdGVtLCBldmVudFxyXG4gICAgZHJvcE92ZXJJdGVtczogZmFsc2UsIC8vIGVuYWJsZSBkcm9wIGl0ZW1zIG9uIHRvcCBvdGhlciBpdGVtXHJcbiAgICBkcm9wT3Zlckl0ZW1zQ2FsbGJhY2s6IHVuZGVmaW5lZCAvLyBjYWxsYmFjayBvbiBkcm9wIG92ZXIgYW5vdGhlciBpdGVtXHJcbiAgICAvLyBBcmd1bWVudHM6IHNvdXJjZSwgdGFyZ2V0LCBncmlkQ29tcG9uZW50XHJcbiAgfSxcclxuICByZXNpemFibGU6IHtcclxuICAgIGRlbGF5U3RhcnQ6IDAsIC8vIG1pbGxpc2Vjb25kcyB0byBkZWxheSB0aGUgc3RhcnQgb2YgcmVzaXplLCB1c2VmdWwgZm9yIHRvdWNoIGludGVyYWN0aW9uXHJcbiAgICBlbmFibGVkOiBmYWxzZSwgLy8gZW5hYmxlL2Rpc2FibGUgcmVzaXphYmxlIGl0ZW1zXHJcbiAgICBoYW5kbGVzOiB7XHJcbiAgICAgIHM6IHRydWUsXHJcbiAgICAgIGU6IHRydWUsXHJcbiAgICAgIG46IHRydWUsXHJcbiAgICAgIHc6IHRydWUsXHJcbiAgICAgIHNlOiB0cnVlLFxyXG4gICAgICBuZTogdHJ1ZSxcclxuICAgICAgc3c6IHRydWUsXHJcbiAgICAgIG53OiB0cnVlXHJcbiAgICB9LCAvLyByZXNpemFibGUgZWRnZXMgb2YgYW4gaXRlbVxyXG4gICAgc3RvcDogdW5kZWZpbmVkLCAvLyBjYWxsYmFjayB3aGVuIHJlc2l6aW5nIGFuIGl0ZW0gc3RvcHMuIEFjY2VwdHMgUHJvbWlzZSByZXR1cm4gdG8gY2FuY2VsL2FwcHJvdmUgcmVzaXplLlxyXG4gICAgc3RhcnQ6IHVuZGVmaW5lZCAvLyBjYWxsYmFjayB3aGVuIHJlc2l6aW5nIGFuIGl0ZW0gc3RhcnRzLlxyXG4gICAgLy8gQXJndW1lbnRzOiBpdGVtLCBncmlkc3Rlckl0ZW0sIGV2ZW50XHJcbiAgfSxcclxuICBzd2FwOiB0cnVlLCAvLyBhbGxvdyBpdGVtcyB0byBzd2l0Y2ggcG9zaXRpb24gaWYgZHJvcCBvbiB0b3Agb2YgYW5vdGhlclxyXG4gIHN3YXBXaGlsZURyYWdnaW5nOiBmYWxzZSwgLy8gYWxsb3cgaXRlbXMgdG8gc3dpdGNoIHBvc2l0aW9uIHdoaWxlIGRyYWdnaW5nXHJcbiAgcHVzaEl0ZW1zOiBmYWxzZSwgLy8gcHVzaCBpdGVtcyB3aGVuIHJlc2l6aW5nIGFuZCBkcmFnZ2luZ1xyXG4gIGRpc2FibGVQdXNoT25EcmFnOiBmYWxzZSwgLy8gZGlzYWJsZSBwdXNoIG9uIGRyYWdcclxuICBkaXNhYmxlUHVzaE9uUmVzaXplOiBmYWxzZSwgLy8gZGlzYWJsZSBwdXNoIG9uIHJlc2l6ZVxyXG4gIHB1c2hEaXJlY3Rpb25zOiB7bm9ydGg6IHRydWUsIGVhc3Q6IHRydWUsIHNvdXRoOiB0cnVlLCB3ZXN0OiB0cnVlfSwgLy8gY29udHJvbCB0aGUgZGlyZWN0aW9ucyBpdGVtcyBhcmUgcHVzaGVkXHJcbiAgcHVzaFJlc2l6ZUl0ZW1zOiBmYWxzZSwgLy8gb24gcmVzaXplIG9mIGl0ZW0gd2lsbCBzaHJpbmsgYWRqYWNlbnQgaXRlbXNcclxuICBkaXNwbGF5R3JpZDogRGlzcGxheUdyaWQuT25EcmFnQW5kUmVzaXplLCAvLyBkaXNwbGF5IGJhY2tncm91bmQgZ3JpZCBvZiByb3dzIGFuZCBjb2x1bW5zXHJcbiAgZGlzYWJsZVdpbmRvd1Jlc2l6ZTogZmFsc2UsIC8vIGRpc2FibGUgdGhlIHdpbmRvdyBvbiByZXNpemUgbGlzdGVuZXIuIFRoaXMgd2lsbCBzdG9wIGdyaWQgdG8gcmVjYWxjdWxhdGUgb24gd2luZG93IHJlc2l6ZS5cclxuICBkaXNhYmxlV2FybmluZ3M6IGZhbHNlLCAvLyBkaXNhYmxlIGNvbnNvbGUgbG9nIHdhcm5pbmdzIGFib3V0IG1pc3BsYWNlbWVudCBvZiBncmlkIGl0ZW1zXHJcbiAgc2Nyb2xsVG9OZXdJdGVtczogZmFsc2UsIC8vIHNjcm9sbCB0byBuZXcgaXRlbXMgcGxhY2VkIGluIGEgc2Nyb2xsYWJsZSB2aWV3XHJcbiAgZGlzYWJsZVNjcm9sbEhvcml6b250YWw6IGZhbHNlLCAvLyBkaXNhYmxlIGhvcml6b250YWwgc2Nyb2xsaW5nXHJcbiAgZGlzYWJsZVNjcm9sbFZlcnRpY2FsOiBmYWxzZSwgLy8gZGlzYWJsZSB2ZXJ0aWNhbCBzY3JvbGxpbmdcclxuICBkaXNhYmxlQXV0b1Bvc2l0aW9uT25Db25mbGljdDogZmFsc2UgIC8vIGRpc2FibGUgYXV0by1wb3NpdGlvbiBvZiBpdGVtcyBvbiBjb25mbGljdCBzdGF0ZVxyXG59O1xyXG4iXX0=