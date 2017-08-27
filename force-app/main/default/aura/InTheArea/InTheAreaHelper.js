({
    getLocalList: function(component) {
        var spinner = component.find('spinner');
        $A.util.removeClass(spinner, "slds-hide");        
        var recID = component.get("v.recordId");
        var location = component.get("v.location");        
        var searchTerm = component.find("searchTerm").get("v.value");
        var objectType = component.get("v.sObjectName");        
        if (searchTerm == null) {
            searchTerm = component.get("v.defaultSearch");
        }
        location = JSON.parse(location);
        var action = component.get("c.getListByAddress");
        action.setParams({
            "recordId": recID,
            "objectType": objectType,
            "searchQuery": searchTerm
        });        
        action.setCallback(this, function(response) {
            this.doLayout(response, component);
        });
        $A.enqueueAction(action);
    },
    doLayout: function(response, component) {
        var spinner = component.find('spinner');
        $A.util.addClass(spinner, "slds-hide");         
        var data = JSON.parse(response.getReturnValue());
        var warning = component.find('warning');
        if (data.error) {
            component.set("v.errorMessage", data.error);            
            $A.util.removeClass(warning, 'slds-hide');
        } else {
            $A.util.addClass(warning, 'slds-hide');
        }        
        component.set("v.restaurantList", data.bizArray);
        console.log("The Data: ", data);
    }
})