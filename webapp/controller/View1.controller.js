sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageBox) {
        "use strict";

        return Controller.extend("ui5demo.controller.View1", {
            onInit: function () {

            },

            onPress1: function () {
                this.getView().byId("oVizFrame").setVisible(true);
                this.getView().byId("tabId").setVisible(false);
                this.getView().byId("DEMO").setVisible(false);
                this.getView().byId("tab").setVisible(false);
                this.getView().byId("tex").setVisible(false)
            },
            onclick: function () {
                this.getView().byId("DEMO").setVisible(true);
                this.getView().byId("oVizFrame").setVisible(false);
                this.getView().byId("tabId").setVisible(false);
                this.getView().byId("tab").setVisible(false);
                this.getView().byId("tex").setVisible(false)
            },
            onpress2: function () {
                this.getView().byId("tabId").setVisible(true);
                this.getView().byId("DEMO").setVisible(false);
                this.getView().byId("oVizFrame").setVisible(false);
                this.getView().byId("tab").setVisible(false);
                this.getView().byId("tex").setVisible(false)
            },
            onpress3: function () {
                this.getView().byId("tab").setVisible(true);
                this.getView().byId("DEMO").setVisible(false);
                this.getView().byId("oVizFrame").setVisible(false);
                this.getView().byId("tabId").setVisible(false);
                this.getView().byId("tex").setVisible(false)
            },
            onpress4: function () {
                MessageBox.success("COMING SOON");
            }
        });
    });
