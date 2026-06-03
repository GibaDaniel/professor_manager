sap.ui.define([
      "sap/ui/core/mvc/ControllerExtension"
  ], function (ControllerExtension) {
      "use strict";
      return ControllerExtension.extend("zcf.enrollment.ext.controller.EnrollmentExt", {
          onHomeworkSelect: function (oEvent) {
              var oCtx = oEvent.getParameter("listItem").getBindingContext();
              var oModel = this.base.getView().getModel();
              var sUrl = oModel.sServiceUrl + oCtx.getPath() + "/Attatchment/$value";
              this.base.byId("hwPdf").setSource(sUrl);
          }
      });
  });