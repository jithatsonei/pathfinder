!function(t){"function"==typeof define&&define.amd?define("pnotify.confirm",["jquery","pnotify"],t):t(jQuery,PNotify)}(function(t,n){n.prototype.options.confirm={confirm:!1,prompt:!1,prompt_class:"",prompt_default:"",prompt_multi_line:!1,align:"right",buttons:[{text:"Ok",addClass:"",promptTrigger:!0,click:function(t,n){t.remove();t.get().trigger("pnotify.confirm",[t,n])}},{text:"Cancel",addClass:"",click:function(t){t.remove();t.get().trigger("pnotify.cancel",t)}}]};n.prototype.modules.confirm={container:null,prompt:null,init:function(n,e){this.container=t('<div style="margin-top:5px;clear:both;" />').css("text-align",e.align).appendTo(n.container);e.confirm||e.prompt?this.makeDialog(n,e):this.container.hide()},update:function(t,n){if(n.confirm){this.makeDialog(t,n);this.container.show()}else this.container.hide().empty()},afterOpen:function(t,n){n.prompt&&this.prompt.focus()},makeDialog:function(n,e){var o,i,s=!1,r=this;this.container.empty();e.prompt&&(this.prompt=t("<"+(e.prompt_multi_line?'textarea rows="5"':'input type="text"')+' style="margin-bottom:5px;clear:both;" />').addClass(n.styles.input+" "+e.prompt_class).val(e.prompt_default).appendTo(this.container));for(var u in e.buttons){o=e.buttons[u];s?this.container.append(" "):s=!0;i=t('<button type="button" />').addClass(n.styles.btn+" "+o.addClass).text(o.text).appendTo(this.container).on("click",function(t){return function(){"function"==typeof t.click&&t.click(n,e.prompt?r.prompt.val():null)}}(o));e.prompt&&!e.prompt_multi_line&&o.promptTrigger&&this.prompt.keypress(function(t){return function(n){13==n.keyCode&&t.click()}}(i));n.styles.text&&i.wrapInner('<span class="'+n.styles.text+'"></span>');n.styles.btnhover&&i.hover(function(t){return function(){t.addClass(n.styles.btnhover)}}(i),function(t){return function(){t.removeClass(n.styles.btnhover)}}(i));n.styles.btnactive&&i.on("mousedown",function(t){return function(){t.addClass(n.styles.btnactive)}}(i)).on("mouseup",function(t){return function(){t.removeClass(n.styles.btnactive)}}(i));n.styles.btnfocus&&i.on("focus",function(t){return function(){t.addClass(n.styles.btnfocus)}}(i)).on("blur",function(t){return function(){t.removeClass(n.styles.btnfocus)}}(i))}}};t.extend(n.styling.jqueryui,{btn:"ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only",btnhover:"ui-state-hover",btnactive:"ui-state-active",btnfocus:"ui-state-focus",input:"",text:"ui-button-text"});t.extend(n.styling.bootstrap2,{btn:"btn",input:""});t.extend(n.styling.bootstrap3,{btn:"btn btn-default",input:"form-control"});t.extend(n.styling.fontawesome,{btn:"btn btn-default",input:"form-control"})});