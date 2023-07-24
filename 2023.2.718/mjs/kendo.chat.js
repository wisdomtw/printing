/**
 * Kendo UI v2023.2.718 (http://www.telerik.com/kendo-ui)
 * Copyright 2023 Progress Software Corporation and/or one of its subsidiaries or affiliates. All rights reserved.
 *
 * Kendo UI commercial licenses may be obtained at
 * http://www.telerik.com/purchase/license-agreement/kendo-ui-complete
 * If you do not own a commercial license, this file shall be governed by the trial license terms.
 */
import"./kendo.core.js";import"./kendo.icons.js";import"./kendo.draganddrop.js";!function(t,e){var n=window.kendo,s=n.ui.Widget,i=t.extend,o=".kendoChat",a=n.keys,r=s.extend({init:function(t,e){s.fn.init.call(this,t,e),this._wrapper(),this._attachEvents(),this._typing=!1},events:["focusToolbar","sendMessage","toggleToolbar","typingEnd","typingStart"],options:{messages:{placeholder:"Type a message...",toggleButton:"Toggle toolbar",sendButton:"Send message"}},destroy:function(){s.fn.destroy.call(this),this.input&&(this.input.off(o),this.input.remove(),this.input=null),this.element.off(o),this.element.empty()},_wrapper:function(){var e=r.styles,s=this.options,i=s.messages,o="inputId_"+n.guid();t("<label>").addClass(e.hidden).html(i.placeholder).attr("for",o).appendTo(this.element),this.inputWrapper=this.element.addClass(e.inputWrapper).appendTo(this.element),this.input=t("<input type='text'>").addClass(e.input).attr("id",o).attr("placeholder",i.placeholder).appendTo(this.inputWrapper),this.inputSuffix=t("<span></span>").addClass(e.inputSuffix).appendTo(this.inputWrapper),s.toolbar&&s.toolbar.toggleable&&s.toolbar.buttons&&s.toolbar.buttons.length&&t("<button>").addClass(e.button).addClass(e.buttonFlat).addClass(e.iconButton).addClass(e.buttonToggle).attr({type:"button",title:i.toggleButton,"aria-label":i.toggleButton,"aria-controls":s.toolbarId}).append(t('<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"><g>   <path d="M128,240c0-26.4-21.6-48-48-48s-48,21.6-48,48s21.6,48,48,48S128,266.4,128,240z"/>   <path d="M192,240c0,26.4,21.6,48,48,48c26.4,0,48-21.6,48-48s-21.6-48-48-48C213.6,192,192,213.6,192,240z"/>   <path d="M352,240c0,26.4,21.6,48,48,48c26.4,0,48-21.6,48-48s-21.6-48-48-48C373.6,192,352,213.6,352,240z"/></g></svg>')).appendTo(this.inputSuffix),t("<button>").addClass(e.button).addClass(e.buttonFlat).addClass(e.iconButton).addClass(e.buttonSend).append(t('<svg version="1.1" ixmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 16 16" xml:space="preserve"><path d="M0,14.3c-0.1,0.6,0.3,0.8,0.8,0.6l14.8-6.5c0.5-0.2,0.5-0.6,0-0.8L0.8,1.1C0.3,0.9-0.1,1.1,0,1.7l0.7,4.2C0.8,6.5,1.4,7,1.9,7.1l8.8,0.8c0.6,0.1,0.6,0.1,0,0.2L1.9,8.9C1.4,9,0.8,9.5,0.7,10.1L0,14.3z"/></svg>')).appendTo(this.inputSuffix).attr("title",i.sendButton).attr("aria-label",i.sendButton)},_attachEvents:function(){var t=r.styles;this.input.on("keydown"+o,this._keydown.bind(this)).on("input"+o,this._input.bind(this)).on("focusout"+o,this._inputFocusout.bind(this)),this.element.on("click"+o,"."+t.buttonSend,this._buttonClick.bind(this)),this.element.on("click"+o,"."+t.buttonToggle,this._toggleToolbar.bind(this))},_input:function(){var t=this.input.val().length>0;this._triggerTyping(t)},_keydown:function(t){switch(t.keyCode){case a.ENTER:t.preventDefault(),this._sendMessage();break;case a.F10:t.preventDefault(),this.trigger("focusToolbar")}},_buttonClick:function(t){t.preventDefault(),this._sendMessage()},_sendMessage:function(){var t=this.input.val();if(t.length){this._triggerTyping(!1);var e={text:t};this.trigger("sendMessage",e),this.input.val("")}},_inputFocusout:function(){this._triggerTyping(!1)},_triggerTyping:function(t){t?this._typing||(this.trigger("typingStart",{}),this._typing=!0):this._typing&&(this.trigger("typingEnd",{}),this._typing=!1)},_toggleToolbar:function(t){this.trigger("toggleToolbar",{originalEvent:t})}});i(!0,r,{styles:{input:"k-input-inner",inputWrapper:"k-textbox k-input k-input-lg k-input-solid",button:"k-button",buttonFlat:"k-button-lg k-button-flat k-button-flat-base",iconButton:"k-icon-button",buttonIcon:"k-button-icon",buttonSend:"k-button-send",buttonToggle:"k-button-toggle",hidden:"k-hidden",inputSuffix:"k-input-suffix"}}),i(n,{chat:{ChatMessageBox:r}})}(window.kendo.jQuery),function(t,e){var n=window.kendo,s=n.ui.Widget,i=t.extend,o=".kendoChat",a="kButtonName",r="chatToolbarScrollLeft",l="chatToolbarScrollRight",c=":visible",d="tabindex",u={effects:"expand:vertical",duration:200},h={expand:{show:!0},collapse:{hide:!0}},p=s.extend({init:function(t,e){var n=(e=i({},e,{name:"ChatToolbar"})).toolbar,a=n.buttons&&n.buttons.length;s.fn.init.call(this,t,e),a&&this._createButtonList(),a&&n.scrollable&&this.buttonsWidth()>this.element.width()&&this._initScrolling(),this._setupAnimation(),a&&n.toggleable&&this.toggle(!0),this.element.on("click"+o,this._onClick.bind(this)).on("keydown"+o,this._onKeydown.bind(this))},events:["click"],destroy:function(){s.fn.destroy.call(this),this.element.off(o),this.element.empty()},_createButtonList:function(){for(var e=p.styles,n=this.options.toolbar.buttons,s=t("<div class='"+e.buttonList+"'></div>"),i=0;i<n.length;i++){var o=this._createButton(n[i]);s.append(o)}s.appendTo(this.element),this.buttonList=s,this.buttons().first().removeAttr(d)},_createButton:function(e){var s,i=p.styles,o=t("<button>");return"string"==typeof e&&(e={name:e}),s=t.extend({},e.attr||{},{title:e.text||e.name,"aria-label":e.text||e.name,type:"button",tabindex:-1}),o.attr(s).addClass(e.name).data(a,e.name).addClass(i.button).addClass(i.buttonDefaults),(e.icon||e.iconClass)&&(o.addClass(i.iconButton),o.prepend(n.html.renderIcon({icon:e.icon,iconClass:"k-button-icon"+(e.iconClass?` ${e.iconClass}`:"")}))),o},_onClick:function(e){var n=p.styles,s=t(e.target).closest("."+n.button);s.is("."+n.scrollButton)&&!this._scrolling&&this._scroll(s.data(a)),s.data(a)&&(this.buttons().attr(d,-1),s.removeAttr(d),this.trigger("click",{button:s[0],name:s.data(a),originalEvent:e}))},_onKeydown:function(t){var e=t.keyCode,s=n.keys;switch(e){case s.LEFT:this._focusButton(-1);break;case s.RIGHT:this._focusButton(1)}},_focusButton:function(t){var e=this.buttons(),n=e.not("[tabindex=-1]"),s=e[n.index()+t];s&&(n.attr(d,-1),s.removeAttribute(d),s.focus())},_initScrolling:function(){var t=p.styles;this.scrollButtonLeft=this._createButton({name:r,icon:t.scrollButtonLeftIcon,attr:{class:t.scrollButton+" "+t.scrollButtonLeft}}),this.scrollButtonRight=this._createButton({name:l,icon:t.scrollButtonRightIcon,attr:{class:t.scrollButton+" "+t.scrollButtonRight}}),this.element.prepend(this.scrollButtonLeft),this.element.append(this.scrollButtonRight),this._refreshScrollButtons(),this.element.on("keydown"+o,this._refreshScrollButtons.bind(this))},_scroll:function(t){var e=this,s=e.buttonWidth(),i=this.maxScrollSize(),o=t===r?-1*s:s,a=this.currentScrollLeft()+o;a=Math.min(Math.max(a,0),i),t!==r&&t!==l||(n.scrollLeft(e.buttonList,a),e._refreshScrollButtons(a))},_refreshScrollButtons:function(t){var e=this.maxScrollSize(),n=undefined===t||isNaN(parseInt(t,10))?this.currentScrollLeft():t;(this.scrollButtonLeft||this.scrollButtonRight)&&(this.scrollButtonLeft.toggle(0!==n),this.scrollButtonRight.toggle(n!==e))},_setupAnimation:function(){var t=this.options.toolbar.animation,e=i({},u),n=i({reverse:!0,hide:!0},u);t=!1===t?i(!0,{},h):i(!0,{expand:e,collapse:n},t),this.options.toolbar.animation=t},_animationComplete:function(){this._refreshScrollButtons()},_animationCompleteExpand:function(){this._animationComplete(),this.buttons().not("[tabindex=-1]").trigger("focus")},currentScrollLeft:function(){return Math.round(n.scrollLeft(this.buttonList))},maxScrollSize:function(){return Math.round(this.buttonList[0].scrollWidth-this.buttonList[0].clientWidth)},buttons:function(){var t=p.styles;return this.buttonList?this.buttonList.children("."+t.button):null},buttonWidth:function(){return Math.round(this.buttons().last().outerWidth(!0))},buttonsWidth:function(){var t=0;return this.buttons()&&(t=this.buttonWidth()*this.buttons().length),t},toggle:function(t){var e=this.options.toolbar.animation;t&&(e=i(!0,{},h)),e.expand.complete=this._animationCompleteExpand.bind(this),e.collapse.complete=this._animationComplete.bind(this),this.element.is(c)?this.element.kendoStop().kendoAnimate(e.collapse):this.element.kendoStop().kendoAnimate(e.expand)},focus:function(){this.element.is(c)?this.buttons().not("[tabindex=-1]").trigger("focus"):this.toggle()}});i(!0,p,{styles:{button:"k-button",buttonDefaults:"k-button-md k-rounded-md k-button-solid k-button-solid-base",buttonList:"k-button-list",scrollButton:"k-scroll-button",scrollButtonLeft:"k-scroll-button-left",scrollButtonRight:"k-scroll-button-right",scrollButtonLeftIcon:"chevron-left",scrollButtonRightIcon:"chevron-right",iconButton:"k-icon-button"}}),i(n.chat,{ChatToolBar:p})}(window.kendo.jQuery),function(t,e){var n=window.kendo,s=n.htmlEncode,i=n.ui.Widget,o=t.extend,a=".",r=".kendoChat",l=({url:t,text:e,styles:n})=>`<img src="${t}" alt="${s(e)}" class="${n.avatar}">`,c=({text:t,url:e,styles:n})=>`<div ${s(t)} class="${n.messageGroup} ${e?"":n.noAvatar}">\n            <p class="${n.author}">${s(t)}</p>\n            ${e?l({url:e,text:t,styles:n}):""}\n        </div>`,d=({url:t,text:e,styles:n})=>`<div me class="${n.messageGroup} ${n.self} ${t?"":n.noAvatar}">\n        ${t?l({url:t,text:e,styles:n}):""}\n    </div>`,u=({styles:t,text:e,timestamp:i})=>`<div class="${t.message}">\n        <time class="${t.messageTime}">${n.toString(n.parseDate(i),"HH:mm:ss")}</time>\n        <div class="${t.bubble}">${s(e)}</div>\n    </div>`,h=({styles:t,text:e})=>`<div class="${t.messageListContent} ${t.typingIndicatorBubble}">\n        <p class="${t.author}">${s(e)}</p>\n        <div class="${t.message}">\n            <div class="${t.bubble}">\n                <div class="${t.typingIndicator}">\n                    <span></span><span></span><span></span>\n                </div>\n            </div>\n        </div>\n    </div>`,p=({styles:t,buttons:e})=>`<div class="${t.cardActions} ${t.cardActionsVertical}">\n        ${e.map((e=>(({button:t,styles:e})=>`<span class="${e.cardAction}"><span class="${e.button} ${e.buttonPrimary}" data-value="${s(t.value)}">${s(t.title)}</span></span>`)({styles:t,button:e}))).join("")}\n    </div>`,g=({styles:t,images:e,buttons:n,title:i,subtitle:o,text:a})=>`<div class="${t.card} ${t.cardRich}">\n        ${void 0!==e&&e.length>0?(({images:t,styles:e})=>`<img src="${s(t[0].url)}" alt="${t[0].alt}" class="${e.cardImage}" />`)({images:e,styles:t}):""}\n        <div class="${t.cardBody}">\n            ${void 0!==i?`<h5 class="${t.cardTitle}">${s(i)}</h5>`:""}\n            ${void 0!==o?`<h6 class="${t.cardSubtitle}">${s(o)}</h6>`:""}\n            ${void 0!==a?`<p>${s(a)}</p>`:""}\n        </div>\n        ${void 0!==n&&n.length>0?p({buttons:n,styles:t}):""}\n    </div>`;o(n.chat,{Templates:{},Components:{}}),n.chat.registerTemplate=function(t,e){n.chat.Templates[t]=n.template(e)},n.chat.getTemplate=function(t){return n.chat.Templates[t]||u},n.chat.registerTemplate("text",u),n.chat.registerTemplate("message",u),n.chat.registerTemplate("typing",h),n.chat.registerTemplate("suggestedAction",(({styles:t,suggestedActions:e})=>`<div class="${t.suggestedActions}">\n        ${e.map((e=>(({styles:t,action:e})=>`<span role="button" tabindex="0" class="${t.suggestedAction}" data-value="${s(e.value)}">${s(e.title)}</span>`)({styles:t,action:e}))).join("")}\n    </div>`)),n.chat.registerTemplate("heroCard",g),n.chat.registerTemplate("application/vnd.microsoft.card.hero",g),n.chat.registerComponent=function(t,e){n.chat.Components[t]=e},n.chat.getComponent=function(t){return n.chat.Components[t]||null};var b=n.chat.Component=n.Class.extend({init:function(e,n){this.element=t("<div></div>"),this.options=e,this.view=n},destroy:function(){n.destroy(this.element)}}),m=b.extend({init:function(t,e){b.fn.init.call(this,t,e),this.element.kendoCalendar({change:function(){e.trigger("suggestedAction",{text:n.toString(this.value(),"d"),type:"message"})}})},destroy:function(){}});n.chat.registerComponent("calendar",m);var f={wrapper:"k-widget k-chat",messageList:"k-avatars",messageListContent:"k-message-list-content",messageTime:"k-message-time",messageGroup:"k-message-group",message:"k-message",only:"k-only",first:"k-first",middle:"k-middle",last:"k-last",author:"k-author",avatar:"k-avatar",noAvatar:"k-no-avatar",self:"k-alt",button:"k-button",buttonDefaults:"k-button-md k-rounded-md k-button-solid k-button-solid-base",iconButton:"k-icon-button",buttonIcon:"k-button-icon",buttonPrimary:"k-button-md k-rounded-md k-button-flat k-button-flat-primary",scrollButtonIconLeft:"chevron-left",scrollButtonIconRight:"chevron-right",typingIndicator:"k-typing-indicator",typingIndicatorBubble:"k-typing-indicator-bubble",bubble:"k-bubble",suggestedActions:"k-quick-replies",suggestedAction:"k-quick-reply",cardWrapper:"k-card-container",cardDeckScrollWrap:"k-card-deck-scrollwrap",cardDeck:"k-card-deck",cardList:"k-card-list",card:"k-card",cardRich:"k-card-type-rich",cardBody:"k-card-body",cardImage:"k-card-image",cardTitle:"k-card-title",cardSubtitle:"k-card-subtitle",cardActions:"k-card-actions",cardActionsVertical:"k-card-actions-vertical",cardAction:"k-card-action",selected:"k-selected"},v=n.chat.ChatView=i.extend({init:function(t,e){i.fn.init.call(this,t,e),this._list(),this._lastSender=null,this.typingParticipants=[],this._attachEvents(),this._scrollable()},events:[],options:{messages:{isTyping:" is typing.",areTyping:" are typing.",and:" and "}},destroy:function(){i.fn.destroy.call(this),this._scrollDraggable&&this._scrollDraggable.destroy(),this.element.empty(),this.element.off(r),this.list=null,this._lastSender=null},_list:function(){var e=v.styles;this.element.addClass(e.messageList).attr("role","log").attr("aria-label",this.options.messages.messageListLabel),this.list=t("<div>").addClass(e.messageListContent).appendTo(this.element)},_attachEvents:function(){var t=v.styles;this.element.on("click"+r,this._listClick.bind(this)).on("click"+r,a+t.message,this._messageClick.bind(this)).on("click"+r,a+t.suggestedAction,this._suggestedActionClick.bind(this)).on("click"+r,a+t.cardAction+" "+a+t.button,this._cardActionClick.bind(this)),this.element.on("keydown"+r,a+t.suggestedAction,this._suggestedActionKeydown.bind(this))},_scrollable:function(){var t=v.styles;this.element.on("click"+r,a+t.cardDeckScrollWrap+" "+a+t.button,this._scrollButtonClick.bind(this))},_scrollButtonClick:function(e){var s=v.styles,i=t(e.currentTarget),o=0!==i.find(`${a+s.buttonIcon}[class*=${s.scrollButtonIconLeft}]`).length,r=i.siblings(a+s.cardDeck),l=r.find(a+s.card).last().outerWidth(!0);o?n.scrollLeft(r,n.scrollLeft(r)-l):n.scrollLeft(r,n.scrollLeft(r)+l)},getTemplate:function(t){return n.chat.getTemplate(t)},getComponent:function(t){return n.chat.getComponent(t)},renderMessage:function(t,e){t.timestamp||(t.timestamp=new Date),t.text||(t.text="");var n=this._renderTemplate(t.type,t);this._renderBubble(t.type,n,e),"typing"==t.type?this.typingParticipants.length>0&&this._removeTypingParticipant(e):this._lastSender=e.id},renderSuggestedActions:function(t){this._removeSuggestedActions();var e=this._renderTemplate("suggestedAction",{suggestedActions:t});this.list.append(e),this._scrollToBottom()},renderAttachments:function(t){var e=this._renderAttachmentWrapper(t.attachmentLayout),n="carousel"===t.attachmentLayout?e.find(a+v.styles.cardDeck):e,s=t.attachments;if(s.length){for(var i=0;i<s.length;i++){var o=this._renderTemplate(s[i].contentType,s[i].content);n.append(o)}this._removeSuggestedActions(),this._removeTypingIndicator(),this.list.append(e),this._lastSender=null}},renderComponent:function(t){var e=new(this.getComponent(t))({},this);this.list.append(e.element),this._scrollToBottom()},_renderAttachmentWrapper:function(e){var n=v.styles,s=t("<div>");if("carousel"===e){s.addClass(n.cardDeckScrollWrap);var i=this._renderScrollButton(n.scrollButtonIconLeft);s.append(i),s.append(t("<div>").addClass(n.cardDeck));var o=this._renderScrollButton(n.scrollButtonIconRight);s.append(o)}else s.addClass(n.cardList);return s},_renderScrollButton:function(e){var s=v.styles;return t("<button>").addClass(s.button).addClass(s.buttonDefaults).addClass(s.iconButton).append(n.html.renderIcon({icon:e,iconClass:s.buttonIcon}))},_removeSuggestedActions:function(){this.list.find(a+v.styles.suggestedActions).remove()},_listClick:function(e){var n=v.styles,s=t(e.target);s.hasClass(n.message)||s.parents(a+n.message).length||this._clearSelection()},_messageClick:function(e){this._clearSelection(),t(e.currentTarget).addClass(v.styles.selected)},_suggestedActionClick:function(e){var n=t(e.target).data("value")||"";this.trigger("actionClick",{text:n}),this._removeSuggestedActions()},_suggestedActionKeydown:function(t){t.keyCode!==n.keys.SPACEBAR&&t.keyCode!==n.keys.ENTER||this._suggestedActionClick(t)},_cardActionClick:function(e){var n=t(e.target).data("value")||"";this.trigger("actionClick",{text:n})},_renderBubble:function(t,e,n){this._removeSuggestedActions(),this._removeTypingIndicator();var s=this._getMessageGroup(n,t);this._appendToGroup(s,e,t),this._scrollToBottom()},_renderTemplate:function(e,n){var s,i=this.getComponent(e);if(i){s=new i(n,this).element}else{var a=this.getTemplate(e),r=o(!0,{},n,{styles:v.styles});s=t(a(r))}return s},_getMessageGroup:function(e,n){var s,i=v.styles,o=this._getMessageGroupTemplate(e,n),r="typing"==n?this.element:this.list;return e.id===this._lastSender&&null!==this._lastSender&&"typing"!==n&&(s=this.list.find(a+i.messageGroup).last()).length?s:t(o({text:e.name,url:e.iconUrl,styles:i})).appendTo(r)},_getMessageGroupTemplate:function(t,e){var n=t.id===this.options.user.id?d:c;return"typing"==e&&(n=h),n},_appendToGroup:function(t,e,n){var s=v.styles,i=t.find(a+s.message),o=i.length;this.element.find(a+s.typingIndicator).length&&"typing"==n||(e.addClass(0===o?s.only:s.last),i.filter(a+s.only).removeClass(s.only).addClass(s.first),i.filter(a+s.last).removeClass(s.last).addClass(s.middle),t.append(e))},_renderTypingIndicator:function(e){var n,s=this.element.find(a+f.typingIndicatorBubble);this._addTypingParticipant(e),s.length?(n=this._composeTypingParticipantsText(this.typingParticipants),s.find(a+f.author).first().text(n)):t(h({text:e.name+this.options.messages.isTyping,styles:f})).appendTo(this.element),this._scrollToBottom()},_addTypingParticipant:function(t){for(var e=!1,n=0;n<this.typingParticipants.length;n+=1)if(this.typingParticipants[n].id==t.id){e=!0;break}e||this.typingParticipants.push(t)},_removeTypingParticipant:function(t){var e,n=this.element.find(a+f.typingIndicatorBubble);if(n.length){for(var s=0;s<this.typingParticipants.length;s+=1)this.typingParticipants[s].id==t.id&&this.typingParticipants.splice(s,1);""===(e=this._composeTypingParticipantsText(this.typingParticipants))?n.remove():n.find(a+f.author).first().text(e)}},_composeTypingParticipantsText:function(t){var e=this.options.messages,n=1==t.length?e.isTyping:e.areTyping,s="";return 0===t.length?s:s=this.typingParticipants.map((function(t){return t.name})).join(", ").replace(/,(?!.*,)/gim,e.and.trimRight())+n},_removeTypingIndicator:function(){var t=this.element.find(a+f.typingIndicatorBubble);t.length&&(this.typingParticipants=[],t.remove())},_clearSelection:function(){var t=v.styles.selected;this.element.find(a+t).removeClass(t)},_scrollToBottom:function(){this.element.scrollTop(this.element.prop("scrollHeight"))}});o(!0,v,{styles:f})}(window.kendo.jQuery);var __meta__={id:"chat",name:"Chat",category:"web",description:"The Chat component.",depends:["core","draganddrop"]};!function(t,e){var n=window.kendo,s=n.ui.Widget,i=t.extend,o=".",a={wrapper:"k-widget k-chat",canvas:"k-chat-canvas",viewWrapper:"k-message-list",messageBoxWrapper:"k-message-box",toolbarBoxWrapper:"k-toolbar-box"},r=s.extend({init:function(t,e,i){s.fn.init.call(this,t,e),i&&(this._events=i),this._user(),this._wrapper(),this._view(),e&&e.toolbar&&e.toolbar.buttons&&this._toolbar(),this._messageBox(),n.notify(this)},events:["typingStart","typingEnd","post","sendMessage","actionClick","toolClick"],options:{user:{name:"User",iconUrl:""},name:"Chat",messages:{messageListLabel:"Message list",placeholder:"Type a message...",toggleButton:"Toggle toolbar",sendButton:"Send message"},toolbar:!1},setOptions:function(e){this._setEvents(e),t.extend(!0,this.options,e),this.toolbar&&"toolbar"in e&&(this.toolbar.destroy(),this.toolbar=null),this.messageBox&&(this.messageBox.unbind(),this.messageBox.destroy(),this.messageBox=null),this._messageBox(),"toolbar"in e&&(this._resetToolbarButtons(e),this._toolbar())},_resetToolbarButtons:function(t){var e=this.wrapper.find(o+a.toolbarBoxWrapper);e.is(":visible")||e.show(),t.toolbar&&"object"==typeof t.toolbar&&"buttons"in t.toolbar&&(this.options.toolbar.buttons=t.toolbar.buttons)},destroy:function(){this.view&&(this.view.unbind(),this.view.destroy(),this.view=null),this.messageBox&&(this.messageBox.unbind(),this.messageBox.destroy(),this.messageBox=null),this.toolbar&&(this.toolbar.destroy(),this.toolbar=null),s.fn.destroy.call(this)},_user:function(){this.options.user.id=n.guid()},getUser:function(){return i(!0,{},this.options.user)},_wrapper:function(){var t=r.styles,e=this.options,n=e.height,s=e.width,i="<div class='"+t.viewWrapper+"'></div><span class='"+t.messageBoxWrapper+"'></span><div class='"+t.toolbarBoxWrapper+"' role='toolbar' style='display:none;'></div>";this.wrapper=this.element.addClass(t.wrapper).append(i),e.toolbar&&e.toolbar.buttons&&e.toolbar.buttons.length&&this.wrapper.find(o+t.toolbarBoxWrapper).show(),n&&this.wrapper.height(n),s&&this.wrapper.css("max-width",s)},_view:function(){var t=this,e=r.styles,s=i(!0,{},this.options),a=this.wrapper.find(o+e.viewWrapper+"");this.view=new n.chat.ChatView(a,s),this.view.bind("actionClick",(function(e){t.trigger("actionClick",e),t.postMessage(e.text)}))},_messageBox:function(){var t=this,e=r.styles,s=i(!0,{},this.options),a=this.wrapper.find(o+e.messageBoxWrapper+"");this.messageBox=new n.chat.ChatMessageBox(a,s),this.messageBox.bind("typingStart",(function(e){t.trigger("typingStart",e)})).bind("typingEnd",(function(e){t.trigger("typingEnd",e)})).bind("sendMessage",(function(e){t.trigger("sendMessage",e),t.postMessage(e.text)})).bind("toggleToolbar",(function(){t.toggleToolbar()})).bind("focusToolbar",(function(){t.toolbar&&t.toolbar.focus()}))},_toolbar:function(){var t=this,s=r.styles,a=i(!0,{},t.options),l=t.wrapper.find(o+s.toolbarBoxWrapper+"");t.options.toolbarId=n.guid(),l.attr("id",t.options.toolbarId),a.toolbar.scrollable===e&&(this.options.toolbar.scrollable=a.toolbar.scrollable=!0),a.toolbar.toggleable===e&&(this.options.toolbar.toggleable=a.toolbar.toggleable=!1),t.toolbar=new n.chat.ChatToolBar(l,a),t.toolbar.bind("click",(function(e){t.trigger("toolClick",{sender:t,name:e.name,button:e.button,messageBox:t.messageBox.input[0],originalEvent:e.originalEvent})}))},postMessage:function(t){var e=i(!0,{},{text:t,type:"message",timestamp:new Date,from:this.getUser()});this.trigger("post",e),this.renderMessage(e,e.from)},renderMessage:function(t,e){this.view.renderMessage(t,e)},renderSuggestedActions:function(t){this.view.renderSuggestedActions(t)},renderAttachments:function(t,e){this.view.renderAttachments(t,e)},toggleToolbar:function(t){this.toolbar.toggle(t)},renderUserTypingIndicator:function(t){this.view._renderTypingIndicator(t)},clearUserTypingIndicator:function(t){this.view._removeTypingParticipant(t)},removeTypingIndicator:function(){this.view._removeTypingIndicator()}});n.ui.plugin(r),i(!0,r,{styles:a})}(window.kendo.jQuery);var kendo$1=kendo;export{kendo$1 as default};
//# sourceMappingURL=kendo.chat.js.map
