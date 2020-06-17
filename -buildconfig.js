BUILDCONFIG = {
    // LoadPaths:[
    //     "/", 
    //     "src", 
    //     "libs"
    // ],
    
    Input : "src/applications/FpsTest/index.js",
    
    Output : {
        SourcePath:"src/applications/FpsTest/index.src.js",
        CompressedPath: "src/applications/FpsTest/index.min.js"
    },

    LoadsAsync : true,

    // Output : {
    //     SourcePath:"src/applications/InlineTest/index.src.js",
    //     CompressedPath: "src/applications/InlineTest/index.min.js"
    // },

    // Output : {
    //  SourcePath:"node_modules/od-cocoon/framework.src.js",
    //  CompressedPath: "node_modules/od-cocoon/framework.min.js"
    // },
    
    Verbos:true,

    Prefabs : {
        Enabled : false,
        Components : [
            "applications.NotificationsApp",
            "core.ui.NotificationsToggleSwitch"
        ]
    }
};
module.exports = BUILDCONFIG;