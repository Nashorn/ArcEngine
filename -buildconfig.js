BUILDCONFIG = {
    Input : "src/applications/FpsTest/index.js",
    
    Output : {
        SourcePath:"src/applications/FpsTest/index.src.js",
        CompressedPath: "src/applications/FpsTest/index.min.js"
    },

    LoadsAsync : true,

    Verbos:true,

    Prefabs : {
        Enabled : false,
        Components : []
    }
};
module.exports = BUILDCONFIG;