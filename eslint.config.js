import pluginVue from 'eslint-plugin-vue';
import eslint from '@eslint/js';

export default [
  eslint.configs.recommended,
  ...pluginVue.configs['flat/recommended'],
  
  {
    files: ['**/*.js', '**/*.vue', '**/*.jsx', '**/*.cjs', '**/*.mjs'],
    languageOptions: {
      // CARA PINTAS: Langsung daftarkan variabel browser di sini
      globals: {
        document: 'readonly',
        window: 'readonly',
        navigator: 'readonly',
        location: 'readonly',
        localStorage: 'readonly'
      }
    }
  },
  
  {
    rules: {
      'vue/multi-word-component-names': 'off',
      'no-unused-vars': 'off'
    },
  },
  {
    ignores: [
      'dist/**', 
      'node_modules/**', 
      '.github/**', 
      'vite.config.js', 
      'postcss.config.js', 
      'tailwind.config.js'
    ],
  }
];