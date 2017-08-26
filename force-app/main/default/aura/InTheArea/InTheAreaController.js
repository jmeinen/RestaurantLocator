({
    doInit: function(component, event, helper) {
        helper.getLocalList(component);
    },
    updateSearch: function(component, event, helper) {
        helper.getLocalList(component);
    },
    showDetails: function (component, event, helper) {
        var closeItem = component.get('v.openItem');
        if (closeItem) {
            closeItem = closeItem.querySelector('[data-details]');
            $A.util.addClass(closeItem, 'slds-hide');
        }
        var selectedItem = event.currentTarget;
        component.set('v.openItem', selectedItem);
        var itemDetails = selectedItem.querySelector('[data-details]')
        $A.util.removeClass(itemDetails, 'slds-hide');
    }
})
