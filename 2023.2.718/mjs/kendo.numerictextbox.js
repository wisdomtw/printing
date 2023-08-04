/**
 * Kendo UI v2023.2.718 (http://www.telerik.com/kendo-ui)
 * Copyright 2023 Progress Software Corporation and/or one of its subsidiaries or affiliates. All rights reserved.
 *
 * Kendo UI commercial licenses may be obtained at
 * http://www.telerik.com/purchase/license-agreement/kendo-ui-complete
 * If you do not own a commercial license, this file shall be governed by the trial license terms.
 */
import"./kendo.core.js";import"./kendo.userevents.js";import"./kendo.floatinglabel.js";import"./kendo.html.button.js";import"./kendo.icons.js";var __meta__={id:"numerictextbox",name:"NumericTextBox",category:"web",description:"The NumericTextBox widget can format and display numeric, percentage or currency textbox.",depends:["core","userevents","floatinglabel","html.button","icons"]};!function(e,t){var n=window.kendo,a=n.caret,o=n.keys,i=n.html,r=n.ui,l=r.Widget,s=n._activeElement,u=n._extractFormat,d=n.parseFloat,p=n.support.placeholder,c=n.getCulture,_="change",m="disabled",f="readonly",v="k-input-inner",h="spin",b=".kendoNumericTextBox",x="mouseenter"+b+" mouseleave.kendoNumericTextBox",g="k-focus",w="k-hover",y="focus",k=".",T="k-selected",C="k-disabled",A="k-invalid",L="aria-disabled",E=/^(-)?(\d*)$/,H=null,S=e.isPlainObject,F=e.extend,O=l.extend({init:function(a,o){var i,r,s,d,p,c=this,_=o&&o.step!==t;l.fn.init.call(c,a,o),o=c.options,a=c.element.on("focusout"+b,c._focusout.bind(c)).attr("role","spinbutton"),o.placeholder=o.placeholder||a.attr("placeholder"),i=c.min(a.attr("min")),r=c.max(a.attr("max")),s=c._parse(a.attr("step")),o.min===H&&i!==H&&(o.min=i),o.max===H&&r!==H&&(o.max=r),_||s===H||(o.step=s),c._initialOptions=F({},o),p=a.attr("type"),c._reset(),c._wrapper(),c._arrows(),c._validation(),c._input(),n.support.mobileOS?c._text.on("touchend"+b+" "+y+b,(function(){n.support.browser.edge?c._text.one(y+b,(function(){c._focusin()})):c._focusin(),c.selectValue()})):c._text.on(y+b,c._click.bind(c)),a.attr("aria-valuemin",o.min!==H?o.min*o.factor:o.min).attr("aria-valuemax",o.max!==H?o.max*o.factor:o.max),o.format=u(o.format),(d=o.value)==H&&(d="number"==p?parseFloat(a.val()):a.val()),c.value(d),!o.enable||a.is("[disabled]")||e(c.element).parents("fieldset").is(":disabled")?c.enable(!1):c.readonly(a.is("[readonly]")),c.angular("compile",(function(){return{elements:c._text.get()}})),c._label(),c._ariaLabel(c._text),c._applyCssClasses(),n.notify(c)},options:{name:"NumericTextBox",decimals:H,enable:!0,restrictDecimals:!1,min:H,max:H,value:H,step:1,round:!0,culture:"",format:"n",spinners:!0,placeholder:"",selectOnFocus:!1,factor:1,upArrowText:"Increase value",downArrowText:"Decrease value",label:null,size:"medium",fillMode:"solid",rounded:"medium"},events:[_,h],_editable:function(e){var t=this,n=t.element,a=e.disable,o=e.readonly,i=t._text.add(n),r=t.wrapper.off(x);t._toggleText(!0),t._upArrowEventHandler.unbind("press"),t._downArrowEventHandler.unbind("press"),n.off("keydown"+b).off("keyup"+b).off("input"+b).off("paste"+b),t._inputLabel&&t._inputLabel.off(b),o||a?(r.addClass(a?C:"").removeClass(a?"":C),i.attr(m,a).attr(f,o).attr(L,a)):(r.removeClass(C).on(x,t._toggleHover),i.prop(m,!1).prop(f,!1).attr(L,!1),t._upArrowEventHandler.bind("press",(function(e){e.preventDefault(),t._spin(1),t._upArrow.addClass(T)})),t._downArrowEventHandler.bind("press",(function(e){e.preventDefault(),t._spin(-1),t._downArrow.addClass(T)})),t.element.on("keydown"+b,t._keydown.bind(t)).on("keyup"+b,t._keyup.bind(t)).on("paste"+b,t._paste.bind(t)).on("input"+b,t._inputHandler.bind(t)),t._inputLabel&&t._inputLabel.on("click"+b,t.focus.bind(t)))},readonly:function(e){this._editable({readonly:e===t||e,disable:!1}),this.floatingLabel&&this.floatingLabel.readonly(e===t||e)},enable:function(e){this._editable({readonly:!1,disable:!(e=e===t||e)}),this.floatingLabel&&this.floatingLabel.enable(e=e===t||e)},setOptions:function(e){var n=this;l.fn.setOptions.call(n,e),n.wrapper.toggleClass("k-expand-padding",!n.options.spinners),n._text.prop("placeholder",n.options.placeholder),n._placeholder(n.options.placeholder),n.element.attr({"aria-valuemin":n.options.min!==H?n.options.min*n.options.factor:n.options.min,"aria-valuemax":n.options.max!==H?n.options.max*n.options.factor:n.options.max}),n.options.format=u(n.options.format),n._upArrowEventHandler.destroy(),n._upArrowEventHandler=null,n._downArrowEventHandler.destroy(),n._downArrowEventHandler=null,n._arrowsWrap.remove(),n._arrows(),n._applyCssClasses(),n._inputLabel&&(n._inputLabel.off(b),n._inputLabel.remove(),n.floatingLabel&&(n.floatingLabel.destroy(),n._floatingLabelContainer&&n.wrapper.unwrap())),n._label(),n._editable({readonly:n.options.readonly,disable:!n.options.enable}),e.value!==t&&n.value(e.value)},destroy:function(){var e=this;e._inputLabel&&(e._inputLabel.off(b),e.floatingLabel&&e.floatingLabel.destroy()),e.element.add(e._text).add(e._upArrow).add(e._downArrow).off(b),e._upArrowEventHandler.destroy(),e._downArrowEventHandler.destroy(),e._form&&e._form.off("reset",e._resetHandler),l.fn.destroy.call(e)},min:function(e){return this._option("min",e)},max:function(e){return this._option("max",e)},step:function(e){return this._option("step",e)},value:function(e){var n=this;if(e===t)return n._value;(e=n._parse(e))===n._adjust(e)&&(n._update(e),n._old=n._value,n.floatingLabel&&n.floatingLabel.refresh())},focus:function(){this._focusin()},_adjust:function(e){var t=this.options,n=t.min,a=t.max;return e===H||(n!==H&&e<n?e=n:a!==H&&e>a&&(e=a)),e},_arrows:function(){var t,a=this,o=function(){clearTimeout(a._spinning),t.removeClass(T)},i=a.options,r=i.spinners,l=a.element;(t=l.siblings(".k-icon-button"))[0]||(t=e(I("increase",i.upArrowText,i)+I("decrease",i.downArrowText,i)).appendTo(a.wrapper),a._arrowsWrap=t.wrapAll('<span class="k-input-spinner k-spin-button"/>').parent()),r||(t.parent().toggle(r),a.wrapper.addClass("k-expand-padding")),a._upArrow=t.eq(0),a._upArrowEventHandler=new n.UserEvents(a._upArrow,{release:o}),a._downArrow=t.eq(1),a._downArrowEventHandler=new n.UserEvents(a._downArrow,{release:o})},_validation:function(){var t=this.element;this._validationIcon=e(n.ui.icon({icon:"exclamation-circle",iconClass:"k-input-validation-icon k-hidden"})).insertAfter(t)},_blur:function(){var e=this;e._toggleText(!0),e._change(e.element.val())},_click:function(e){var t=this;clearTimeout(t._focusing),t._focusing=setTimeout((function(){var n,o,i,r=e.target,l=a(r)[0],s=r.value.substring(0,l),u=t._format(t.options.format),d=u[","],p=0;d&&(o=new RegExp("\\"+d,"g"),i=new RegExp("(-)?("+u.symbol+")?([\\d\\"+d+"]+)(\\"+u["."]+")?(\\d+)?")),i&&(n=i.exec(s)),n&&(p=n[0].replace(o,"").length,-1!=s.indexOf("(")&&t._value<0&&p++),t._focusin(),a(t.element[0],p),t.selectValue()}))},selectValue:function(){this.options.selectOnFocus&&this.element[0].select()},_getFactorValue:function(e){var t=this.options.factor;return t&&1!==t&&null!==(e=n.parseFloat(e))&&(e/=t),e},_change:function(e){var t=this;e=t._getFactorValue(e),t._update(e),e=t._value,t._old!=e&&(t._old=e,t._typing||t.element.trigger(_),t.trigger(_)),t._typing=!1},_culture:function(e){return e||c(this.options.culture)},_focusin:function(){var e=this;e.wrapper.addClass(g),e._toggleText(!1),e.element[0].focus()},_focusout:function(){var e=this;clearTimeout(e._focusing),e.wrapper.removeClass(g).removeClass(w),e._blur(),e._removeInvalidState()},_format:function(e,t){var n=this._culture(t).numberFormat;return(e=e.toLowerCase()).indexOf("c")>-1?n=n.currency:e.indexOf("p")>-1&&(n=n.percent),n},_input:function(){var t,a=this,o=a.options,i=a.element.addClass(v).show()[0],r=i.accessKey;(t=a.wrapper.find(k+v).first()).length<2&&(t=e('<input type="text"/>').attr(n.attr("validate"),!1).insertBefore(i));try{i.setAttribute("type","text")}catch(e){i.type="text"}t[0].title=i.title,t[0].tabIndex=i.tabIndex,t[0].style.cssText=i.style.cssText,t.prop("placeholder",o.placeholder),r&&(t.attr("accesskey",r),i.accessKey=""),a._text=t.addClass(i.className).attr({role:"spinbutton","aria-valuemin":o.min!==H?o.min*o.factor:o.min,"aria-valuemax":o.max!==H?o.max*o.factor:o.max,autocomplete:"off"})},_keydown:function(e){var t=this,n=e.keyCode;n===o.NUMPAD_DOT&&(t._numPadDot=!0),n!=o.DOWN?n!=o.UP?n!=o.ENTER?(n!=o.TAB&&(t._typing=!0),t._cachedCaret=a(t.element)):t._change(t.element.val()):t._step(1):t._step(-1)},_keyup:function(){this._removeInvalidState()},_inputHandler:function(){var e=this.element,t=e.val(),n=this.options.min,o=this._format(this.options.format),i=o["."],r=null!==n&&n>=0&&"-"===t.charAt(0);this._numPadDot&&i!==k&&(t=t.replace(k,i),this.element.val(t),this._numPadDot=!1),this._isPasted&&this._parse(t)&&(t=this._parse(t).toString().replace(k,o["."])),this._numericRegex(o).test(t)&&!r?this._oldText=t:(this._blinkInvalidState(),this.element.val(this._oldText),this._cachedCaret&&(a(e,this._cachedCaret[0]),this._cachedCaret=null)),this._isPasted=!1},_blinkInvalidState:function(){var e=this;e._addInvalidState(),clearTimeout(e._invalidStateTimeout),e._invalidStateTimeout=setTimeout(e._removeInvalidState.bind(e),100)},_addInvalidState:function(){this.wrapper.addClass(A),this._validationIcon.removeClass("k-hidden")},_removeInvalidState:function(){var e=this;e.wrapper.removeClass(A),e._validationIcon.addClass("k-hidden"),e._invalidStateTimeout=null},_numericRegex:function(e){var t=this,n=e["."],a=t.options.decimals,o="*";return n===k&&(n="\\"+n),a===H&&(a=e.decimals),0===a&&t.options.restrictDecimals?E:(t.options.restrictDecimals&&(o="{0,"+a+"}"),t._separator!==n&&(t._separator=n,t._floatRegExp=new RegExp("^(-)?(((\\d+("+n+"\\d"+o+")?)|("+n+"\\d"+o+")))?$")),t._floatRegExp)},_paste:function(e){var t=this,n=e.target,a=n.value,o=t._format(t.options.format);t._isPasted=!0,setTimeout((function(){var e=t._parse(n.value);e===H?t._update(a):(n.value=e.toString().replace(k,o["."]),t._adjust(e)===e&&t._numericRegex(o).test(n.value)||(a=t._getFactorValue(n.value),t._update(a)))}))},_option:function(e,n){var a=this,o=a.element,i=a.options;if(n===t)return i[e];((n=a._parse(n))||"step"!==e)&&(i[e]=n,o.add(a._text).attr("aria-value"+e,n),o.attr(e,n))},_spin:function(e,t){var n=this;t=t||500,clearTimeout(n._spinning),n._spinning=setTimeout((function(){n._spin(e,50)}),t),n._step(e)},_step:function(e){var t=this,n=t.element,a=t._value,o=t._parse(n.val())||0,i=t.options.decimals||2;s()!=n[0]&&t._focusin(),t.options.factor&&o&&(o/=t.options.factor),o=+(o+t.options.step*e).toFixed(i),o=t._adjust(o),t._update(o),t._typing=!1,a!==o&&t.trigger(h)},_toggleHover:function(t){e(t.currentTarget).toggleClass(w,"mouseenter"===t.type)},_toggleText:function(e){var t=this;t._text.toggle(e),e?t._text.removeAttr("aria-hidden"):t._text.attr("aria-hidden","true"),t.element.toggle(!e)},_parse:function(e,t){return d(e,this._culture(t),this.options.format)},_round:function(e,t){return(this.options.round?n._round:j)(e,t)},_update:function(e){var t,a,o=this,i=o.options,r=i.factor,l=i.format,s=i.decimals,u=o._culture(),d=o._format(l,u);s===H&&(s=d.decimals),(a=(e=o._parse(e,u))!==H)&&(e=parseFloat(o._round(e,s),10)),o._value=e=o._adjust(e),o._placeholder(n.toString(e,l,u)),a?(r&&(e=parseFloat(o._round(e*r,s),10)),-1!==(e=e.toString()).indexOf("e")&&(e=o._round(+e,s)),t=e,e=e.replace(k,d["."])):(e=null,t=null),o.element.val(e),o._oldText=e,o.element.add(o._text).attr("aria-valuenow",t)},_placeholder:function(e){var t=this._text;t.val(e),p||e||t.val(this.options.placeholder),t.attr("title",this.element.attr("title")||t.val())},_label:function(){var a,o,i=this,r=i.element,l=i.options,s=r.attr("id");null!==l.label&&(a=!!S(l.label)&&l.label.floating,o=S(l.label)?l.label.content:l.label,a&&(i._floatingLabelContainer=i.wrapper.wrap("<span></span>").parent(),i.floatingLabel=new n.ui.FloatingLabel(i._floatingLabelContainer,{widget:i})),n.isFunction(o)&&(o=o.call(i)),o||(o=""),s||(s=l.name+"_"+n.guid(),r.attr("id",s)),i._inputLabel=e("<label class='k-label k-input-label' for='"+s+"'>"+o+"</label>'").insertBefore(i.wrapper),i.element.attr("disabled")===t&&i.element.attr("readonly")===t&&i._inputLabel.on("click"+b,i.focus.bind(i)))},_wrapper:function(){var e,t=this.element,n=t[0];(e=t.parents(".k-numerictextbox")).is("span.k-numerictextbox")||(e=t.hide().wrap("<span/>").parent()),e[0].style.cssText=n.style.cssText,n.style.width="",this.wrapper=e.addClass("k-numerictextbox k-input").addClass(n.className).removeClass("input-validation-error").css("display","")},_reset:function(){var t=this,n=t.element,a=n.attr("form"),o=a?e("#"+a):n.closest("form");o[0]&&(t._resetHandler=function(){setTimeout((function(){t.value(n[0].value),t.max(t._initialOptions.max),t.min(t._initialOptions.min)}))},t._form=o.on("reset",t._resetHandler))}});function I(e,t,n){var a="increase"===e?"caret-alt-up":"caret-alt-down",o="increase"===e?"increase":"decrease";return i.renderButton('<button role="button" tabindex="-1" unselectable="on" class="k-spinner-'+o+'" aria-label="'+t+'" title="'+t+'"></button>',F({},n,{icon:a,shape:null,rounded:null}))}function j(e,t){var n=parseFloat(e,10).toString().split(k);return n[1]&&(n[1]=n[1].substring(0,t)),n.join(k)}n.cssProperties.registerPrefix("NumericTextBox","k-input-"),n.cssProperties.registerValues("NumericTextBox",[{prop:"rounded",values:n.cssProperties.roundedValues.concat([["full","full"]])}]),r.plugin(O)}(window.kendo.jQuery);var kendo$1=kendo;export{kendo$1 as default};
//# sourceMappingURL=kendo.numerictextbox.js.map