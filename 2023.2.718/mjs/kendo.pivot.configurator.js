/**
 * Kendo UI v2023.2.718 (http://www.telerik.com/kendo-ui)
 * Copyright 2023 Progress Software Corporation and/or one of its subsidiaries or affiliates. All rights reserved.
 *
 * Kendo UI commercial licenses may be obtained at
 * http://www.telerik.com/purchase/license-agreement/kendo-ui-complete
 * If you do not own a commercial license, this file shall be governed by the trial license terms.
 */
import"./kendo.dom.js";import"./kendo.html.chip.js";import"./kendo.html.chiplist.js";import"./kendo.pivot.common.js";import"./kendo.icons.js";class Navigation{constructor(e){this.tabIndex=0,this.root=null,this.eventHandlers={},this.update=()=>{},this.tabIndex=e.tabIndex}get elements(){return this.root?Array.from(this.root.querySelectorAll(this.selectors.join(","))):[]}get first(){return this.root&&this.root.querySelector(this.selectors.join(","))||null}get last(){const e=this.elements;return e[e.length-1]||null}get current(){return this.elements.find((e=>e.matches(":focus")))}start(e){this.root=e;for(const t in this.mouseEvents)this.mouseEvents[t]&&(this.eventHandlers[t]=e=>{const r=e.target instanceof Element&&e.target.closest(this.selectors.join(","));r&&this.mouseEvents[t].call(void 0,r,this,e)},e.addEventListener(t,this.eventHandlers[t]));for(const t in this.keyboardEvents)this.keyboardEvents[t]&&(this.eventHandlers[t]=e=>{const r=e.target instanceof Element&&e.target.closest(this.selectors.join(",")),a=" "===e.key?"Space":e.key;r&&this.keyboardEvents[t][a]&&this.keyboardEvents[t][a].call(void 0,r,this,e)},e.addEventListener(t,this.eventHandlers[t]))}stop(){if(this.root)for(const e in this.eventHandlers)this.eventHandlers[e]&&this.root.removeEventListener(e,this.eventHandlers[e]);this.root=null}focusElement(e,t){e&&(t&&(t.removeAttribute("tabindex"),t.classList.remove("k-focus")),e.setAttribute("tabindex",String(this.tabIndex)),e.focus({preventScroll:!0}))}}const scrollableValuesSel=".k-pivotgrid .k-pivotgrid-values",scrollableColumnHeaderSel=".k-pivotgrid .k-pivotgrid-column-headers",scrollableRowHeaderSel=".k-pivotgrid .k-pivotgrid-row-headers",emptyCellSel=".k-pivotgrid > .k-pivotgrid-empty-cell",tableSel="table.k-pivotgrid-table",cellSel=".k-pivotgrid-cell",scrollables=[scrollableValuesSel,scrollableColumnHeaderSel,scrollableRowHeaderSel].join(","),selectors$1=[emptyCellSel,[scrollableColumnHeaderSel,tableSel,cellSel].join(" "),[scrollableRowHeaderSel,tableSel,cellSel].join(" "),[scrollableValuesSel,tableSel,cellSel].join(" ")],onEnter=(e,t,r)=>{const a=e.querySelector(".k-icon, .k-svg-icon");if(a){const o=t.elements.indexOf(e);t.update=()=>{t.focusElement(t.elements[o],null),t.update=()=>{}},a.click(),r.preventDefault()}},tryScrollLeft=(e,t,r)=>{e.offsetLeft<t.scrollLeft&&(r.scrollLeft=e.offsetLeft)},tryScrollRight=(e,t,r)=>{e.offsetLeft+e.offsetWidth>t.scrollLeft+t.offsetWidth&&e.offsetWidth<t.offsetWidth&&(r.scrollLeft=e.offsetLeft+e.offsetWidth-t.offsetWidth)},tryScrollUp=(e,t,r)=>{t.scrollTop&&e.offsetTop<t.scrollTop&&(r.scrollTop=e.offsetTop)},tryScrollDown=(e,t,r)=>{e.offsetTop+e.offsetHeight>t.scrollTop+t.offsetHeight&&e.offsetHeight<t.offsetHeight&&(r.scrollTop=e.offsetTop+e.offsetHeight-t.offsetHeight)},scrollTo=(e,t,r)=>{const a=t.querySelector(scrollableValuesSel),o=e&&e.closest(scrollables);a&&o&&e&&r.forEach((t=>t(e,o,a)))},tableMap=e=>{const t=Array.from(e.rows),r=Array.from(t&&t[0]&&t[0].cells||[]).map((e=>e.colSpan)).reduce(((e,t)=>e+t),0),a=t.map((()=>new Array(r)));return t.forEach(((e,t)=>{let r=0;Array.from(e.cells).forEach((e=>{for(let o=0;o<e.colSpan;o++){for(let o=0;o<e.rowSpan;o++){const s=a[t+o].findIndex(((e,t)=>t>=r&&!e));a[t+o][s]=e}r++}}))})),a},navigationMap=e=>{const t=tableMap(e.querySelector([scrollableColumnHeaderSel,tableSel].join(" "))),r=tableMap(e.querySelector([scrollableRowHeaderSel,tableSel].join(" "))),a=tableMap(e.querySelector([scrollableValuesSel,tableSel].join(" "))),o=e.querySelector(emptyCellSel),s=new Array(r[0].length).fill(o),i=[];for(let e=0;e<t.length;e++)i.push(s.concat(t[e]));for(let e=0;e<r.length;e++)i.push(r[e].concat(a[e]));return i},getTargetPos=(e,t)=>{for(let r=0;r<e.length;r++)for(let a=0;a<e[r].length;a++)if(e[r][a]===t)return[r,a];return[-1,-1]},ctrlKey=e=>e.ctrlKey||e.metaKey,cellAt=(e,t,r)=>{const a=navigationMap(e);let o=getTargetPos(a,t),s=[o[0]+r[0],o[1]+r[1]],i=a[s[0]]&&a[s[0]][s[1]];for(;i&&i===t;)s=[s[0]+r[0],s[1]+r[1]],i=a[s[0]]&&a[s[0]][s[1]];return i},keyboardEvents$1={keydown:{ArrowLeft:(e,t,r)=>{r.preventDefault();const a=cellAt(t.root,e,[0,-1]);t.focusElement(a,e),scrollTo(a,t.root,[tryScrollRight,tryScrollLeft,tryScrollDown,tryScrollUp])},ArrowRight:(e,t,r)=>{r.preventDefault();const a=cellAt(t.root,e,[0,1]);t.focusElement(a,e),scrollTo(a,t.root,[tryScrollLeft,tryScrollRight,tryScrollDown,tryScrollUp])},ArrowUp:(e,t,r)=>{r.preventDefault();const a=cellAt(t.root,e,[-1,0]);t.focusElement(a,e),scrollTo(a,t.root,[tryScrollRight,tryScrollLeft,tryScrollDown,tryScrollUp])},ArrowDown:(e,t,r)=>{r.preventDefault();const a=cellAt(t.root,e,[1,0]);t.focusElement(a,e),scrollTo(a,t.root,[tryScrollRight,tryScrollLeft,tryScrollUp,tryScrollDown])},o:(e,t,r)=>{if(!t.root)return;let a=t.root.nextElementSibling;a&&a instanceof HTMLElement&&(a.matches("div.k-pivotgrid-configurator-button")||(a=a.nextElementSibling),a&&a instanceof HTMLElement&&a.matches("div.k-pivotgrid-configurator-button")&&(t.root.parentNode&&!t.root.parentNode.querySelector(".k-pivotgrid-configurator.k-hidden")||a.click(),setTimeout((()=>{if(t.root.parentNode){const e=t.root.parentNode.querySelector(".k-pivotgrid-configurator-content .k-form-field .k-fields-list-wrapper .k-treeview");e instanceof HTMLElement&&(e.setAttribute("tabindex",String(t.tabIndex)),e.focus())}}),0)))},Enter:onEnter,Space:onEnter,Home:(e,t,r)=>{const a=navigationMap(t.root);let o=(ctrlKey(r)?a[0]:a.find((t=>Boolean(t.find((t=>t===e)))))||[])[0];o&&(t.focusElement(o,e),scrollTo(o,t.root,[tryScrollRight,tryScrollLeft,tryScrollDown,tryScrollUp]),r.preventDefault())},End:(e,t,r)=>{const a=navigationMap(t.root);let o=ctrlKey(r)?a[a.length-1]:a.find((t=>Boolean(t.find((t=>t===e)))))||[],s=o&&o[o.length-1]||null;s&&(t.focusElement(s,e),scrollTo(s,t.root,[tryScrollLeft,tryScrollRight,tryScrollUp,tryScrollDown]),r.preventDefault())}}},mouseEvents$1={click:(e,t)=>{if(e&&e instanceof HTMLElement){const r=t.elements.find((e=>e.hasAttribute("tabindex")))||null;t.focusElement(e,r)}}};class PivotGridNavigation extends Navigation{constructor(){super(...arguments),this.selectors=selectors$1,this.mouseEvents=mouseEvents$1,this.keyboardEvents=keyboardEvents$1}}const selectors=[".k-pivotgrid-configurator-content .k-form-field .k-fields-list-wrapper .k-treeview",".k-pivotgrid-configurator-content .k-chip",".k-pivotgrid-configurator-actions button"],onEscape=(e,t,r)=>{if(r.target instanceof HTMLElement&&t.root){const e=t.root.previousElementSibling,r=t.root.nextElementSibling,a=Array.from(e instanceof HTMLElement?e.querySelectorAll("[tabindex]"):[]).find((e=>e.tabIndex>=0));a instanceof HTMLElement&&(a.focus(),r instanceof HTMLElement&&r.click())}},navigate=(e,t,r,a)=>{r.preventDefault();const o=t.elements;let s=o.indexOf(e)+a;s<0&&(s=o.length-1),t.focusElement(o[s%o.length],e)},onDelete=(e,t,r)=>{if(r.target instanceof HTMLElement){r.target.querySelector(".k-icon.k-i-x-circle, .k-svg-icon.k-svg-i-x-circle")instanceof HTMLElement&&(r.preventDefault(),navigate(e,t,r,-1))}},keyboardEvents={keydown:{Tab:(e,t,r)=>{navigate(e,t,r,r.shiftKey?-1:1)},Escape:onEscape,Delete:onDelete,Backspace:onDelete}},mouseEvents={click:(e,t)=>{if(e&&e instanceof HTMLElement){const r=t.elements.find((e=>e.hasAttribute("tabindex")))||null;t.focusElement(e,r)}}};class ConfiguratorNavigation extends Navigation{constructor(){super(...arguments),this.selectors=selectors,this.mouseEvents=mouseEvents,this.keyboardEvents=keyboardEvents}}var __meta__={id:"pivot.configurator",name:"PivotConfigurator",category:"web",depends:["dropdownlist","treeview","treeview.draganddrop","pivot.fieldmenu","html.chip","html.chiplist","pivot.common","icons"],hidden:!0};!function(e,t){var r=window.kendo,a=r.ui,o=r.htmlEncode,s=a.Widget,i=window.kendo.pivotgrid.common,n=i.fetchDiscover,l=i.configuratorReducer,c=i.PIVOT_CONFIGURATOR_ACTION,d=".kendoPivotConfigurator",u=({name:e})=>`<div class="k-pivotgrid-target k-pivotgrid-configurator-section"><strong>${o(e)}</strong><div class="k-pivotgrid-target-wrap"></div>`;function h(e){for(var t,r=0,a=e.length;r<a;r++)if(2==e[r].type){t=!0;break}t&&e.splice(r+1,0,{caption:"KPIs",defaultHierarchy:"[KPIs]",name:"KPIs",uniqueName:"[KPIs]"})}function f(e){return{name:e.uniqueName,type:e.type}}function m(e){for(var t=0,r=e.length;t<r;t++)e[t].uniqueName=e[t].name,e[t].type="kpi";return e}function p(t){var r=e(t).closest(".k-pivot-setting");return r.length?r.data("kendoPivotSettingTarget"):null}var g=s.extend({init:function(e,t){s.fn.init.call(this,e,t),this._ariaId=this.element.attr("id")||r.guid(),this.element.addClass("k-widget k-pivotgrid-configurator k-pos-relative"),this.element.attr({role:"dialog","aria-hidden":!0,"aria-labelledby":`${this._ariaId}-configurator-header`}),this._dataSource(),this.options.navigatable&&this._initPivotGridConfiguratorNavigation(),this._layout(),this.refresh(),t.height&&this.element.height(t.height),r.notify(this)},events:[],options:{name:"PivotConfiguratorV2",orientation:"vertical",filterable:!1,sortable:!1,messages:{title:"Settings",cancelButtonText:"Cancel",applyButtonText:"Apply",measures:"Select some fields to begin setup",columns:"Select some fields to begin setup",rows:"Select some fields to begin setup"}},setDataSource:function(e){this.options.dataSource=e,this._dataSource(),this.measures&&this.measures.setDataSource(e),this.rows&&this.rows.setDataSource(e),this.columns&&this.columns.setDataSource(e),this.refresh()},_initPivotGridConfiguratorNavigation:function(){var e=this;e.configuratorNavigation=new ConfiguratorNavigation({tabIndex:0}),e.configuratorNavigation.start(e.element[0]);const t=e.configuratorNavigation.first;t&&t.setAttribute("tabindex","0")},_dataSource:function(){var e=this;e.dataSource&&e._refreshHandler?e.dataSource.unbind("change",e._refreshHandler).unbind("error",e._errorHandler).unbind("progress",e._progressHandler):(e._errorHandler=e._error.bind(e),e._refreshHandler=e.refresh.bind(e),e._progressHandler=e._requestStart.bind(e)),e.dataSource=r.data.PivotDataSourceV2.create(e.options.dataSource),e.dataSource.bind("change",e._refreshHandler).bind("error",e._errorHandler).bind("progress",e._progressHandler)},_layout:function(){var t=this,a=t.options,s=a.messages,i="horizontal"==a.orientation,n=e("<div class='k-pivotgrid-configurator-panel k-pivotgrid-configurator-push'></div>");n.addClass(i?"k-pivotgrid-configurator-horizontal":"k-pivotgrid-configurator-vertical"),t.element.append(n),t.panel=n,e((({title:e,headerTextId:t})=>`<div class="k-pivotgrid-configurator-header"><div class="k-pivotgrid-configurator-header-text" id="${t}">${o(e)}</div></div>`)({title:this.options.messages.title,headerTextId:`${t._ariaId}-configurator-header`})).appendTo(t.panel),e((({formClass:e,horizontal:t,ariaId:r})=>`<div class="k-pivotgrid-configurator-content"><form class="${o(e)}">`+(t?'<div class="k-form-field-wrapper">':"")+'<div class="k-form-field">'+`<label class="k-label" id="${r}-configurator-fields">Fields</label></div><div class="k-form-field"><div class="k-fields-list-wrapper"></div></div>`+(t?'</div><div class="k-form-field-wrapper">':"")+'<div class="k-form-field">'+`<label class="k-label" id="${r}-configurator-columns">Columns</label></div><div class="k-chip-list k-column-fields"></div><div class="k-form-field">`+`<label class="k-label" id="${r}-configurator-rows">Rows</label></div><div class="k-chip-list k-row-fields"></div>`+(t?'</div><div class="k-form-field-wrapper">':"")+'<div class="k-form-field">'+`<label class="k-label" id="${r}-configurator-values">Values</label></div><div class="k-chip-list k-column-fields"></div>`+(t?"</div>":"")+"</form></div>")({formClass:i?"k-form k-form-horizontal":"k-form",filterable:a.filterable,horizontal:i,ariaId:t._ariaId})).appendTo(t.panel).find(".k-chip-list").each((function(t,o){r.html.renderChipList(o,e.extend({},a)),e(o).attr({role:"listbox","aria-orientation":"horizontal"})})),t._fields(),e((({cancelText:e,applyText:t})=>`<div class="k-pivotgrid-configurator-actions k-actions k-hstack k-justify-content-end"><button class="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base" aria-disabled="false"><span class="k-button-text">${o(e)}</span></button><button class="k-button k-button-md k-rounded-md k-button-solid k-button-solid-primary" aria-disabled="false"><span class="k-button-text">${o(t)}</span></button></div>`)({cancelText:s.cancelButtonText,applyText:s.applyButtonText})).appendTo(t.panel),t._targets(),t.element.on("click"+d,".k-pivotgrid-configurator-actions > button",t._actions.bind(t))},_actions:function(t){t.preventDefault(),e(t.currentTarget).closest(":not(path,svg)").index()?(this.columns._applyState(),this.rows._applyState(),this.measures._applyState(),this.dataSource.read()):(this.columns._cancelChanges(),this.rows._cancelChanges(),this.measures._cancelChanges(),this.treeView.dataSource.read())},_targets:function(){var t=this,a=t.panel.find(".k-column-fields").first(),s=t.panel.find(".k-row-fields"),i=t.panel.find(".k-chip-list").last(),n=this.options,l=({name:t,menuenabled:a})=>{var s=r.html.renderChip((({name:e})=>`<span><span class="k-chip-label">${o(e)}</span></span>`)({name:t,menuenabled:a}),e.extend({},n,{fillMode:"solid",themeColor:"base",rounded:"full",removable:!0,removeIcon:"x-circle",actions:a?[{icon:"more-vertical"}]:null}));return s};this.columns=this._createTarget(a,{navigatable:n.navigatable,filterable:n.filterable,sortable:n.sortable,template:l,connectWith:s,messages:{empty:n.messages.columns},configuratorNavigation:t.configuratorNavigation}),this.columns.element.attr("aria-labelledby",`${this._ariaId}-configurator-header ${this._ariaId}-configurator-columns`),this.rows=this._createTarget(s,{navigatable:n.navigatable,filterable:n.filterable,sortable:n.sortable,template:l,setting:"rows",connectWith:a,messages:{empty:this.options.messages.rows},configuratorNavigation:t.configuratorNavigation}),this.rows.element.attr("aria-labelledby",`${this._ariaId}-configurator-header ${this._ariaId}-configurator-rows`),this.measures=this._createTarget(i,{navigatable:n.navigatable,setting:"measures",template:l,messages:{empty:n.messages.measures},configuratorNavigation:t.configuratorNavigation}),this.measures.element.attr("aria-labelledby",`${this._ariaId}-configurator-header ${this._ariaId}-configurator-values`),[this.columns,this.rows,this.measures].forEach((e=>e.element.find(".k-chip").attr("role","option")))},_createTarget:function(t,a){var o=this;return new r.ui.PivotSettingTargetV2(t,e.extend({dataSource:this.dataSource,hint:function(e){return e.clone()},remove:function(e){var t=o.treeView.wrapper.find("[data-name='"+e.name+"']").closest("li"),a=t.attr(r.attr("uid")),s=o.treeView.dataSource.getByUid(a);s&&(s.checked=!1,t.find("input").attr("checked",!1))},template:a.template},a))},_fields:function(){var t=this,r=t.element.find(".k-fields-list-wrapper");this.treeView=e(`<div aria-labelledby="${this._ariaId}-configurator-header ${this._ariaId}-configurator-fields" />`).appendTo(r).kendoTreeView({checkboxes:{checkChildren:!0,template:({item:e})=>{var t="";return(e.hasChildren||e.aggregator||e.local)&&"[KPIs]"!==e.uniqueName&&"[Measures]"!==e.uniqueName&&"Measures"!==e.uniqueName&&(t+=`<input type="checkbox" data-name="${o(e.uniqueName)}" ${e.checked?"checked":""} class="k-checkbox k-checkbox-md k-rounded-md" id="${o(e.uid)}" tabindex="-1">`),t}},dataTextField:"caption",autoBind:!1,check:function(e){var r=e.sender.dataItem(e.node),a={type:c.toggleSelection,payload:r},o={columnAxes:t.columns._state(),rowAxes:t.rows._state(),measureAxes:t.measures._state()},s=l(o,a);t.dataSource.cubeSchema&&s.measureAxes&&s.measureAxes.length&&s.measureAxes.length>o.measureAxes.length&&t.dataSource.cubeSchema.restoreMeasure(s.measureAxes,r),r.defaultHierarchy&&r.items&&r.items.length&&(t._checkMembers([{name:r.defaultHierarchy}],r.items),r.items.trigger("change")),s.columnAxes&&(t.columns._state(s.columnAxes),t.columns._redraw()),s.rowAxes&&(t.rows._state(s.rowAxes),t.rows._redraw()),s.measureAxes&&(t.measures._state(s.measureAxes),t.measures._redraw())},dataSource:this._treeViewDataSource()}).data("kendoTreeView"),this.treeView.wrapper.off("click",this.treeView._clickHandler)},_treeViewDataSource:function(){var t=this;return r.data.HierarchicalDataSource.create({schema:{model:{id:"uniqueName",hasChildren:function(e){return t.dataSource.cubeSchema&&"Measures"!==e.uniqueName?(e.local=!0,!1):!("hierarchyUniqueName"in e)&&!("aggregator"in e)}}},transport:{read:function(r){var a,o,s,i=t.dataSource.transport,l=i.catalog(),c=i.cube(),d={url:i.options.read},u=t.columns._state(),f=t.rows._state(),p=t.measures._state(),g=u.concat(f).concat(p);e.isEmptyObject(r.data)?t.dataSource.cubeSchema?(o=t.dataSource.cubeSchema.dimensions(),t._checkMembers(g,o),r.success(o)):n(d,{connection:{catalog:l,cube:c},restrictions:{catalogName:l,cubeName:c},command:"schemaDimensions"}).then((function(e){t._checkMembers(g,e),h(e),r.success(e)})):(a=t.treeView.dataSource.get(r.data.uniqueName),t.dataSource.cubeSchema?(s=t.dataSource.measures(),t._checkMembers(g,s),r.success(s)):"[KPIs]"===a.uniqueName?n(d,t._getKPIOptions(l,c)).then((function(e){r.success(m(e))})):"kpi"==a.type?r.success(k(a)):n(d,t._loadFieldsCommand(a,l,c)).then((function(e){t._checkMembers(g,e),r.success(e)})))}}})},_checkMembers:function(e,t){var r={},a=0;for(a=0;a<e.length;a++)r[e[a].name]=!0;for(a=0;a<t.length;a++)r[t[a].uniqueName]&&(t[a].checked=!0)},_getKPIOptions:function(e,t){return{connection:{catalog:e,cube:t},restrictions:{catalogName:e,cubeName:t},command:"schemaKPIs"}},_loadFieldsCommand:function(e,t,r){var a,o,s;return 2===e.type?a="schemaMeasures":e.dimensionUniqueName?(a="schemaLevels",s=e.uniqueName):(a="schemaHierarchies",o=e.uniqueName),{connection:{catalog:t,cube:r},restrictions:{catalogName:t,cubeName:r,hierarchyUniqueName:s,dimensionUniqueName:o},command:a}},_progress:function(e){r.ui.progress(this.element,e)},_error:function(){this._progress(!1)},_requestStart:function(){this._progress(!0)},destroy:function(){s.fn.destroy.call(this),this.dataSource.unbind("change",this._refreshHandler),this.element.off(d),this.rows.destroy(),this.columns.destroy(),this.measures.destroy(),this.treeView.destroy(),this.element=null,this._refreshHandler=null},refresh:function(){this.treeView&&this.treeView.dataSource.fetch(),this._progress(!1)}});a.plugin(g);var v=s.extend({init:function(e,t){s.fn.init.call(this,e,t),this.element.addClass("k-pivotgrid-configurator-panel kendo-jquery"),this.options.height&&this.element.outerHeight(this.options.height),this._dataSource(),this._layout(),this.refresh(),r.notify(this)},events:[],options:{name:"PivotConfigurator",filterable:!1,sortable:!1,messages:{measures:"Drop Data Fields Here",columns:"Drop Column Fields Here",rows:"Drop Rows Fields Here",measuresLabel:"Measures",columnsLabel:"Columns",rowsLabel:"Rows",fieldsLabel:"Fields"}},_dataSource:function(){var e=this;e.dataSource&&e._refreshHandler?e.dataSource.unbind("change",e._refreshHandler).unbind("error",e._errorHandler).unbind("progress",e._progressHandler):(e._errorHandler=e._error.bind(e),e._refreshHandler=e.refresh.bind(e),e._progressHandler=e._requestStart.bind(e)),e.dataSource=r.data.PivotDataSource.create(e.options.dataSource),e.dataSource.bind("change",e._refreshHandler).bind("error",e._errorHandler).bind("progress",e._progressHandler)},setDataSource:function(e){this.options.dataSource=e,this._dataSource(),this.measures&&this.measures.setDataSource(e),this.rows&&this.rows.setDataSource(e),this.columns&&this.columns.setDataSource(e),this.refresh()},_treeViewDataSource:function(){var t=this;return r.data.HierarchicalDataSource.create({schema:{model:{id:"uniqueName",hasChildren:function(e){return!("hierarchyUniqueName"in e)&&!("aggregator"in e)}}},transport:{read:function(r){var a,o;e.isEmptyObject(r.data)?t.dataSource.schemaDimensions().done((function(e){t.dataSource.cubeBuilder||h(e),r.success(e)})).fail(r.error):("[KPIs]"===(a=t.treeView.dataSource.get(r.data.uniqueName)).uniqueName?(o=!0,t.dataSource.schemaKPIs().done((function(e){r.success(m(e))})).fail(r.error)):"kpi"==a.type&&(o=!0,r.success(k(a))),o||(2==a.type?t.dataSource.schemaMeasures():a.dimensionUniqueName?t.dataSource.schemaLevels(r.data.uniqueName):t.dataSource.schemaHierarchies(r.data.uniqueName)).done(r.success).fail(r.error))}}})},_progress:function(e){r.ui.progress(this.element,e)},_error:function(){this._progress(!1)},_requestStart:function(){this._progress(!0)},_layout:function(){e('<div class="k-pivotgrid-configurator"><div class="k-pivotgrid-configurator-content"></div></div>').appendTo(this.element),this.form=this.element.find(".k-pivotgrid-configurator-content"),this._fields(),this._targets()},_fields:function(){var t=e('<div class="k-pivotgrid-fields k-pivotgrid-configurator-section"><strong>'+o(this.options.messages.fieldsLabel)+'</strong><div class="k-fields-list-wrapper"></div></div>').appendTo(this.form);this.treeView=e("<div/>").appendTo(t.find(".k-fields-list-wrapper")).kendoTreeView({template:({item:e})=>{var t="";return 2==e.type||"[KPIs]"==e.uniqueName?t+=r.ui.icon(2==e.type?"sum":"caret-alt-expand"):e.type&&"kpi"!==e.type&&(t+=r.ui.icon("arrows-axes")),t+=`${o(e.caption||e.name)}`},dataTextField:"caption",dragAndDrop:!0,autoBind:!1,dataSource:this._treeViewDataSource(),dragstart:function(e){var t=this.dataItem(e.sourceNode);(t.hasChildren||t.aggregator||t.measure)&&2!=t.type&&"[KPIs]"!==t.uniqueName||e.preventDefault()},drag:function(e){var t="cancel",r=p(e.dropTarget);r&&r.validate(this.dataItem(e.sourceNode))&&(t="plus"),e.setStatusClass(t)},drop:function(e){e.preventDefault();var t,r,a,o,s=p(e.dropTarget),i=this.dataItem(e.sourceNode);if(s&&s.validate(i)){if(o=i.defaultHierarchy||i.uniqueName,"kpi"===i.type)for(r=(a=k(i)).length,o=[],t=0;t<r;t++)o.push(f(a[t]));else i.kpi&&(o=[f(i)]);s.add(o)}}}).data("kendoTreeView")},_createTarget:function(t,a){var o;return o=({name:e,sortIcon:t})=>`<div class="k-chip k-chip-md k-rounded-full k-chip-solid k-chip-solid-base" data-${r.ns}name="${e}"><span class="k-chip-content"><span class="k-chip-label">${e}</span></span><span class="k-chip-actions k-field-actions">`+function(e,t){var a=t.sortable,o="";return a&&(o+=e?`<span class="k-chip-action">${r.ui.icon(e+"-sm")}</span>`:""),(t.filterable||a)&&(o+=`<span class="k-setting-fieldmenu k-chip-action">${r.ui.icon("more-vertical")}</span>`),o+`<span class="k-setting-delete k-chip-action">${r.ui.icon("x")}</span>`}(t,a)+"</span></div>",new r.ui.PivotSettingTarget(t,e.extend({dataSource:this.dataSource,template:o,emptyTemplate:e=>`<span class="k-empty">${e}</span>`},a))},_targets:function(){var t=e('<div class="k-pivotgrid-targets"/>').appendTo(this.form),r=e(u({name:this.options.messages.columnsLabel,icon:"columns"})).appendTo(t),a=e('<div class="k-column-fields k-chip-list" />').appendTo(r.find(".k-pivotgrid-target-wrap")),o=e(u({name:this.options.messages.rowsLabel,icon:"rows"})).appendTo(t),s=e('<div class="k-column-fields k-chip-list" />').appendTo(o.find(".k-pivotgrid-target-wrap")),i=e(u({name:this.options.messages.measuresLabel,icon:"sum"})).appendTo(t),n=e('<div class="k-column-fields k-chip-list" />').appendTo(i.find(".k-pivotgrid-target-wrap")),l=this.options;this.columns=this._createTarget(a,{filterable:l.filterable,sortable:l.sortable,connectWith:s,messages:{empty:l.messages.columns,fieldMenu:l.messages.fieldMenu}}),this.rows=this._createTarget(s,{filterable:l.filterable,sortable:l.sortable,setting:"rows",connectWith:a,messages:{empty:this.options.messages.rows,fieldMenu:this.options.messages.fieldMenu}}),this.measures=this._createTarget(n,{setting:"measures",messages:{empty:l.messages.measures}}),a.add(s).add(n).on("mouseenter.kendoPivotConfigurator mouseleave.kendoPivotConfigurator",".k-item:not(.k-empty)",this._toggleHover)},_toggleHover:function(t){e(t.currentTarget).closest(":not(path,svg)").toggleClass("k-hover","mouseenter"===t.type)},_resize:function(){var e=this.element,t=this.options.height;t&&e.outerHeight(t)},refresh:function(){var e=this.dataSource;(e.cubeBuilder||this._cube!==e.cube()||this._catalog!==e.catalog())&&this.treeView.dataSource.fetch(),this._catalog=this.dataSource.catalog(),this._cube=this.dataSource.cube(),this._resize(),this._progress(!1)},destroy:function(){s.fn.destroy.call(this),this.dataSource.unbind("change",this._refreshHandler),this.form.find(".k-pivot-setting").off(d),this.rows.destroy(),this.columns.destroy(),this.measures.destroy(),this.treeView.destroy(),this.element=null,this._refreshHandler=null}});function b(e,t,r){return{hierarchyUniqueName:e,uniqueName:t,caption:t,measure:t,name:t,type:r,kpi:!0}}function k(e){var t=e.name;return[b(t,e.value,"value"),b(t,e.goal,"goal"),b(t,e.status,"status"),b(t,e.trend,"trend")]}r.cssProperties.registerPrefix("HTMLChip","k-chip-"),r.cssProperties.registerValues("HTMLChip",[{prop:"rounded",values:r.cssProperties.roundedValues.concat([["full","full"]])}]),a.plugin(v)}(window.kendo.jQuery);var kendo$1=kendo;export{kendo$1 as default};
//# sourceMappingURL=kendo.pivot.configurator.js.map
