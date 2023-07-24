/**
 * Kendo UI v2023.2.718 (http://www.telerik.com/kendo-ui)
 * Copyright 2023 Progress Software Corporation and/or one of its subsidiaries or affiliates. All rights reserved.
 *
 * Kendo UI commercial licenses may be obtained at
 * http://www.telerik.com/purchase/license-agreement/kendo-ui-complete
 * If you do not own a commercial license, this file shall be governed by the trial license terms.
 */
import"./kendo.core.js";import"./kendo.data.js";var __meta__={id:"binder",name:"MVVM",category:"framework",description:"Model View ViewModel (MVVM) is a design pattern which helps developers separate the Model (the data) from the View (the UI).",depends:["core","data"]};!function(e,t){var i=window.kendo,n=i.htmlEncode,s=i.Observable,a=i.data.ObservableObject,r=i.data.ObservableArray,d={}.toString,h={},o=i.Class,l="value",c="source",g="events",u="checked",f=!0,v="change";!function(){var e=document.createElement("a");try{delete e.test}catch(e){f=!1}}();var b=s.extend({init:function(e,t){var i=this;s.fn.init.call(i),i.source=e[0],i.parents=e,i.path=t,i.dependencies={},i.dependencies[t]=!0,i.observable=i.source instanceof s,i._access=function(e){i.dependencies[e.field]=!0},i.observable&&(i._change=function(e){i.change(e)},i.source.bind(v,i._change))},_parents:function(){var t=this.parents,i=this.get();if(i&&"function"==typeof i.parent){var n=i.parent();e.inArray(n,t)<0&&(t=[n].concat(t))}return t},change:function(e){var t,i,n=e.field,s=this;if("this"===s.path)s.trigger(v,e);else for(t in s.dependencies)if(0===t.indexOf(n)&&(!(i=t.charAt(n.length))||"."===i||"["===i)){s.trigger(v,e);break}},start:function(e){e.bind("get",this._access)},stop:function(e){e.unbind("get",this._access)},get:function(){var e=this,i=e.source,n=0,s=e.path,r=i;if(!e.observable)return r;for(e.start(e.source),r=i.get(s);r===t&&i;)(i=e.parents[++n])instanceof a&&(r=i.get(s));if(r===t)for(i=e.source;r===t&&i;)(i=i.parent())instanceof a&&(r=i.get(s));return"function"==typeof r&&((n=s.lastIndexOf("."))>0&&(i=i.get(s.substring(0,n))),e.start(i),r=i!==e.source?r.call(i,e.source):r.call(i),e.stop(i)),i&&i!==e.source&&(e.currentSource=i,i.unbind(v,e._change).bind(v,e._change)),e.stop(e.source),r},set:function(e){var t=this.currentSource||this.source,n=i.getter(this.path)(t);"function"==typeof n?t!==this.source?n.call(t,this.source,e):n.call(t,e):t.set(this.path,e)},destroy:function(){this.observable&&(this.source.unbind(v,this._change),this.currentSource&&this.currentSource.unbind(v,this._change)),this.unbind()}}),p=b.extend({get:function(){var e,t=this.source,i=this.path,n=0;for(e=t.get(i);!e&&t;)(t=this.parents[++n])instanceof a&&(e=t.get(i));if(e)return e.bind(t)}}),m=b.extend({init:function(e,t,i){b.fn.init.call(this,e,t),this.template=i},render:function(e){var t;return this.start(this.source),t=i.render(this.template,e),this.stop(this.source),t}}),y=o.extend({init:function(e,t,i){this.element=e,this.bindings=t,this.options=i},bind:function(e,t){var i=this;(e=t?e[t]:e).bind(v,(function(e){i.refresh(t||e)})),i.refresh(t)},destroy:function(){}}),w=y.extend({dataType:function(){return(this.element.getAttribute("data-"+i.ns+"type")||this.element.type||"text").toLowerCase()},parsedValue:function(){return this._parseValue(this.element.value,this.dataType())},_parseValue:function(e,t){return"date"==t?e=i.parseDate(e,"yyyy-MM-dd"):"datetime-local"==t?e=i.parseDate(e,["yyyy-MM-ddTHH:mm:ss","yyyy-MM-ddTHH:mm"]):"number"==t?e=i.parseFloat(e):"boolean"==t&&(e=e.toLowerCase(),e=null!==i.parseFloat(e)?Boolean(i.parseFloat(e)):"true"===e.toLowerCase()),e}});function _(t,n,s){return y.extend({init:function(e,t,i){var n=this;y.fn.init.call(n,e.element[0],t,i),n.widget=e,n._dataBinding=n.dataBinding.bind(n),n._dataBound=n.dataBound.bind(n),n._itemChange=n.itemChange.bind(n)},itemChange:function(e){T(e.item[0],e.data,this._ns(e.ns),[e.data].concat(this.bindings[t]._parents()))},dataBinding:function(e){var t,i,n=this.widget,s=e.removedItems||n.items();for(t=0,i=s.length;t<i;t++)A(s[t],!1)},_ns:function(t){t=t||i.ui;var n=[i.ui,i.dataviz.ui,i.mobile.ui];return n.splice(e.inArray(t,n),1),n.unshift(t),i.rolesFromNamespaces(n)},dataBound:function(e){var s,a,r,d,h=this.widget,o=e.addedItems||h.items(),l=h[n],c=i.data.HierarchicalDataSource;if(!(c&&l instanceof c)&&o.length)for(r=e.addedDataItems||l.flatView(),d=this.bindings[t]._parents(),s=0,a=r.length;s<a;s++)o[s]&&T(o[s],r[s],this._ns(e.ns),[r[s]].concat(d))},refresh:function(e){var a,r,d,h=this,o=h.widget;(e=e||{}).action||(h.destroy(),o.bind("dataBinding",h._dataBinding),o.bind("dataBound",h._dataBound),o.bind("itemChange",h._itemChange),a=h.bindings[t].get(),o[n]instanceof i.data.DataSource&&o[n]!=a&&(a instanceof i.data.DataSource?o[s](a):a&&a._dataSource?o[s](a._dataSource):(r=i.ui.Select&&o instanceof i.ui.Select,d=i.ui.MultiSelect&&o instanceof i.ui.MultiSelect,i.ui.DropDownTree&&o instanceof i.ui.DropDownTree?o.treeview[n].data(a):o[n].data(a),h.bindings.value&&(r||d)&&o.value(O(h.bindings.value.get(),o.options.dataValueField)))))},destroy:function(){var e=this.widget;e.unbind("dataBinding",this._dataBinding),e.unbind("dataBound",this._dataBound),e.unbind("itemChange",this._itemChange)}})}h.attr=y.extend({refresh:function(e){this.element.setAttribute(e,this.bindings.attr[e].get())}}),h.css=y.extend({init:function(e,t,i){y.fn.init.call(this,e,t,i),this.classes={}},refresh:function(t){var i=e(this.element),n=this.bindings.css[t];(this.classes[t]=n.get())?i.addClass(t):i.removeClass(t)}}),h.style=y.extend({refresh:function(e){this.element.style[e]=this.bindings.style[e].get()||""}}),h.enabled=y.extend({refresh:function(){this.bindings.enabled.get()?this.element.removeAttribute("disabled"):this.element.setAttribute("disabled","disabled")}}),h.readonly=y.extend({refresh:function(){this.bindings.readonly.get()?this.element.setAttribute("readonly","readonly"):this.element.removeAttribute("readonly")}}),h.disabled=y.extend({refresh:function(){this.bindings.disabled.get()?this.element.setAttribute("disabled","disabled"):this.element.removeAttribute("disabled")}}),h.events=y.extend({init:function(e,t,i){y.fn.init.call(this,e,t,i),this.handlers={}},refresh:function(t){var i=e(this.element),n=this.bindings.events[t],s=this.handlers[t];s&&i.off(t,s),s=this.handlers[t]=n.get(),i.on(t,n.source,s)},destroy:function(){var t,i=e(this.element);for(t in this.handlers)i.off(t,this.handlers[t])}}),h.text=y.extend({refresh:function(){var t=this.bindings.text.get(),n=this.element.getAttribute("data-"+i.ns+"format")||"";null==t&&(t=""),e(this.element).text(i.toString(t,n))}}),h.visible=y.extend({refresh:function(){this.bindings.visible.get()?this.element.style.display="":this.element.style.display="none"}}),h.invisible=y.extend({refresh:function(){this.bindings.invisible.get()?this.element.style.display="none":this.element.style.display=""}}),h.html=y.extend({refresh:function(){this.element.innerHTML=this.bindings.html.get()}}),h.value=w.extend({init:function(t,i,n){w.fn.init.call(this,t,i,n),this._change=this.change.bind(this),this.eventName=n.valueUpdate||v,e(this.element).on(this.eventName,this._change),this._initChange=!1},change:function(){this._initChange=this.eventName!=v,this.bindings.value.set(this.parsedValue()),this._initChange=!1},refresh:function(){if(!this._initChange){var e=this.bindings.value.get();null==e&&(e="");var t=this.dataType();"date"==t?e=i.toString(e,"yyyy-MM-dd"):"datetime-local"==t&&(e=i.toString(e,"yyyy-MM-ddTHH:mm:ss")),this.element.value=e}this._initChange=!1},destroy:function(){e(this.element).off(this.eventName,this._change)}}),h.source=y.extend({init:function(e,t,n){y.fn.init.call(this,e,t,n);var s=this.bindings.source.get();s instanceof i.data.DataSource&&!1!==n.autoBind&&s.fetch()},refresh:function(e){var t=this,n=t.bindings.source.get();n instanceof r||n instanceof i.data.DataSource?"add"==(e=e||{}).action?t.add(e.index,e.items):"remove"==e.action?t.remove(e.index,e.items):"itemchange"!=e.action&&t.render():t.render()},container:function(){var e=this.element;return"table"==e.nodeName.toLowerCase()&&(e.tBodies[0]||e.appendChild(document.createElement("tbody")),e=e.tBodies[0]),e},template:function(){var e=this.options,t=e.template,s=this.container().nodeName.toLowerCase();return t||(t="select"==s?e.valueField||e.textField?t=>{const s=i.getter(e.valueField||e.textField)(t),a=i.getter(e.textField||e.valueField)(t);return`<option value="${n(s)}">${n(a)}</option>`}:e=>`<option>${n(e)}</option>`:"tbody"==s?e=>`<tr><td>${n(e)}</td></tr>`:"ul"==s||"ol"==s?e=>`<li>${n(e)}</li>`:e=>`${n(e)}`,t=i.template(t)),t},add:function(t,n){var s,a,r,d,h=this.container(),o=h.cloneNode(!1),l=h.children[t];if(e(o).html(i.render(this.template(),n)),o.children.length)for(s=this.bindings.source._parents(),a=0,r=n.length;a<r;a++)d=o.children[0],h.insertBefore(d,l||null),T(d,n[a],this.options.roles,[n[a]].concat(s))},remove:function(e,t){var i,n=this.container();for(i=0;i<t.length;i++){var s=n.children[e];A(s,!0),s.parentNode==n&&n.removeChild(s)}},render:function(){var t,n,s,a=this.bindings.source.get(),h=this.container(),o=this.template();if(null!=a)if(a instanceof i.data.DataSource&&(a=a.view()),a instanceof r||"[object Array]"===d.call(a)||(a=[a]),this.bindings.template){if(I(h,!0),e(h).html(this.bindings.template.render(a)),h.children.length)for(t=this.bindings.source._parents(),n=0,s=a.length;n<s;n++)T(h.children[n],a[n],this.options.roles,[a[n]].concat(t))}else e(h).html(i.render(o,a))}}),h.input={checked:w.extend({init:function(t,i,n){w.fn.init.call(this,t,i,n),this._change=this.change.bind(this),e(this.element).change(this._change)},change:function(){var e=this.element,t=this.value();if("radio"==e.type)t=this.parsedValue(),this.bindings.checked.set(t);else if("checkbox"==e.type){var i,n=this.bindings.checked.get();if(n instanceof r){if((t=this.parsedValue())instanceof Date){for(var s=0;s<n.length;s++)if(n[s]instanceof Date&&+n[s]==+t){i=s;break}}else i=n.indexOf(t);i>-1?n.splice(i,1):n.push(t)}else this.bindings.checked.set(t)}},refresh:function(){var e=this.bindings.checked.get(),t=e,n=this.dataType(),s=this.element;if("checkbox"==s.type)if(t instanceof r){var a=-1;if((e=this.parsedValue())instanceof Date){for(var d=0;d<t.length;d++)if(t[d]instanceof Date&&+t[d]==+e){a=d;break}}else a=t.indexOf(e);s.checked=a>=0}else s.checked=t;else"radio"==s.type&&("date"==n?e=i.toString(e,"yyyy-MM-dd"):"datetime-local"==n&&(e=i.toString(e,"yyyy-MM-ddTHH:mm:ss")),null!=e&&s.value===e.toString()?s.checked=!0:s.checked=!1)},value:function(){var e=this.element,t=e.value;return"checkbox"==e.type&&(t=e.checked),t},destroy:function(){e(this.element).off(v,this._change)}})},h.select={source:h.source.extend({refresh:function(n){var s=this,a=s.bindings.source.get();if(a instanceof r||a instanceof i.data.DataSource){if("add"==(n=n||{}).action)s.add(n.index,n.items);else if("remove"==n.action)s.remove(n.index,n.items);else if(("itemchange"==n.action||n.action===t)&&(s.render(),s.bindings.value&&s.bindings.value)){var d=O(s.bindings.value.get(),e(s.element).data("valueField"));null===d?s.element.selectedIndex=-1:s.element.value=d}}else s.render()}}),value:w.extend({init:function(t,i,n){w.fn.init.call(this,t,i,n),this._change=this.change.bind(this),e(this.element).change(this._change)},parsedValue:function(){var e,t,i,n,s=this.dataType(),a=[];for(i=0,n=this.element.options.length;i<n;i++)(t=this.element.options[i]).selected&&(e=(e=t.attributes.value)&&e.specified?t.value:t.text,a.push(this._parseValue(e,s)));return a},change:function(){var e,n,s,d,h,o,l=[],c=this.element,g=this.options.valueField||this.options.textField,u=this.options.valuePrimitive;for(h=0,o=c.options.length;h<o;h++)(n=c.options[h]).selected&&(d=(d=n.attributes.value)&&d.specified?n.value:n.text,g?l.push(d):l.push(this._parseValue(d,this.dataType())));if(g)for((e=this.bindings.source.get())instanceof i.data.DataSource&&(e=e.view()),s=0;s<l.length;s++)for(h=0,o=e.length;h<o;h++){var f=e[h].get(g);if(String(f)===l[s]){l[s]=e[h];break}}(d=this.bindings.value.get())instanceof r?d.splice.apply(d,[0,d.length].concat(l)):u||!(d instanceof a||null===d||d===t)&&g?this.bindings.value.set(l[0].get(g)):this.bindings.value.set(l[0])},refresh:function(){var e,t,n=this.element,s=n.options,d=this.bindings.value.get(),h=d,o=this.options.valueField||this.options.textField,l=this.dataType();h instanceof r||(h=new r([d])),n.selectedIndex=-1;for(var c=0;c<h.length;c++)for(d=h[c],o&&d instanceof a&&(d=d.get(o)),"date"==l?d=i.toString(h[c],"yyyy-MM-dd"):"datetime-local"==l&&(d=i.toString(h[c],"yyyy-MM-ddTHH:mm:ss")),e=0;e<s.length;e++)""===(t=s[e].value)&&""!==d&&(t=s[e].text),null!=d&&t==d.toString()&&(s[e].selected=!0,!0)},destroy:function(){e(this.element).off(v,this._change)}})},h.widget={events:y.extend({init:function(e,t,i){y.fn.init.call(this,e.element[0],t,i),this.widget=e,this.handlers={}},refresh:function(e){var t=this.bindings.events[e],i=this.handlers[e];i&&this.widget.unbind(e,i),i=t.get(),this.handlers[e]=function(e){e.data=t.source,i(e),e.data===t.source&&delete e.data},this.widget.bind(e,this.handlers[e])},destroy:function(){var e;for(e in this.handlers)this.widget.unbind(e,this.handlers[e])}}),checked:y.extend({init:function(e,t,i){y.fn.init.call(this,e.element[0],t,i),this.widget=e,this._change=this.change.bind(this),this.widget.bind(v,this._change)},change:function(){this.bindings.checked.set(this.value())},refresh:function(){var e=this.bindings.checked.get();"radio"===this.element.type?e!==t?this.widget.check(e.toString()===this.value()):this.widget.check(!1):this.widget.check(!0===e)},value:function(){var e=this.element,t=e.value;return"on"!=t&&"off"!=t&&"checkbox"!=this.element.type||(t=e.checked),t},destroy:function(){this.widget.unbind(v,this._change)}}),start:y.extend({init:function(e,t,i){y.fn.init.call(this,e.element[0],t,i),this._change=this.change.bind(this),this.widget=e,this.widget.bind(v,this._change)},change:function(){this.bindings.start.set(this.widget.range().start)},refresh:function(){var e=this.bindings.start.get(),t=this.widget._range?this.widget._range.end:null;this.widget.range({start:e,end:t})},destroy:function(){this.widget.unbind(v,this._change)}}),end:y.extend({init:function(e,t,i){y.fn.init.call(this,e.element[0],t,i),this._change=this.change.bind(this),this.widget=e,this.widget.bind(v,this._change)},change:function(){this.bindings.end.set(this.widget.range().end)},refresh:function(){var e=this.bindings.end.get(),t=this.widget._range?this.widget._range.start:null;this.widget.range({start:t,end:e})},destroy:function(){this.widget.unbind(v,this._change)}}),visible:y.extend({init:function(e,t,i){y.fn.init.call(this,e.element[0],t,i),this.widget=e},refresh:function(){var e=this.bindings.visible.get();this.widget.wrapper[0].style.display=e?"":"none"}}),invisible:y.extend({init:function(e,t,i){y.fn.init.call(this,e.element[0],t,i),this.widget=e},refresh:function(){var e=this.bindings.invisible.get();this.widget.wrapper[0].style.display=e?"none":""}}),floatingLabel:y.extend({init:function(e,t,i){y.fn.init.call(this,e.element[0],t,i),e.floatingLabel&&e.floatingLabel.refresh()}}),enabled:y.extend({init:function(e,t,i){y.fn.init.call(this,e.element[0],t,i),this.widget=e},refresh:function(){this.widget.enable&&this.widget.enable(this.bindings.enabled.get())}}),disabled:y.extend({init:function(e,t,i){y.fn.init.call(this,e.element[0],t,i),this.widget=e},refresh:function(){this.widget.enable&&this.widget.enable(!this.bindings.disabled.get())}}),source:_("source","dataSource","setDataSource"),value:y.extend({init:function(e,t,i){y.fn.init.call(this,e.element[0],t,i),this.widget=e,this._change=this.change.bind(this),this.widget.first(v,this._change);var n=this.bindings.value.get();this._valueIsObservableObject=!i.valuePrimitive&&(null==n||n instanceof a),this._valueIsObservableArray=n instanceof r,this._initChange=!1},_source:function(){var e;return this.widget.dataItem&&(e=this.widget.dataItem())&&e instanceof a?[e]:(this.bindings.source&&(e=this.bindings.source.get()),(!e||e instanceof i.data.DataSource)&&(e=this.widget.dataSource.flatView()),e)},change:function(){var e,t,i,n,s,a,r,h=this.widget.value(),o=this.options.dataValueField||this.options.dataTextField,l="[object Array]"===d.call(h),c=this._valueIsObservableObject,g=[];if(this._initChange=!0,o)if(""===h&&(c||this.options.valuePrimitive))h=null;else{for(r=this._source(),l&&(t=h.length,g=h.slice(0)),s=0,a=r.length;s<a;s++)if(n=(i=r[s]).get(o),l){for(e=0;e<t;e++)if(n==g[e]){g[e]=i;break}}else if(n==h){h=c?i:n;break}g[0]&&(h=this._valueIsObservableArray?g:c||!o?g[0]:g[0].get(o))}this.bindings.value.set(h),this._initChange=!1},refresh:function(){if(!this._initChange){var e,i=this.widget,n=i.options,s=n.dataTextField,d=n.dataValueField||s,h=this.bindings.value.get(),o=n.text||"",l=0,c=[];if(h===t&&(h=null),d)if(h instanceof r){for(e=h.length;l<e;l++)c[l]=h[l].get(d);h=c}else h instanceof a&&(o=h.get(s),h=h.get(d));!1!==n.autoBind||n.cascadeFrom||!i.listView||i.listView.bound()?i.value(h):(s!==d||o||(o=h),o||!h&&0!==h||!n.valuePrimitive?i._preselect(h,o):i.value(h))}this._initChange=!1},destroy:function(){this.widget.unbind(v,this._change)}}),dropdowntree:{value:y.extend({init:function(e,t,i){y.fn.init.call(this,e.element[0],t,i),this.widget=e,this._change=this.change.bind(this),this.widget.first(v,this._change),this._initChange=!1},change:function(){var e=this,i=e.bindings.value.get(),n=e.options.valuePrimitive,s=e.widget.treeview.select(),a=e.widget._isMultipleSelection()?e.widget._getAllChecked():e.widget.treeview.dataItem(s)||e.widget.value(),d=n||!1===e.widget.options.autoBind?e.widget.value():a,h=this.options.dataValueField||this.options.dataTextField;if(d=d.slice?d.slice(0):d,e._initChange=!0,i instanceof r){for(var o,l,c,g=[],u=d.length,f=0,v=0,b=i[f];b!==t;){for(c=!1,v=0;v<u;v++)if(n?d[v]==b:(l=(l=d[v]).get?l.get(h):l)==(b.get?b.get(h):b)){d.splice(v,1),u-=1,c=!0;break}c?f+=1:(g.push(b),x(i,f,1),o=f),b=i[f]}x(i,i.length,0,d),g.length&&i.trigger("change",{action:"remove",items:g,index:o}),d.length&&i.trigger("change",{action:"add",items:d,index:i.length-1})}else e.bindings.value.set(d);e._initChange=!1},refresh:function(){if(!this._initChange){var e,t,i=this.options,n=this.widget,s=i.dataValueField||i.dataTextField,d=this.bindings.value.get(),h=d,o=0,l=[];if(s)if(d instanceof r){for(e=d.length;o<e;o++)t=d[o],l[o]=t.get?t.get(s):t;d=l}else d instanceof a&&(d=d.get(s));!1===i.autoBind&&!0!==i.valuePrimitive?n._preselect(h,d):n.value(d)}},destroy:function(){this.widget.unbind(v,this._change)}})},gantt:{dependencies:_("dependencies","dependencies","setDependenciesDataSource")},multiselect:{value:y.extend({init:function(e,t,i){y.fn.init.call(this,e.element[0],t,i),this.widget=e,this._change=this.change.bind(this),this.widget.first(v,this._change),this._initChange=!1},change:function(){var e=this,i=e.bindings.value.get(),n=e.options.valuePrimitive,s=n?e.widget.value():e.widget.dataItems(),a=this.options.dataValueField||this.options.dataTextField;if(s=s.slice(0),e._initChange=!0,i instanceof r){for(var d,h,o,l=[],c=s.length,g=0,u=0,f=i[g];f!==t;){for(o=!1,u=0;u<c;u++)if(n?s[u]==f:(h=(h=s[u]).get?h.get(a):h)==(f.get?f.get(a):f)){s.splice(u,1),c-=1,o=!0;break}o?g+=1:(l.push(f),x(i,g,1),d=g),f=i[g]}x(i,i.length,0,s),l.length&&i.trigger("change",{action:"remove",items:l,index:d}),s.length&&i.trigger("change",{action:"add",items:s,index:i.length-1})}else e.bindings.value.set(s);e._initChange=!1},refresh:function(){if(!this._initChange){var e,i,n=this.options,s=this.widget,d=n.dataValueField||n.dataTextField,h=this.bindings.value.get(),o=h,l=0,c=[];if(h===t&&(h=null),d)if(h instanceof r){for(e=h.length;l<e;l++)i=h[l],c[l]=i.get?i.get(d):i;h=c}else h instanceof a&&(h=h.get(d));!1!==n.autoBind||!0===n.valuePrimitive||s._isBound()?s.value(h):s._preselect(o,h)}},destroy:function(){this.widget.unbind(v,this._change)}})},scheduler:{source:_("source","dataSource","setDataSource").extend({dataBound:function(e){var t,i,n,s,a=this.widget,r=e.addedItems||a.items();if(r.length)for(n=e.addedDataItems||a.dataItems(),s=this.bindings.source._parents(),t=0,i=n.length;t<i;t++)T(r[t],n[t],this._ns(e.ns),[n[t]].concat(s))}})},grid:{source:_("source","dataSource","setDataSource").extend({dataBound:function(e){var t,i,n,s,a=this.widget,r=e.addedItems||a.items();if(r.length)for(s=e.addedDataItems||a.dataItems(),n=this.bindings.source._parents(),t=0,i=s.length;t<i;t++)T(r[t],s[t],this._ns(e.ns),[s[t]].concat(n))}})},badge:{text:y.extend({init:function(e,t,i){y.fn.init.call(this,e.element[0],t,i),this.widget=e},refresh:function(){var e=this.bindings.text.get();null==e&&(e=""),this.widget.text(e)}})}};var x=function(e,t,i,n){i=i||0;var s,a=(n=n||[]).length,r=e.length,d=[].slice.call(e,t+i),h=d.length;if(a){for(a=t+a,s=0;t<a;t++)e[t]=n[s],s++;e.length=a}else if(i)for(e.length=t,i+=t;t<i;)delete e[--i];if(h){for(h=t+h,s=0;t<h;t++)e[t]=d[s],s++;e.length=h}for(t=e.length;t<r;)delete e[t],t++},k=o.extend({init:function(e,t){this.target=e,this.options=t,this.toDestroy=[]},bind:function(e){var t,i,n,s,a,r,d=this instanceof B,h=this.binders();for(t in e)t==l?i=!0:t==c?n=!0:t!=g||d?t==u?a=!0:"css"==t?r=!0:this.applyBinding(t,e,h):s=!0;n&&this.applyBinding(c,e,h),i&&this.applyBinding(l,e,h),a&&this.applyBinding(u,e,h),s&&!d&&this.applyBinding(g,e,h),r&&!d&&this.applyBinding("css",e,h),d&&this.target&&this.target.floatingLabel&&this.applyBinding("floatingLabel",e,h)},binders:function(){return h[this.target.nodeName.toLowerCase()]||{}},applyBinding:function(e,t,i){var n,s=i[e]||h[e],a=this.toDestroy,r=t[e];if(s)if(s=new s(this.target,t,this.options),a.push(s),r instanceof b)s.bind(r),a.push(r);else for(n in r)s.bind(r,n),a.push(r[n]);else if("template"!==e)throw new Error("The "+e+" binding is not supported by the "+this.target.nodeName.toLowerCase()+" element")},destroy:function(){var e,t,i=this.toDestroy;for(e=0,t=i.length;e<t;e++)i[e].destroy()}}),B=k.extend({binders:function(){return h.widget[this.target.options.name.toLowerCase()]||{}},applyBinding:function(e,t,i){var n,s=i[e]||h.widget[e],a=this.toDestroy,r=t[e];if(!s)throw new Error("The "+e+" binding is not supported by the "+this.target.options.name+" widget");if(s=new s(this.target,t,this.target.options),a.push(s),r instanceof b)s.bind(r),a.push(r);else for(n in r)s.bind(r,n),a.push(r[n])}});var S=/[A-Za-z0-9_\-]+:(\{([^}]*)\}|[^,}]+)/g,C=/\s/g;function D(e){var t,i,n,s,a,r,d,h={};for(t=0,i=(d=e.match(S)).length;t<i;t++)s=(n=d[t]).indexOf(":"),a=n.substring(0,s),"{"==(r=n.substring(s+1)).charAt(0)&&(r=D(r)),h[a]=r;return h}function F(e,t,i){var n,s={};for(n in e)s[n]=new i(t,e[n]);return s}function T(e,t,n,s){if(e&&!e.getAttribute("data-"+i.ns+"stop")){var a,r,d,h=e.getAttribute("data-"+i.ns+"role"),o=e.getAttribute("data-"+i.ns+"bind"),l=[],c=!0,g={};s=s||[t],(h||o)&&V(e,!1),h&&(d=function(e,t){var n=i.initWidget(e,{},t);if(n)return new B(n)}(e,n)),o&&(o=D(o.replace(C,"")),d||((g=i.parseOptions(e,{textField:"",valueField:"",template:"",valueUpdate:v,valuePrimitive:!1,autoBind:!0},t)).roles=n,d=new k(e,g)),d.source=t,r=F(o,s,b),g.template&&(r.template=new m(s,"",g.template)),r.click&&(o.events=o.events||{},o.events.click=o.click,r.click.destroy(),delete r.click),r.source&&(c=!1),o.attr&&(r.attr=F(o.attr,s,b)),o.style&&(r.style=F(o.style,s,b)),o.events&&(r.events=F(o.events,s,p)),o.css&&(r.css=F(o.css,s,b)),d.bind(r)),d&&(e.kendoBindingTarget=d);var u=e.children;if(c&&u&&!e.getAttribute("data-"+i.ns+"stop")){for(a=0;a<u.length;a++)l[a]=u[a];for(a=0;a<l.length;a++)T(l[a],t,n,s)}}}function M(t,n){var s,a,r,d=i.rolesFromNamespaces([].slice.call(arguments,2));for(n=i.observable(n),s=0,a=(t=e(t)).length;s<a;s++)1===(r=t[s]).nodeType&&T(r,n,d)}function V(t,n){var s=t.kendoBindingTarget;if(s&&(s.destroy(),f?delete t.kendoBindingTarget:t.removeAttribute?t.removeAttribute("kendoBindingTarget"):t.kendoBindingTarget=null),n){var a=i.widgetInstance(e(t));a&&"function"==typeof a.destroy&&a.destroy()}}function A(e,t){V(e,t),I(e,t)}function I(e,t){var i=e.children;if(i)for(var n=0,s=i.length;n<s;n++)A(i[n],t)}function O(e,t){var i,n,s=[],d=0;if(!t)return e;if(e instanceof r){for(i=e.length;d<i;d++)n=e[d],s[d]=n.get?n.get(t):n[t];e=s}else e instanceof a&&(e=e.get(t));return e}i.unbind=function(t){var i,n;for(i=0,n=(t=e(t)).length;i<n;i++)A(t[i],!1)},i.bind=M,i.data.binders=h,i.data.Binder=y,i.notify=function(e,t){var i=e.element,n=i[0].kendoBindingTarget;n&&M(i,n.source,t)},i.observable=function(e){return e instanceof a||(e=new a(e)),e},i.observableHierarchy=function(e){var t=i.data.HierarchicalDataSource.create(e);return t.fetch(),function e(t){var i,n;for(i=0;i<t.length;i++)t[i]._initChildren(),(n=t[i].children).fetch(),t[i].items=n.data(),e(t[i].items)}(t.data()),t._data._dataSource=t,t._data}}(window.kendo.jQuery);var kendo$1=kendo;export{kendo$1 as default};
//# sourceMappingURL=kendo.binder.js.map
