module.exports = {
    uiPort: 1880,
    mqttReconnectTime: 15000,
    serialReconnectTime: 15000,
    debugMaxLength: 1000,
    credentialSecret: "gicomsupersecret",
    flowFile: 'flows.json',
    userDir: '/data/',
    httpAdminRoot: '/edit',
    //httpNodeRoot: '/red-nodes',
    ui: { path: "/" },
    //httpNodeAuth: {user:"userDash",pass:"$2a$08$cf2o9EbhRn6OcwMXUEfKkuSgr2xAVIce2JCC/LJD4ko5d/CX629hG"}, //user1
    //change password with https://www.browserling.com/tools/bcrypt
    adminAuth: {
        type: "credentials",
        users: [{
            username: "admin",
            password: "$2a$08$AQpd7R/CvtkarO81paPxZ..kk19LHs2gFPyzSpjy77BOY5HxQLQSa", //user2
              //change password with https://www.browserling.com/tools/bcrypt
            permissions: "*"
        }]
    },
    functionGlobalContext: {    },
    logging: {
        console: {
            level: "info",
            metrics: false,
            audit: false
        }
    },
    editorTheme: {   // Customising the editor
        projects: {            // To enable the Projects feature, set this value to true
            enabled: false
        }
    }
}
