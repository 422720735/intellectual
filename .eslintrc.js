module.exports = {
    root: true,
    env: {
        browser: true,
        node: true
    },
    parserOptions: {
        parser: '@typescript-eslint/parser'
    },
    extends: ['@nuxtjs', 'plugin:nuxt/recommended', 'plugin:prettier/recommended', 'prettier', 'prettier/vue'],
    plugins: ['prettier', '@typescript-eslint'],
    // add your custom rules here
    rules: {
        'nuxt/no-cjs-in-config': 'off'
        // indent: ['warn', 4] // 4个空格缩进
        /* 更多配置请戳 http://eslint.cn/docs/rules/ */
    }
}
