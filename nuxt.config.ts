module.exports = {
    mode: 'universal',
    /*
     ** Headers of the page
     */
    head: {
        title: process.env.npm_package_name || '',
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            },
            {
                hid: 'description',
                name: 'description',
                content: process.env.npm_package_description || ''
            }
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
    },
    /*
     ** Customize the progress-bar color
     */
    loading: { color: '#fff' },
    /*
     ** Global CSS
     */
    css: [
        // 'element-ui/lib/theme-chalk/index.css',
        'element-ui/lib/theme-chalk/icon.css',
        'element-ui/lib/theme-chalk/input.css',
        'element-ui/lib/theme-chalk/select.css',
        'element-ui/lib/theme-chalk/option.css',
        'element-ui/lib/theme-chalk/button.css',
        'element-ui/lib/theme-chalk/tooltip.css',
        // ant
        'ant-design-vue/dist/antd.css',
        // 'ant-design-vue/lib/tabs/style/index.css',
        // 'ant-design-vue/lib/pagination/style/index.css',
        // 'ant-design-vue/lib/input-number/style/index.css',
        {
            src: 'assets/css/base.css'
        }
    ],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: [
        { src: '@/plugins/element-ui', ssr: true },
        { src: '@/plugins/ant-design-vue', ssr: true }
    ],
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: [
        // Doc: https://github.com/nuxt-community/eslint-module
        '@nuxtjs/eslint-module'
    ],
    /*
     ** Nuxt.js modules
     */
    modules: [
        // Doc: https://axios.nuxtjs.org/usage
        '@nuxtjs/axios'
    ],
    /*
     ** Axios module configuration
     ** See https://axios.nuxtjs.org/options
     */
    axios: {},
    /*
     ** Build configuration
     */
    build: {
        transpile: [/^element-ui/, /^ant-design-vue/],
        /*
         ** You can extend webpack config here
         */
        extend(config: any, ctx: any) {
            if (ctx.isClient && ctx.isDev) {
                const module = config.module
                if (module) {
                    module.rules.push(
                        {
                            test: /\.ts$/,
                            exclude: ['/node_modules/', '/vendor/', '/.nuxt/'],
                            loader: 'ts-loader',
                            options: {
                                appendTsSuffixTo: [/\.vue$/],
                                transpileOnly: true
                            }
                        },
                        {
                            test: /\.ts$/,
                            exclude: [/node_modules/, /vendor/, /\.nuxt/],
                            loader: 'ts-loader',
                            options: {
                                appendTsSuffixTo: [/\.vue$/],
                                transpileOnly: true
                            }
                        }
                    )
                }
            }
        }
    },
    render: {
        resourceHints: false
    }
}
