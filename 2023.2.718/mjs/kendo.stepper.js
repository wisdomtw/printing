/**
 * Kendo UI v2023.2.718 (http://www.telerik.com/kendo-ui)
 * Copyright 2023 Progress Software Corporation and/or one of its subsidiaries or affiliates. All rights reserved.
 *
 * Kendo UI commercial licenses may be obtained at
 * http://www.telerik.com/purchase/license-agreement/kendo-ui-complete
 * If you do not own a commercial license, this file shall be governed by the trial license terms.
 */
import"./kendo.core.js";import"./kendo.progressbar.js";import"./kendo.icons.js";var __meta__={id:"stepper",name:"Stepper",category:"web",description:"The Stepper widget displays navigation steps.",depends:["core","progressbar","icons"]};!function(e,t){var s=window.kendo,i=s.ui.Widget,n=s.keys,r=e.extend,o=s.htmlEncode,a=".kendoStepper",p="click",l="activate",c="select",d=".",h=" ",u="vertical",_="tabindex",f="aria-current",v="aria-disabled",g="aria-invalid",b="k-step",k="k-step-first",m="k-step-last",S="k-step-done",w="k-step-success",x="k-step-error",C="k-step-current",y="k-focus",E="k-disabled",B="k-step-link",L="k-step-indicator",D="k-widget k-stepper",N="k-stepper-linear",P="k-step-list",H="k-step-list-horizontal",K="k-step-list-vertical",O=s.Class.extend({init:function(e){this.options=r({},this.options,e),this._render()},options:{label:"",icon:"",successIcon:"",iconTemplate:null,enabled:!0,error:!1,selected:!1,isFirstStep:!1,isLastStep:!1,indicatorVisible:!0,labelVisible:!0,index:0,previous:!1,selectable:!0},_indicatorTemplate:({successIcon:e,index:t,icon:i,previous:n,error:r})=>{let a;return a=e&&n&&!r?s.ui.icon({icon:o(e),iconClass:"k-step-indicator-icon"}):i?s.ui.icon({icon:o(i),iconClass:"k-step-indicator-icon"}):n&&!r?s.ui.icon({icon:"check-circle",iconClass:"k-step-indicator-icon"}):`<span class="k-step-indicator-text">${o(t+1)}</span>`,'<span class="k-step-indicator" aria-hidden="true">'+a+"</span>"},_labelTemplate:({label:t,indicatorVisible:i,previous:n,error:r})=>'<span class="k-step-label"><span class="k-step-text">'+o(t)+"</span> "+(r||!i&&!r&&n?s.ui.icon(e('<span aria-hidden="true"></span>'),{icon:r?"exclamation-circle":"check-circle"}):"")+"</span>",deselect:function(){this.options.selected=!1,this._link(),this._stepClasses()},enable:function(e){this.options.enabled!==e&&(this.options.enabled=e,this.options.selectable=e,this._link(),this._stepClasses())},select:function(){this.options.selected=!0,this._link(),this._stepClasses()},getEnabled:function(){return this.options.enabled},getIndex:function(){return this.options.index},setPrevious:function(e){this.options.previous=e,this._link(),this._stepClasses()},getSelectable:function(){return this.options.selectable},getSelected:function(){return this.options.selected},setValid:function(e){this.options.error===e&&(this.options.error=!e,this._link(),this._stepClasses())},_indicator:function(){var t,i=this.options;i.iconTemplate?(t=e("<span>").addClass(L).attr("aria-hidden","true")).append(s.template(i.iconTemplate)(i)):t=s.template(this._indicatorTemplate)(i),this.element.find(d+B).append(t)},_label:function(){var e=s.template(this._labelTemplate)(this.options);this.element.find(d+B).append(e)},_link:function(){var e=this.options;this.element.find(d+B).empty(),this._linkAttributes(),e.indicatorVisible&&this._indicator(),e.labelVisible&&this._label()},_linkAttributes:function(){var e=this.options,t=this.element.find(d+B);t.removeAttr("aria-disabled aria-invalid aria-current tabindex"),e.selected?t.attr(f,"step"):t.attr(_,"-1"),e.enabled&&e.selectable||t.attr(v,"true"),e.error&&t.attr(g,"true")},_render:function(){var t=e("<a href='#'>").addClass(B).attr("title",this.options.label);this.element=e("<li>").append(t),this._link(),this._stepClasses()},_stepClasses:function(){var e=this.options,t=b;e.isFirstStep&&(t+=h+k),e.isLastStep&&(t+=h+m),e.enabled||(t+=h+E),e.error&&(t+=h+x),e.previous?(t+=h+S,e.error||(t+=h+w)):e.selected&&(t+=h+C,t+=h+y),this.element.removeClass().addClass(t)}}),T=i.extend({init:function(e,t){var n=this;t=t||{},i.fn.init.call(n,e,t),n._indicatorAndLabel(),n._wrapper(),t.steps&&t.steps.length&&(n._processSteps(t.steps),n._progressBar()),n._attachEvents(),n._resizeHandler=s.onResize((function(){n.resize()}))},options:{orientation:"horizontal",linear:!0,indicator:!0,label:!0,selectOnFocus:!1,steps:null,name:"Stepper"},events:[l,c,"kendoKeydown"],destroy:function(){var e=this;e.progressBar&&i.fn.destroy.call(e.progressBar),i.fn.destroy.call(e),s.unbindResize(e._resizeHandler),e.wrapper.off(a)},setOptions:function(e){var t=this;i.fn.setOptions.call(t,e),t.progressBar&&i.fn.destroy.call(t.progressBar),t._indicatorAndLabel(),t._addStepList(),t.options.steps&&t.options.steps.length&&(t._processSteps(t.options.steps),t._progressBar())},enable:function(e){var t=this.steps(),s=this.options.steps;e?this.wrapper.removeAttr(v):this.wrapper.attr(v,"true"),this.progressBar.enable(e),t.forEach((function(t,i){t.enable(e),s[i]=t.options}))},insertAt:function(e,t){var s,i=this.options.steps;t&&!isNaN(e)&&(e<0&&(e=i.length+e),e<0||(i||(i=[]),(0===i.length||e>=i.length)&&(e=i.length),i.forEach((function(e){e.selected&&(s=e)})),!0===t.selected&&(s.selected=!1),i.splice(e,0,t),this._createSteps(),this._renderSteps(),this._resetProgressBar(),this._calculateDimensions()))},next:function(){if(this._steps&&!(this._steps.length<=1)){var e=this.selectedStep.getIndex();e+1!==this._steps.length&&this._select(e+1)}},previous:function(){if(this._steps&&!(this._steps.length<=1)){var e=this.selectedStep.getIndex();0!==e&&this._select(e-1)}},removeAt:function(e){var t,s,i=this.options.steps;isNaN(e)||!i||i.length<2||e>=i.length||(e<0&&(e=i.length+e),e<0||(!0===i.splice(e,1)[0].selected&&i.length>0&&("string"==typeof(t=i[s=e>0?e-1:0])&&(t={label:t},i[s]=t),t.selected=!0,t.previous=!1),this._createSteps(),this._renderSteps(),this._resetProgressBar(),this._calculateDimensions()))},resize:function(){this._calculateDimensions()},select:function(e){var s=this;if(e===t||null===e||isNaN(e))return s.selectedStep;e>=s._steps.length||e<0||(e=Number(e),s._select(e))},steps:function(e){if(e===t)return this._steps;this._processSteps(e),this._resetProgressBar(),this._calculateDimensions()},_processSteps:function(e){var t,s=this;e.forEach((function(e){e.selected&&(t=e)})),t||("string"==typeof e[0]&&(e[0]={label:e[0]}),e[0].selected=!0),s.options.steps=e,s._createSteps(),s._renderSteps()},_addStepList:function(){var t=this;t.wrapper.empty().append(e("<ol />").addClass(P)),t._stepList=t.wrapper.find(d+P),t.options.orientation===u?t._stepList.addClass(K):t._stepList.addClass(H)},_attachEvents:function(){var e=this;e.wrapper.on(p+a,d+b,e._selectClickHandler.bind(e)).on(p+a,e._wrapperClickHandler.bind(e)).on("focusout"+a,e._focusout.bind(e)).on("keydown"+a,e,e._keydown.bind(e))},_calculateDimensions:function(){var e=this.options.orientation,t=this._steps.length,i=this._stepList,n=i.find(d+b),r=i.width()/t,o=i.height()/t,a=this.progressBar.element,p="margin-left",l={};e===u?(n.css("max-height",100/t+"%"),a.css({"margin-top":-1*(i.height()-16),height:o*(t-1)})):(n.css("max-width",100/t+"%"),s.support.isRtl(this.wrapper)&&(p="margin-right"),l[p]=r/2,l.width=r*(t-1),a.css(l))},_createStep:function(e,t,s){var i=0===t,n=this.options,o=n.indicator,a=n.label;return e=r({},e,{enabled:!1!==e.enabled}),e=r({},e,{isFirstStep:i,isLastStep:s,indicatorVisible:o,labelVisible:a,index:t}),new O(e)},_createSteps:function(){var e,s,i,n,r=this,o=r.options.steps,a=!1;for(r._steps=[],s=0;s<o.length;s++)"string"==typeof(n=o[s])&&(n={label:n}),n!==t&&(i=s===o.length-1,n.selected?a=!0:n=r._selectablePreviousState(n,a,s),e=r._createStep(n,s,i),r._steps.push(e),e.getSelected()&&(r.selectedStep=e))},_indicatorAndLabel:function(){this.options.indicator||this.options.label||(this.options.indicator=!0,this.options.label=!0)},_focusout:function(e){var t=this;t.wrapper.get(0).contains(e.relatedTarget)||setTimeout((function(){t._leaveStepper()}))},_focusStep:function(e){var t=this.wrapper.find(d+y),s=this.wrapper.find(d+B);e.length>0&&(t.removeClass(y),s.attr(_,"-1"),e.find(d+B).removeAttr(_)[0].focus())},_focusNextStep:function(){var t=e(document.activeElement).closest(d+b).next();this._focusStep(t)},_focusPreviousStep:function(){var t=e(document.activeElement).closest(d+b).prev();this._focusStep(t)},_focusFirstStep:function(){var e=this.wrapper.find(d+k);this._focusStep(e)},_focusLastStep:function(){var e=this.wrapper.find(d+m);this._focusStep(e)},_keydown:function(t){var s=this,i=t.keyCode,r=e(document.activeElement).closest(d+b).index(),o=s.steps().length;i===n.TAB?t.shiftKey&&r>0?(t.preventDefault(),s._tabKey(t,-1)):!t.shiftKey&&r<o-1&&(t.preventDefault(),s._tabKey(t,1)):i>34&&i<41?(t.preventDefault(),s._navKeys(t)):i===n.ENTER||i===n.SPACEBAR?(t.preventDefault(),s._selectHandler(t,e(document.activeElement).closest(d+b))):t.preventDefault()},_leaveStepper:function(){var e=this.wrapper.find(d+C);this.wrapper.find(d+B).removeClass(y).attr(_,"-1"),e.addClass(y),e.find(d+B).removeAttr(_)},_navKeys:function(e){this.options.selectOnFocus?this._navKeysSelect(e):this._navKeysFocus(e)},_navKeysFocus:function(e){var t=e.keyCode,i=s.support.isRtl(this.wrapper),r=this.options.orientation;switch(t){case n.DOWN:i&&r!==u?this._focusPreviousStep():this._focusNextStep();break;case n.RIGHT:i?this._focusPreviousStep():this._focusNextStep();break;case n.UP:i&&r!==u?this._focusNextStep():this._focusPreviousStep();break;case n.LEFT:i?this._focusNextStep():this._focusPreviousStep();break;case n.HOME:this._focusFirstStep();break;case n.END:this._focusLastStep()}},_navKeysSelect:function(t){var i,r=t.keyCode,o=e(document.activeElement).closest(d+b).index(),a=s.support.isRtl(this.wrapper),p=this.steps(),l=this.options.orientation;switch(r){case n.DOWN:i=a&&l!==u?p[o-1]:p[o+1];break;case n.RIGHT:i=a?p[o-1]:p[o+1];break;case n.UP:i=a&&l!==u?p[o+1]:p[o-1];break;case n.LEFT:i=a?p[o+1]:p[o-1];break;case n.HOME:i=p[0];break;case n.END:i=p[p.length-1]}i&&(this._focusStep(i.element),this._selectHandlerOnKey(t,i.element))},_progressBar:function(){var t=this.wrapper,s=this._progressOptions();this.progressBar=e("<div>").kendoProgressBar(s).getKendoProgressBar(),this.progressBar.element.addClass("k-pos-absolute k-overflow-hidden"),this.progressBar.element.css("position","absolute"),this._calculateDimensions(),t.append(this.progressBar.element)},_progressOptions:function(){var e,t=this.options,s=t.orientation,i=t.steps;if(i&&0!==i.length)return e={max:i.length-1,value:this.select().getIndex(),orientation:s,showStatus:!1},s===u&&(e.reverse=!0),e},_resetProgressBar:function(){var e,t=this.progressBar;t&&(e=this._progressOptions(),t.setOptions(e))},_renderSteps:function(){var e,t,s=this._steps,i=this._stepList;for(i.empty(),t=0;t<s.length;t++)e=s[t],i.append(e.element)},_resetStep:function(e,t,s){var i=this._steps[e];e===t?(i.options.previous=!1,i.options.selected=!0):(s||e>t)&&(!s||e<t)&&(i.options.selected=!1,i.options.previous=s),this.options.linear&&(e<t-1||e>t+1)?i.options.selectable=!1:i.options.selectable=!0,i._link(),i._stepClasses(),this.options.steps[e]=i.options},_select:function(e){var t,s,i,n,r=this.options,o=r.linear,a=this.select().getIndex(),p=r.steps,l=this._steps[e];if(l&&l.getEnabled()){for(e>a?(t=!0,o?(i=Math.max(a-1,0),n=Math.min(e+1,p.length-1)):(i=a,n=e)):(t=!1,o?(i=Math.max(e-1,0),n=Math.min(a+1,p.length-1)):(i=e,n=a)),s=i;s<=n;s++)this._resetStep(s,e,t);this.selectedStep=l,this.progressBar.value(e)}},_selectablePreviousState:function(e,t,s){var i=this.options.steps,n=this.options.linear;return t?n&&!i[s-1].selected?e.selectable=!1:e.selectable=!0:(e.previous=!0,n&&!i[s+1].selected?e.selectable=!1:e.selectable=!0),e},_selectClickHandler:function(t){var s=e(t.target).closest(d+b);t.preventDefault(),this._preventWrapperClick=!0,this._selectHandler(t,s)},_selectHandler:function(e,t){var s=this,i=s._steps[t.index()],n=this.select();i&&i.getIndex()!==n.getIndex()&&i.getEnabled()&&i.getSelectable()?s.trigger(c,{sender:s,originalEvent:e,step:i})||(s._select(i.getIndex()),t.find(d+B)[0].focus(),s.trigger(l,{sender:s,originalEvent:e,step:i})):s._focusStep(n.element)},_selectHandlerOnKey:function(e,t){var s=this,i=s._steps[t.index()];i.getEnabled()&&i.getSelectable()&&(s.trigger(c,{sender:s,originalEvent:e,step:i})||(s._select(i.getIndex()),t.find(d+B)[0].focus(),s.trigger(l,{sender:s,originalEvent:e,step:i})))},_tabKey:function(t,s){var i=this.options.selectOnFocus,n=e(document.activeElement).closest(d+b),r=n.index(),o=e(n.parent().find(d+b)[r+s]);this._focusStep(o),i&&this._selectHandlerOnKey(t,o)},_wrapper:function(){var e=this,t=e.element;e.wrapper=t,e.wrapper.addClass(D),e.options.linear&&e.wrapper.addClass(N),this._addStepList()},_wrapperClickHandler:function(e){var t=this.select();this._preventWrapperClick?this._preventWrapperClick=!1:(e.preventDefault(),this._focusStep(t.element))}});s.stepper={Step:O},s.ui.plugin(T)}(window.kendo.jQuery);var kendo$1=kendo;export{kendo$1 as default};
//# sourceMappingURL=kendo.stepper.js.map