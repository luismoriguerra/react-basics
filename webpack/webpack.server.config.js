module.exports = {
    entry: './source/client.js',
    output: {
        filename: 'app.js',
        path:'./build/statics',
    },
    module: {
        loaders: [
            {
                test: /\.json$/,
                loader: 'json',

            },
            {
                test: /\.jsx?$/,
                loader: 'babel',
                exclude: /(node_module)/,
                query: {
                    presets: ['latest-minimal', 'react']
                }
            }
        ]
    },
    target: 'node'
}