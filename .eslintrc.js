module.exports = {
    root: true,
    env: {
        browser: true,
        node: true
    },
    parserOptions: {
        parser: '@typescript-eslint/parser'
    },
    extends: [
        '@nuxtjs',
        'plugin:nuxt/recommended',
        'plugin:prettier/recommended',
        'prettier',
        'prettier/vue'
    ],
    plugins: ['prettier', '@typescript-eslint'],
    // add your custom rules here
    rules: {
        'nuxt/no-cjs-in-config': 'off',
        // indent: ['warn', 4] // 4个空格缩进
        /* 更多配置请戳 http://eslint.cn/docs/rules/ */
        // 新配置的规则
        'no-constant-condition': 'warn', // 禁止在条件中使用常量表达式 if(true) if(1)
        'no-else-return': 'warn', // 如果if语句里面有return,后面不能跟else语句
        'no-unused-vars': 'warn', // 警告变量声明后未被使用的变量或参数
        'vue/no-unused-components': 'off', // 关闭组件注册未被使用
        'no-delete-var': 'off', // 该规则可对变量使用 delete 操作符。
        'prefer-const': [
            'error',
            {
                // 变量未被改变使用const,
                destructuring: 'any', // 如果解构中的任何变量应该是const，则此规则将警告这些变量。
                ignoreReadBeforeAssign: false // 这是避免与no-use-before-define规则冲突的选项（无"nofunc"选项）。如果true指定，则此规则将忽略在声明和第一个赋值之间读取的变量。默认是false。
            }
        ],
        'no-var': 'error', // 禁用var，用let和const代替
        eqeqeq: ['error', 'allow-null'], // 使用 === 替代 ==
        'comma-spacing': ['error', { before: false, after: true }], // 控制逗号前后的空格
        'array-bracket-spacing': ['error', 'never'],
        semi: [
            // 语句不已分号结尾 - 不允许分号语句的末尾（除非消除歧义开头语句[，(，/，+，或-）
            2,
            'never',
            {
                beforeStatementContinuationChars: 'never' // "never"不允许分号语句结束时，如果它没有ASI危险，即使下一行开头[，(，/，+
            }
        ],
        'no-unneeded-ternary': 'error', // 禁止不必要的嵌套 var isYes = answer === 1 ? true : false;
        'no-func-assign': 'error', //禁止重复的函数声明
        'object-shorthand': 'error', // 强制对象字面量缩写语法
        'max-len': ['warn', { code: 80 }], // 单行最大长度80
        'object-curly-spacing': ['error', 'always', { arraysInObjects: true }], // {a,b,c} 必须有空格
        'space-infix-ops': ['error', { int32Hint: false }], // 选项设置为true（默认为false）以允许a|0无空格写入。
        'key-spacing': ['error', { beforeColon: false, afterColon: true }], // 对象字面量中冒号的前后空格
        'no-multi-spaces': 'warn', // 不能用多余的空格
        'no-multiple-empty-lines': ['warn', { max: 2 }], // 空行最多不能超过2
        strict: 'error', // 使用严格模式
        'space-before-function-paren': [
            'error',
            {
                // 要求或禁止函数圆括号之前有一个空格
                anonymous: 'always',
                named: 'never',
                asyncArrow: 'always'
            }
        ],

        // pro
        'generator-star-spacing': 'off',
        'no-mixed-operators': 0,
        'vue/max-attributes-per-line': [
            'warn',
            {
                singleline: 5,
                multiline: {
                    max: 1,
                    allowFirstLine: false
                }
            }
        ],
        'vue/require-default-prop': 0,
        'vue/attribute-hyphenation': 0,
        'vue/html-self-closing': 0,
        'vue/component-name-in-template-casing': 0,
        'vue/html-closing-bracket-spacing': 0,
        'vue/singleline-html-element-content-newline': 0,
        'vue/multiline-html-element-content-newline': 0,
        'vue/no-use-v-if-with-v-for': 0,
        'vue/html-closing-bracket-newline': 0,
        'vue/no-parsing-error': 0,
        'no-tabs': 0,
        quotes: [
            'warn',
            'single',
            {
                avoidEscape: true,
                allowTemplateLiterals: true
            }
        ]
    }
}
