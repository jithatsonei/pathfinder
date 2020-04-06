"use strict";var mainScriptPath=document.body.getAttribute("data-script"),jsBaseUrl=document.body.getAttribute("data-js-path");requirejs.config({baseUrl:"js",paths:{conf:"app/conf",dialog:"app/ui/dialog",layout:"app/ui/layout",module:"app/ui/module",templates:"../../templates",img:"../../img",login:"./app/login",mappage:"./app/mappage",setup:"./app/setup",admin:"./app/admin",jquery:"lib/jquery-3.4.1.min",bootstrap:"lib/bootstrap.min",text:"lib/requirejs/text",mustache:"lib/mustache.min",localForage:"lib/localforage.min",velocity:"lib/velocity.min",velocityUI:"lib/velocity.ui.min",slidebars:"lib/slidebars",jsPlumb:"lib/jsplumb",farahey:"lib/farahey",easyTimer:"lib/easytimer.min",customScrollbar:"lib/jquery.mCustomScrollbar.min",mousewheel:"lib/jquery.mousewheel.min",xEditable:"lib/bootstrap-editable.min",morris:"lib/morris.min",raphael:"lib/raphael.min",bootbox:"lib/bootbox.min",easyPieChart:"lib/jquery.easypiechart.min",peityInlineChart:"lib/jquery.peity.min",hoverIntent:"lib/jquery.hoverIntent.min",select2:"lib/select2.min",validator:"lib/validator.min",blueImpGallery:"lib/blueimp-gallery",blueImpGalleryHelper:"lib/blueimp-helper",blueImpGalleryBootstrap:"lib/bootstrap-image-gallery",bootstrapConfirmation:"lib/bootstrap-confirmation.min",bootstrapToggle:"lib/bootstrap-toggle.min",lazyload:"lib/lazyload.min",sortable:"lib/sortable.min","summernote.loader":"./app/summernote.loader",summernote:"lib/summernote/summernote.min","datatables.loader":"./app/datatables.loader","datatables.net":"lib/datatables/DataTables-1.10.18/js/jquery.dataTables.min","datatables.net-buttons":"lib/datatables/Buttons-1.5.6/js/dataTables.buttons.min","datatables.net-buttons-html":"lib/datatables/Buttons-1.5.6/js/buttons.html5.min","datatables.net-responsive":"lib/datatables/Responsive-2.2.2/js/dataTables.responsive.min","datatables.net-rowgroup":"lib/datatables/RowGroup-1.1.1/js/dataTables.rowGroup.min","datatables.net-select":"lib/datatables/Select-1.3.0/js/dataTables.select.min","datatables.plugins.render.ellipsis":"lib/datatables/plugins/render/ellipsis","pnotify.loader":"./app/pnotify.loader",PNotify:"lib/pnotify/PNotify",PNotifyButtons:"lib/pnotify/PNotifyButtons",PNotifyCallbacks:"lib/pnotify/PNotifyCallbacks",PNotifyDesktop:"lib/pnotify/PNotifyDesktop",NonBlock:"lib/pnotify/NonBlock"},shim:{bootstrap:{deps:["jquery"]},farahey:{deps:["jsPlumb"]},velocity:{deps:["jquery"]},velocityUI:{deps:["velocity"]},slidebars:{deps:["jquery"]},customScrollbar:{deps:["jquery","mousewheel"]},"datatables.loader":{deps:["jquery"]},"datatables.net":{deps:["jquery"]},"datatables.net-buttons":{deps:["datatables.net"]},"datatables.net-buttons-html":{deps:["datatables.net-buttons"]},"datatables.net-responsive":{deps:["datatables.net"]},"datatables.net-rowgroup":{deps:["datatables.net"]},"datatables.net-select":{deps:["datatables.net"]},"datatables.plugins.render.ellipsis":{deps:["datatables.net"]},xEditable:{deps:["bootstrap"]},bootbox:{deps:["jquery","bootstrap"],exports:"bootbox"},morris:{deps:["jquery","raphael"],exports:"Morris",init:function(e,t){window.Raphael=t}},easyPieChart:{deps:["jquery"]},peityInlineChart:{deps:["jquery"]},hoverIntent:{deps:["jquery"]},select2:{deps:["jquery","mousewheel"],exports:"Select2"},validator:{deps:["jquery","bootstrap"]},blueImpGallery:{deps:["jquery"]},bootstrapConfirmation:{deps:["bootstrap"]},bootstrapToggle:{deps:["jquery","bootstrap"]},summernote:{deps:["jquery"]}}}),require.config({baseUrl:jsBaseUrl}),requirejs([mainScriptPath]);
//# sourceMappingURL=app.js.map
