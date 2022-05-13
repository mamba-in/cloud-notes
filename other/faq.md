# 相关说明

::: tip Explain

对一些常见问题做相关说明。

:::

## 项目别名

`/@/` 是 `vite` 内配置的别名

`/@/settings` 等同于 `src/settings`

::: tip 为什么是/@/

因为项目是从 `vite1.0` 过渡过来的，`vite1.0` 只能以 `/` 开头，所以跟之前使用 `webpack` 稍有不同。

:::

## 为什么在本地没有按需引入组件库样式，在生产才引入

在 main.ts 内可以看到，本地开发会全量引入 antd.less，vite-plugin-style-import 在本地是没有作用的。

主要目的是加快本地开发刷新速度。如果在本地开发中也按需按需引入，则在浏览器控制台内可以看到，平均一个页面大概增加了 100 次 http 请求。如果全量引入，只增加了一个请求。所以只在生产使用按需引入。

```ts
// src/main.ts
if (import.meta.env.DEV) {
  import('ant-design-vue/dist/antd.less');
}

// build/vite/plugin/styleImport
import styleImport from 'vite-plugin-style-import';
export function configStyleImportPlugin(isBuild: boolean) {
  if (!isBuild) return [];
  const styleImportPlugin = styleImport({
    libs: [
      {
        libraryName: 'ant-design-vue',
        esModule: true,
        resolveStyle: (name) => {
          return `ant-design-vue/es/${name}/style/index`;
        },
      },
    ],
  });
  return styleImportPlugin;
}
```

## 添加菜单后没显示

菜单必须和路由匹配才会显示在界面上，所以得确保菜单和对应的路由存在即可显示.


## 本地运行报错

由于 vite 在本地没有转换代码，且代码中用到了可选链等比较新的语法。所以本地开发需要使用版本较高的浏览器(`Chrome 85+`)进行开发


## 接口请求问题

proxy 代理不成功，没有代理到实际地址？

代理只是服务请求代理，这个地址是不会变的。 原理可以简单的理解为，在本地启了一个服务，你先请求了本地的服务，本地的服务转发了你的请求到实际服务器。所以你在浏览器上看到的请求地址还是 `http://localhost:8000/xxx`。以服务端是否收到请求为准。

