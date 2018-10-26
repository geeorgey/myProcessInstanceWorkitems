({
    myProcessInstanceWorkitemList : function(component) {
        var action = component.get("c.getMyProcessInstanceWorkitemList");
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                component.set("v.myProcessInstanceWorkitems", response.getReturnValue());              
            }
            else {
                console.log("Failed with state: " + state);
            }
        });        
        // Send action off to be executed
        $A.enqueueAction(action); 
        console.log("action: " + action);       

    }
})
